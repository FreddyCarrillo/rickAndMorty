import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Routes from "./navigation/Route";
import Welcome from './pages/auth/Welcome';

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/" component={Welcome} />
          {Routes.map((layout, i) => {
            return (
              <Route
                key={i}
                exact={layout.exact}
                path={layout.path}
                component={layout.component}
                name={layout.name}
              />
            );
          })}
        </Switch>
      </Router>
    </>
  );
}

export default App;
