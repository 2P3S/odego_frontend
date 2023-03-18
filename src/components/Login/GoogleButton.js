import { useEffect } from "react";
import GoogleLogin from "react-google-login";
import { gapi } from "gapi-script";

const clientId =
  "1046060034041-c9jtn71sl2q0arv5ldf51kmm41uq2b3p.apps.googleusercontent.com";

const GoogleButton = ({ onSocial }) => {
  useEffect(() => {
    function start() {
      gapi.client.init({
        clientId,
        scope: "email",
      });
    }

    gapi.load("client:auth2", start);
  }, []);

  const onSuccess = async res => {
    console.log(res);
    const email = await res.profileObj.email;
    if (!email.includes("@g.yju.ac.kr")) {
      console.log("@g.yju.ac.kr로 끝나는 G-suite 계정만 사용이 가능합니다.");
    } else {
      console.log("happy scenario");
    }
  };

  const onFailure = res => {
    console.log(res);
  };

  return (
    <div>
      <GoogleLogin
        clientId={clientId}
        buttonText="G-Suite로 로그인하기"
        onSuccess={onSuccess}
        onFailure={onFailure}
      />
    </div>
  );
};

export default GoogleButton;
