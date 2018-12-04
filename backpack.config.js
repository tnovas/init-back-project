const dotenv = require('dotenv');
const fs = require('fs');

module.exports = {
  webpack: (config, {dev}, webpack) => {
      var env;

      if (dev) {
        env = dotenv.config().parsed;
      } else {
        env = dotenv.parse(fs.readFileSync('.env.production'));
      }

      config.plugins.push(
        new webpack.DefinePlugin({ 
          'process.env.PORT': JSON.stringify(env.PORT),
        })
    );
    return config;
  },
};