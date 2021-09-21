import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { changeFilter } from 'redux/contacts/contacts-actions';
import { contactsSelectors } from 'redux/contacts';
import styles from './Filter.module.scss';

const Filter = () => {
  const value = useSelector(contactsSelectors.getFilter);
  // const contacts = useSelector(contactsSelectors.getVisibleContactsSortByName);
  const dispatch = useDispatch();

  return (
    <>
      {
        <label className={styles.Label}>
          <span className={styles.LabelText}>Find contacts by name</span>
          <input
            initial="initial"
            animate="animate"
            exit="exit"
            transition="transition"
            type="text"
            name="name"
            value={value}
            onChange={event => dispatch(changeFilter(event.target.value))}
            placeholder="Enter name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
            required
            className={styles.Input}
          />
        </label>
      }
    </>
  );
};

export default Filter;
