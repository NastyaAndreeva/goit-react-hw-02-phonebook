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
  number: '',
};

export class ContactForm extends Component {
  handleSubmit = (values, { resetForm }) => {
    this.props.onSubmit(values);
    resetForm();
  };
  render() {
    return (
      <Formik initialValues={initialValues} onSubmit={this.handleSubmit}>
        <Form autoComplete="off">
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
          <label htmlFor="number">
            Number
            <Field
              type="tel"
              name="number"
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
            />
          </label>
          <Button type="submit">Send</Button>
        </Form>
      </Formik>
    );
  }
}
