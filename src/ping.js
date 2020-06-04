const rp = require("request-promise");

// Ping all Heroku services every 5 minutes
const ping = () => {
  setInterval(async () => {

    const authServiceResponse = await rp.get(process.env.AUTH_URL, {
      resolveWithFullResponse: true, json: true
    });

    const referralServiceResponse = await rp.get(process.env.REFERRAL_URL, {
      resolveWithFullResponse: true, json: true
    });

    const configServiceResponse = await rp.get(process.env.CONFIG_URL, {
      resolveWithFullResponse: true, json: true
    });

    const serviceDiscoveryResponse = await rp.get(process.env.DISCOVERY_URL, {
      resolveWithFullResponse: true, json: true
    });

    const obj = {
      auth: authServiceResponse.body,
      referral: referralServiceResponse.body,
      config: configServiceResponse.body,
      discovery: serviceDiscoveryResponse.body
    };

    console.log(obj);
  }, 60 * 5 * 1000);
};

module.exports = { ping };
