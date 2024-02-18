import React, { useState } from 'react';
import ContactForm from './ContactForm';
import styles from './App.module.css';

class App extends React.Component {
  state = {
    contacts: [],
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
