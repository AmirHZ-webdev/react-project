import React, { Component } from 'react'
import Card from './card';
import styles from './cards.module.css'
import iphonex from "../img/iphonex.jpg"
import iphone11 from "../img/iphone11.jpg"
import iphone12 from "../img/iphone12.jpg"
import galaxys21 from "../img/galaxys21.jpg"
 class Cards extends Component {
    render() {
        return (
            <div className={styles.container}>
                <Card image={iphonex} name={'Iphonex'} cost={'500$'} />
                <Card image={iphone11} name={'Iphone11'} cost={'600$'} />
                <Card image={iphone12} name={'Iphone12'} cost={'700$'} />
                <Card image={galaxys21} name={'Galaxy s21'} cost={'650$'} />
               
            </div>
        )
    }
}
export default Cards;
