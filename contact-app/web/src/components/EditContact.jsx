import { useEffect, useState } from "react";
import { Link, useHistory, useParams } from "react-router-dom";
// const [contact, setContact] = useState({});
//   const getEditId = (ids) => {
//     if (ids != null) {
//       const result = contacts.find(({ id }) => id === ids);
//       setContact(result);
//     }
//   };
const EditContact = (props) => {
  const urlHistory = useHistory();
  const cid = useParams().id;
  console.log(cid)
  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [email, setEamil] = useState("");
  useEffect(() => {
    if (props.contacts.length > 0 && cid != null) {
      const contact = props.contacts.find(({ id }) => id === cid);
      if (contact !== undefined) {
        console.log(contact);
        setId(contact.id);
        setName(contact.name);
        setEamil(contact.email);
      }
    } else {
      urlHistory.push("/");
    }
  }, [props.contacts, cid, urlHistory]);
  const contactSubmitHanlder = (e) => {
    e.preventDefault();
    if (name.trim().length <= 0 || email.trim().length <= 0) {
      alert("All field is req");
      return;
    }
    props.onEditContact({ id, name, email });
    setName("");
    setEamil("");
    urlHistory.push("/");
  };
  return (
    <>
      <h2>Edit Contact</h2>
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
        Update <i className="arrow alternate circle up outline icon"></i>
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

export default EditContact;
