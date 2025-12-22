from fastapi import FastAPI, HTTPException
import requests
import pandas as pd

app = FastAPI()

URL = "https://69465581ed253f51719dd78e.mockapi.io/get-students/students_data"


@app.get("/students/filtered")
def get_filtered_students():
    try:
        
        response = requests.get(URL)
        response.raise_for_status()
        students = response.json()

        
        df = pd.DataFrame(students)

        df["credit_card_balance"] = df["credit_card_balance"].astype(float)

        df["decimal_part"] = df["credit_card_balance"] % 1

        filtered_df = df[df["decimal_part"] < 0.50]

        filtered_df = filtered_df.drop(columns=["decimal_part"])

        return {
            "count": len(filtered_df),
            "data": filtered_df.to_dict(orient="records")
        }

    except requests.exceptions.RequestException as e:
        raise HTTPException(status_code=500, detail=str(e))
