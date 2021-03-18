import Header from './components/Header/Header';
import Filter from './components/Filter/Filter';
import JobsContainer from './components/Container/JobsContainer/JobsContainer';
import {JobsContextProvider} from './hooks/JobsContext/JobsContext'

import './styles/main.scss'

function App() {  
  return (
    <div className="App">
      <Header></Header>
      <JobsContextProvider>
      <Filter/>
      <JobsContainer/>
      </JobsContextProvider>
    </div>
  );
}

export default App;
