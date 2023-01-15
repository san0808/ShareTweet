import React from 'react'
import design from'../../styles/UI/Card.module.css'
function Card(props) {
    
    return (
        <div className={design.Card}>
            {props.children}
        </div>
    )
}

export default Card
