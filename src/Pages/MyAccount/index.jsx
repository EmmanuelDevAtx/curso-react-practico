import { useState } from 'react'
import Layout from '../../Components/Layout'
import { useAuth } from '../../Context/auth'
import { UserIcon } from '@heroicons/react/24/solid'


function MyAccount() {

  const [showPass, setShowPass] = useState(false);
  const { email, password } = useAuth();

  let styleButtonShowPass = showPass ? ' bg-white text-black  ' : ' text-white bg-stone-800 '
  return (
    <Layout>
      <span className=' font-medium text-lg '>My account</span>
      <div className='flex items-center flex-col py-6 border border-black w-1/3 rounded-lg p-4'>
        <UserIcon className='w-16 h-16 my-4'/>
        <div className='grid grid-cols-2 justify-between gap-7'>
          <span className=' text-lg '>Email: </span>
          <span className=' text-lg underline underline-offset-4'>{email}</span>
          <span className=' text-lg '>Password: </span>
          <span className={`text-lg transition-all duration-500 ${!showPass && ' blur-md '}`}>{showPass ? password: '1234'}</span>
        </div>
        <button className={`flex mt-7 rounded-lg p-2 w-full justify-center transition-full duration-500 border border-stone-800  ${styleButtonShowPass} `} onClick={()=>setShowPass(!showPass)} >{showPass ? 'Hide password' : 'Show password'}</button>
      </div>
    </Layout>
  )
}

export default MyAccount