import React from 'react'
import PizzaLeft from '../assets/PizzaLeft.png'
import '../styles/Contact.css'

function Contact() {
    return (
        <div className='contact'>
            <div className='leftSide'></div>
            <div className='rightSide'>
                <h1>Entre em contato!</h1>
                <form id = "contactForm" method = "POST">
                    <label htmlFor='name'>Nome completo</label>
                    <input name = "name" placeholder='Insira seu nome completo'></input>
                    <label htmlFor='email'>Email</label>
                    <input name = "email" placeholder='Insira seu email' type={"email"}></input>
                    <label htmlFor='message'>Mensagem</label>
                    <textarea name = "message" rows = "6" placeholder='Insira sua mensagem...' required></textarea>
                    <button type='submit'>Enviar!</button>

                </form>
            </div>
        </div>
    )
}

export default Contact