import React from 'react';
import { Formik } from 'formik';
import { StyledForm, StyledInput, StyledLabel, StyledTextarea, Error } from './styled-components';
 
const GroupForm = (props) => (
  <Formik
    initialValues={{ title: props.title || '', text: props.text || '' }}
    validate={values => {
      const errors = {}
      if (!values.title) {
        errors.title = 'Required'
      } else if (values.title.length > 30) {
        errors.title = 'Must be 30 characters or less'
      }

      if (!values.text) {
        errors.text = 'Required'
      } else if (values.text.length > 300) {
        errors.text = 'Must be 300 characters or less'
      }
      return errors
    }}
    onSubmit={(values, { setSubmitting }) => {
      setTimeout(() => {
        alert(JSON.stringify(values, null, 2));
        setSubmitting(false);
      }, 400);
    }}
  >
    {({
      values,
      errors,
      touched,
      handleChange,
      handleBlur,
      handleSubmit,
      isSubmitting,
    }) => (
      <StyledForm onSubmit={handleSubmit} formColor={props.formColor}>
        <StyledLabel>
          <span>Title</span>
          <StyledInput
            type="text"
            name="title"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.title}
          />
          {errors.title && touched.title && <Error>{errors.title}</Error>}
        </StyledLabel>
        <StyledLabel>
          <span>Text</span>
          <StyledTextarea 
            name="text"
            onChange={handleChange}
            onBlur={handleBlur}sssss
            value={values.text}
          />
          {errors.text && touched.text && <Error>{errors.text}</Error>}
        </StyledLabel>
        <button type="submit" disabled={isSubmitting}>
          Submit
        </button>
      </StyledForm>
    )}
  </Formik>
 );
 
 export default GroupForm;