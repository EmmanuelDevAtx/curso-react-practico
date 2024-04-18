import { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import { ShoppingBagIcon } from '@heroicons/react/24/solid'
import { UserCircleIcon } from '@heroicons/react/24/solid'
import { DocumentTextIcon } from '@heroicons/react/24/solid'
import { ShoppingCartContext } from '../../Context'
import { useAuth } from '../../Context/auth'
import { Bars3Icon } from '@heroicons/react/24/solid'


const Navbar = () => {
  const context = useContext(ShoppingCartContext);
  const { logOut, isSignin, email } = useAuth();
  const activeStyle = 'underline underline-offset-4';

  return (
    <nav className='flex justify-between items-center fixed z-10 top-0 w-full py-5 px-8 text-sm font-light backdrop-blur-lg backdrop-brightness-125'>
      <ul className='flex items-center gap-3  navigation-response'>
        <li className='font-semibold text-lg'>
          <NavLink to='/'>
            Shopi
          </NavLink>
        </li>
        <li>
          <NavLink
            to='/'
            onClick={() => context.setSearchByCategory()}
            className={({ isActive }) =>
              isActive ? activeStyle : undefined
            }>
            All
          </NavLink>
        </li>
        <li>
          <NavLink
            to='/clothes'
            onClick={() => context.setSearchByCategory('clothes')}
            className={({ isActive }) =>
              isActive ? activeStyle : undefined
            }>
            Clothes
          </NavLink>
        </li>
        <li>
          <NavLink
            to='/electronics'
            onClick={() => context.setSearchByCategory('electronics')}
            className={({ isActive }) =>
              isActive ? activeStyle : undefined
            }>
            Electronics
          </NavLink>
        </li>
        <li>
          <NavLink
            to='/furnitures'
            onClick={() => context.setSearchByCategory('furnitures')}
            className={({ isActive }) =>
              isActive ? activeStyle : undefined
            }>
            Furnitures
          </NavLink>
        </li>
        <li>
          <NavLink
            to='/toys'
            onClick={() => context.setSearchByCategory('toys')}
            className={({ isActive }) =>
              isActive ? activeStyle : undefined
            }>
            Toys
          </NavLink>
        </li>
        <li>
          <NavLink
            to='/others'
            onClick={() => context.setSearchByCategory('others')}
            className={({ isActive }) =>
              isActive ? activeStyle : undefined
            }>
            Others
          </NavLink>
        </li>
      </ul>
      <ul className='flex items-center gap-3  navigation-response'>
        {
          isSignin &&
          <li className='text-black/60'>
            {email}
          </li>
        }
        {
          isSignin &&
          <li>
            <NavLink
              to='/my-orders'
              className={({ isActive }) =>
                isActive ? activeStyle : undefined
              }>
              My Orders
            </NavLink>
          </li>
        }
        {
          isSignin &&
          <li>
            <NavLink
              to='/my-account'
              className={({ isActive }) =>
                isActive ? activeStyle : undefined
              }>
              My Account
            </NavLink>
          </li>
        }

        <li>
          <NavLink
            onClick={logOut}
            to='/sing-in'
            className={({ isActive }) =>
              isActive ? activeStyle : undefined
            }>
            {!isSignin ? 'Sign In' : 'Logout'}
          </NavLink>
        </li>
        <li className='flex items-center'>
          <ShoppingBagIcon className='h-6 w-6 text-black'></ShoppingBagIcon>
          <div>{context.cartProducts.length}</div>
        </li>
      </ul>
      {
        isSignin &&
        <ul className='navigation-response-small flex justify-end items-end '>
          <li>
            <button className=' rounded-full' onClick={context.openIsOpenSmallNav}>
              <Bars3Icon className='w-7 h-7' />
            </button>
          </li>
          <li className='text-black/60'>
            {email}
          </li>
          <li>
            <NavLink
              to='/my-orders'
              className={({ isActive }) =>
                (isActive ? activeStyle : undefined) + ' flex  items-center'
              }>
              <DocumentTextIcon className='text-black w-5 h-5' />
              <span>checks</span>
            </NavLink>
          </li>
          <li className='flex items-center'>
            <ShoppingBagIcon className='h-6 w-6 text-black'></ShoppingBagIcon>
            <div>{context.cartProducts.length}</div>
          </li>
          <li>
            <NavLink
              to='/my-account'
              className={({ isActive }) =>
                isActive ? activeStyle : undefined
              }>
              <UserCircleIcon className='text-black w-7 h-7' />
            </NavLink>
          </li>

          <li>
            <NavLink
              onClick={logOut}
              to='/sing-in'>
              Logout
            </NavLink>
          </li>
        </ul>
      }
    </nav>
  )
}

export default Navbar