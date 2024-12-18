import { Formik, Field, Form, ErrorMessage } from 'formik';
import SubmitButton from '../submitButton/SubmitButton';
import Svg from '../svg/Svg';

const InputBox = () => {

    const initialValue = {firstName:'',lastName:'', email:'', password:''};
    
    const onSubmit = (values) => {
        console.log(values)
    }

    const validation = (values) => {
    const errors = {}

    if(!values.firstName) {
        errors.firstName="First Name cannot be empty"
    }
    if (!values.lastName) {
        errors.lastName = "Last Name cannot be empty";
    } else if (!/^[A-Za-z]+$/.test(values.lastName)) {
        errors.lastName = "Last Name must contain only letters";
    }
    if(!values.email) {
        errors.email = 'Looks like this is not an email'
    } else if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(values.email)) {
        errors.email = 'Looks like this is not an email'
    }
    if (!values.password) {
        errors.password = "Password cannot be empty";
    } else if (!/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(values.password)) {
        errors.password = "Password must be at least 8 characters, include uppercase, lowercase, number, and special character";
    }
    
    return errors;
    }
  return (
    <div className='flex flex-col justify-center h-[560px] bg-white px-10 py-10 rounded-[10px]'>
      <Formik initialValues={initialValue} onSubmit={onSubmit} validate={validation}>
      {({ errors }) => (
          <Form className='flex flex-col justify-between h-full'>
            <div className='relative'>
              {Object.keys(errors).length > 0 && <Svg className='absolute top-4 right-2' />}
              <Field className='input-field' name='firstName' placeholder={Object.keys(errors).length > 0 ? '' : 'First Name'} />
              <ErrorMessage className='error-message' name='firstName' component='div' />
            </div>
            <div className='relative'>
              {Object.keys(errors).length > 0 && <Svg className='absolute top-4 right-2' />}  
              <Field className='input-field' name='lastName' placeholder={Object.keys(errors).length > 0 ? '' : 'Last Name'}/>
              <ErrorMessage className='error-message' name='lastName' component='div' />
            </div>
            <div className='relative'>
            {Object.keys(errors).length > 0 && (
                <>
                  <p className='text-[#FF7979] text-[14px] absolute left-8 top-4'>email@example/com</p>
                  <Svg className='absolute top-4 right-2' />
                </>
              )}
              <Field className='input-field' name='email' placeholder={Object.keys(errors).length > 0 ? '' : 'Email Address'} />
              <ErrorMessage className='error-message' name='email' component='div' />
            </div>
            <div className='relative'>
              {Object.keys(errors).length > 0 && <Svg className='absolute top-4 right-2' />}
              <Field className='input-field' type='password' name='password' placeholder={Object.keys(errors).length > 0 ? '' : 'Password'} />
              <ErrorMessage className='error-message' name='password' component='div' />
            </div>
            <SubmitButton />
          </Form>
        )}
      </Formik>
      <p className='mt-[8px] text-[11px] text-center'>
        By clicking the button, you are agreeing to our <span className='text-[#FF7979]'>Terms and Services</span>
      </p>
    </div>
  );
};

export default InputBox;