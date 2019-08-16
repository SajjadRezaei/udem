import React from 'react';
import {Link} from "react-router-dom";


import Header from './../components/Header';
import JSON from './../db.json'
import NewsList from './../components/news_list';



 class Posts extends React.Component{


    state={
        news:JSON,
        filterd:[]
    }

    getKeyWord=(event)=>{

        let keyword=event.target.value;
        let filterd=this.state.news.filter((item)=>{
            return item.title.indexOf(keyword)>-1;
        });
        this.setState({
            filterd
        });

        console.log(filterd);
    }

    render(){
        return(
            <div >
                <Header  keywords={this.getKeyWord}/>
                     <Link to={{pathname:`${this.props.match.url}/1`}}>example macke daynamic url</Link>
                     <NewsList news={this.state.filterd.length===0?this.state.news:this.state.filterd}>
                            
                     </NewsList>
            </div>
        )
    }
}



export default Posts;