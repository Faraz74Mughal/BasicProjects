import { useEffect, useState } from "react";
import AddContact from "./AddContact";
import "./App.css";
import ContactsList from "./ContactsList";
import Header from "./Header";
import { uuid } from "uuidv4";
import EditContact from "./EditContact";
import { Switch, Route, useHistory } from "react-router-dom";
import { DeleteContact } from "./DeleteContact";
import api from "../api/contacts";
/**
 *  Dummy Data
 */
// const dummy_data = [
//   { id: "1", name: "Faraz", email: "faraz@demo.com" },
//   { id: "2", name: "Zaeem", email: "zaeem@demo.com" },
//   { id: "3", name: "Awais", email: "awais@demo.com" },
// ];
const App = () => {
  const [contacts, setContacts] = useState([]);
  const [loader, setLoader] = useState(false);
  
  const urlHistory = useHistory();
  console.log(api.get());
  useEffect(() => {
    //setContacts(dummy_data);
    const getContacts = async () => {
      setLoader(true);
      const allContact = await api.get();
      if (allContact) {
        setLoader(false);
        setContacts(allContact);
      }
    };
    getContacts();
  }, []);

  const adddContactHandler = (contact) => {
    //const data = { id: uuid(), ...contact };
    //setContacts([...contacts, data]);
    const postContacts = async () => {
      setLoader(true);
      const allContact = await api.post({ id: uuid(), ...contact });
      if (allContact) {setContacts([...contacts, allContact]);setLoader(false);}
    };
    postContacts();
  };
  const editContactHandler = (data) => {
    if (data != null) {
      const putContact = async () => {
        setLoader(true);
        const allContact = await api.put(data.id, {
          name: data.name,
          email: data.email,
        });
        if (allContact) {
          const newContacts = contacts.filter((contact) => {
            if (contact.id === data.id) {
              contact.name = data.name;
              contact.email = data.email;
            }
            return contact;
          });
          setContacts(newContacts);
          setLoader(false);
        }
      };
      putContact();
    }
  };
  const deleteContactHandler = (id) => {
    const deleteContact = async () => {
      setLoader(true);
      await api.delete(id);
      const newContacts = contacts.filter((contact) => {
        if (contact.id !== id) {
          return contact;
        }
        return null;
      });
      setContacts(newContacts);
      setLoader(false);
    };
    deleteContact();
    urlHistory.push("/");
  };

  return (
    <>
      <Header />
      <div className="ui container">
        <Switch>
          <Route path="/add">
            <AddContact onAddContact={adddContactHandler} />
          </Route>
          <Route path="/edit/:id">
            <EditContact
              contacts={contacts}
              onEditContact={editContactHandler}
            />
          </Route>
          <Route path="/contact/delete/:id">
            <DeleteContact onDelteContact={deleteContactHandler} />
          </Route>
          <Route path="/" exact>
            <ContactsList contactsList={contacts} loader={loader} />
          </Route>
        </Switch>
      </div>
    </>
  );
};

export default App;
