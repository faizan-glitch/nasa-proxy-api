# NASA Insight Proxy API
This is a proxy API for Nasa's Insight API. The purpose of this is to explain concepts like Proxy APIs, Caching and Rate Limiting. This Repo is for teaching purposes only.

## EndPoint.
This API has only one end-point. You can access it on `/api/insight`

## API Key
* Get your own API Key from [NASA's website](https://api.nasa.gov/).
* Rename **.env.example** to **.env**.
* Add it in the **.env** file.

## Data Type
The API returns a JSON object with data for the current week's Mars weather.

## Working
* ##### Rate Limiting 
  A particular IP Address can only request the data 30 times for every 15 minutes.
* ##### Cache
  The app only request the data for the first request. Then it caches data in memory for 15 minutes. For every subsequent request the data from the cache is served, until the cache expires.
