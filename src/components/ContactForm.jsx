import React, { useState } from 'react';
import { nanoid } from 'nanoid';
import styles from './ContactForm.module.css';

const ContactForm = ({ contacts, setContacts }) => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const [filter, setFilter] = useState('');

  const handleNameChange = e => {
    setName(e.target.value);
  };
  const handleNumberChange = e => {
    setNumber(e.target.value);
  };
  const handleFilterChange = e => {
    setFilter(e.target.value.toLowerCase());
  };

  const addContact = () => {
    if (name.trim() !== '') {
      const newContact = {
        id: nanoid(),
        name: name.trim(),
        number: number.trim(),
      };
      setContacts([...contacts, newContact]);
      setName('');
      setNumber('');
    }
  };
  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter)
  );
  return (
    <div>
      <div className={styles.form}>
        <label>Name</label>
        <input
          className={styles.input}
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          value={name}
          onChange={handleNameChange}
        />
        <label>Number</label>
        <input
          className={styles.input}
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          value={number}
          onChange={handleNumberChange}
        />
        <button className={styles.button} onClick={addContact}>
          Add Contact
        </button>
      </div>
      <h2>Contacts</h2>
      <h3>Find contacts by name</h3>
      <input
        className={styles.input}
        type="text"
        placeholder="Search by name"
        value={filter}
        onChange={handleFilterChange}
      />
      <ul>
        {filteredContacts.map(contact => (
          <li key={contact.id}>
            {contact.name}: {contact.number}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ContactForm;
