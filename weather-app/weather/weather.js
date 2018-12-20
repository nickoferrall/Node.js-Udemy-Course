const request = require("request");

const getWeather = (lat, lng, callback) => {
  request(
    {
      url: `https://api.darksky.net/forecast/8cf875d1be99f60e2d0d90564b6d9a17/${lat},${lng}`,
      json: true
    },
    (error, response, body) => {
      if (error) {
        callback("Unable to connect to Forecast.");
      } else if (response.statusCode === 400) {
        callback("Unable to fetch weather.");
      } else if (response.statusCode === 200)
        callback(undefined, {
          temperature: body.currently.temperature,
          apparentTemperature: body.currently.apparentTemperature
        });
    }
  );
};

modeule.exports.getWeather = getWeather;
