import propTypes from 'prop-types';
// import css from 'ContactList.module.css';

export const ContactList = ({ contacts, handleDelete }) => (
  <div>
    <ul>
      {contacts.map((contact, id) => (
        <li key={id}>
          {contact.name}: {contact.number}
          <button type="button" onClick={() => handleDelete(contact.id)}>
            Delete
          </button>
        </li>
      ))}
    </ul>
  </div>
);

ContactList.propTypes = {
  contacts: propTypes.arrayOf(
    propTypes.exact({
      id: propTypes.string.isRequired,
      name: propTypes.string.isRequired,
      number: propTypes.string.isRequired,
    })
  ),
  handleDelete: propTypes.func.isRequired,
};