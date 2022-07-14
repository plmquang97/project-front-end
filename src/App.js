import { BrowserRouter ,Routes , Route} from 'react-router-dom';
import CustomerList from './components/CustomerList';
import NotFound from './components/NotFound';
// import 'bootstrap/dist/css/bootstrap.min.css';
import AddCustomer from './components/AddCustomer'
import './App.css';



function App() {
  return (
   <BrowserRouter>
    
      <Routes>
        <Route exact path ="/" element={<CustomerList />} />
        <Route path = "/add" element={<AddCustomer />} />
        <Route path = "/customer/edit:id" element ={<AddCustomer/>} />
        <Route path ="*" element={<NotFound/>} />
      </Routes>
    
   </BrowserRouter>
  );
}
export default App;
