#!/usr/bin/env bash

apt-get update

sudo apt-get install openjdk-7-jre-headless -y
sudo apt-get install curl
sudo apt-get install npm

### Check http://www.elasticsearch.org/download/ for latest version of ElasticSearch and replace wget link below
cd /opt
 
# NEW WAY / EASY WAY
wget https://download.elasticsearch.org/elasticsearch/elasticsearch/elasticsearch-0.90.7.deb
sudo dpkg -i elasticsearch-0.90.7.deb
sudo service elasticsearch start