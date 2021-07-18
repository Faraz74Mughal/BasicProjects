import { Link, useParams } from "react-router-dom";

export const DeleteContact = (props) => {
const prams=useParams()
  return (
      <div style={{display:"flex",justifyContent:"center"}}>
    <div className="ui card" style={{width:"80%"}}>
      <div className="content" style={{background:"#db2828"}}>
        <div className="header" style={{background:"#db2828",color:"white"}}>Contact Delete</div>
      </div>
      <div className="content">
        <h4 className="ui small feed">Are you sure you want to delte this contact?</h4>
      </div>
      <div className="extra content">
        <button className="ui button red" onClick={()=>{props.onDelteContact(prams.id)}}>Yes</button>
        <Link to="/">
        <button className="ui button green">No</button>
        </Link>
      </div>
    </div>
    </div>
  );
};
