from pydantic import BaseModel
from typing import Optional, List, Union
import requests
from queries.pool import pool
from keys import HOUSEPLANTS_API

class CategoryQueries:
    def get_all_categories(self):
        result = requests.get("https://house-plants2.p.rapidapi.com/categories", headers=
        {
            "X-RapidAPI-Key": HOUSEPLANTS_API,
	        "X-RapidAPI-Host": "house-plants2.p.rapidapi.com"
        })
        data = result.json()
        return data

    def get_one_category(self, category: str):
        result = requests.get(f"https://house-plants2.p.rapidapi.com/category/{category}", headers=
        {
            "X-RapidAPI-Key": HOUSEPLANTS_API,
	        "X-RapidAPI-Host": "house-plants2.p.rapidapi.com"
        })
        data = result.json()
        for plant in data:
            plant["api_id"] = plant["id"]
            plant["img"] = plant["Img"]
            plant["latin_name"] = plant["Latin name"]
            plant["common_name"] = plant["Common name"]
            plant["use"] = plant["Use"]
            plant["blooming_season"] = plant["Blooming season"]
            plant["color_of_blooms"] = plant["Color of blooms"]
            plant["climate"] = plant["Climat"]
            plant["pruning"] = plant["Pruning"]
        return data

    def get_plant_details(self, id: str):
        result = requests.get(f"https://house-plants2.p.rapidapi.com/id/{id}", headers=
        {
            "X-RapidAPI-Key": HOUSEPLANTS_API,
	        "X-RapidAPI-Host": "house-plants2.p.rapidapi.com"
        })
        plant = result.json()
        plant["api_id"] = plant["id"]
        plant["img"] = plant["Img"]
        plant["latin_name"] = plant["Latin name"]
        plant["common_name"] = plant["Common name"]
        plant["use"] = plant["Use"]
        plant["blooming_season"] = plant["Blooming season"]
        plant["color_of_blooms"] = plant["Color of blooms"]
        plant["climate"] = plant["Climat"]
        plant["pruning"] = plant["Pruning"]
        plant["family"] = plant["Family"]
        plant["temperature_max"] = plant["Temperature max"]
        plant["watering"] = plant["Watering"]
        plant["ideal_light"] = plant["Light ideal"]
        plant["insects"] = plant["Insects"]

        return plant
