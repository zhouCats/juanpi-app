import React from 'react';
import { Router, Route, Switch } from 'dva/router';
import IndexPage from './routes/IndexPage';
import Jphome from './routes/Jphome/Jphome';
import Jpclassify from './routes/Jpclassify/Jpclassify';
import Jpmy from './routes/Jpmy/Jpmy';
import Jpshopcart from './routes/Jpshopcart/Jpshopcart';
import Detail from './routes/Detail/Detail';
import Mylogin from './components/My/Mylogin'
import Myreg from './components/My/Myreg'
function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/" exact component={Jphome} />
        <Route path="/home"  component={Jphome} />
        <Route path="/classify"  component={Jpclassify} />
        <Route path="/shopcart"  component={Jpshopcart} />
        <Route path="/my"  component={Jpmy} />
        <Route path="/login"  component={Mylogin} />
        <Route path="/reg"  component={Myreg} />
        <Route path="/detail"  component={Detail} />
      </Switch>
    </Router>
  );
}

export default RouterConfig;
