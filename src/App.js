import Header from './components/Header/Header';
import Filter from './components/Filter/Filter';
import JobsContainer from './components/Container/JobsContainer/JobsContainer';
import {HookFilterProvider} from './hooks/HookFilter/HookFilter';

import './styles/main.scss'

function App() {  
  return (
    <div className="App">
      <Header></Header>
      <HookFilterProvider>
      <Filter/>
      <JobsContainer/>
      </HookFilterProvider>
    </div>
  );
}

export default App;
