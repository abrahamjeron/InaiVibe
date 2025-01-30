import './App.css';
import LoginButton from "./components/Authentication/Login";
import LogoutButton from "./components/Authentication/Logout";
import { useEffect } from 'react';
import { GoogleLogin } from "@react-oauth/google";
import { gapi } from 'gapi-script';

const clientId = "94490572892-esb91kkpq449n63limes53ns29i1qbvc.apps.googleusercontent.com";

function App() {
    useEffect(()=>{
        function start(){
            gapi.client.init({
                clientId:clientId,
                scope:""
            })
        };
        gapi.load('client:auth2',start);
    });

return (
<div className="App">
        <LoginButton/>
        <LogoutButton/>
</div>
)}
export default App;