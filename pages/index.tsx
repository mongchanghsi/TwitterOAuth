import Head from "next/head";
import Image from "next/image";
import { useState } from "react";
import styles from "../styles/Home.module.css";
import envConfig from "../utils/envConfig";

export default function Home() {
  const [username, setUsername] = useState<string>("");

  const handleTriggerTwitterOAuth = async () => {
    const redirectUrl = `${envConfig.BASE_DOMAIN}/twitter/oauth`;
    const constructTwitterOAuthApi = `https://twitter.com/i/oauth2/authorize?response_type=code&client_id=${envConfig.TWITTER_CLIENT_ID}&redirect_uri=${redirectUrl}&scope=users.read&state=state&code_challenge=challenge&code_challenge_method=plain`;
    document.location.href = constructTwitterOAuthApi;
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        {username ? (
          <h1 className={styles.title}>Welcome {username}</h1>
        ) : (
          <p>
            Please connect your Twitter{" "}
            <button type="button" onClick={handleTriggerTwitterOAuth}>
              here
            </button>
          </p>
        )}
      </main>
    </div>
  );
}
