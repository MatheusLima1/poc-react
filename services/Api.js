import axios from 'axios';

const baseUrlCore = 'https://private-28019f-mockendpointsgen2cb.apiary-mock.com/';
const baseUrlAws = 'https://slb43g79ng.execute-api.us-west-2.amazonaws.com/development/';
const momentEndpoint = 'moments'
const loginEndpoint = 'login'

const instanceAws = axios.create({
  baseURL: baseUrlAws,
  timeout: 900000,
  headers: { 'Authorization': 'eyJraWQiOiJHTVVwTW82SDVmSFFXOXQydEllajk4dnV1TFVlQ2JKckF3Z1k0eVY2MnRFPSIsImFsZyI6IlJTMjU2In0.eyJzdWIiOiI5YmNhYmY1Mi0zMDliLTRhYzctODE1Ni00ZGEzMjkzYmE2MjEiLCJhdWQiOiIyMjdwbWc5cWlpbm43aXRwdGsyZzVsMzQ2dCIsImVtYWlsX3ZlcmlmaWVkIjp0cnVlLCJldmVudF9pZCI6IjE4ZDliN2IxLTFiYTYtNDc2Mi05N2NlLTc4NjNhODNkYTFmNCIsInRva2VuX3VzZSI6ImlkIiwiYXV0aF90aW1lIjoxNjY0OTA1ODUzLCJpc3MiOiJodHRwczpcL1wvY29nbml0by1pZHAudXMtd2VzdC0yLmFtYXpvbmF3cy5jb21cL3VzLXdlc3QtMl9idW5sRzdYT2siLCJjb2duaXRvOnVzZXJuYW1lIjoiYWRtaW4iLCJleHAiOjE2NjQ5OTIyNTMsImlhdCI6MTY2NDkwNTg1MywiZW1haWwiOiJhbGV4ZWkudXNrb3ZAYWRhcHRpdmVjYXN0LmNvbSJ9.VCv1y22-bx2l9hdt2E1baIUh4g00ciffD5MK2OY2HARifXzCbK8n7nreGs4vQI-7iak_NlltUTIhhBj5pNazZQiGLGU636IyIFxCY93rQrqS7wcR2HtdDiWkzGHpSyAo6DS8kZy1d29Y9_sWyqLmp4aaDcVkI41aksJMEU0heHh4rjTQuFgzGVKmrCpE5mZe1_dbZXA67HukGNNyueAFTl5PqHvigfi8JcWTE1wIY6jhBMoJ8Y_LtQ2xkVvQxqkkSQnVLpcEi73MTj4PgpQMbB0eVWuf88BnlE7Z_kOLXbFonKUaxHCfRGFeY4KuPRtCCuYvqeSIKv4Z8KIASodQ7w' }
});

export async function login(config, {data}) {
  try {
    const response = await instanceAws
      .post(baseUrlCore + login, data, config)

      return convertDataIntoUserDataObject(response)
  } catch (error) {
    console.error(error);
  }
}

export async function getQuestions(config) {
  try {
    const moments = []
    const response = await instanceAws
      .get(baseUrlCore + momentEndpoint, config)
   
      response.data.forEach(m => {

      const singleMoment = convertDataIntoMomentObject(m)
      
      moments.push(singleMoment)
    })
    return moments
  } catch (error) {
    console.error(error);
  }
}

export function convertDataIntoUserDataObject(m) {
  console.log("UserData"+ m)
  return {
    "userId": m.userId,
    "firstName": m.firstName,
    "lastName": m.lastName,
    "email": m.email,
    "phone": m.phone,
    "schools": m.schools,
    "classrooms": m.classrooms,
    "restrictions": m.restrictions,
    "token": m.token,
    "expiresAt": m.expiresAt

  };
}

export function convertDataIntoMomentObject(m) {
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