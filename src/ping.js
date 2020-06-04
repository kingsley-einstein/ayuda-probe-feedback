const rp = require("request-promise");

// Ping all Heroku services
const ping = () => {
  setInterval(async () => {

    const authServiceResponse = await rp.get(process.env.AUTH_URL, {
      resolveWithFullResponse: true
    });

    const referralServiceResponse = await rp.get(process.env.REFERRAL_URL, {
      resolveWithFullResponse: true
    });

    const configServiceResponse = await rp.get(process.env.CONFIG_URL, {
      resolveWithFullResponse: true
    });

    const obj = {
      auth: authServiceResponse.body,
      referral: referralServiceResponse.body,
      config: configServiceResponse.body
    };

    console.log(obj);
  });
};

module.exports = { ping };
