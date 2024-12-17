import { Formik, Field, Form, ErrorMessage } from 'formik';
import SubmitButton from '../submitButton/SubmitButton';

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
        <Form className='flex flex-col justify-between h-full'>
          <div className='relative'>
            <Field className='w-full py-4 pl-[32px] rounded-[5px] border border-[#DEDEDE] placeholder:text-[14px] focus:border-[#5E54A4] outline-none' name='firstName' placeholder='First Name'/>
            <ErrorMessage className='absolute right-0 text-[#FF7979] text-[11px]' name='firstName' component='div' />
          </div>
          <div className='relative'>
            <Field className='w-full py-4 pl-[32px] rounded-[5px] border border-[#DEDEDE] placeholder:text-[14px] focus:border-[#5E54A4] outline-none' name='lastName' placeholder='Last Name'/>
            <ErrorMessage className='absolute right-0 text-[#FF7979] text-[11px]' name='lastName' component='div' />
          </div> 
          <div className='relative'>
            <Field className='w-full py-4 pl-[32px] rounded-[5px] border border-[#DEDEDE] placeholder:text-[14px] focus:border-[#5E54A4] outline-none' name='email' placeholder='Email Address '/>
            <ErrorMessage className='absolute right-0 text-[#FF7979] text-[11px]' name='email' component='div' />
          </div> 
          <div className='relative'>
            <Field className='w-full py-4 pl-[32px] rounded-[5px] border border-[#DEDEDE] placeholder:text-[14px] focus:border-[#5E54A4] outline-none' type='password' name='password' placeholder='Password'/>
            <ErrorMessage className='absolute right-0 text-[#FF7979] text-[11px]' name='password' component='div' />
          </div> 
          <SubmitButton/>
        </Form>
      </Formik>
      <p className='mt-[8px] text-[11px] text-center'>By clicking the button, you are agreeing to our <span className='text-[#FF7979]'>Terms and Services</span> </p>
    </div>
  )
}

export default InputBox