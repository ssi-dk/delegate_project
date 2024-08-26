from bson.objectid import ObjectId

from ...generated.models.update_workspace import UpdateWorkspace
from ...src.repositories.analysis import get_analysis_with_metadata, get_single_analysis_by_object_id
from ...common.database import get_collection, WORKSPACES_COL_NAME
from ...generated.models import CreateWorkspace

def trim(item):
    item["id"] = str(item["_id"])
    item.pop("_id", None)
    item.pop("username", None)
    return item

def get_sequence(sample_id: str):
    single = get_single_analysis_by_object_id(sample_id)
    sequence = get_analysis_with_metadata(single["sequence_id"])
    return sequence

def get_workspaces(user: str):
    workspaces = get_collection(WORKSPACES_COL_NAME)
    return list(map(trim, workspaces.find({"created_by": user})))

def get_workspace(user: str, workspace_id: str):
    workspaces = get_collection(WORKSPACES_COL_NAME)
    if ObjectId.is_valid(workspace_id):
        workspace = trim(workspaces.find_one({"created_by": user, "_id": ObjectId(workspace_id)}))
    else:
        workspace = trim(workspaces.find_one({"created_by": user, "name": workspace_id}))

    if workspace is None:
        return workspace

    if workspace["samples"] is None:
        workspace["samples"] = []
    else:
        workspace["samples"] = list(map(get_sequence, workspace["samples"]))

    return workspace

def delete_workspace(user: str, workspace_id: str):
    workspaces = get_collection(WORKSPACES_COL_NAME)

    return workspaces.delete_one(
        {"_id": ObjectId(workspace_id), "created_by": user}
    )

def delete_workspace_sample(user: str, workspace_id: str, sample_id: str):
    workspaces = get_collection(WORKSPACES_COL_NAME)

    update_filter = {'created_by': user, '_id': ObjectId(workspace_id)}
    update = {"$pull": {"samples": sample_id}}
    return workspaces.update_one(update_filter, update, upsert=True)


def create_workspace(user: str, workspace: CreateWorkspace):
    workspaces = get_collection(WORKSPACES_COL_NAME)

    if workspace.samples is None:
        workspace.samples = []
        
    record = {**workspace.to_dict(), "created_by": user}
    return workspaces.update_one({'created_by': user, 'name': workspace.name}, {"$set": record}, upsert=True)

def update_workspace(user: str, workspace_id: str, workspace: UpdateWorkspace):
    workspaces = get_collection(WORKSPACES_COL_NAME)

    update_filter = {'created_by': user, '_id': ObjectId(workspace_id)}
    update = {"$addToSet": {"samples": { "$each": workspace.samples}}}
    return workspaces.update_one(update_filter, update, upsert=True)

def update_microreact(microreact_reference):
    workspaces = get_collection(WORKSPACES_COL_NAME)

    update_filter = {'_id': ObjectId(microreact_reference['id'])}
    update = {"$set": {"microreact": microreact_reference['microreact']}}
    return workspaces.update_one(update_filter, update, upsert=True)
