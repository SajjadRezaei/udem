import React from "react";

const Auth=(props)=>{
    const password="123456";
    if(password!=="123456"){
        return <h3>You are not authorized</h3>
    }else{
        return props.children;
    }


}

export default Auth;