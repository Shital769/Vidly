import React from "react";
// here i am suig rest operator to combine type, value, onChnage which will combine all these props altogether
const Input = ({ name, label, error, ...rest }) => {
  return (
    <div className="form-group">
      <label htmlFor={name}>{label}</label>
      {/* now i will use spread operator to call the props we have put in the rest */}
      <input {...rest} name={name} id={name} className="form-control" />
      {error && <div className="alert alert-danger">{error}</div>}
    </div>
  );
};

export default Input;
