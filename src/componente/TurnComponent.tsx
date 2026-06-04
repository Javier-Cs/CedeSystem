import { useEffect } from "react";

// creo una interfaz para lel token
interface Props{
    onVerify: (token:string) => void;
}

// funcionprincipal
export default function Turnstile({onVerify}: Props){
    useEffect(() =>{

        // url
        const script = document.createElement("script");
        script.src = "https://challenges.cloudflare.com/turnstile/v0/api.js";

        script.async = true;
        script.defer = true;

        document.body.appendChild(script);

        window.onTurnstileSuccess  = (token: string) =>{
            onVerify(token);

        };

    },[]);
    return (
        <div 
        className="cf-turnstile"
        data-sitekey=""
        data-callback="onTurnstileSuccess"

        ></div>
    );

}