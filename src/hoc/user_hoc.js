import React from "react";
const userHoc=(wrappedComponent,arg1)=>{

return (props)=>(
    <div>
        {console.log(props)}
        {arg1}
        <wrappedComponent  {...props}/>
    </div>
    )

}
export default userHoc;