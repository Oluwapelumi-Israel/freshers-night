import { Home } from './Components/Home'
import { Welcome } from './Components/Welcome';
import { AboutUs } from './Components/AboutUs';
import { Article } from './Components/Article';

function App() {
  return (
    <div className="App">
      <Home/>
      <Welcome/>
      <AboutUs/>
      <Article/>
    </div>
  );
}

export default App;
