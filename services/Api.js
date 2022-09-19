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
});

export async function getMoments(config) {
  try {
    const moments = []
    const response = await instanceAws
      .get(baseUrlAws + momentEndpoint + "?schoolsList=78bc784c-bc8e-41da-b0d7-abc0c6b71343%2C3ca13c51-08c5-44ec-b972-c7ae53ed08f2%2Cde3ca461-e7fb-457e-b059-18f11f850c72%2Ca539f93f-f698-4975-b46b-07dc76d60f3d&startTime=1656990000&endTime=1657076400&mediaTypesList=photo%2Cvideo%2Ctext%2Cgeneric%2Cplay%2Cclass%2Cnap%2Cnote%2Clunch%2Cbreak", config)
    
    console.log(response.data)

    response.data.forEach(m => {

      const singleMoment = {
        "id": m.momentId,
        "authorName": m.authorName,
        "description": m.description,
        "title": m.title,
        "image": m.attachments,
        "classes": m.classrooms
      }
      
      moments.push(singleMoment)
    })
    return moments
  } catch (error) {
    console.error(error);
  }
}