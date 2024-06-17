import logo from './logo.svg';
import './App.css';
import {Route,Routes} from 'react-router-dom'
import { Navbar } from './components/Navbar';
import { News } from './components/News';
import { Favourite } from './components/Favourite';
import {toast,ToastContainer} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

function App() {

  const apikey = process.env.REACT_APP_NEWS_API

  return (
    <div>
      <Navbar/>
      <ToastContainer/>
      <Routes>
          <Route exact path="/" element={<News key="home"  apikey={apikey} category="home"/>}/>
          <Route exact path="/Business" element={<News key="Business" apikey={apikey}  category="Business"/>}/>
          <Route exact path="/entertainment" element={<News key="entertainment"  apikey={apikey}  category="entertainment"/>}/>
          <Route exact path="/general" element={<News key="general" apikey={apikey}   category="general"/>}/>
          <Route exact path="/health" element={<News key="health" apikey={apikey}  category="health"/>}/>
          <Route exact path="/science" element={<News key="science"  apikey={apikey}  category="science"/>}/>
          <Route exact path="/sports" element={<News key="sports" apikey={apikey}  category="sports"/>}/>
          <Route exact path="/technology" element={<News key="technology" apikey={apikey} category="technology"/>}/>
          <Route exact path='/FavoritePage' element={<Favourite/>}/>
      </Routes>
    </div>
  )
}

export default App;
