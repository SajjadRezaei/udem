import React from 'react';
const PostItem=(props)=>{


    console.log(props);

    return(
        <div>
            post item {props.match.params.id}
        </div>
    );
}
export default PostItem;