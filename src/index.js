import React from 'react';
import ReactDOM from 'react-dom';
import {Route,BrowserRouter,Link,NavLink,Switch,Redirect} from "react-router-dom";

//COMPONENTS
import Home from "./pages/home";
import Profile from "./pages/profile";
import Posts from "./pages/posts";
import PostItem from "./pages/post_item";
import LifeCycle from "./pages/lifecycle";
import User from "./pages/user";
import PureComponent from "./pages/pureComponnent";




class App extends React.Component{
    render(){
        return(
            // BrowserRouter or HashoRuter or MemoryRouter    


            //کار Switch  این هستش که یک روت رو واسه درخواست دریافت شده انتخاب و اعزام کنه.به این صورت که ما دوتا روتی  که بخش یکسانی دارن روتر کوچیک رو زیر روتر بزگتر قرار میدم.یا این کارو باید انجام بدیم یا این که میتونیم سویچ رو استفاده نکنیم و از پروپرتی ایکسک استفاده کنیم  ر
            <BrowserRouter> 
                <div>
                    <header>
                        <Link to="/">Home</Link><br/>
                        <Link to="/lifecycle">LifeCycle</Link><br/>
                        <Link to="/pureComponent">pureComponnent</Link><br/>
                        <Link to="/user">user</Link><br/>
                        <NavLink to="/posts"
                           activeStyle={{color:'red'}}
                           activeClassName="selected asas"
                        
                        >Posts</NavLink><br/>


                        <Link to={{
                            pathname:"/profile",
                            hash:"#messi",
                            search:"?profile=true"
                        }}>Profile</Link><br/>

                    </header>
                       

                    
                        <Switch>
                            
                          
                            <Redirect from="/sex" to="/post"></Redirect>


                            <Route path="/posts/:id"   component={PostItem} />
                            <Route path="/posts"   component={Posts} exact />
                            <Route path="/profile" component={Profile} />
                            <Route path="/newProfile" component={Home} />
                            <Route path="/lifecycle" component={LifeCycle} />
                            <Route path="/pureComponent" component={PureComponent} />
                            <Route path="/user" component={User} />
                            <Route path="/"        component={Home} exact/>

                            <Route render={()=><h3>page not found 404</h3>}></Route>
                        
                        </Switch>

                </div>
            </BrowserRouter>
        )
    }
}

ReactDOM.render(<App/>, document.getElementById('root'));
