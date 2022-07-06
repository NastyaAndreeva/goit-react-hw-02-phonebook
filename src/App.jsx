import { ContactForm } from 'components/ContactForm/ContactForm';
import { Component } from 'react';
import { nanoid } from 'nanoid';
import { FriendListProcessed } from 'components/FriendList/FriendList';

export class App extends Component {
  state = {
    contacts: [],
  };

  addContact = data => {
    const contact = {
      id: nanoid(),
      name: data.name,
      number: data.number,
    };

    this.setState(state => ({
      contacts: [contact, ...state.contacts],
    }));
  };

  render() {
    const friendList = this.state.contacts;

    return (
      <div
        style={{
          height: '100vh',
          fontSize: 40,
          color: '#010101',
        }}
      >
        <h2>Contact Form</h2>
        <div>
          <ContactForm onSubmit={this.addContact} />
          {friendList.length !== 0 && (
            <FriendListProcessed friends={friendList} />
          )}
        </div>
      </div>
    );
  }
}
