import { BrowserRouter, Routes, Route } from "react-router-dom";
import CustomerList from "./components/CustomerList";
import NotFound from "./components/NotFound";
import AddCustomer from "./components/AddCustomer";
import MovieList from "./components/MovieList";
import AddMovie from "./components/AddMovie";
import "./App.css";
import Underconstruction from "./components/Underconstruction";
import Home from "./pages/Home";

function App() {
  return (
    <BrowserRouter>
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/addmovie" element={<AddMovie />} />
        <Route path="/movie/edit/:id" element={<AddMovie />} />
        <Route path="/movie" element={<MovieList />} />

        <Route path="/addcustomer" element={<AddCustomer />} />
        <Route path="/customer/edit/:id" element={<AddCustomer />} />
        <Route path="/customer" element={<CustomerList />} />
        {/* <Route path ="*" element={<NotFound/>} /> */}
        {/* <Route path= "*" element={<Underconstruction/>} /> */}
      </Routes>
    </BrowserRouter>
  );
}
export default App;
