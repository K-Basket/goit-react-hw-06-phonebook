// import React, { useState } from 'react';
import Notiflix from 'notiflix';
import css from './ContactForm.module.css';
// import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { setContacts } from 'store/app/appSlice';
import { setName, setNumber } from 'store/form/formSlice';
import { formSelector } from 'store/form/selectorsForm';
import { appSelector } from 'store/app/selectorsApp';

export function ContactForm() {
  // const [name, setName] = useState('');
  // const [number, setNumber] = useState('');

  const { name, number } = useSelector(formSelector);
  const { contacts } = useSelector(appSelector);
  const dispatch = useDispatch();

  function handleChange(evt) {
    if (evt.target.name === 'name') dispatch(setName(evt.target.value));
    if (evt.target.name === 'number') dispatch(setNumber(evt.target.value));
  }

  function handleSubmit(evt) {
    evt.preventDefault();

    const normalizedName = name.toLowerCase();
    const normalizedNumber = number.toLowerCase();

    if (
      contacts.some(el => el.name.toLowerCase() === normalizedName) ||
      contacts.some(el => el.number.toLowerCase() === normalizedNumber)
    ) {
      Notiflix.Notify.failure(`${name} is already in contacts`);

      return;
    }

    // запись данных в state contacts
    dispatch(setContacts(name, number));
    dispatch(setName(''));
    dispatch(setNumber(''));
  }

  return (
    <form className={css.form} onSubmit={handleSubmit}>
      <label className={css.label}>
        Name
        <input
          className={css.input}
          type="text"
          name="name"
          value={name}
          onChange={handleChange}
          // pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </label>

      <label className={css.label}>
        Number
        <input
          className={css.input}
          type="tel"
          name="number"
          value={number}
          onChange={handleChange}
          // pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
      </label>

      <button className={css.btn} type="submit">
        Add contact
      </button>
    </form>
  );
}

// ContactForm.propTypes = {
//   onSubmitData: PropTypes.func.isRequired,
// };