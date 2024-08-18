import css from '../Contact/Contact.module.css';

function Contact({ name, number, deleteContact, id }) {
  return (
    <li className={css.contactItem}>
      <div>
        <p className={css.contactName}>{name}</p>
        <p className={css.contactNumber}>{number}</p>
      </div>
      <button onClick={() => deleteContact(id)} className={css.deleteButton}>Delete</button>
    </li>
  )
}

export default Contact;
 