from bs4 import BeautifulSoup as bs
import requests
from selenium import webdriver

# selenium이용해서 scraping하려고 만든 file
url = "http://avi.im/stuff/js-or-no-js.html"
headers = {
    'User-Agent':
    'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_9_3) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/35.0.1916.47 Safari/537.36'
}

def getProductInfo():
    driver = webdriver.Chrome(executable_path="./chromedriver")
    driver.get(url)
    driver.save_screenshot("test.png")
    driver.quit()
    pass
