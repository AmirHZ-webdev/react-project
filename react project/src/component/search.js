import React, { Component } from 'react'
import styles from './search.module.css'
export default class Search extends Component {
    render() {
        return (
            <div className={styles.container}>
                 <h1>Search what you want</h1>
                 <input placeholder="Search ..."/>
            </div>
        )
    }
}
