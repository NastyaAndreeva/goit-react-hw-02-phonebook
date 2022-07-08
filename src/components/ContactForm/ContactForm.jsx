import { Formik, Form, Field, ErrorMessage } from 'formik';
import { Component } from 'react';
import styled from 'styled-components';
import * as Yup from 'yup';
import PropTypes from 'prop-types';
import { Box } from 'components/Box';
import { Button } from 'ui/Button';

const validationSchema = Yup.object({
  name: Yup.string().max(16).required('Required'),
  number: Yup.number().positive().required('Required'),
});

const Label = styled.label`
  margin-bottom: 10px;
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
      <Formik
        initialValues={initialValues}
        onSubmit={this.handleSubmit}
        validationSchema={validationSchema}
      >
        <Form autoComplete="off">
          <Box
            width="400px"
            margin="0 auto"
            display="flex"
            flexDirection="column"
            as="section"
          >
            <Label htmlFor="name">
              Name
              <Field type="text" name="name" />
              <ErrorMessage name="name" component="p" />
            </Label>
            <Label htmlFor="number">
              Number
              <Field type="tel" name="number" />
              <ErrorMessage name="number" component="p" />
            </Label>
            <Button type="submit">Add contact</Button>
          </Box>
        </Form>
      </Formik>
    );
  }
}

ContactForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
