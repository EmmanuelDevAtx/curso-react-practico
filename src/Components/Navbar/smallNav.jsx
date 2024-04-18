import { useContext } from 'react';
import { ShoppingCartContext } from '../../Context'
import { XMarkIcon } from '@heroicons/react/24/solid'
import { NavLink } from 'react-router-dom'

const navigationItems = [
    { title: 'All', path: '' },
    { title: 'Clothes', path: 'clothes' },
    { title: 'Electronics', path: 'electronics' },
    { title: 'Furnitures', path: 'furnitures' },
    { title: 'Toys', path: 'toys' },
    { title: 'Others', path: 'others' }
]

export const SmallNav = () => {

    const { isOpenSmallNav, closeIsOpenSmallNav } = useContext(ShoppingCartContext)

    const cardStyle = isOpenSmallNav ? ' bottom-0 ' : ' -bottom-full '

    return (
        <div className={` fixed z-10 ${cardStyle} small-navigation h-full w-full  backdrop-blur-2xl rounded-t-2xl transition-all duration-700 ease p-6 rounded-lg background-color-small brightness-90`}>
            <div className='flex justify-between'>
                <NavLink to='/' className='font-semibold text-lg' onClick={closeIsOpenSmallNav}>
                    Shopi
                </NavLink>
                <XMarkIcon onClick={closeIsOpenSmallNav} className='h-10 w-10 text-black' />
            </div>
            <div className='flex flex-col gap-3 py-4'>
                {
                    navigationItems.map((itemNav) =>
                        <ItemSmallNav {...itemNav} customFunction={closeIsOpenSmallNav} />)
                }
            </div>
        </div>
    );
}

const ItemSmallNav = ({ path, title, customFunction }) => {

    const activeStyle = ' border-y-2 border-black font-medium text-lg ';
    const context= useContext(ShoppingCartContext)


    return (
        <NavLink
            to={'/' + path}
            onClick={() => {
                context.setSearchByCategory(path);
                customFunction();
            }}
            className={({ isActive }) =>
                 isActive && activeStyle
            }>
            {title}
        </NavLink>
    );
}

export default SmallNav;