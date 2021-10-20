import { useState } from 'react';
import { v4 as uuid } from 'uuid';
import PropTypes from 'prop-types';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import s from './ContactsForm.module.css';

export default function ContactsForm({ addNewContact }) {
  // static propTypes = {
  //   addNewContact: PropTypes.func,
  // };
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const resetForm = () => {
    setName('');
    setNumber('');
  };

  const handleInput = e => {
    const value = e.target.value;
    const name = e.target.name;
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setNumber(value);
        break;
      default:
        return;
    }
    // this.setState({ [name]: e.target.value });
  };
  const handleSubmit = e => {
    e.preventDefault();
    const newContact = {
      id: uuid(),
      name,
      number,
    };

    addNewContact(newContact);
    resetForm();
  };

  return (
    <form className={s.form} onSubmit={handleSubmit}>
      <label className={s.label} htmlFor="name">
        Name
        <input
          onChange={handleInput}
          id="name"
          type="text"
          name="name"
          value={name}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
          required
        />
      </label>

      <label htmlFor="number" className={s.label}>
        Number
        <input
          onChange={handleInput}
          id="number"
          value={number}
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
          required
        />
      </label>
      <Button
        variant="contained"
        type="submit"
        size="small"
        endIcon={<SendIcon />}
      >
        Add contact
      </Button>
      {/* <button type="submit">Add contact</button> */}
    </form>
  );
}

ContactsForm.propTypes = {
  addNewContact: PropTypes.func.isRequired,
};
