import React, { Component } from 'react';
import { Route, NavLink, Switch, Redirect } from 'react-router-dom';

import classes from './Blog.module.css';
import Posts from './Posts/Posts';
import asyncComponent from '../../hoc/asyncComponent';
//import NewPost from './NewPost/NewPost';

const AsyncNewPost = asyncComponent(() => {
    return import('./NewPost/NewPost');
});

class Blog extends Component {
    state = {
        auth: true
    }
    render () { 
        return (
            <div className={classes.Blog}>
                <header>
                    <nav>
                        <ul>
                            <li><NavLink 
                                to="/posts/" 
                                exact
                                activeClassName={classes.active}
                                >Posts</NavLink></li>
                            <li><NavLink 
                                to={{
                                    pathname: "/new-post",
                                    hash: '#submit',
                                    search: '?quick-submit=true'
                                }}
                                activeClassName={classes.active}>New Post</NavLink></li>
                        </ul>
                    </nav>
                </header>
                <Switch>
                    {this.state.auth ? <Route path="/new-post" component={AsyncNewPost}/> : null}
                    <Route path="/posts/" component={Posts}/>
                    <Route render={() => <h1>Not found</h1>}/> {/* util para rutas desconocidas */}
                    {/* <Redirect from="/" to="/posts" /> */}
                </Switch>
            </div>
        );
    }
}

export default Blog;