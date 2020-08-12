const axios = require('axios').default;
let cachedData;
let cacheTime;

module.exports.getMarsWeather = async (req, res) => {
  if(cachedData && cacheTime > Date.now() - 15 * 60 * 1000) { 
    return res.json(cachedData)
  }
  try {
    const params = new URLSearchParams({
      "api_key": process.env.INSIGHT_API_KEY,
      "feedtype": "json",
      "version": 1.0
    });
    const { data } = await axios.get(`${process.env.API_ENDPOINT}${params}`);
    cachedData = data;
    cacheTime = Date.now();
    return res.json(data);
  } 
  catch (error) {
    return res.status(500).json({"message": "Internal Server error"});
  }
};