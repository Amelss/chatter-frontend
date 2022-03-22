import Home from "./Components/Home";
import Signup from "./Components/Signup";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Login from "./Components/Login";
import {Routes, Route} from 'react-router-dom'

function App() {
  return (
    <div className="page-container relative min-h-screen font-raleway">

      
      <Header />
        <div className="content-wrap pb-[2.5rem]">
          <Routes>
            <Route exact path ='/' element={<Signup />} /> 
            <Route path="/Home" element={<Home />} /> 
            <Route path="/Login" element={<Login />} />
          </Routes>
        </div>
      <Footer />
    </div>
  );
}

export default App;
