// import React, { useEffect } from 'react';
// import { useState } from 'react';
// import Notiflix from 'notiflix';
// import { nanoid } from 'nanoid';
import { ContactForm } from './ContactForm';
import { ContactList } from './ContactList';
import { Filter } from './Filter';
import { useDispatch, useSelector } from 'react-redux';
// import { formSelector } from 'store/form/selectorsForm';
// import { setName, setNumber } from 'store/form/formSlice';
import { appSelector } from 'store/app/selectorsApp';
import { setContacts } from 'store/app/appSlice';

export function App() {
  // const [contacts, setContacts] = useState([]);
  // const [filter, setFilter] = useState('');

  // const [name, setName] = useState('');
  // const [number, setNumber] = useState('');

  // const { name, number } = useSelector(formSelector);
  const { contacts, filter } = useSelector(appSelector);
  const dispatch = useDispatch();

  // useEffect(() => {
  //   const getContacts = JSON.parse(localStorage.getItem('contacts'));

  //   if (getContacts) setContacts(getContacts);
  // }, []);

  // useEffect(() => {
  //   if (name && number) {
  //     localStorage.setItem('contacts', JSON.stringify(contacts));
  //   }
  // }, [contacts, name, number]);

  // function changeFilter(evt) {
  //   // setFilter(evt.currentTarget.value);
  //   dispatch(setFilter(evt.currentTarget.value));
  // }

  function getFiltered() {
    const normalizedFilter = filter.toLowerCase();

    return contacts.filter(el =>
      el.name.toLowerCase().includes(normalizedFilter)
    );
  }

  function deleteContact(contactId) {
    // setContacts(prev => prev.filter(el => el.id !== contactId));
    dispatch(setContacts(contacts.filter(el => el.id !== contactId)));
    // setContacts(prev => prev.filter(el => el.id !== contactId));
  }

  return (
    <>
      <h1>Phonebook</h1>
      <p>React Hooks & Redux toolkit</p>
      <ContactForm />

      <h2>Contacts</h2>
      {/* <Filter value={filter} onChangeFilter={changeFilter} /> */}
      <Filter />
      <ContactList contacts={getFiltered()} onDeleteContact={deleteContact} />
    </>
  );
}
