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
  timeout: 900000,
  headers: { 'Authorization': 'eyJraWQiOiJHTVVwTW82SDVmSFFXOXQydEllajk4dnV1TFVlQ2JKckF3Z1k0eVY2MnRFPSIsImFsZyI6IlJTMjU2In0.eyJzdWIiOiI5YmNhYmY1Mi0zMDliLTRhYzctODE1Ni00ZGEzMjkzYmE2MjEiLCJhdWQiOiIyMjdwbWc5cWlpbm43aXRwdGsyZzVsMzQ2dCIsImVtYWlsX3ZlcmlmaWVkIjp0cnVlLCJldmVudF9pZCI6ImMzMDVkNWM4LTA0MjYtNGUzOS1iYmRlLTM2YWUxMjliNjBmZCIsInRva2VuX3VzZSI6ImlkIiwiYXV0aF90aW1lIjoxNjYzODcyNTU4LCJpc3MiOiJodHRwczpcL1wvY29nbml0by1pZHAudXMtd2VzdC0yLmFtYXpvbmF3cy5jb21cL3VzLXdlc3QtMl9idW5sRzdYT2siLCJjb2duaXRvOnVzZXJuYW1lIjoiYWRtaW4iLCJleHAiOjE2NjM5NTg5NTgsImlhdCI6MTY2Mzg3MjU1OCwiZW1haWwiOiJhbGV4ZWkudXNrb3ZAYWRhcHRpdmVjYXN0LmNvbSJ9.EwMn_FDbnGnK_UuoIvaxynPxZOJ4oCHzRPi8FONXfees_IPsJ6yWgkeWxfkiUInKFixa5-pnp8w73H2mwXqzFnvvagMMcPwvJrZJ6bVtOffQO5OIUFkHtB6MJmhkASRCpt-gxn3aWWj6yymhffgI1LMKMp_z3ebF_8bdlR0SS5L0nsmqkwF9obZlnWaNR62toshGztRqP8xbHfOAMPDkISyK56WT79W7EusR5nXgh10QAMVjd7Bl0B81aEBn5mkYH8xgWrL69QDVeXQsbegzQQ0VLvQkGezNuelNQHO0A3xppQFfRkD7gcdR96Lb0VbPA70lYw7TfgTpUJvjderU9w' }
});

export async function getMoments(config) {
  try {
    const moments = []
    const response = await instanceAws
      .get(baseUrlAws + momentEndpoint + "?schoolsList=78bc784c-bc8e-41da-b0d7-abc0c6b71343%2C3ca13c51-08c5-44ec-b972-c7ae53ed08f2%2Cde3ca461-e7fb-457e-b059-18f11f850c72%2Ca539f93f-f698-4975-b46b-07dc76d60f3d&startTime=1656990000&endTime=1658076400&mediaTypesList=photo%2Cvideo%2Ctext%2Cgeneric%2Cplay%2Cclass%2Cnap%2Cnote%2Clunch%2Cbreak", config)

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