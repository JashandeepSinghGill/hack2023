import openai,os,sys
import json


def chat_gpt():

    received_params = {
    "temp": -22,
    "winds": "strong",
    "location": "downtown Calgary",
    "distance_to_travel": "5"
    }

    prompt = "Provide a list of things to do in Calgary within " + str(received_params["distance_to_travel"])+" km of " + received_params["location"] + " with a link to each."+"keep in mind it is "+str(received_params["temp"])+" outside and the winds are "+ received_params["winds"]
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
    print(message) 

if __name__=="__main__":
    chat_gpt()





