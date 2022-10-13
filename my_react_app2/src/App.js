import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import Home from "./routes/Home.js";
import Detail from './routes/Detail.js';


function App() {
  return (
    <Router>
      <Switch>
        {/* 동적 url 제공. (:id)를 임의의 id를 받아올 수 있음*/}
        <Route path="/Movie/:id">
          <Detail />
        </Route>
        {/* Home으로 라우트해줌, 홈 주소는 "/" */}
        <Route path="/"> <Home /> </Route>
      </Switch>
    </Router>
  );
}

export default App;
