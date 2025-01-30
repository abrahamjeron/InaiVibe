import { GoogleLogin } from "@react-oauth/google";
const clientId="94490572892-esb91kkpq449n63limes53ns29i1qbvc.apps.googleusercontent.com"

function Login(){
    const onSuccess  = (res)=>{
        console.log("Login Success",res.profileObj);
    }
    const onFailure =(res)=>{
        console.log("Login Failure",res);
    }
    return(
        <div id="SignInButton">
            <GoogleLogin
                clientId={clientId}
                buttonText="Login"
                onSuccess={onSuccess}
                onFailure={onFailure}
                cookiePolicy={'single_host_origin'}
                IsSignedIn={true}
                />
        </div>
    )
}
export default Login;
