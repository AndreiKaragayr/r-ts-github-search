import React from 'react';
import {Route, Switch} from 'react-router-dom';
import HomeScreen from "../screen/homeScreen";
import UserScreen from '../screen/userScreen/UserScreen';

// Paths
export const HOME_PATH: string = `/`;
export const USER_PATH: string = `/users/:username?`;

const Routes:React.FC = () => {
  return (
    <Switch>
      <Route exact path={HOME_PATH}><HomeScreen /></Route>
      <Route path={USER_PATH}><UserScreen /></Route>

      <Route><h1>Error 404. Page not found =\ </h1></Route>
    </Switch>
  )
}

export default Routes;