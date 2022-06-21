import GoogleBtn from "./GoogleBtn";
import Links4SignUp from "./Links4SignUp";
import { useState } from "react";

export default function Dashboard() {
    const [show, setShow2]=useState(true);
    return(
        <div className="Login">
        <GoogleBtn />
        {show && <Links4SignUp   setShow={setShow2} />}   
    </div>
    );
}