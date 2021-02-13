import Link from 'next/link'
import { useState } from 'react';
import Dropdown from "react-bootstrap/Dropdown";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import { FaRegUserCircle } from 'react-icons/fa';
import { IconContext } from "react-icons";
import { useSession } from 'next-auth/client'
import styles from '../styles/Nav.module.css'

/*const Nav = () => {
    return (
        <nav classNameName={navStyles.nav}>
            <ul>
                <li>
                    <Link href='/'>Home</Link>
                </li>
                <li >
                    <Link href='/about'>About</Link>
                </li>
                <li>
                    <Link href='/users'>Users</Link>
                </li>
            </ul>
        </nav>
    )
}*/

const Nav = () => {

  const [session, loading] = useSession();
  const [active, setActive] = useState(false);

  const handleClick = () => {
    setActive(!active);
  };

    return (
      <>
        <nav className='flex items-center flex-wrap bg-gray-200 p-1 '>
          <Link href='/'>
            <a className='inline-flex items-center p-2 mr-4 '>
              <svg
                viewBox='0 0 24 24'
                xmlns='http://www.w3.org/2000/svg'
                className='fill-current text-black h-8 w-8 mr-2'
              >
                <path d='M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.001 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.337 6.182 14.976 4.8 12.001 4.8zm-6 7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624 1.177 1.194 2.538 2.576 5.512 2.576 3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C10.337 13.382 8.976 12 6.001 12z' />
              </svg>
              <span className='text-xl text-black font-medium uppercase tracking-wide'>
                Sai
            </span>
            </a>
          </Link>
          <button
            className=' inline-flex p-3 hover:bg-green-600 rounded lg:hidden text-black ml-auto hover:text-white outline-none'
            onClick={handleClick}
          >
            <svg
              className='w-6 h-6'
              fill='none'
              stroke='currentColor'
              viewBox='0 0 24 24'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth={2}
                d='M4 6h16M4 12h16M4 18h16'
              />
            </svg>
          </button>
          {/*Note that in this div we will use a ternary operator to decide whether or not to display the content of the div  */}
          <div
            className={`${active ? '' : 'hidden'
              }   w-full lg:inline-flex lg:flex-grow lg:w-auto`}
          >
            <div className='lg:inline-flex lg:flex-row lg:ml-auto lg:w-auto w-full lg:items-center items-start  flex flex-col lg:h-auto '>
              <Link href='/'>
                <a className='lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-blue font-medium items-center justify-center hover:bg-gray-600 hover:text-white'>
                  Home
              </a>
              </Link>
              <Link href='/nearme'>
                <a className='lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-blue font-medium items-center justify-center hover:bg-gray-600 hover:text-white'>
                  Near Me
              </a>
              </Link>
              <Link href='/about'>
                <a className='lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-blue font-medium items-center justify-center hover:bg-gray-600 hover:text-white'>
                  About us
              </a>
              </Link>
              <style type="text/css">
                          {`
                  .super-colors {
                    background: rgb(34,193,195);
                    background: linear-gradient(0deg, rgba(34,193,195,1) 0%, rgba(253,187,45,1) 100%);
                    width: 10%;
                  }
                `}
              </style>
              {!session && <>
                <Link href='/'>
                  <a className='lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-red font-medium items-center justify-center hover:bg-gray-600 hover:text-white'>
                    Login
              </a>
                </Link>
                </>
              }
              {session && <>
              <Dropdown as={ButtonGroup}>
                <Dropdown.Toggle variant="success">
                    <div className='inline-flex items-center p-1 mr-4 '>
                  <IconContext.Provider
                    value={{ color: 'blue', size:25 }}
                  >
                    <div>
                        <img src={session.user.image} alt="" className={styles.avatar} />
                    </div>
                  </IconContext.Provider>
                      <p className='text-red-600 text-center font-semibold' >{session.user.name}</p>
                    </div>
                </Dropdown.Toggle>
                <Dropdown.Menu className="super-colors">
                  <Dropdown.Item eventKey="1">baz</Dropdown.Item>
                  <Dropdown.Divider />
                  <Dropdown.Item eventKey="2">foo</Dropdown.Item>
                  <Dropdown.Item eventKey="3">bar</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
               </>}
            </div>
          </div>
        </nav>
      </>
    )
}

export default Nav


