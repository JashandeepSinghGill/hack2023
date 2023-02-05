from flask import Flask, jsonify
from flask import request
from server import app
import requests as requests
import openai,os,sys
from bs4 import BeautifulSoup
import json

@app.route("/weather", methods=["POST"])
def weather(city="Calgary weather"):
    city = city.replace(" ", "+")
    headers = {'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Safari/537.3'}
    res = requests.get(
        f'https://www.google.com/search?q={city}&oq={city}&aqs=chrome.0.35i39l2j0l4j46j69i60.6128j1j7&sourceid=chrome&ie=UTF-8', headers=headers)
    soup = BeautifulSoup(res.text, 'html.parser')
    location = soup.select('#wob_loc')[0].getText().strip()
    time = soup.select('#wob_dts')[0].getText().strip()
    info = soup.select('#wob_dc')[0].getText().strip()
    weather = soup.select('#wob_tm')[0].getText().strip()

    data = {
        "weather": weather,
        "info": info,
        "time": time,
        "string4": location
    }
    data = json.dumps(data)
    print(data)

    return data


@app.route("/gptai", methods=["POST"])
def chat_gpt():
    params = request.get_json()
    print(params["message"])
    received_params = {
    "temp": -22,
    "winds": "strong",
    "location": "downtown Calgary",
    "distance_to_travel": "5"
    }

    # prompt = "Provide a list of things to do in Calgary within " + str(received_params["distance_to_travel"])+" km of " + received_params["location"] + " with a link to each and their description."+"keep in mind it is "+str(received_params["temp"])+" outside and the winds are "+ received_params["winds"] + "\n Give the output in html in only ul tag"
    prompt = params["message"]
    openai.api_key = "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" 

    completions = openai.Completion.create(
        engine="text-davinci-003",
        prompt= prompt,
        max_tokens=1024,
        n=1,
        stop=None,
        temperature=0.5,
    )
    message = completions.choices[0].text
    jmessage = json.dumps({"message":message})
    print(jmessage)
    return jmessage