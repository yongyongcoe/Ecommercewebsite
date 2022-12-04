import Hompage from './components/Homepage'
import { BrowserRouter, Routes, Route } from "react-router-dom";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index path="/" element={<Hompage />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
