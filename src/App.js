import './App.css';
import Header from './components/Header';
import {Routes,Route} from "react-router-dom"
import Filminfo from "./components/Filminfo"
import Horror from './components/Horror';
import Coming from './components/Coming';
import Adventure from './components/Adventure';
import History from './components/History';
import Cartoon from './components/Cartoon';
import Fantasy from './components/Fantasy';
import Search from './components/Search';
import Action from './components/Action';
import Dedective from './components/Dedective';
import Documentary from "./components/Documentary"
import Romantic from './components/Romantic';
import Drama from './components/Drama';
import Navbar from './components/Navbar';

function App() {
  fetch("https://api.themoviedb.org/3/search/movie?api_key=70529d61fe54b1ad1ecaac7877cf57d4&query=Terrifier")
  .then(response=>response.json())
  .then(response=>console.log(response))
return (
    <div className="App">
 <Routes>
 <Route path="/" exact element={<Header/>}></Route>
       <Route path='/ətraflı/:id' element={<Filminfo/>}></Route>
       <Route path='/qorxu' element={<Horror/>}></Route>
       <Route path='/trend' element={<Coming/>}></Route>
       <Route path='/butun' element={<Header/>}></Route>
       <Route path='/macera' element={<Adventure/>}></Route>
       <Route path='/tarixi' element={<History/>}></Route>
       <Route path='/anime' element={<Cartoon/>}></Route>
       <Route path='/fantasy' element={<Fantasy/>}></Route>
       <Route path='/search' element={<Search/>}></Route>
       <Route path='/action' element={<Action/>}></Route>
       <Route path='/detectiv' element={<Dedective/>}></Route>
       <Route path='/documentary' element={<Documentary/>}></Route>
       <Route path='/romantic' element={<Romantic/>}></Route>
       <Route path='/drama' element={<Drama/>}></Route>
       <Route path='/home' element={<App/>}></Route>
     </Routes>
    </div>
  );
}

export default App;
