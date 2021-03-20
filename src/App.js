import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import {JobsContextProvider} from './hooks/JobsContext/JobsContext'
import JobsContainer from './components/Container/JobsContainer/JobsContainer';
import JobDetailsContainer from './components/Container/JobDetailsContainer/JobDetailsContainer';
import UseScrollToTop from './hooks/UseScrollToTop/UseScrollToTop'
import Header from './components/Header/Header';
import Filter from './components/Filter/Filter';

import './styles/main.scss'

function App() {  
  return (
    <div className="App">
      <Header></Header>
      <JobsContextProvider>
      <Router>
      <UseScrollToTop/>
      <Switch>
        <Route path="/details/:id">
          <JobDetailsContainer/>
        </Route>
        <Route path="/">
      <Filter/>
          <JobsContainer/>
        </Route>

      </Switch>
      </Router>
      </JobsContextProvider>

    </div>
  );
}

export default App;
