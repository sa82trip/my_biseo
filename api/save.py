import csv
import os
import shutil


def handle_directory():
    target_dir=os.getcwd()+"/csv_files"
    if os.path.isdir(target_dir):
        shutil.rmtree(target_dir)
    os.mkdir(target_dir)

def save_to_file(data):
    file=open(f"./csv_files/jobs", mode="w")
    writer = csv.writer(file)
    writer.writerow(["title","company","link"])
    for idx, one in enumerate(data):
        writer.writerow(one.values())
    return
