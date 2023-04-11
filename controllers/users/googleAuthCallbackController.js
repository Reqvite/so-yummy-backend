const { google } = require("googleapis");
const OAuth2 = google.auth.OAuth2;
const jwt = require("jsonwebtoken");
const { User } = require("../../models/userModel");
const generator = require("generate-password");
const gravatar = require("gravatar");

const oauth2Client = new OAuth2(
  process.env.CLIENT_ID,
  process.env.CLIENT_SECRET,
  process.env.GOOGLE_OAUTH_REDIRECT_URL
);

const googleAuthCallbackController = async (req, res) => {
  const { code } = req.query;
  const password = generator.generate({
    length: 12,
    numbers: true,
    uppercase: true,
  });

  try {
    const { tokens } = await oauth2Client.getToken(code);
    oauth2Client.setCredentials(tokens);
    const userInfo = await google
      .oauth2("v2")
      .userinfo.get({ auth: oauth2Client });

    const email = userInfo.data.email;
    const user = await User.findOne({ email });
    const avatarURL = gravatar.url(email);
    if (!user) {
      await User.create({
        avatarURL,
        email,
        name: userInfo.data.name,
        password: password,
      });
    }

    const userReady = await User.findOne({ email });
    const id = userReady._id;
    const token = jwt.sign(
      {
        _id: id,
      },
      process.env.JWT_SECRET,
      { expiresIn: "24h" }
    );

    await User.findByIdAndUpdate(id, {
      $set: { token },
    });
    res.redirect(`http://localhost:3001/?auth=${token}`);
  } catch (error) {
    res.status(500).json({ message: error });
  }
};

module.exports = {
  googleAuthCallbackController,
};
