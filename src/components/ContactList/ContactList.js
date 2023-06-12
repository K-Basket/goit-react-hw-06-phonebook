// import PropTypes from 'prop-types';
import css from './ContactList.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { updateContacts } from 'store/app/appSlice';
import { appSelector } from 'store/app/selectorsApp';

export function ContactList() {
  const { contacts, filter } = useSelector(appSelector);
  const dispatch = useDispatch();

  function getFiltered() {
    const normalizedFilter = filter.toLowerCase();

    return contacts.filter(el =>
      el.name.toLowerCase().includes(normalizedFilter)
    );
  }

  function deleteContact(contactId) {
    const result = contacts.filter(el => el.id !== contactId);
    return dispatch(updateContacts(result));
  }

  return (
    <ul>
      {getFiltered().map(({ id, name, number }) => (
        <li key={id}>
          <div className={css.item}>
            <p>
              <span>{name}</span>
              <span>: {number}</span>
            </p>

            <button onClick={() => deleteContact(id)}>Delete</button>
          </div>
        </li>
      ))}

      {/* {getFiltered().map(({ id, name, number }) => (
        <li key={id}>
          <div className={css.item}>
            <p>
              <span>{name}</span>
              <span>: {number}</span>
            </p>

            <button onClick={() => deleteContact(id)}>Delete</button>
          </div>
        </li>
      ))} */}
    </ul>
  );
}

// ContactList.propTypes = {
//   contacts: PropTypes.arrayOf(
//     PropTypes.shape({
//       name: PropTypes.string.isRequired,
//       number: PropTypes.string.isRequired,
//     }).isRequired
//   ).isRequired,
//   onDeleteContact: PropTypes.func.isRequired,
// };
