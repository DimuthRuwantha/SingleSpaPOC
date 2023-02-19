import React from "react";
import { BrowserRouter, Route, Routes, Switch, Redirect } from "react-router-dom";

export default function Root(props) {

  return <Routes>
    <Route path="/app4" component={PeoplePage}></Route>
  </Routes>;
}


const PeoplePage = () => {
  return <div>Test from react</div>
}