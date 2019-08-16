import React from 'react';
 class PureComponent extends React.PureComponent{

//pureComponent 
//نوع هوشمند و بهینه  هستش که اگه نیازی به رندر دوباره نباشه از این کار جلوگیری میکنه تا کارایی برنامه حفظ بشه


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
 
//    const questions = (await axios.get('http://localhost:8081/')).data;
//     this.setState({
//       questions,
//     });
 
}
componentDidUpdate(){
    console.log("After Update");
}

componentWillUpdate(){
    console.log("Before Update");
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



export default PureComponent;
