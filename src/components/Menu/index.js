import React from 'react'
import Logo from '../../assets/images/logoFLIXADO.png'
import ButtonLink from '../Menu/ButtonLink'
import Button from '../../components/Button'
import './Menu.css'

const menu = () => {
    return (
        <nav className="Menu">   
            <a href="/">
                <img className="Logo" src={Logo} alt="Flixado Logo"></img>
            </a>
            <Button as="a" className="ButtonLink" href="/">
                Button
            </Button>
        </nav>
    )
}

export default menu