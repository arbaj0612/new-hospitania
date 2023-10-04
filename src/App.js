import Carausal from "./Footer/Carausal";
import Footer from "./Footer/Footer";
import Shoppage from "./Shop-Pages/Shoppage";
import { BrowserRouter as Router, Routes ,Route } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Router>
            <Routes>
                <Route path='/' element={<Carausal/>}></Route>
                <Route path='/shoppage' element={<Shoppage/>}></Route>
            </Routes>
      </Router>
      {/* <Carausal/> */}

      {/* <Shoppage/> */}
      <Footer/>
      {/* <ShopHome/> */}
    </div>
  );
}

export default App;
