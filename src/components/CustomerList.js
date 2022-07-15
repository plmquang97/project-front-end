import React, { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import customerService from "../services/customer.service";

const CustomerList = () => {
  const [customer, setCustomer] = useState([]);

  const init = () => {
    customerService
      .getAll()
      .then((response) => {
        console.log("Printing customer data", response.data);
        setCustomer(response.data);
      })
      .catch((error) => {
        console.log("Something went wrong", error);
      });
  };
  useEffect(() => {
    init();
  }, []);

  const handleDelete = (customerId) => {
    console.log("Printing id", customerId);
    customerService.remove(customerId).then((response) => {
      console.log("customer deleted successfully", response.data);
    });
  };
  return (
    <div className="container">
      <h3>List of Customer</h3>
      <hr />
      <div>
        <Link to="/addcustomer" className="btn btn-primary mb-2">
          Add Customer
        </Link>
        <table className="table table-bordered table-striped">
          <thead className="thead-dark">
            <tr>
              <th>Name</th>
              <th>PhoneNumber</th>
              <th>Email</th>
              <th>BirthDate</th>
              <th></th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {customer.map((customer) => (
              <tr key={customer.customerId}>
                <td>{customer.customerName}</td>
                <td>{customer.phoneNumber}</td>
                <td>{customer.email}</td>
                <td>{customer.birthDay}</td>
                <td>
                  <Link
                    className="btn btn-info"
                    to={`/customer/edit/${customer.customerId}`}
                  >
                    Update
                  </Link>
                </td>
                <td>
                <button
                    className="btn btn-danger ml-2"
                    type="button"
                    onClick={() => {
                      handleDelete(customer.customerId);
                    }}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
export default CustomerList;
