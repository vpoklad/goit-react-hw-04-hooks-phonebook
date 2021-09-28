import { Component } from 'react';
import { v4 as uuid } from 'uuid';
import PropTypes from 'prop-types';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import s from './ContactsForm.module.css';

export default class ContactsForm extends Component {
  static propTypes = {
    addNewContact: PropTypes.func,
  };

  state = {
    name: '',
    number: '',
    contact: null,
  };
  resetForm = () => {
    this.setState({
      name: '',
      number: '',
    });
  };
  handleInput = e => {
    const name = e.target.name;
    this.setState({ [name]: e.target.value });
  };
  handleSubmit = e => {
    e.preventDefault();

    const { name, number } = this.state;
    const contact = {
      name,
      number,
      id: uuid(),
    };
    this.setState({ contact });
    this.resetForm();
    this.props.addNewContact(contact);
  };
  render() {
    const { handleSubmit, handleInput } = this;
    const { name, number } = this.state;
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
}
