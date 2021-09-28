import ContactItem from './ContactItem';
import s from './ContactList.module.css';
import PropTypes from 'prop-types';
export default function ContactList({ contacts, handleDelItem }) {
  return (
    <>
      <h2 className={s.title}>Contacts</h2>
      <ul>
        {contacts.map(contact => (
          <ContactItem
            key={contact.id}
            contact={contact}
            handleDelItem={handleDelItem}
          />
        ))}
      </ul>
    </>
  );
}

ContactList.propTypes = {
  contacts: PropTypes.array,
  handleDelItem: PropTypes.func,
};
