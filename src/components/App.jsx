import { useState, useEffect } from 'react';
import styles from '../components/App.module.css';
import ContactList from './ContactList/ContactList'
import PhoneBook from './PhoneBook.json';

function App() {
  const [userContact, setUserContact] = useState(() => {
    const savedContacts = JSON.parse(window.localStorage.getItem("userContact"));
    return savedContacts || PhoneBook;
  });

  useEffect(() => {
    window.localStorage.setItem("userContact", JSON.stringify(userContact));
  }, [userContact]);

  const deleteContact = (id) => {
    setUserContact(prevContacts => prevContacts.filter(contact => contact.id !== id));
  };

  return (
    <>
      <div className={styles.container}>
        <h1 className={styles.title}>Phonebook</h1>
        <ContactList userContact={userContact} deleteContact={deleteContact} />
      </div>
    </>
  );
}

export default App;
