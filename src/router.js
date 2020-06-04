const { Router } = require("express");
const mailer = require("nodemailer");

const router = Router();
const mailingTransport = mailer.createTransport({
  host: "gmail.com",
  auth: {
    user: process.env.AUTH_MAIL,
    pass: process.env.PASS_MAIL
  }
});

router.post("/mail", async (req, res) => {
  const { body } = req;
  const m = await mailingTransport.sendMail({
    to: process.env.MAIL_ADDRESS,
    from: body.from,
    html: body.message
  });
  if (!m) return res.status(500).json({
    code: 500,
    response: "An error occurred."
  });
  res.status(200).json({
    code: 200,
    response: "Mail sent."
  });
});

module.exports = router;
