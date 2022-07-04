import { ContactForm } from 'components/ContactForm/ContactForm';
import { Component } from 'react';
import { nanoid } from 'nanoid';

export class App extends Component {
  state = {
    contacts: [],
  };

  addContact(data) {
    const contact = {
      id: nanoid(),
      data,
    };

    this.setState(state => ({
      contacts: [contact, ...state.contacts],
    }));
  }

  render() {
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
        </div>
      </div>
    );
  }
}
