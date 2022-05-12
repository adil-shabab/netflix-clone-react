import React, {useEffect, useState} from 'react'
import './Navbar.css'


const netflixLogo='https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1920px-Netflix_2015_logo.svg.png'

const navAvatar='https://i.pinimg.com/originals/0d/dc/ca/0ddccae723d85a703b798a5e682c23c1.png'

function Navbar() {

    const [show, setShow] = useState(false);


useEffect(() => {
    window.addEventListener("scroll", ()=>{
        if(window.scrollY > 50){
            setShow(true)
      }else setShow(false)
    })
    // return ()=>{
    //     // window.removeEventListener("scroll")
    // }

}, []);
  return (
    <div className={`navbar ${show && "navbar-black"}`}>
        <img className='netflix-logo' src={netflixLogo} alt="Netflix Logo" />
        <img className='avatar' src={navAvatar} alt="Avatar" />
    </div>
  )
}

export default Navbar