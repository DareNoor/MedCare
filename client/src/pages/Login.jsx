import React, { useState } from 'react'
import {Link} from 'react-router-dom'
import {Eye, EyeOff} from 'lucide-react'
const Login = () => {
  const [isLogin,setIsLogin]=useState(true)
  const [showPass,setShowPass]=useState(false)

  return (
    <>
    <div className='bg-primary py-12 text-center'>
      <h1 className='font-heading font-bold text-3xl md:text-4xl text-white'>
        {isLogin?"Welcome Back":"Create Account"}
      </h1>
      <p className='text-white/70 mt-2'>
      {isLogin?"Login to continue your healthcare journey"
      :"Join MedCare and manage your health easily"}
      </p>
    </div>
    <div className='min-h-[70vh] flex text-center justify-center px-4 py-12'>
     <div className='bg-white shadow-md border border-gray-100 rounded-2xl p-8 w-full max-w-md'>
      <div className='flex mb-8 bg-gray-100 rounded-lg p-1'>
        <button onClick={()=>setIsLogin(true)} className={`w-1/2 py-2 rounded-lg font-medium transition ${isLogin?'bg-primary text-white':'text-gray-500'}`}>Login</button>
        <button onClick={()=>setIsLogin(false)} className={`w-1/2 py-2 rounded-lg font-medium transition ${!isLogin?'bg-primary text-white':'text-gray-500'}`}>Register</button>
      </div>
      <form className='flex flex-col gap-4'>
        {!isLogin &&(
          <div>
            <label className='text-start pl-2 block text-sm font-medium text-gray-700 mb-2'>Full Name</label>
            <input type="text" placeholder='Your name' className='w-full  border border-gray-200 rounded-lg px-4 py-3 text-sm outline-none focus:border-primary'/>
          </div>
        )}
        <div>
          <label className='text-start pl-2 block text-sm font-medium text-gray-700 mb-2'>Email</label>
          <input type="email" placeholder='your@email.com' className='w-full  border border-gray-200 rounded-lg px-4 py-3 text-sm outline-none focus:border-primary'/>
        </div>
          <div>

            <label className='text-start pl-2 block text-sm font-medium text-gray-700 mb-2'>
              Password
            </label>
           <div className='relative'>
 <input
            type={showPass?'text':'password'}
            placeholder="••••••••"
            className='w-full  border border-gray-200 rounded-lg px-4 py-3 text-sm outline-none focus:border-primary'
            />
            <button type='button' onClick={()=>setShowPass(!showPass)} className='absolute right-4 top-1/2 -translate-y-1/2 text-gray-500'>
              {setShowPass?<EyeOff size={20}/>:<Eye size={20}/>}
            </button>
           </div>
           

          </div>
        {isLogin &&
        <div className='flex justify-between items-center text-sm'>
          <label className='flex gap-2 items-center text-gray-500'>
            <input type="checkbox" />
            Remember me 
          </label>
          <span className='text-primary cursor-pointer'>Forgot Password?</span>
        </div>
        }
        <button className='bg-primary hover:bg-primary-dark text-white py-3 rounded-lg font-medium transition-colors mt-2'>
          {isLogin?"Login":"Create Account"}
        </button>
      </form>
      <p className='text-center text-sm text-gray-500 mt-6'>
{isLogin 
          ? "Don't have an account? "
          : "Already have an account? "
          }
          <button onClick={()=>setIsLogin(!isLogin)} className='text-primary font-medium'>
            {isLogin?"Register":"Login"}</button>      </p>
            <div className='text-center mt-5'>
              <Link to='/' className="text-sm text-gray-400 hover:text-primary">
              Back to Home
              </Link>
            </div>
     </div>
    </div>
    </>
  )
}

export default Login