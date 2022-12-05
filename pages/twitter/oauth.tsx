import { useRouter } from "next/router";
import { getTwitterAccessToken } from "../../services/TwitterServices";

const CallbackPage = () => {
  const AccessDeniedMessage = "access_denied";
  const router = useRouter();
  const { state, code, error } = router.query;
  // Code is the authorization code

  if (error == AccessDeniedMessage) {
    return <p>You have rejected the authorization</p>;
  }
  // getTwitterAccessToken

  const accessToken = getTwitterAccessToken(code as string);
  console.log(accessToken);
  return (
    <div>
      <h2>Callback Page</h2>
      <p>State: {state}</p>
      <p>Code: {code}</p>
    </div>
  );
};

export default CallbackPage;
