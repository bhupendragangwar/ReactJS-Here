import React from 'react'
import './UsersCard.css'

const UserCards = () =>{
    return (
        <div className='user-container'>
            <p>React Components</p>
            <img id='react-image' src='https://media.istockphoto.com/id/2156887575/photo/a-digital-love-story.jpg?b=1&s=612x612&w=0&k=20&c=Dn_cnxrqliL5LyE-ubndMDmiIHqkPAe7WVDgm5yIjS4=' alt='reactImage'></img>
            <p id='compo-desc'>Description of React Component</p>
        </div>
    )
}

export default UserCards