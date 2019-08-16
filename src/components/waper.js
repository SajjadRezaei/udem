import React from 'react';
import {Link} from "react-router-dom";

const Waper=()=>{

const ids=[{id:1,title:"test 1"},{id:2,title:'test 2'}];



    // const lists=ids.map(item=>{
    //     return(
    //         <span key={item.id}>
    //         <Link to={item.id}>{item.name}</Link>
    //         </span>
    //     )
    // })
    // return (
    //     {lists}
    // )

    //or


    return ids.map(item=>{
         return(
            <span key={item.id}>
            <Link to={item.id}>{item.name}</Link>
            </span>
        )
    })


    //می تونیم ارایه هم برگردونیم به عنوان خروجی کامپ.ننت که راکت خودش اون رو پیمایش میکنه و تبدیل میکنه به رشته

        return [
            <div key="1">sdlskd</div>,
            <div key="2">asklkslak</div>,
        ];


}

export default Waper;