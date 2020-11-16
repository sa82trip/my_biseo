from flask import Flask, request
from flask_pymongo import PyMongo
import requests
import json
import bson
import collections
from bson.codec_options import CodecOptions
import xmltodict
from api_keys import OPEN_WEATHER_API_KEY, OPEN_COVID_API_KEY
from datetime import datetime, timedelta
from pymongo import MongoClient
from flask_pymongo import PyMongo
from db_credential import ID, PASSWORD
from bson.json_util import loads, dumps

# react에서 latitude랑 longitude를 보내줘야함.
# https://openweathermap.org/current 이곳에서 받아오는거
# https://www.ip2location.com/demo ip로 위도 경도 받아오는 곳
lat  = '37.5665'
lon  = '126.9780'
API_key = OPEN_WEATHER_API_KEY
api_key = OPEN_COVID_API_KEY
headers = {
    'User-Agent':
    'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_9_3) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/35.0.1916.47 Safari/537.36'
}


def inserting_covid_info(data, today):
    # mongodb connection
    client = MongoClient('mongodb://%s:%s@193.122.104.7:27017/' % (ID, PASSWORD))
    # mongo --port 27017  --authenticationDatabase "admin" -u "myUserAdmin" -p
    db = client.mybiseo_database
    collection = db.covid_collection
    # collection.insert_one(data)
    # ordered dict가 mongodb에 들어가는건 문제 없는거 확인했다.
    # 아마도 문제는 지금 update_dt의 null인거 같다.
    # print(collection.insert_one(data))
    # 마지막으로 dict()를 이용해서 파이썬 dict형식으로 변환 했더니 성공.
    if (collection.find_one({"stateDt" : today})):
        return {"message"  : "today data is already stored"}
    else:
        post_id = collection.insert_one(dict(data)).inserted_id

    return post_id 

def select_all_covid():
    # mongodb connection
    client = MongoClient('mongodb://%s:%s@193.122.104.7:27017/' % (ID, PASSWORD))
    # mongo --port 27017  --authenticationDatabase "admin" -u "myUserAdmin" -p
    db = client.mybiseo_database
    collection = db.covid_collection


def request_weather_info(lat, lon):
    # request_url=f"http://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&lang=kr&appid={API_key}"
    request_url=f"http://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API_key}"
    result = requests.get(request_url).json()
    return result

def request_covid_info():
    yesterday = datetime.now() - timedelta(1)
    today = yesterday + timedelta(1)
    yesterday=(datetime.strftime(yesterday, '%Y%m%d'))
    today=(datetime.strftime(today, '%Y%m%d'))
    url = f'http://openapi.data.go.kr/openapi/service/rest/Covid19/getCovid19InfStateJson?serviceKey={api_key}&pageNo=1&numOfRows=10&startCreateDt={yesterday}&endCreateDt={today}'
    result = requests.get(url)
    # xml to dic
    parsed_result=xmltodict.parse(result.text)
    # inserting(parsed_result["response"]["body"]["items"]["item"])

    # take out data of current date only
    insert_result = inserting_covid_info(parsed_result["response"]["body"]["items"]["item"][0], today)
    total_result={
            "insert_result":insert_result,
            "parsed_result":parsed_result
            }
    return total_result
