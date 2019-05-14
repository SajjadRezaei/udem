import React from "react";
import {css} from "glamor";
import classes from '../styles/styles.css';


const NewsItem=({item})=>{

    // let news_item= css({
    //     padding: '20px',
    //     boxSizing:'border-box',
    //     borderBottom:'1px solid grey',
    //     ':hover':{
    //         color:'red'
    //     }
    // });
    // let item_grey=css({
    //     background:'lightgrey'
    // });

    return(
        // <div  {...news_item} {...item_grey}>

        <div  className={classes.new_item}>
            <h3>{item.title}</h3>
            <div>{item.feed}</div>
       </div>
    )
}

export default NewsItem;