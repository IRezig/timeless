import json


def create_outfit(event, context):

    return {"statusCode": 200, "body": json.dumps("Hello from Lambda!")}
