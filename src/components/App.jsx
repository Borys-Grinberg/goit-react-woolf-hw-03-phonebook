import React, { useState } from 'react';
import ContactForm from './ContactForm';
import styles from './App.module.css';

class App extends React.Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
    name: '',
    number: '',
  };

  render() {
    return (
      <div className={styles.container}>
        <h1>Phonebook</h1>
        <ContactForm
          contacts={this.state.contacts}
          setContacts={contacts => this.setState({ contacts })}
        />
      </div>
    );
  }
}

export default App;
