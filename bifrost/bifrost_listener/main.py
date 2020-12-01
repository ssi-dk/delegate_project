import logging
import pymongo
import subprocess

client = pymongo.MongoClient('localhost')


pipeline = [{"$match": {"operationType": {"$in": ["replace", "update"]},
                        "fullDocument.status": "Success"}}]
options = {"full_document": "updateLookup"}
#"""
resume_token = None
def watch_loop():
    with client["bifrost_test"]["sample_components"].watch(pipeline, **options) as stream:
        for insert_change in stream:
            print(insert_change)
# TODO: change hardcoded connection info, make sure the command execution is safe
            subprocess.call(['mongo', 'bifrost_test', 'refresh_view.js'])
            resume_token = stream.resume_token


while(True):
    try:
        watch_loop()
    except pymongo.errors.PyMongoError:
        if resume_token is None:
            logging.error('Resume token error. Listener is stopping...')
            