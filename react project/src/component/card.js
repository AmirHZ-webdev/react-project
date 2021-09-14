import React, { Component } from 'react'
import styles from './card.module.css'
class Card extends Component {
    render() {
        const {image,name,cost}=this.props;
        return (
            <div className={styles.container}>
               <div className={styles.cardcontainer} >
                <img src={image} alt="pic" />
                <h1>{name}</h1>
                <p>{cost}</p>
            </div> 
            </div>
            
        )
    }
}
export default Card;