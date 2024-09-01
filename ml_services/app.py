# app.py
from fastapi import FastAPI
from pydantic import BaseModel
from fastapi.middleware.cors import CORSMiddleware
import pandas as pd
from sklearn.metrics.pairwise import cosine_similarity
import numpy as np
from fastapi.responses import JSONResponse

app = FastAPI()

# CORS middleware setup
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

trending_products = pd.read_csv("Trending products.csv", encoding="utf-8")


class UserRequest(BaseModel):
    user_id: int


@app.get("/")
def home():
    return {"status": "working"}


@app.get("/trendings")
def getTrendingProducts():
    products_list = trending_products.to_dict(orient="records")
    return JSONResponse(content=products_list)

    # @app.post("/recommendations/")
    # async def get_recommendations(request: UserRequest):
    #     user_id = request.user_id
    #     user_sim_scores = user_similarity_df[user_id]
    #     user_sim_scores = user_sim_scores.drop(user_id)
    #     most_similar_user = user_sim_scores.idxmax()
    #     similar_user_ratings = user_product_matrix.loc[most_similar_user]
    #     recommended_products = similar_user_ratings[similar_user_ratings > 0].sort_values(
    #         ascending=False).index
    #     return {"recommendations": recommended_products.tolist()}

    # Run with: uvicorn app:app --reload
