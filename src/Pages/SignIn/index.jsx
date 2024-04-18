import { useState } from 'react'
import Layout from '../../Components/Layout'
import { useAuth } from '../../Context/auth'
import { NavLink } from 'react-router-dom'


function SignIn() {

  const { singIn, logIn } = useAuth();

  const [typeLogin, setTypeLogin] = useState('login');

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState(''); 

  return (
    <Layout>
      <div className='flex flex-col border border-black rounded-lg p-6 gap-5 justify-center items-center w-1/4 sing-in'>
        <p className='p-4 flex'>
          <span
            onClick={() => setTypeLogin('login')}
            className={`font-medium ${typeLogin == 'login' && ' bg-stone-800 text-white '} rounded-l-lg p-2 transition-colors cursor-pointer duration-700 ease border ${typeLogin != 'login' ? 'border-white' : 'border-black'} hover:border-black text-md font-light`}> log in</span>
          <span
            onClick={() => setTypeLogin('singin')}
            className={`font-medium ${typeLogin == 'singin' && ' bg-stone-800 text-white '} rounded-r-lg p-2 transition-colors cursor-pointer duration-700 ease border ${typeLogin != 'singin' ? 'border-white' : 'border-black'} hover:border-blac text-md font-light`}>Sing in </span>
        </p>

        <div className='flex flex-col w-full gap-6 justify-center items-center my-7'>

          <div className='flex flex-row w-full justify-around container-input'>
            <p className=' font-light text-stone-500 text-sm'>Email</p>
            <input
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              type="text"
              className=' drop-shadow-lg rounded-md px-2 py-0.5 focus:outline-none border border-white focus:border-stone-400 transition-colors duration-700 ease font-light text-stone-500 text-sm' />
          </div>

          <div className='flex flex-row w-full justify-around container-input'>
            <p className=' font-light text-stone-500 text-sm'>Password</p>
            <input
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              type="password"
              className=' drop-shadow-lg rounded-md px-2 py-0.5 focus:outline-none border border-white focus:border-stone-400 transition-colors duration-700 ease font-light text-stone-500 text-sm' />
          </div>
        </div>

        <NavLink
          to={typeLogin == 'login' ? '/' : ''}
          onClick={typeLogin == 'login' ? () => logIn({ email, password }) : () => { }}
          className={`${typeLogin == 'login' ? 'bg-stone-800 text-white ' : 'bg-stone-300 text-stone-400'} flex justify-center transition-colors duration-700 ease p-2 w-full rounded-lg text-md font-light`}>
          Log in
        </NavLink>

        <p className=' font-light text-stone-400 text-xs border-white border-b hover:border-stone-400 hover:text-stone-600 transition-colors duration-700 ease cursor-pointer'>forgot your password?</p>

        <NavLink
          to={typeLogin == 'singin' ? '/' : ''}
          onClick={typeLogin == 'singin' ? () => singIn({ email, password }) : () => { }}
          className={`${typeLogin == 'singin' ? 'bg-stone-800 text-white ' : 'bg-stone-300 text-stone-400'} flex justify-center transition-colors duration-700 ease p-2 w-full rounded-lg text-md font-light`}>
          Sing in
        </NavLink>

      </div>
    </Layout>
  )
}

export default SignIn