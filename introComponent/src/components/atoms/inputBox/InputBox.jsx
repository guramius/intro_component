import { Formik, Field, Form, ErrorMessage } from 'formik';
import SubmitButton from '../../submitButton/SubmitButton';

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
        errors.email = 'pivot pivot'
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
    <div className='bg-white px-10 py-10 rounded-[10px]'>
      <Formik initialValues={initialValue} onSubmit={onSubmit} validate={validation}>
        <Form>
          <div>
            <Field className='w-[460px] rounded-[5px] border border-[#DEDEDE] py-4 pl-[32px] placeholder:text-[14px]' name='firstName' placeholder='First Name'/>
            <ErrorMessage className='text-[#FF7979]' name='firstName' component='div' />
          </div>
          <div>
            <Field className='w-[460px] rounded-[5px] border border-[#DEDEDE] py-4 pl-[32px] placeholder:text-[14px]' name='lastName' placeholder='Last Name'/>
            <ErrorMessage className='text-[#FF7979]' name='lastName' component='div' />
          </div>
          <div>
            <Field className='w-[460px] rounded-[5px] border border-[#DEDEDE] py-4 pl-[32px] placeholder:text-[14px]' name='email' placeholder='Email Address '/>
            <ErrorMessage className='text-[#FF7979]' name='email' component='div' />
          </div> 
          <div>
            <Field className='w-[460px] rounded-[5px] border border-[#DEDEDE] py-4 pl-[32px] placeholder:text-[14px]' type='password' name='password' placeholder='Password'/>
            <ErrorMessage className='text-[#FF7979]' name='password' component='div' />
          </div> 
          <SubmitButton/>
        </Form>
      </Formik>
      <p>By clicking the button, you are agreeing to our Terms and Services</p>
    </div>
  )
}

export default InputBox