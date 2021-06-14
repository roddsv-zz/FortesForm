import './App.css';
import Form from './components/Forms/Form';
import Header from './components/Header/Header';
import EmpresasList from './components/Empresas/EmpresasList';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Pagination from './components/List/Pagination';

export default function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/">
            <Header />
            <Form />
          </Route>
          <Route exact path="/empresas">
            <EmpresasList />
            <Pagination />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
