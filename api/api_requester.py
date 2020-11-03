from flask import Flask, request
from flask_pymongo import PyMongo
import requests

# react에서 latitude랑 longitude를 보내줘야함.
# https://openweathermap.org/current 이곳에서 받아오는거
# https://www.ip2location.com/demo ip로 위도 경도 받아오는 곳
lat='38'
lon='127'
API_key='8d81d9063a43a567221c49c4dedd7d38'
request_url=f"http://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API_key}"
headers = {
    'User-Agent':
    'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_9_3) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/35.0.1916.47 Safari/537.36'
}
def request_weather_info():
    print(requests.get(request_url).json())


request_weather_info()
