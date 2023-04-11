const { google } = require("googleapis");
const OAuth2 = google.auth.OAuth2;

const oauth2Client = new OAuth2(
  process.env.CLIENT_ID,
  process.env.CLIENT_SECRET,
  process.env.GOOGLE_OAUTH_REDIRECT_URL,
  {
    prompt: "consent",
  }
);

const googleAuthRedirectController = async (req, res) => {
  const authUrl = await oauth2Client.generateAuthUrl({
    access_type: "offline",
    scope: [
      "https://www.googleapis.com/auth/userinfo.email",
      "https://www.googleapis.com/auth/userinfo.profile",
    ],
  });

  res.redirect(authUrl);
};

module.exports = {
  googleAuthRedirectController,
};
