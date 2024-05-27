import {
  getWorkspaces,
  Workspace,
  deleteWorkspace as deleteWorkspaceApi,
  createWorkspace as createWorkspaceApi,
  getWorkspace as getWorkspaceApi,
  postWorkspace as postWorkspaceApi,
  DeleteWorkspaceRequest,
  PostWorkspaceRequest,
} from "sap-client";
import { CreateWorkspace, WorkspaceInfo } from "sap-client/models";
import { getUrl } from "service";

export type WorkspacesSlice = {
  workspaces: Array<Workspace>;
};

export type WorkspaceSlice = {
  workspace: WorkspaceInfo;
};

export const fetchWorkspaces = () => {
  const base = getWorkspaces<WorkspacesSlice>();

  base.url = getUrl(base.url);

  base.transform = (response: Array<Workspace>) => ({
    workspaces: response,
  });

  base.update = {
    workspaces: (_, newValue) => newValue,
  };
  base.force = true;
  return base;
};

export const getWorkspace = (id: string) => {
  const base = getWorkspaceApi<WorkspaceSlice>({ workspaceId: id });

  base.url = getUrl(base.url);

  base.transform = (response: WorkspaceInfo) => ({
    workspace: response,
  });

  base.update = {
    workspace: (_, newValue) => newValue,
  };
  base.force = true;
  return base;
};

export const deleteWorkspace = (params: DeleteWorkspaceRequest) => {
  const base = deleteWorkspaceApi(params);
  base.url = getUrl(base.url);
  base.update = {
    workspaces: (oldValue) => {
      const newValue = oldValue.filter(
        (workspace) => workspace.id !== params.workspaceId
      );
      return newValue;
    },
  };
  base.force = true;
  return base;
};

export const createWorkspace = (params: CreateWorkspace) => {
  const base = createWorkspaceApi({ createWorkspace: params });
  base.url = getUrl(base.url);

  base.transform = (response) => {
    if (!response.id) {
      return undefined;
    }
    return { workspaces: [{ id: response.id, name: params.name }] };
  };

  base.update = {
    workspaces: (oldValue, newValue) => {
      if (!newValue) {
        return oldValue;
      }
      return [].concat(...oldValue, ...newValue);
    },
  };
  base.force = true;
  return base;
};

export const updateWorkspace = (params: PostWorkspaceRequest) => {
  const base = postWorkspaceApi(params);
  base.url = getUrl(base.url);

  base.force = true;
  return base;
};
