from flask import Flask, request
from flask_pymongo import PyMongo
import requests
import json
import xmltodict
from api_keys import OPEN_WEATHER_API_KEY, OPEN_COVID_API_KEY
from datetime import datetime, timedelta

# react에서 latitude랑 longitude를 보내줘야함.
# https://openweathermap.org/current 이곳에서 받아오는거
# https://www.ip2location.com/demo ip로 위도 경도 받아오는 곳
lat='37.5665'
lon='126.9780'
API_key=OPEN_WEATHER_API_KEY
api_key=OPEN_COVID_API_KEY
headers = {
    'User-Agent':
    'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_9_3) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/35.0.1916.47 Safari/537.36'
}

def request_weather_info(lat, lon):
    request_url=f"http://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&lang=kr&appid={API_key}"
    result = requests.get(request_url).json()
    print(result)
    return result

def request_covid_info():
    yesterday = datetime.now() - timedelta(1)
    today = yesterday + timedelta(1)
    yesterday=(datetime.strftime(yesterday, '%Y%m%d'))
    today=(datetime.strftime(today, '%Y%m%d'))
    url = f'http://openapi.data.go.kr/openapi/service/rest/Covid19/getCovid19InfStateJson?serviceKey={api_key}&pageNo=1&numOfRows=10&startCreateDt={yesterday}&endCreateDt={today}'
    result = requests.get(url)
    print(url)
    parsed_result=xmltodict.parse(result.text)
    print(json.dumps(parsed_result))
    return parsed_result