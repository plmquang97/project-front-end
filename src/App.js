import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import CustomerList from "./components/CustomerList";

import AddCustomer from "./components/AddCustomer";
import MovieList from "./components/MovieList";
import AddMovie from "./components/AddMovie";
import "./App.css";
import Underconstruction from "./components/Underconstruction";
import Home from "./components/Home";


function App() {
  return (
    <BrowserRouter>
      <Header/>
      <Routes>
        
        <Route path="/" element={<Home />} />
        <Route path="/addmovie" element={<AddMovie />} />
        <Route path="/movie/edit/:id" element={<AddMovie />} />
        <Route path="/movie" element={<MovieList />} />

        <Route path="/addcustomer" element={<AddCustomer />} />
        <Route path="/customer/edit/:id" element={<AddCustomer />} />
        <Route path="/customer" element={<CustomerList />} />
        {/* <Route path= "*" element={<Underconstruction/>} /> */}
      </Routes>
    </BrowserRouter>
  );
}
export default App;
