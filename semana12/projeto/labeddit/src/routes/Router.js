import React from 'react';
import { Route, Switch } from 'react-router-dom';
import LoginPage from '../screens/LoginPage/LoginPage';
import PostPage from '../screens/PostPage/PostPage';
import SignUpPage from '../screens/SignUpPage/SignUpPage';
import FeedPage from '../screens/FeedPage/FeedPage';
import ErrorPage from '../screens/ErrorPage/ErrorPage';

const Router = (props) => {
    return (
        <Switch>
            <Route exact path={'/login'}>
                <LoginPage setButtonName={props.setButtonName}/>
            </Route>
            <Route exact path={'/signup'}>
                <SignUpPage setButtonName={props.setButtonName}/>
            </Route>
            <Route exact path={['/feed', '/']}>
                <FeedPage/>
            </Route>
            <Route exact path={'/posts/:id'}>
                <PostPage/>
            </Route>
            <Route>
                <ErrorPage/>
            </Route>
        </Switch>        
    )
}

export default Router

