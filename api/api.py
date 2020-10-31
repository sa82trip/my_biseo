import time
from scrapper import fetch_data 
from flask import Flask, render_template, request, send_file
from save import save_to_file
from flask_pymongo import PyMongo
from pymongo import MongoClient
from bson.json_util import loads, dumps


# DB_HOST = '193.122.104.7'
# DB_PORT = 27017
# DB_ID = 'admin'
# DB_PW = 'abc123'
# client = MongoClient(DB_HOST, DB_PORT)
# db = client['admin']
# db.authenticate(DB_ID, DB_PW)
# collection = db.collection
# client = MongoClient('mongodb://193.122.104.7:27017/')
client = MongoClient('mongodb://%s:%s@193.122.104.7:27017/' % ("myUserAdmin", "abc123"))
# mongo --port 27017  --authenticationDatabase "admin" -u "myUserAdmin" -p

db = client.test_database
collection = db.test_collection
post={
        "title": "test_title",
        "author":"Joon"
        }
post_id = collection.insert_one(post).inserted_id


app = Flask(__name__)

past_result_list={}

@app.route('/time')
def get_current_time():
    return {'time': time.time()}

@app.route('/login', methods=['POST'])
def login():
    print(request.form['id'])
    id = request.form['id']
    password = request.form['password']
    result=[]
    for index, doc in enumerate(collection.find({})):
        print("가즈아", index)
        print(doc)
        result.append(dumps(doc))
    # return f"{id}  {password}" 

    return {"result": result} 

@app.route("/read")
def read():
    parameter = request.args['parameter'].lower()
    #parameter = 'react'
    list = {
        'stackoverflow':
        f"https://stackoverflow.com/jobs?q={parameter}&r=true",
        'weworkremote':
        f"https://weworkremotely.com/remote-jobs/search?parameter={parameter}",
        'remoteok':
        f"https://remoteok.io/remote-dev+{parameter}-jobs"
    }
    if parameter not in past_result_list:
        result = fetch_data(list)
        past_result_list[parameter]=result
    else:
        result = past_result_list[parameter]
    save_to_file(result)
        

    return{"result":result} 
