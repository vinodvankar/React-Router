import { Route, Switch, Redirect } from "react-router-dom";
import Allquotes from "./pages/Allquotes";
import QuotesDetails from "./pages/QuotesDetails";
import NewQuotes from "./pages/NewQuotes";
import Layout from "./components/layout/Layout";
import Notfound from "./pages/Notfound";

function App() {
  return (
    <Layout>
      <Switch>
        <Route path='/' exact>
          <Redirect to='/quotes' />
        </Route>

        <Route path='/quotes' exact>
          <Allquotes />
        </Route>
        <Route path='/quotes/:quotesId'>
          <QuotesDetails />
        </Route>

        <Route path='/new-quotes'>
          <NewQuotes />
        </Route>

        <Route path='*'>
          <Notfound />
        </Route>

      </Switch>
    </Layout>
  );
}

export default App;
