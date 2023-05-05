import React, { useState } from 'react'
import logo from '../images/logo.png'
import { Link } from 'react-scroll'

function Navbar() {

    const navLinkArr = ['home','features','offer',"about",'contact'];

    const [nav, setNav] = useState(false);
    const [menu,setMenu] = useState(false);


    const changeBackground = () => {
        if (window.scrollY >= 50) {
            setNav(true)
        } else {
            setNav(false)
        }
    }
    window.addEventListener('scroll', changeBackground)
    return (
        <nav className={nav ? 'nav active' : 'nav'}>
            <div className="container">
                <Link smooth={true} duration={100} to='home' className='logo'>
                    <img src={logo} alt="logo" />
                </Link>
                <button className={menu ? 'menu-icon active' : 'menu-icon'} onClick={() => {setMenu(!menu);}}>
                    <span className='nav-icon'></span>
                </button>
                <ul className={menu ? 'menu' : 'menu d-none d-lg-flex'}>
                    {
                        navLinkArr.map((link,index) => (
                            <li key={index}><Link onClick={() => {setMenu(!menu);}} offset={-70} smooth={true} duration={100} to={link}>{link}</Link></li>
                        ))
                    }
                </ul>
            </div>
        </nav>
    )
}

export default Navbar
