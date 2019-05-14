import React from "react";

import '../styles/styles.css';

class Header  extends React.Component{
        constructor(props){
            super(props);
            this.state={
                keywords:'',
                title:'the wordse are:',
                active:false,
                className:'active'
            }
        }

    inputChangeHandler=(event)=>{

        const value=event.target.value===''?false:true;
       // const className=event.target.value===''?'active':'non-active';

                this.setState({
                    active:value,
                    keywords:event.target.value,
                   // className
                });
    }
    
    render(){
        console.log(this.state.keywords);

        // const style={ background:'red'};

        // if(this.state.keywords!==""){
        //      style.background='red';
        // }else{
        //     style.background='green';
        // }



        return(
            // style={{background:`${this.state.active?'red':'blue'}`}} className={this.state.className}
            <header >
                <div className="logo">logo</div>
                <input type="text" onChange={this.inputChangeHandler}></input>
                <div>{this.state.title}</div>
                <div>{this.state.keywords}</div>

            </header>
        )
    }
}



export default Header;