import { useState } from "react";
import {Link, useHistory} from 'react-router-dom'
const AddContact = (props) => {
    const urlHistory = useHistory();
  const [name, setName] = useState("");
  const [email, setEamil] = useState("");
  const contactSubmitHanlder = (e) => {
    e.preventDefault();
    if (name.trim().length <= 0 || email.trim().length <= 0) {
      alert("All field is req");
      return;
    }
    props.onAddContact({ name, email });
    setName("");
    setEamil("");
    urlHistory.push("/");
  };
  return (
    <>
      <div>
        <h2>Add Contact</h2>
      </div>
      <hr />

      <form className="ui form" onSubmit={contactSubmitHanlder}>
        <div className="field">
          <label>Name</label>
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
        </div>
        <div className="field">
          <label>Last Name</label>
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={email}
            onChange={(e) => {
              setEamil(e.target.value);
            }}
          />
        </div>
        <button className="ui button green" type="submit">
          Add
        </button>
        <Link to="/">
          <button className="ui button blue">
            <i className="arrow alternate circle left outline icon"></i> Back
          </button>
        </Link>
      </form>
    </>
  );
};

export default AddContact;
