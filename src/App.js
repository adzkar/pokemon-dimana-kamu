import React from "react";
import {
  Route,
  Switch,
  BrowserRouter as Router,
  Redirect
} from "react-router-dom";
import routes from "./config/routes";
import { AuthenticationService } from "./services";
import { AppWrapper } from "./App.style";


function PrivateRoute({ component: Component, ...rest }) {
  return (
    <Route
      {...rest}
      render={props =>
        AuthenticationService.isUserAuthenticated() === true ? (
          <Component {...props} />
        ) : (
          <Redirect to="/login" />
        )
      }
    />
  );
}

function App() {
  
  return (
    <AppWrapper>
      <Router>
        <Switch>
          {routes.map((route, idx, props) =>
            route.isPublic ? (
              <Route
                path={route.path}
                component={route.component}
                key={idx}
                {...props}
              />
            ) : (
              <PrivateRoute
                path={route.path}
                component={route.component}
                key={idx}
              />
            )
          )}
        </Switch>
      </Router>
    </AppWrapper>
  );
}

export default App;
