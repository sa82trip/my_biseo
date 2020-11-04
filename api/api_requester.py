from flask import Flask, request
from flask_pymongo import PyMongo
import requests
import json
import xmltodict
from api_keys import open_weather_API_key

# react에서 latitude랑 longitude를 보내줘야함.
# https://openweathermap.org/current 이곳에서 받아오는거
# https://www.ip2location.com/demo ip로 위도 경도 받아오는 곳
lat='37.5665'
lon='126.9780'
API_key=open_weather_API_key
request_url=f"http://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={open_weather_API_key}"
headers = {
    'User-Agent':
    'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_9_3) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/35.0.1916.47 Safari/537.36'
}

def request_weather_info():
    result = requests.get(request_url).json()
    return result

url = 'http://openapi.data.go.kr/openapi/service/rest/Covid19/getCovid19InfStateJson?serviceKey=YjgoWU0S%2BXh5s846nXdd7VScSrNux3GmNZIcU64kuaDhte7x0P%2F03fnZBhalVMe879gJ4gr7uNqSEAPzLPWpdA%3D%3D&pageNo=1&numOfRows=10&startCreateDt=20201101&endCreateDt=20201105'
def request_covid_info():
    result = requests.get(url)
    parsed_result=xmltodict.parse(result.text)
    print(json.dumps(parsed_result))
    return json.dumps(parsed_result)
