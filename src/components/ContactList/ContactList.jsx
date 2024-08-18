import Contact from '../Contact/Contact';
import css from '../ContactList/ContactList.module.css';

const ContactList = ({ userContact, deleteContact }) => {
  return (
    <ul className={css.contactCont}>
      {userContact.map(({ id, name, number }) => (
        <Contact
          key={id}
          id={id}
          name={name}
          number={number}
          deleteContact={deleteContact}
        />
      ))}
    </ul>
  );
};

export default ContactList;
