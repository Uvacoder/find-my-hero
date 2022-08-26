import Header from "components/Header";
import Home from "pages/Home";
import Results from "pages/Results";
import User from "pages/User";
import { Routes, Route } from "react-router-dom";
function App() {
  return (
    <div className='app'>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/user' element={<User />} />
        <Route path='/results' element={<Results />} />
      </Routes>
    </div>
  );
}

export default App;
