import { nanoid } from 'nanoid';
import { Formik, Form, Field, ErrorMessage } from "formik";
import { useId } from "react";
import * as Yup from "yup";

import css from '../ContactForm/ContactForm.module.css';

const ContactSchema = Yup.object().shape({
    username: Yup.string()
    .min(3, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
    number: Yup.number()
    .min(7, "Too Short!")
    .required("Required!")
    .typeError("Please enter phone-number!"),
  });
  
  const initialValues = {
    username: "",
    number: "",
  };
  
  const ContactForm = ({ contactForm }) => {
    const nameFieldId = useId();
    const numberFieldId = useId();

  
    const handleSubmit = (values, actions) => {

      const newContact = {
        id: nanoid(),
        name: values.username,
        number: values.number,
      };

      contactForm(newContact);
      actions.resetForm();
    };
  
    return (
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={ContactSchema}
      >
        <Form className={css.form}>
          <div className={css.inputForm}>
            <label className={css.inputLabel} htmlFor={nameFieldId}>Name</label>
            <Field className={css.inputName} type="text" name='username' id={nameFieldId} />
            <ErrorMessage className={css.inputMessage}  name="username" component="span" />
          </div>
  
          <div className={css.inputForm}>
            <label className={css.inputLabel} htmlFor={numberFieldId}>Number</label>
            <Field className={css.inputName} type="tel" name="number" id={numberFieldId} />
            <ErrorMessage className={css.inputMessage} name="number" component="span" />
          </div>
  
  
          <button className={css.buttonForm} type="submit">Add contact</button>
        </Form>
      </Formik>
    );
  };

  export default ContactForm;