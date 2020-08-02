import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../../assets/images/logoFLIXADO.png'
import Button from '../../components/Button'
import './Menu.css'

const menu = () => {
    return (
        <nav className="Menu">   
            <Link to="/">
                <img className="Logo" src={Logo} alt="Flixado Logo"></img>
            </Link>
            <Button as={Link} className="ButtonLink" to="cadastro/video">
               Novo Vídeo
            </Button>
        </nav>
    )
}

export default menu