import React from 'react'
import { Route, Switch } from "react-router-dom";
import Auth from "./components/Auth";
import PostInputs from "./components/PostInputs";
import PostsDisplay from "./components/PostsDisplay";
import Search from "./components/Search";


export default  (
    <Switch>
        <Route exact path='/' component={Auth} />
        <Route path='/posts' component={PostsDisplay}/>
        <Route path='/add' component={PostInputs}/>
        <Route path='/search' component={Search}/>

    </Switch>
)