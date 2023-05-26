import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";

function Offer() {
  const [showDialog, setShowDialog] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    address: "",
    mobile: "",
  });
  const [errors, setErrors] = useState({});
  const handleClick = (e) => {
    e.preventDefault();
    const newErrors = {};
    if (!formData.name.trim()) {
      newErrors.name = "Please enter your name";
    }
    if (!formData.address.trim()) {
      newErrors.address = "Please enter your address";
    }
    if (!formData.mobile.trim()) {
      newErrors.mobile = "Please enter your mobile number";
    } else if (!/^\d{10}$/.test(formData.mobile.trim())) {
      newErrors.mobile = "Please enter a valid 10-digit mobile number";
    }
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
    } else {
      localStorage.setItem("name", formData.name.trim());
      localStorage.setItem("address", formData.address.trim());
      localStorage.setItem("mobile", formData.mobile.trim());
      setFormData({ name: "", address: "", mobile: "" });
      setErrors({});
      console.log(formData.name, formData.address, formData.mobile);
    }
  };

  const handleButtonClick = () => {
    setShowDialog(true);
  };

  const handleCloseDialog = () => {
    setShowDialog(false);
  };

  return (
    <div id="presentaion">
      <div className="pr-heading">
        <h1>
          A BIG <span>OFFER</span> FOR THIS SUMMER
        </h1>
        <p className="details">
          {" "}
          Are you ready to achieve your fitness goals? Now is the perfect time
          to join our gym! We are excited to offer our biggest promotion of the
          year – join now and receive 50% off your first three months!
        </p>
        <div className="pr-btns">
          <Link className="pr-btn" onClick={handleButtonClick}>
            {" "}
            JOIN NOW
          </Link>
        </div>
        {showDialog && (
          <div className="offer_div">
            <form>
              <div className="form-text">
                <p>
                  <button onClick={handleCloseDialog}>X</button>
                </p>{" "}
                <h5>JOIN US</h5> <br />
                <div className="user_box">
                  <label htmlFor="firstName" className="label_upper">
                    <span className="label-text">Name</span>
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    name="name"
                    placeholder="Enter Your Name"
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                  />
                  {errors.name && <div className="error">{errors.name}</div>}
                </div>
                <br />
                <div className="user_box">
                  <label htmlFor="lastName" className="label_upper">
                    <span className="label-text">Address</span>
                  </label>
                  {
                    <input
                      type="text"
                      id="text"
                      name="address"
                      placeholder="Enter Your Address"
                      value={formData.address}
                      onChange={(e) =>
                        setFormData({ ...formData, address: e.target.value })
                      }
                    />
                  }
                  {errors.address && (
                    <div className="error">{errors.address}</div>
                  )}
                </div>{" "}
                <br />
                <div className="user_box">
                  <label htmlFor="email" className="label_upper">
                    <span className="label-text">Mobile</span>
                  </label>{" "}
                  <input
                    type="text"
                    id="number"
                    name="mobile"
                    placeholder="Enter Your Mobile"
                    value={formData.mobile}
                    onChange={(e) =>
                      setFormData({ ...formData, mobile: e.target.value })
                    }
                  />
                  {errors.mobile && (
                    <div className="error">{errors.mobile}</div>
                  )}
                </div>{" "}
                <br /> <br />
                <button type="button" onClick={handleClick}>
                  Submit
                </button>
              </div>
            </form>
            <br />
            <br />
          </div>
        )}
      </div>
    </div>
  );
}

export default Offer;
