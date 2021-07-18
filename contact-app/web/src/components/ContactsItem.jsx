import { Link } from "react-router-dom";
import user from "../images/user.png";
const ContactsItem = (props) => {
  return (
    <>
      <div className="item">
        <img className="ui avatar image" src={user} alt="user" />
        <div className="content">
          <a href="#/" className="header">
            {props.name}
          </a>
          <div className="description">{props.email}</div>
        </div>
        <div style={{ float: "right" }}>
          <Link to={`/edit/${props.id}`}>
            <i
              className="edit alternate outline red icon"
              style={{ cursor: "pointer" }}
            ></i>
          </Link>
          <Link to={`/contact/delete/${props.id}`}>
            <i
              className="trash alternate outline red icon"
              style={{ cursor: "pointer" }}
            ></i>
          </Link>
        </div>
      </div>
      <div className="ui section divider" style={{ margin: "0px" }}></div>
    </>
  );
};

export default ContactsItem;
