import React from "react"
import { Container } from "semantic-ui-react"
import { Route, Switch } from "react-router-dom"
import Post from "./Post"
import CreatePost from "./CreatePost"
import UserProfile from "./UserProfile"

const Main = () => (
  <Container text className="wrapper">
    <Switch>
      <Route exact path="/" component={Post} />
      <Route exact path="/create-post" component={CreatePost} />
      <Route exact path="/user-profile" component={UserProfile} />
    </Switch>
  </Container>
);

export default Main
