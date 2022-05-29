
import axios from "axios";

const URL = 'https://travel-advisor.p.rapidapi.com/restaurants/list-in-boundary'





export const getPlacesData = async(type, sw, ne) =>{
    try{
        const {data:{ data}} = await axios.get(`https://travel-advisor.p.rapidapi.com/${type}/list-in-boundary`, {
            params: {
              bl_latitude: sw.lat,
              tr_latitude: ne.lat,
              bl_longitude: sw.lng,
              tr_longitude: ne.lng,
            },
            headers: {
              'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com',
              'X-RapidAPI-Key': '5a3bad23c3msh491b2bb72378553p1ac265jsndc5f3d3af073'
            }
          });
        return data;


    } catch (error){
        console.log(error);
    }
}

