import React, { useState } from 'react'
import LogInPageImg from '../../images/LogInPage.jpg';
import TCSReTaionImg from '../../images/TCS_ReTaion.jpg';
import { LogInPanel } from './LogInPanel';
import * as retaionConstant from "../../constants/Retaion";


export const SignInComponent = () => {
   
  const [updateSignUp, setUpdateSignUp] = useState(false);
  const handleChangeSignIn = () => {
    setUpdateSignUp(false);
  }
  const handleChangeSignUp = () => {
    setUpdateSignUp(true);
  }

  return (
    <div className="flex flex-row">
        <div className='w-4/6'>
          <img src={LogInPageImg} className='h-screen w-screen' alt="LogInImg" height={100}/>
        </div>
        
        <div className='w-1/3 bg-white overflow-hidden'>
          <div>
            <img src={TCSReTaionImg} alt="RetaionImg" width="650" />
          </div>
          <div class="flex">
            <div class="flex-initial">
              <button className='w-36 rounded-t-lg py-2 ml-40 bg-blue-400' onClick={handleChangeSignIn}>{retaionConstant.logIn}</button>
            </div>
            <div class="flex-initial">
              <button className='w-36 rounded-t-lg py-2 bg-text-gray-100' onClick={handleChangeSignUp}>{retaionConstant.register}</button>
            </div>
          </div>
          
          <div>
            <LogInPanel isLoggedIn={updateSignUp} logIn={retaionConstant.logIn} register={retaionConstant.register} welcome={retaionConstant.welcome} logInMsg={retaionConstant.logInMsg} newUser={retaionConstant.newUser} registerMsg={retaionConstant.registerMsg}/>
          </div>
        </div>

    </div>
  )
}

