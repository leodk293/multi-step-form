import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "./components/Main";
function App() {
  return (
    <div className=" mx-0 md:mx-5">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
