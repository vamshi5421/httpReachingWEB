import React, { Component } from 'react';

import { Route, NavLink } from 'react-router-dom';
import './Blog.css';
import Posts from "../Blog/Posts/Posts";
import NewPost from "../Blog/NewPost/NewPost";

class Blog extends Component {
    
    render () {
        return (
            <div className= "Blog">
                <header>
                    <nav>
                        <ul>
                            <li><NavLink to = "/" 
                            exact 
                            activeClassName ="home"
                            activeStyle = {{
                                color : "green"
                            }
                            }
                            >Home</NavLink></li>
                            <li><NavLink  to={{
                    pathname: '/new-post',
                    hash: '#submit', // just an example, to jump to this anchor
                    search: '?quick-submit=true', // another example of what we can do
                  }}>New Post</NavLink></li>
                            
                        </ul>
                    </nav>
                </header>

                <Route path="/" exact component={Posts}/>
                <Route path="/new-post" component={NewPost} />
            </div>
        );
    }
}

export default Blog;