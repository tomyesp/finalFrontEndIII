
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import Home from "./Routes/Home"
import Detail from "./Routes/Detail"
import Favs from "./Routes/Favs"
import Contact from "./Routes/Contact"
import { ContextProvider } from "./Components/utils/global.context";
import {BrowserRouter, Routes, Route} from "react-router-dom";




/* fede y tomy */

function App() {
  return (
      <div className="App">
        <ContextProvider>
          <BrowserRouter>
            <Navbar/>
            <Routes>
                  <Route index element={<Home/>} />
                  <Route path="/detail/:id" element={<Detail/>} />
                  <Route path="/contact" element={<Contact/>} />
                  <Route path="/favs" element={<Favs/>} />
            </Routes>
            </BrowserRouter>           
            <Footer/>
        </ContextProvider>   
      </div>
  );
}



export default App;
