import React from 'react';
import { Container } from 'semantic-ui-react';
import { Route, Switch } from 'react-router-dom';
import CreatePost from './post/CreatePost';
import UserProfile from './user/UserProfile';
import PostList from './post/PostList';
import LoginForm from './user/LoginForm';
import RegisterForm from './user/RegisterForm';
import TermsAndConditions from './TermsAndConditions';

const Main = () => (
    <Container text className="wrapper">
        <Switch>
            <Route exact path="/" component={PostList} />
            <Route exact path="/create-post" component={CreatePost} />
            <Route exact path="/user-profile" component={UserProfile} />
            <Route exact path="/register" component={RegisterForm} />
            <Route exact path="/login" component={LoginForm} />
            <Route exact path="/terms-and-conditions" component={TermsAndConditions} />
        </Switch>
    </Container>
);

export default Main;
