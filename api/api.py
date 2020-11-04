import time
from scrapper import fetch_data
from flask import Flask, render_template, request, send_file
from save import save_to_file
from flask_pymongo import PyMongo
from pymongo import MongoClient
from bson.json_util import loads, dumps
from api_requester import request_weather_info, request_covid_info

# example of document
todo={
        "title": "test_title",
        "user_id":"Joon",
        "is_done":"false"
        }

app = Flask(__name__)

past_result_list={}

@app.route('/time')
def get_current_time():
    return {'time': time.time()}

@app.route('/insert', methods=['POST'])
def login():
    print(request.form['author'])
    author = request.form['author']
    description = request.form['description']
    result = work_with_mongo(author, description)
    # return f"{id}  {password}"
    return result


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

@app.route("/weather")
def fetch_weather():
    return request_weather_info()

@app.route("/covid")
def fetch_covid():
    return request_covid_info()


def work_with_mongo(author, description):

    # mongodb connection
    client = MongoClient('mongodb://%s:%s@193.122.104.7:27017/' % ("myUserAdmin", "abc123"))
    # mongo --port 27017  --authenticationDatabase "admin" -u "myUserAdmin" -p
    db = client.test_database
    collection = db.test_collection

    # example mongodb insert
    post_id = collection.insert_one({
        "author":author,
        "description":description
        }).inserted_id
    test_result = dumps(collection.find({}))
    result=[]
    if len(result) == 0 :
        for index, doc in enumerate(test_result):
            result.append(doc)
    return test_result

