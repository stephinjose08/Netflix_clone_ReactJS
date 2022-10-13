
import './App.css';
import Banner from './components/Banner/Banner';
import NavBar from './components/NavBar/NavBar';
import RowPost from './components/RowPost/RowPost';
import {orginals,Action,Comedy,Romance,Documentery,Horror} from './components/url'


function App() {
  return (
    <div className="App">
  <NavBar/>
   <Banner/> 
   <RowPost url={orginals} title="Netflix Orginal"/>
   <RowPost url={Action} title="Action" isSmall/>
   <RowPost url={Comedy} title="Comedy" />
   <RowPost url={Romance} title="Romance" isSmall/>
   <RowPost url={Documentery} title="Documentery" />
   <RowPost url={Horror} title="Horror" isSmall/>
    </div>
  );
}

export default App;
