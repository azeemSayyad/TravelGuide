import axios, { Axios } from "axios";


const getPlacesData = async (type,sw,ne) => {
    try {
        const { data: { data } } = await axios.get(`https://travel-advisor.p.rapidapi.com/${type}/list-in-boundary`, {
          params: {
            bl_latitude: sw.lat,
            tr_latitude: ne.lat,
            bl_longitude: sw.lng,
            tr_longitude: ne.lng,
            currency:'rupees',
            // bl_latitude: '11.847676',
            // tr_latitude: '12.838442',
            // bl_longitude: '109.095887',
            // tr_longitude: '109.149359',
          },
          headers: {
            // 'X-RapidAPI-Key': 'c437ae6cf3msh818dbe5f2973c28p1a0f9fjsnd5744a4ecd56',
            // 'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com'
            'X-RapidAPI-Key': 'e7659cf1d2mshc69aa0eb5df61e5p1fb5cfjsne33e1b8ce11c',
            'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com'
          }
        })
        return data;
    }
    catch (error) {
        console.log(error)
    }
}

export default getPlacesData;