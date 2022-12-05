import axios from "axios";
import qs from "qs";
import envConfig from "../utils/envConfig";

let apiUrl = `https://api.twitter.com/2/oauth2`;

const ContentTypeHeader = {
  "Content-Type": "application/x-www-form-urlencoded",
  // "Access-Control-Allow-Origin": "*",
};

export const getTwitterAccessToken = async (
  authorizationCode: string
): Promise<any> => {
  try {
    const response = await axios({
      method: "post",
      url: `${apiUrl}/token`,
      data: qs.stringify({
        code: authorizationCode,
        grant_type: "authorization_code",
        client_id: envConfig.TWITTER_CLIENT_ID,
        redirect_uri: `${envConfig.BASE_DOMAIN}/twitter/oauth`,
        code_verifier: "challenge",
      }),
      headers: ContentTypeHeader,
    });
    console.log("Response", response);
    const { data, error } = response.data;

    if (data) {
      return data;
    }

    return {};
  } catch (error) {
    return {};
  }
};

export const disconnectTwitter = async (): Promise<any> => {
  try {
    const response = await axios.post(
      `${apiUrl}/revoke`,
      {},
      { headers: ContentTypeHeader }
    );
    const { data, error } = response.data;

    if (data) {
      return data;
    }

    return {};
  } catch (error) {
    return {};
  }
};
