import { GoogleLogin } from "@react-oauth/google";
const clientId="94490572892-esb91kkpq449n63limes53ns29i1qbvc.apps.googleusercontent.com"

function Logout(){
    const onSuccess  = ()=>{
        console.log("Logout");
    }
    return(
        <div id="SignOutButton">
            <GoogleLogin
                clientId={clientId}
                buttonText={"Logout"}
                onLogoutSuccess={onSuccess}
                />
        </div>
    )
}
export default Logout;
