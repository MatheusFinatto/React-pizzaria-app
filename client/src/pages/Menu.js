import React from 'react'
import { MenuList } from "../helpers/MenuList"
import MenuItem from '../components/MenuItem'
import '../styles/Menu.css'

function Menu() {
    return (
        <div className='menu'>
            <h1 className='menuTitle'>Nosso menu</h1>
            <h2>Use nosso atendente virtual no canto direito inferior para fazer seu pedido!</h2>

            <div className='menuList'>
                {MenuList.map( (pizza, key) =>{
                   return <MenuItem
                   key = {key}
                   nome = {pizza.nome}
                   img = {pizza.img}
                   slogan = {pizza.slogan}
                   valor = {pizza.valor}
                   />
                })}
            </div>

        </div>
    )

}

export default Menu;
