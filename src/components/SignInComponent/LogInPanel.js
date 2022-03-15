import React, { useState } from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";
import { faCheckSquare, faCoffee } from '@fortawesome/fontawesome-free-solid'
import * as retaionConstant from "../../constants/Retaion";
import validator from 'validator'

const eye = <FontAwesomeIcon icon={faEye} />;
const user = <FontAwesomeIcon icon={faCoffee } />

export const LogInPanel = (props) => {
  const [passwordShown, setPasswordShown] = useState(false);
  const [errorMessage, setErrorMessage] = useState('')

  const togglePasswordVisiblity = () => {
    setPasswordShown(passwordShown ? false : true);
  };

  const validate = (value) => {
    var password = "password"
    if (value !== password){
      setErrorMessage('Is Strong Password')
    }
  } 
  const isLoggedIn = props.isLoggedIn;

  return (
    <div>
      <div>
        <p class="mt-16 ml-20 text-left pl-8 text-2xl .font-semibold ">{props.welcome}</p>
        <p class="mt-4 ml-20 text-left pl-8 text-lg .font-normal">{props.logInMsg}</p>

        {isLoggedIn ? (

        <div class=" mt-16 rounded-md shadow-sm -space-y-px">
          <div className='flex w-full ml-28'>
            <input id="username" name="username" type="username" autocomplete="username" required class="appearance-none rounded-none w-2/3 px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="👤 Full Name" />
            {/* <i className='absolute ml-96 pt-2'>{user}</i> */}
          </div>

          <div className='flex w-full ml-28 '>
            <input id="username" name="username" type="username" autocomplete="username" required class="appearance-none rounded-none mt-4 w-2/3 px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="👤 Username" />
            {/* <i className='absolute ml-96 pt-2'>{user}</i> */}
          </div> 
          <div className='flex w-full ml-28'>
            <input id="password" name="password" type={passwordShown ? "text" : "password"} onChange={(e) => validate(e.target.value)} autocomplete="current-password" pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}" required class="appearance-none rounded-none mt-4 w-2/3 px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="🔒  Password" />
            <i className='absolute ml-96 pt-2 mt-4' onClick={togglePasswordVisiblity}>{eye}</i>
          </div>
          {/* <div className='flex ml-28 text-rose-600'>{errorMessage}</div> */}
          <div>
          <button type="submit" class="group relative ml-4 w-2/3 mt-12 justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-400 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
            {props.register}
          </button>
        </div>
        </div> ) : (


        <div class=" mt-16 rounded-md shadow-sm -space-y-px">
          <div className='flex w-full ml-28 '>
            <input id="username" name="username" type="username" autocomplete="username" required class="appearance-none rounded-none mt-4 w-2/3 px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="👤 Username" />
            {/* <i className='absolute ml-96 pt-2'>{user}</i> */}
          </div> 
          <div className='flex w-full ml-28'>
            <input id="password" name="password" type={passwordShown ? "text" : "password"} onChange={(e) => validate(e.target.value)} autocomplete="current-password" pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}" required class="appearance-none rounded-none mt-4 w-2/3 px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="🔒  Password" />
            <i className='absolute ml-96 pt-2 mt-4' onClick={togglePasswordVisiblity}>{eye}</i>
          </div>
          <div className='flex ml-28 text-rose-600'>{errorMessage}</div>

          <div>
          <button type="submit" class="group relative ml-4 w-2/3 mt-12 justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-400 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
            {props.logIn}
          </button>
        </div>
        </div>

        )}


        

      </div>

      <div class="text-center mt-12">
        <span>
          {props.newUser} &nbsp;
        </span>
        <a href="#" class="font-light text-md text-blue-500 underline font-semibold hover:text-indigo-800">{props.registerMsg}</a>
      </div>
    </div>
  )
}

