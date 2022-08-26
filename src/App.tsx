import Header from "components/Header";
import Home from "pages/Home";
import { Routes, Route } from "react-router-dom";
function App() {
  return (
    <div className='app'>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
