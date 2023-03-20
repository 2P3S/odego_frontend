import odegoLogo from "../../assets/odego_logo.png";
import GoogleButton from "../../components/Login/GoogleButton";

export default function LoginPage() {
  return (
    <div>
      Login Page
      <img className="logo" alt="odego_logo" src={odegoLogo} />
      <GoogleButton />
      {/* <button>G-Suite로 로그인하기</button> */}
      @g.yju.ac.kr로 끝나는 G-suite 계정만 사용이 가능합니다.
    </div>
  );
}
