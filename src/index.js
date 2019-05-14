import React from 'react';
import ReactDOM from 'react-dom';
import Header from './components/Header';

import JSON from './db.json'
import NewsList from './components/news_list';
 class App extends React.Component{


    state={
        news:JSON
    }

    render(){
        return(
            <div >
                <Header />
                <NewsList news={this.state.news}>
                            <div> hellow Sajjad</div>
                </NewsList>
            </div>
        )
    }
}



ReactDOM.render(<App/>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
