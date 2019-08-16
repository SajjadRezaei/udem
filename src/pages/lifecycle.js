import React from 'react';
 class LifeCycle extends React.Component{


//1 get default props
//2 set default state


state={
    title:'lifeCycle'
}



constructor(props){
    super(props);
    console.log("constructor ");
}



//3 before render
componentWillMount(){
    console.log("3 before render");
}
componentDidUpdate(){
    console.log("After Update");
}

componentWillUpdate(){
    console.log("Before Update");
}



shouldComponentUpdate(nextProps,nextState){

    // console.log(this.state.title);
    // console.log(nextState.title);

    if(nextState.title===this.state.title){
        return false;
    }

    console.log(nextProps);
    return true

    //

  //by default return true


}


componentWillReceiveProps(){
    console.log('BEFORE RESIVE PROPS')
}


componentWillUnmount(){

    console.log('unmont component');
}


//4 render jsx
    render(){
        console.log("render");
        return(
            <div>
               <h3>{this.state.title}</h3>
               <div onClick={()=>{
                   this.setState({title:'somthing else'});
                 }}>CLICK TO CHANGE</div>
            </div>
        )
    }




    //5 after render 
  componentDidMount(){
        console.log("5 after render ");
    }



}



export default LifeCycle;