import React from 'react';
import {Redirect} from "react-router-dom";
import Card from "../hoc/card";
import Auth  from "../hoc/auth";

const Profile =(props)=>{

        const redi=()=>{
            // return (
            //     <Redirect to="newProfile"/> //==>props.history.push("/");
            // );

            props.history.push("/");
        };

        //{redi()}
        
        return(
            <Auth>
                 <Card>
                    Profile
                 </Card>
            </Auth>
           
        )
    
}



export default Profile;