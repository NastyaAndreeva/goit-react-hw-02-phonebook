import { Component } from 'react';
import { nanoid } from 'nanoid';
import { FriendList } from 'components/FriendList';
import { ContactForm } from 'components/ContactForm';
import { Filter } from 'components/Filter';
import { Box } from 'components/Box';

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  dataValidation = data =>
    this.state.contacts.find(
      contact => contact.name.toLowerCase() === data.name.toLowerCase()
    );

  addContact = data => {
    const isAlreadyAdded = this.dataValidation(data);

    if (isAlreadyAdded) {
      alert(`${data.name} is already in your contacts`);
      return;
    }

    const contact = {
      id: nanoid(),
      name: data.name,
      number: data.number,
    };

    this.setState(state => ({
      contacts: [contact, ...state.contacts],
    }));
  };

  deleteContact = contactId => {
    this.setState(state => ({
      contacts: state.contacts.filter(contact => contact.id !== contactId),
    }));
  };

  changeFilter = e => {
    return this.setState({ filter: e.currentTarget.value });
  };

  getFilteredContacts = () => {
    const { contacts, filter } = this.state;
    const normilizedFilter = filter.toLowerCase();

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normilizedFilter)
    );
  };

  render() {
    const friendList = this.getFilteredContacts();

    return (
      <>
        <Box
          width="400px"
          margin="0 auto"
          display="flex"
          flexDirection="column"
          as="section"
        >
          <h1>Phonebook</h1>
          <ContactForm onSubmit={this.addContact} />

          <h2>Contacts</h2>
          <label htmlFor="filter">
            Find contacts by name
            <Filter value={this.state.filter} onChange={this.changeFilter} />
          </label>
          {friendList.length !== 0 && (
            <FriendList
              friends={friendList}
              onDeleteContact={this.deleteContact}
            />
          )}
        </Box>
      </>
    );
  }
}
