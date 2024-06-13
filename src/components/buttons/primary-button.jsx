import React from 'react'
import styles from './buttons.module.scss';


const PrimaryButton = (props) => {
    return (
        <button
            className={styles.button_container}
            onClick={props.onClick}
            disabled={props.disabled}
        >
            {props.loading ? "Loading..." : props.children}
        </button>
    )
}

export default PrimaryButton
