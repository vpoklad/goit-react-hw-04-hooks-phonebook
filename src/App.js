import { useState } from 'react';
import useLocalStorage from './hooks/useLocalStorage';
import ContactsForm from './components/ContactsForm/ContactsForm';
import ContactList from './components/ContactList/ContactList';
import Filter from './components/ContactList/Filter';

const defaultContats = [
  { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
];
function App() {
  const [contacts, setContacts] = useLocalStorage('contatcts', defaultContats);
  // const [contacts, setContacts] = useState(()=>defaultContats)
  const [filter, setFilter] = useState('');

  function onSubmitForm(contact) {
    const existContact = contacts.some(
      el => el.name.toLowerCase() === contact.name.toLowerCase(),
    );
    if (existContact) {
      return alert(`this contact already exists`);
    } else {
      setContacts(prev => [...prev, contact]);
    }
  }

  function handlFilterChange(e) {
    setFilter(e.target.value);
  }

  function filterContacts() {
    return contacts.filter(contact =>
      contact.name.toLocaleLowerCase().includes(filter.toLowerCase()),
    );
  }

  function handleDelItem(id) {
    const filteredItem = contacts.filter(contact => contact.id !== id);
    setContacts(filteredItem);
  }

  return (
    <div className="app">
      <h1 className="appTitle">Phonebook</h1>
      <ContactsForm addNewContact={onSubmitForm} />
      <Filter value={filter} handlChange={handlFilterChange} />
      <ContactList contacts={filterContacts()} handleDelItem={handleDelItem} />
    </div>
  );
}

export default App;
