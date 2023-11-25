import { useState } from "react";
import { PropTypes } from "prop-types";
import validate from "../../functions/validate";

Step1.propTypes = {
  setCanNavigate: PropTypes.func,
};

export default function Step1({ setCanNavigate }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [errors, setErrors] = useState({ name: "", email: "", phone: "" });

  const handleInputChange = (e, changeFunc, field) => {
    changeFunc(e.target.value);
    errors[field] = validate(field, e.target.value);
    setErrors({ ...errors });

    if (Object.keys(errors).length === 0) {
      setCanNavigate(false);
    } else {
      setCanNavigate(true);
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
  };

  return (
    <div className="personal-info">
      <h1>Personal info</h1>
      <p>Please provide your name, email address, and phone number.</p>
      <form id="personal-info-form" onSubmit={handleSubmit} noValidate>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          className="text-input"
          id="name"
          name="name"
          placeholder="e.g. Stephen King"
          required
          value={name}
          onChange={e => handleInputChange(e, setName, "name")}
          autoComplete="off"
          spellCheck="off"
        />
        {errors.name && <p className="error name-error">{errors.name}</p>}
        <label htmlFor="email">Email Address</label>
        <input
          type="email"
          className="text-input"
          id="email"
          name="email"
          placeholder="e.g. stephenking@lorem.com"
          required
          value={email}
          onChange={e => handleInputChange(e, setEmail, "email")}
          autoComplete="off"
          spellCheck="off"
        />
        {errors.email && <p className="error email-error">{errors.email}</p>}
        <label htmlFor="phone">Phone Number</label>
        <input
          type="tel"
          className="text-input"
          id="phone"
          name="phone"
          placeholder="e.g. +1 234 567 8900"
          required
          minLength={10}
          maxLength={10}
          value={phone}
          onChange={e => handleInputChange(e, setPhone, "phone")}
          autoComplete="off"
        />
        {errors.phone && <p className="error phone-error">{errors.phone}</p>}
      </form>
    </div>
  );
}
