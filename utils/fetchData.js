export const exerciseOptions = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': process.env.RAPID_API_KEY,
      'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
    }
  };
export const fetchData = async(url,options) => {
     url = 'https://exercisedb.p.rapidapi.com/exercises/bodyPartList';
    const response = await fetch(url,options)
    const data = await response.json()
  return data;
}