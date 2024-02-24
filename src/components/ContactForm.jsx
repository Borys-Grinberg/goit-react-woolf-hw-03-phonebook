import React, { useState } from 'react';
import styles from './ContactForm.module.css';

const ContactForm = ({ addContact, contacts }) => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleNameChange = e => {
    setName(e.target.value);
  };

  const handleNumberChange = e => {
    setNumber(e.target.value);
  };

  const handleAddContact = () => {
    if (name.trim() !== '' && number.trim() !== '') {
      // Check if the name already exists in contacts
      const isNameExists = contacts.some(
        contact => contact.name.toLowerCase() === name.trim().toLowerCase()
      );

      if (isNameExists) {
        alert(
          `Contact with name "${name}" already exists! Please choose a different name.`
        );
      } else {
        addContact(name.trim(), number.trim());
        setName('');
        setNumber('');
      }
    } else {
      alert('Please enter both name and number.');
    }
  };

  return (
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
      <button onClick={handleAddContact}>Add Contact</button>
    </div>
  );
};

export default ContactForm;
