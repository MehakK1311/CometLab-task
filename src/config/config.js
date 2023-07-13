const config = {
  jwtSecret: process.env.JWT_SECRET,
  mongoURI: process.env.MONGO_URI,
  sphereEngineAccessToken: process.env.SPHERE_ENGINE_ACCESS_TOKEN,
  sphereEngineEndpoint: process.env.SPHERE_ENGINE_ENDPOINT,
  port: process.env.PORT || 8081,
};

module.exports = config;