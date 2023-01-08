export const exerciseOptions = {
    method: 'GET',
    headers: {
      // 'X-RapidAPI-Key': process.env.RAPID_API_KEY,
      'X-RapidAPI-Key': 'dc96f49ea0mshfbfc8a0fc1da928p14e813jsnbca742817be3',
      'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
    }
  };
  export const youtubeOptions = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '14b9ca4446msh7314e0b0642243cp1269b9jsn8e028a638528',
      'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com'
    }
  };
  
  
export const fetchData = async(url,options) => {
    const response = await fetch(url,options)
    const data = await response.json()
  return data;
}