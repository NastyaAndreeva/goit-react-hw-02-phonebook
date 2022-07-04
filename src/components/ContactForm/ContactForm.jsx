import { Formik, Form, Field } from 'formik';
import { Component } from 'react';
import styled from 'styled-components';

const Button = styled.button`
  border: none;
  outline: none;
  padding: 10px;
  display: block;
  margin-top: 10px;
  border-radius: 10px;
  background-color: #061818;
  color: #fff;
`;

const initialValues = {
  name: '',
};

export class ContactForm extends Component {
  handleSubmit = e => {
    e.preventDefault();
    this.props.onSubmit(initialValues.name);
  };
  render() {
    return (
      <Formik initialValues={initialValues}>
        <Form onSubmit={this.handleSubmit}>
          <label htmlFor="name">
            Name
            <Field
              type="text"
              name="name"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
            />
          </label>
          <Button type="submit">Send</Button>
        </Form>
      </Formik>
    );
  }
}
