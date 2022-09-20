import axios from 'axios';

const baseUrlCore = 'https://moments-core-dev.herokuapp.com/api/v1/';
const baseUrlAws = 'https://slb43g79ng.execute-api.us-west-2.amazonaws.com/development/';
const momentEndpoint = 'moments'

const instanceCore = axios.create({
  baseURL: baseUrlCore,
  timeout: 1000,
});

const instanceAws = axios.create({
  baseURL: baseUrlAws,
  timeout: 1000,
  headers: { 'Authorization': 'eyJraWQiOiJHTVVwTW82SDVmSFFXOXQydEllajk4dnV1TFVlQ2JKckF3Z1k0eVY2MnRFPSIsImFsZyI6IlJTMjU2In0.eyJzdWIiOiI5YmNhYmY1Mi0zMDliLTRhYzctODE1Ni00ZGEzMjkzYmE2MjEiLCJhdWQiOiIyMjdwbWc5cWlpbm43aXRwdGsyZzVsMzQ2dCIsImVtYWlsX3ZlcmlmaWVkIjp0cnVlLCJldmVudF9pZCI6Ijc3MjEyOGVhLTMyYzYtNGI4NC1hZGYyLTQyNDQyYWYwN2Q2MCIsInRva2VuX3VzZSI6ImlkIiwiYXV0aF90aW1lIjoxNjYzNjI1ODkwLCJpc3MiOiJodHRwczpcL1wvY29nbml0by1pZHAudXMtd2VzdC0yLmFtYXpvbmF3cy5jb21cL3VzLXdlc3QtMl9idW5sRzdYT2siLCJjb2duaXRvOnVzZXJuYW1lIjoiYWRtaW4iLCJleHAiOjE2NjM3MTIyOTAsImlhdCI6MTY2MzYyNTg5MCwiZW1haWwiOiJhbGV4ZWkudXNrb3ZAYWRhcHRpdmVjYXN0LmNvbSJ9.d7uvKo73dsJQVRBineN2JVlYxl4EkXWQWKFOmmcQDJUGG_AadD7-x61DKMleqajA2H5XBL9zCbN0J341AJ32Tzy-GGQYr9blwWpCCEOpMfYD0dX2usA9vj9u2ZsXzekxWUXAU-eCpvOgo5XHymmdEWs3DoxO3j37yId6BeIQR9RE22adwpmdEiovXluKDs3v5MYKGhHe7bM9GRWumtdU4xwgRW9mZlnBAsPCqfTXngwj57Arokyg1HQzrnn4oO8QchkQV_Bxdhm53DKKIQsqMVwy8-oM09qrUaYyiU-wWs8rPVdCkTXBnh-lEc_f_CRRve7NoHNeEQq7Gse26SViGA' }
});

export async function getMoments(config) {
  try {
    const moments = []
    const response = await instanceAws
      .get(baseUrlAws + momentEndpoint + "?schoolsList=78bc784c-bc8e-41da-b0d7-abc0c6b71343%2C3ca13c51-08c5-44ec-b972-c7ae53ed08f2%2Cde3ca461-e7fb-457e-b059-18f11f850c72%2Ca539f93f-f698-4975-b46b-07dc76d60f3d&startTime=1656990000&endTime=1657076400&mediaTypesList=photo%2Cvideo%2Ctext%2Cgeneric%2Cplay%2Cclass%2Cnap%2Cnote%2Clunch%2Cbreak", config)

    response.data.forEach(m => {

      const singleMoment = convertDataIntoObject(m)
      
      moments.push(singleMoment)
    })
    return moments
  } catch (error) {
    console.error(error);
  }
}

export function convertDataIntoObject(m) {
  return {
    "id": m.momentId,
    "authorName": m.authorName,
    "description": m.description,
    "title": m.title,
    "image": m.attachments,
    "classes": m.classrooms
  };
}

export const multiply = (a, b) => a * b;