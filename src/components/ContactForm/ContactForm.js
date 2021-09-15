import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { contactsSelectors, contactsOperations } from 'redux/contacts';
import Button from '../Button';
import { toast } from 'react-toastify';

import shortid from 'shortid';

import styles from './ContactForm.module.scss';

function ContactForm() {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const contacts = useSelector(contactsSelectors.getVisibleContactsSortByName);
  const dispatch = useDispatch();

  const nameInputId = shortid.generate();
  const numberInputId = shortid.generate();

  const handleChange = e => {
    const { name, value } = e.target;

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
  };

  const handleSubmit = e => {
    e.preventDefault();

    if (contacts.find(contact => contact.name === e.target.name.value)) {
      toast.warn(`${e.target.name.value} is already in contacts`);
      return;
    }

    if (contacts.find(contact => contact.number === e.target.number.value)) {
      toast.warn(`Number ${e.target.number.value} is already in contacts`);
      return;
    }

    if (
      (!name || e.target.name.value.trim() === '') &&
      (!number || e.target.number.value.trim() === '')
    ) {
      toast.warn(`Fill in the fields "Name" and "Number"`);
      return;
    }

    if (!name || e.target.name.value.trim() === '') {
      toast.warn(`Field "Name" is empty`);
      return;
    }

    if (!number || e.target.number.value.trim() === '') {
      toast.warn(`Field "Number" is empty`);
      return;
    }

    dispatch(contactsOperations.addContact(name, number));
    reset();
  };

  const reset = () => {
    setName('');
    setNumber('');
  };

  return (
    <form onSubmit={handleSubmit} className={styles.Form}>
      <label htmlFor={nameInputId} className={styles.Label}>
        <span className={styles.LabelText}>Name</span>
        <input
          id={nameInputId}
          type="text"
          name="name"
          value={name}
          onChange={handleChange}
          placeholder="Enter name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
          maxLength="40"
          className={styles.Input}
        />
      </label>

      <label htmlFor={numberInputId} className={styles.Label}>
        <span className={styles.LabelText}>Number</span>
        <input
          id={numberInputId}
          type="tel"
          name="number"
          value={number}
          onChange={handleChange}
          placeholder="Enter number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Номер телефона должен состоять из цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
          maxLength="18"
          className={styles.Input}
        />
      </label>

      <Button type="submit" contentBtn="Add contact" />
    </form>
  );
}

export default ContactForm;
