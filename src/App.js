import Container from './components/Container/Container';

import PhoneBookList from './components/PhoneBook/PhoneBookList';
import PhoneBookForm from './components/PhoneBook/PhoneBookForm';
import PhonebookFilter from './components/PhoneBook/PhoneBookFilter';
import filterContacts from './helpers/filterContacts';
import { Component } from 'react';
import shortId from 'shortid';

class App extends Component {
  state = {
    contacts: [],
    name: '',
    number: '',
    filter: '',
  };

  handleSetUserInfo = e => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleAddContact = e => {
    e.preventDefault();
    if (this.state.contacts.some(el => el.name === this.state.name)) {
      alert(` ${this.state.name} is already in contacts!`);
      return;
    }
    const contact = {
      name: this.state.name,
      number: this.state.number,
      id: shortId.generate(),
    };
    this.setState(prev => ({
      contacts: [...prev.contacts, contact],
      name: '',
      number: '',
    }));
  };

  handleDeleteContact = e => {
    this.setState({
      contacts: this.state.contacts.filter(el => el.id !== e.target.id),
    });
  };

  handleChangeFilter = e => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  render() {
    const contacts = filterContacts(this.state.contacts, this.state.filter);
    return (
      <Container>
        <h1>Phonebook</h1>
        <PhoneBookForm
          name={this.state.name}
          number={this.state.number}
          onAddContact={this.handleAddContact}
          onSetUserInfo={this.handleSetUserInfo}
        />
        <h2>Contacts</h2>
        <PhonebookFilter
          filterValue={this.state.filter}
          onSetFilter={this.handleChangeFilter}
        />
        <PhoneBookList
          onDeleteContact={this.handleDeleteContact}
          contacts={contacts}
        />
      </Container>
    );
  }
}

export default App;
