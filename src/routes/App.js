import React from "react"
import { BrowserRouter, Route, Switch } from "react-router-dom"
import Home from "../containers/Home"
import Login from "../containers/Login"
import SignIn from "../containers/SignIn"
import Layout from "../components/Layout"

const App = () => (
  <BrowserRouter>
    <Layout>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/signin" component={SignIn} />
      </Switch>
    </Layout>
  </BrowserRouter>
)
export default App
