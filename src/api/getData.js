import axios from 'axios'

export const GetSearch = async () =>{
    const base_url = import.meta.env.VITE_BASE_URL
    try {
        const response = await axios({
            url: base_url + 'artworks/search?q=',
            method: "GET",
        })
        return response.data.data
    } catch (error) {
        console.log(error);
    }
}


export const GetInformation = async (call_url) =>{
    try {
        const response = await axios({
            url: call_url + '?fields=id,title,image_id',
            method: "GET",
        })
        return response.data
    } catch (error) {
        console.log(error);
    }
}