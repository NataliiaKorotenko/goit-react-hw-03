import { useState, useEffect } from 'react';
import styles from '../components/App.module.css';
import SearchBox from './SearchBox/SearchBox'
import ContactList from './ContactList/ContactList'
import PhoneBook from './PhoneBook.json';

function App() {
  const [userContact, setUserContact] = useState(() => {
    const savedContacts = JSON.parse(window.localStorage.getItem("userContact"));
    return savedContacts || PhoneBook;
  });

  const [ searchValue, setSearchValue ] = useState("");

  useEffect(() => {
    window.localStorage.setItem("userContact", JSON.stringify(userContact));
  }, [userContact]);

  const filteredContacts = userContact.filter(contact =>
    contact.name.toLowerCase().includes(searchValue.toLowerCase())
  );

  const deleteContact = (id) => {
    setUserContact(prevContacts => prevContacts.filter(contact => contact.id !== id));
  };

  return (
    <>
      <div className={styles.container}>
        <h1 className={styles.title}>Phonebook</h1>
        <SearchBox searchValue={searchValue} setSearchValue={setSearchValue} />
  
        <ContactList userContact={filteredContacts} deleteContact={deleteContact} />
      </div>
    </>
  );
}

export default App;
