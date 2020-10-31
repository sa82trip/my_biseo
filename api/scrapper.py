import requests
from bs4 import BeautifulSoup as bs4
headers = {
    'User-Agent':
    'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_9_3) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/35.0.1916.47 Safari/537.36'
}


def fetch_data_remote_ok(url):
    response = requests.get(url, headers=headers)
    job_table_soup = bs4(response.text, "html.parser")
    posts = job_table_soup.select(
        'tr.job')
        
    pass
    jobs_from_reomte_ok=[]
    for index, one in enumerate(posts):
        if one.select_one('a.no-border.tooltip'):
            jobs_from_reomte_ok.append({
                'title':one.select_one('td.company.position.company_and_position > a > h2').text,
                'company':one.find('a',{'class':'companyLink'}).text,
                'link':"https://remoteok.io"+one.select_one('a.no-border.tooltip')['href']
            })
        else:
             jobs_from_reomte_ok.append({
                'title':str(index) + one.select_one('td.company.position.company_and_position > a > h2').text,
                'company':one.find('a',{'class':'companyLink'}).text,
                'link':""
            })
    print("remoteok:::"+str(len(jobs_from_reomte_ok)))
    return jobs_from_reomte_ok


def fetch_data_wework(url):
    response = requests.get(url, headers=headers)
    job_table_soup = bs4(response.text, "html.parser")
    posts = job_table_soup.select(
        '#job_list > section > article > ul > li > a')
    jobs_from_wework=[]
    for one in posts:
        jobs_from_wework.append({
            'title':one.select_one("span.title").text,
            'company':one.select_one("span.company").text,
            'link':"https://weworkremotely.com"+one['href']
        })
    print("wework:::"+str(len(jobs_from_wework)))
    return jobs_from_wework


def fetch_data_stackoverflow(url):
    response = requests.get(url, headers=headers)
    job_table_soup = bs4(response.text, "html.parser")
    posts = job_table_soup.select(
        '#content > div.js-search-container.search-container.mbn24 > div > div.grid--cell.fl1.br.bc-black-2 > div > div.listResults > div.-job > div.grid > div.grid--cell.fl1'
    )
    job_from_stack = []
    for one in posts:
        job_from_stack.append({
            "title":one.find('h2').text,
            "company":one.select_one('h3 > span').text,
            "link":"https://stackoverflow.com"+one.find('h2').find('a')['href']
        })

    print("stack:::"+str(len(job_from_stack)))
    return job_from_stack

aggreated_list=[]
def aggreator(list):
    for one in list:
        aggreated_list.append(one)

def fetch_data(urls):
    print(urls)
    result = []
    fetcher_list={
        'stackoverflow':fetch_data_stackoverflow,
        'remoteok':fetch_data_remote_ok,
        'wework':fetch_data_wework
    }
    for key, url in urls.items():
        if "stackoverflow" in url:
            jobs = fetcher_list['stackoverflow'](url)
            for one in jobs:
                result.append(one)
        elif "remoteok" in url:
            jobs = fetcher_list['remoteok'](url)
            for one in jobs:
                result.append(one)
        elif "wework" in url:
            jobs=fetcher_list['wework'](url)
            for one in jobs:
                result.append(one)
    return result
