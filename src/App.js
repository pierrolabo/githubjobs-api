import Header from './components/Header/Header';
import Filter from './components/Filter/Filter';
import {HookFilterProvider} from './hooks/HookFilter/HookFilter';

import './styles/main.scss'

function App() {  
  return (
    <div className="App">
      <Header></Header>
      <HookFilterProvider>
      <Filter/>
      </HookFilterProvider>
    </div>
  );
}

export default App;
