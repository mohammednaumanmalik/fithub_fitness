import React from "react";
import { useState } from "react";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",

    mobile: "",
    message: "",
  });
  const [errors, setErrors] = useState({});

  const showError = (e) => {
    e.preventDefault();
    e.preventDefault();
    const newErrors = {};
    if (!formData.name.trim()) {
      newErrors.name = "Please enter your name";
    }

    if (!formData.mobile.trim()) {
      newErrors.mobile = "Please enter your mobile number";
    } else if (!/^\d{10}$/.test(formData.mobile.trim())) {
      newErrors.mobile = "Please enter a valid 10-digit mobile number";
    }
    if (!formData.message.trim()) {
      newErrors.message = "please enter message";
    }
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
    } else {
      localStorage.setItem("name", formData.name.trim());
      localStorage.setItem("mobile", formData.mobile.trim());
      localStorage.setItem("message", formData.message.trim());
      setFormData({ name: "", mobile: "", message: "" });
      setErrors({});
      console.log(formData.name, formData.mobile, formData.message);
    }
  };

  //seterror("required feilds");

  return (
    <div id="contact">
      <h1>CONTACT US</h1>
      <form action="">
        <input
          type="text"
          placeholder="Full Name"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
        />
        <p className="" style={{ color: "red", fontSize: 11 }}>
          {" "}
          {errors.name && <div className="error">{errors.name}</div>}
        </p>
        <input
          type="mobile"
          placeholder="Type Your Mobile Number"
          value={formData.mobile}
          onChange={(e) => setFormData({ ...formData, mobile: e.target.value })}
        />
        <p className="" style={{ color: "red", fontSize: 11 }}>
          {" "}
          {errors.mobile && <div className="error">{errors.mobile}</div>}
        </p>
        <textarea
          name="message"
          id=""
          cols="30"
          rows="10"
          placeholder="Write Here....."
          value={formData.message}
          onChange={(e) =>
            setFormData({ ...formData, message: e.target.value })
          }
        ></textarea>
        <p className="" style={{ color: "red", fontSize: 11 }}>
          {" "}
          {errors.message && <div className="error">{errors.message}</div>}
        </p>

        <button type="submit" onClick={showError}>
          {" "}
          SUBMIT
        </button>
      </form>
    </div>
  );
}

export default Contact;
