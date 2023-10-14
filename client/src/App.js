import Home from "./View/home/Home";
import Detail from "./View/details/Details";
import Landing from "./View/landing/Landing";
import Form from "./View/form/Form";
import Edit from "./View/edit/Edit";
import { Route, Routes } from "react-router-dom";
import SearchBar from "./components/SearchBar";

function App() {
  return (
    <div className="App">
      <SearchBar />
      <div>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/home" element={<Home />}></Route>
          <Route path="/detail/:id" element={<Detail />}></Route>
          <Route path="/form" element={<Form />}></Route>
          <Route path="/edit/:id" element={<Edit />}></Route>
        </Routes>
      </div>
    </div>
  );
}

export default App;
