import { Link } from "react-router-dom";
import ContactsItem from "./ContactsItem";
const Loader = () => {
  return(
  <div style={{position:"relative",marginTop:"50px"}}>
    <div className="ui active inverted dimmer">
      <div className="ui large text loader">Loading</div>
    </div>
  </div>);
};
const ContactsList = (props) => {
  const contacts = props.contactsList.map((contact, index) => {
    return (
      <ContactsItem
        key={index}
        id={contact.id}
        name={contact.name}
        email={contact.email}
        onDeletedContact={props.onDeletedContact}
        onEditContact={props.onEditContact}
      />
    );
  });
  return (
    <>
      <div style={{ display: "flex", alignItems: "center" }}>
        <b style={{ fontSize: "20px" }}>Contats</b>
        <Link style={{ marginLeft: "auto" }} to="/add">
          <button className="ui button blue">Add Contact</button>
        </Link>
      </div>
      <hr />
      <div className="ui list">{props.loader ? <Loader/> :  contacts }</div>
    </>
  );
};

export default ContactsList;
