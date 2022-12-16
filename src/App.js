import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Navbar from './Components/Navbar';
import { Routes, Route } from 'react-router-dom'
import Home from './Pages/Home';
import Cart from './Pages/Cart';
import { Provider} from 'react-redux';
import store from './Store/Store';
function App() {
  return (
    <>
      <Provider store={store}>
      <Navbar/>
      <Routes >
          <Route path='/Home' element={<Home/>}></Route>
          <Route path='/Cart' element={<Cart/>}></Route>
          
        </Routes>

      </Provider>
       
    </>
  );
}

export default App;
