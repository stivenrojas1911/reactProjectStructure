


import { useFormik } from 'formik';
import {UserModel} from '../../models/user.model'
import './form.component.scss'; 
import { useAppDispatch} from '../../hook.store';

import {userIsLoggeed} from '../../reducers/user/user.reducer';
 // A custom validation function. This must return an object
 // which keys are symmetrical to our values/initialValues

const validate = (values:UserModel) => {
   const errors:any={}
 
   if (!values.firstName) {
     errors.firstName = 'Required';
   } else if (values.firstName.length > 15) {
     errors.firstName = 'Must be 15 characters or less';
   }
 
   if (!values.lastName) {
     errors.lastName = 'Required';
   } else if (values.lastName.length > 20) {
     errors.lastName = 'Must be 20 characters or less';
   }
 
   if (!values.email) {
     errors.email = 'Required';
   } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
     errors.email = 'Invalid email address';
   }
 
   return errors;
 };
 
 export const FormComponent = () => {

  const dispatch = useAppDispatch();
   const formik = useFormik({
     initialValues: {
       firstName: '',
       lastName: '',
       email: '',
     },
     validate,
     onSubmit: (values:UserModel) => {
      dispatch(userIsLoggeed(values))
       alert(JSON.stringify(values, null, 2));
     },
   });
   return (
     <form onSubmit={formik.handleSubmit}>
       <label htmlFor="firstName">First Name</label>
       <input
         id="firstName"
         name="firstName"
         type="text"
         onChange={formik.handleChange}
         onBlur={formik.handleBlur}
         value={formik.values.firstName}
       />
       {formik.errors.firstName && formik.touched.firstName && <p className="basic-form__error-message">{formik.errors.firstName}</p>}
 
       <label htmlFor="lastName">Last Name</label>
       <input
         id="lastName"
         name="lastName"
         type="text"
         onChange={formik.handleChange}
         onBlur={formik.handleBlur}
         value={formik.values.lastName}
       />
        {formik.errors.lastName && formik.touched.lastName && <p className="basic-form__error-message">{formik.errors.lastName}</p>}
 
       <label htmlFor="email">Email Address</label>
       <input
         id="email"
         name="email"
         type="email"
         onChange={formik.handleChange}
         onBlur={formik.handleBlur}
         value={formik.values.email}
       />
        {formik.errors.email && formik.touched.email && <p className="basic-form__error-message">{formik.errors.email}</p>}
 
       <button type="submit">Submit</button>
     </form>
   );
 };