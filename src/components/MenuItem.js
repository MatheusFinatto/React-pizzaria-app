import React from 'react'

function MenuItem(props) {
    return (
        <div className='menuItem'>
            <h1> Pizza de <br></br> {props.nome}</h1>
            <img src={props.img} alt={props.nome} />
            <h3>{props.slogan}</h3>
            <h3>R${props.valor},00</h3>
        </div>
    )
}

export default MenuItem