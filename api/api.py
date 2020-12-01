import time
from scrapper import fetch_data
from flask import Flask, render_template, request, send_file
from save import save_to_file
from flask_pymongo import PyMongo
from pymongo import MongoClient
from bson.json_util import loads, dumps
from api_requester import request_weather_info, request_covid_info
from db_credential import ID, PASSWORD
from datetime import datetime
from datetime import datetime, timedelta
from flask_cors import CORS
from scraper_with_selenium import getProductInfo

# example of document
todo={
        "title": "test_title",
        "user_id":"Joon",
        "is_done":"false"
        }

app = Flask(__name__, static_folder='../build', static_url_path='/')
# app = Flask(__name__)

CORS(app)
past_result_list={}

@app.route('/')
def index():
    return app.send_static_file('index.html') 

@app.route('/api/time')
def get_current_time():
    return {'time': datetime.now()}

@app.route('/api/insert', methods=['POST'])
def insert():
    print("insert")
    print(request.form['author'])
    print(request.form['description'])
    author = request.form['author']
    description = request.form['description']
    result = work_with_mongo(author, description, "insert")
    # return f"{id}  {password}"
    return result


@app.route("/api/read")
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

@app.route("/api/weather")
def fetch_weather():
    lat = request.args["lat"]
    lon = request.args["lon"]
    return request_weather_info(lat, lon)

@app.route("/api/covid")
def fetch_covid():
    return (request_covid_info())

@app.route("/api/delete")
def delete_one():
    print("gilgilgjil",request.args.get("target"))
    # work_with_mongo를 이용해서 지울것이다.
    user_id =ID
    user_password = PASSWORD
    # mongodb connection
    client = MongoClient('mongodb://%s:%s@193.122.104.7:27017/' % (ID, PASSWORD))
    # mongo --port 27017  --authenticationDatabase "admin" -u ID -p
    db = client.mybiseo_database
    collection = db.todo_collection
    collection.delete_one({"created_date":request.args.get("target")})
    # 지워지는거까진 완료
    pass
@app.route("/api/update")
def update_one():
    filter={'created_date':request.args.get("target")}
    newValues={"$set":{'description':"update_test!!!"}}
    user_id =ID 
    user_password = PASSWORD
    # mongodb connection
    client = MongoClient('mongodb://%s:%s@193.122.104.7:27017/' % (ID, PASSWORD))
    # mongo --port 27017  --authenticationDatabase "admin" -u ID -p
    db = client.mybiseo_database
    collection = db.todo_collection
    collection.update_one(filter, newValues)

# select whole todos
@app.route("/api/selectAll")
def selectAll():
    print("selectAll")
    user_id = ID
    user_password = PASSWORD
    # mongodb connection
    client = MongoClient('mongodb://%s:%s@193.122.104.7:27017/' % (ID, PASSWORD))
    # mongo --port 27017  --authenticationDatabase "admin" -u ID -p
    db = client.mybiseo_database
    collection = db.todo_collection
    dumped_result = dumps(collection.find())
    result=dumped_result
    print(dumped_result)
    return result

@app.route("/api/mom")
def searchForItem():
    getProductInfo()
    pass


def work_with_mongo(author, description, kind):
    user_id =ID
    user_password = PASSWORD
    # mongodb connection
    client = MongoClient('mongodb://%s:%s@193.122.104.7:27017/' % (ID, PASSWORD))
    # mongo --port 27017  --authenticationDatabase "admin" -u ID -p
    db = client.mybiseo_database
    collection = db.todo_collection
    result=dumps([])

    if kind == "insert":
        print("insert")
        # example mongodb insert
        now=str(datetime.now())
        post_id = collection.insert_one({
            "author":author,
            "description":description,
            "created_date":now,
            "updated_date":now
            }).inserted_id
        print(post_id)

    if kind == "select":
        dumped_result = dumps(collection.find({}))
        result=dumped_result

    dumped_result = dumps(collection.find({}))
    result=dumped_result

    return result

