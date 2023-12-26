import React, { useState } from 'react';
import { Close, Checkmark } from '@carbon/icons-react';

function PasswordValidator() {
  const [password, setPassword] = useState('');
  
  // Define validation functions
  const isLengthValid = (input) => input.length >= 8;
  const hasUpperCase = (input) => /[A-Z]/.test(input);
  const hasLowerCase = (input) => /[a-z]/.test(input);
  const hasNumber = (input) => /[0-9]/.test(input);

  const isPasswordValid = (input) => {
    return isLengthValid(input) && hasUpperCase(input) && hasLowerCase(input) && hasNumber(input);
  };

  const handleChange = (e) => {
    const newPassword = e.target.value;
    setPassword(newPassword);
  };

  return (
    <div className='w-full mt-14 sm:ml-64'>
        <div className='px-8 sm:px-4 pb-8 pt-6'>
            <h1 className="text-4xl font-bold text-black w-fit sm:text-5xl mb-8 w-auto">Todo's list</h1>
        <div className="mb-20 bg-white p-8 md:p-10 w-fit flex flex-col w-full w-100 overflow-y-auto">
        <p className='mb-2'>Password:</p>
        <input
          type="text"
          value={password}
          className='w-full border-b border-gray-400 bg-gray-100 p-2 text-sm flex flex-1 max-w-[300px]'
          onChange={handleChange}
        />

      <div className="p-5 bg-zinc-100 w-full mt-4 max-w-[300px]">
        <p className="mb-2 text-sm text-zinc-500">Password requirement:</p>
        <div className='flex items-center content-center mt-2'>
          {isLengthValid(password) ? <Checkmark size="20" className="me-1 pt-1 text-green-600"/> : <Close size="20" className="me-1 pt-1 text-red-600" />}
          <p>Minimum 8 characters: </p>
        </div>
        <div className='flex items-center content-center mt-2'>
          {hasUpperCase(password) ? <Checkmark size="20" className="me-1 pt-1 text-green-600"/> : <Close size="20" className="me-1 pt-1 text-red-600" />}
          <p>At least one uppercase letter: </p>
        </div>
        <div className='flex items-center content-center mt-2'>
          {hasLowerCase(password) ? <Checkmark size="20" className="me-1 pt-1 text-green-600"/> : <Close size="20" className="me-1 pt-1 text-red-600" />}
          <p>At least one lowercase letter:</p>
        </div>
        <div className='flex items-center content-center mt-2'>
          {hasNumber(password) ? <Checkmark size="20" className="me-1 pt-1 text-green-600"/> : <Close size="20" className="me-1 pt-1 text-red-600" />}
          <p>At least one number: </p>
        </div>
      </div>

      {isPasswordValid(password) ? (
        <p className="text-center bg-green-200 text-green-900 text-start w-ful max-w-[300px] p-3 valid-password">
          Wow! Your password looks beautiful, just like you! {'<3'}
        </p>
      ) : (
        <p className="text-center bg-red-100 text-red-800 text-start w-ful max-w-[300px] p-3 invalid-password">
          Oops! Your password needs some love. Give it another shot! {':('}
        </p>
      )}

    </div>
    </div>
    </div>
  );
}

export default PasswordValidator;
