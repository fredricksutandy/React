import React, { useState } from 'react';
import { Copy } from '@carbon/icons-react';

function PasswordGenerator() {
  const [password, setPassword] = useState('');
  const [passwordLength, setPasswordLength] = useState(12);
  const [isCopied, setIsCopied] = useState(false);

  const generatePassword = () => {
    const charset = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_-+=<>?';
    let newPassword = '';

    for (let i = 0; i < passwordLength; i++) {
      const randomIndex = Math.floor(Math.random() * charset.length);
      newPassword += charset.charAt(randomIndex);
    }

    return newPassword;
  };

  const handleCopyClick = () => {
    // Create a temporary input element to copy the text
    const tempInput = document.createElement('input');
    tempInput.value = password;
    document.body.appendChild(tempInput);
    
    // Select and copy the text
    tempInput.select();
    document.execCommand('copy');
    
    // Remove the temporary input element
    document.body.removeChild(tempInput);

    // Set the copied state to true
    setIsCopied(true);

    // Reset the copied state after a short delay
    setTimeout(() => {
      setIsCopied(false);
    }, 1500);
  };

  const handleGenerateClick = () => {
    const newPassword = generatePassword();
    setPassword(newPassword);
  };

  return (
    <div className='w-full mt-14 sm:ml-64'>
        <div className='px-8 sm:px-4 pb-8 pt-6'>
            <h1 className="text-4xl font-bold text-black w-fit sm:text-5xl mb-8 w-auto">Todo's list</h1>
        <div className="mb-20 bg-white p-8 md:p-10 w-fit flex flex-col w-full w-100 overflow-y-auto">
          <p className='mb-2'>Password Length:</p>
          <div className="flex mb-10">
            <input
            type="number"
            value={passwordLength}
            className='w-full border-b border-gray-400 bg-gray-100 p-2 text-sm flex flex-1'
            onChange={(e) => setPasswordLength(e.target.value)}
            />
            <button className='w-auto py-3 px-5 bg-blue-600 text-white' onClick={handleGenerateClick}>Generate Password</button>
          </div>
          <p className='mb-2'>Generated Password:</p>
          {password && (
            <div className="relative">
              <p className='w-full bg-gray-100 p-2 text-sm flex flex-1'>{password}</p>
              <button
                onClick={handleCopyClick}
                className="absolute top-0 right-0 p-2 top-[50%] translate-y-[-50%] cursor-pointer"
              >
                {isCopied ? 'Copied to clipboard!' : <Copy />}
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default PasswordGenerator;

//i dont include the toggle vision/visibility on the password text because i wanted to focus on the validation function
//or im just lazy :v
//or not, here you go with the realistic approach
