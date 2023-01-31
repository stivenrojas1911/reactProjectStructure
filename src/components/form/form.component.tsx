


import { useFormik } from 'formik';
import {UserModel} from '../../models/user.model'
import './form.component.scss'; 
import { useAppDispatch} from '../../hook.store';

import {userIsLoggeed} from '../../reducers/user/user.reducer';


//import validator helper
import {validatorFormHelper} from './../../helpers/validatorForm/valiador-form.helper'

import { useRef } from "react";


 export const FormComponent = () => {

  const formRef = useRef<HTMLFormElement>(null);

  const dispatch = useAppDispatch();

  const formik = useFormik({
     initialValues: {
       firstName: '',
       lastName: '',
       email: '',
     },
     
     onSubmit: (values:UserModel, {setSubmitting, resetForm}) => {
      dispatch(userIsLoggeed(values));
      setSubmitting(false);
      resetForm();
       alert(JSON.stringify(values, null, 2));
       formRef.current?.reset();
     },
     validationSchema: validatorFormHelper.basicForm
   });

  const handleReset = () => {
    formik.resetForm();
  }

   return (

    <div className="basic-form">

      <form onSubmit={formik.handleSubmit} ref={formRef}>

          <div className="basic-form__input-container">
              <input
                  type="text"
                  className="basic-form__input"
                  id="firstName"
                  name="firstName"
                  placeholder="Name"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
              />
              {formik.errors.firstName && formik.touched.firstName && <p className="basic-form__error-message">{formik.errors.firstName}</p>}
          </div>

          <div className="basic-form__input-container">
              <input 
                  type="text"
                  className="basic-form__input" 
                  id="lastName" 
                  name="lastName" 
                  placeholder="Lastname"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
              />
              {formik.errors.lastName && formik.touched.lastName && <p className="basic-form__error-message">{formik.errors.lastName}</p>}
          </div>

          <div className="basic-form__input-container">
              <input 
                  type="text"
                  className="basic-form__input" 
                  id="email" 
                  name="email" 
                  placeholder="Email"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
              />
              {formik.errors.email && formik.touched.email && <p className="basic-form__error-message">{formik.errors.email}</p>}
              
          </div>

         

        
          <button type="submit" className="basic-form__button">Enviar</button>
          <button type="reset" className="basic-form__button--reset" onClick={handleReset}>Reset</button>
          

      </form>
        
    </div>
   );
 };