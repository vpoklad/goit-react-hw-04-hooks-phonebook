// import './App.css';

import { Component } from 'react/cjs/react.production.min';
// import { v4 as uuid } from 'uuid';

import ContactsForm from './components/ContactsForm/ContactsForm';
import ContactList from './components/ContactList/ContactList';
import Filter from './components/ContactList/Filter';

class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  onSubmitForm = contact => {
    const existContact = this.state.contacts.some(
      el => el.name.toLowerCase() === contact.name.toLowerCase(),
    );
    if (existContact) {
      return alert(`this contact already exists`);
    } else {
      this.setState(prev => {
        return {
          contacts: [...prev.contacts, contact],
        };
      });
    }
  };

  handlFilterChange = e => {
    this.setState({ filter: e.target.value });
  };
  filterContacts = () => {
    const { contacts, filter } = this.state;
    return contacts.filter(contact =>
      contact.name.toLocaleLowerCase().includes(filter.toLowerCase()),
    );
  };
  handleDelItem = id => {
    this.setState(prev => ({
      contacts: prev.contacts.filter(contact => contact.id !== id),
    }));
  };
  render() {
    const { onSubmitForm, handlFilterChange, filterContacts, handleDelItem } =
      this;
    return (
      <div className="app">
        <h1 className="appTitle">Phonebook</h1>
        <ContactsForm addNewContact={onSubmitForm} />
        <Filter value={this.state.filter} handlChange={handlFilterChange} />
        <ContactList
          contacts={filterContacts()}
          handleDelItem={handleDelItem}
        />
      </div>
    );
  }
}

export default App;
