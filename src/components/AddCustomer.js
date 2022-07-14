import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import customerService from "../services/customer.service";

const AddCustomer = () => {
  const [customerName, setCustomerName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [birthDay, setBirthDay] = useState("");
//   const history =useHistory();
  const { id } = useParams();

  const saveCustomer = (e) => {
    e.preventDefault();

    const customer = { customerName, phoneNumber, email, birthDay };
    if (id) {
      //update
      customerService
        .update(customer)
        .then((response) => {
          console.log("Customer data updated succsessfully", response.data);
        //  history.push('/');
        })
        .catch((error) => {
          console.log("Something went wrong", error);
        });
    } else {
      //create
      customerService
        .create(customer)
        .then((response) => {
          console.log("customer added successfully", response.data);
        //  history.push("/");
        })
        .catch((error) => {
          console.log("something went wrong", error);
        });
    }
  };
  useEffect(() => {
    if (id) {
      customerService
        .get(id)
        .then((customer) => {
          setCustomerName(customer.data.customerName);
          setPhoneNumber(customer.data.phoneNumber);
          setEmail(customer.data.email);
          setBirthDay(customer.data.birthDay);
        })
        .catch((error) => {
          console.log("Something went wrong", error);
        });
    }
  }, []);
  return (
    <div className="container">
      <h3>Add Customer</h3>
      <hr />
      <form>
        
        
      <div className="form-group">
          <input
            type="text"
            className="form-control col-4"
            id="name"
            value={customerName}
            onChange={(e) => setCustomerName(e.target.value)}
            placeholder="Enter name"
          />
        </div>

        <div className="form-group">
          <input
            type="number"
            className="form-control col-4"
            id="phonenumber"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            placeholder="Enter phone number"
          />
        </div>


        <div className="form-group">
          <input
            type="date"
            className="form-control col-4"
            id="birthday"
            value={birthDay}
            onChange={(e) => setBirthDay(e.target.value)}
          />
        </div>


        <div className="form-group">
          <input
            type="email"
            className="form-control col-4"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter email"
          />
        </div>

      

        <div>
          <button onClick={(e) => saveCustomer(e)} className="btn btn-primary">
            Save
          </button>
        </div>
      </form>
      <hr />
      <Link to="/">Back to List</Link>
    </div>
  );
};
export default AddCustomer;
