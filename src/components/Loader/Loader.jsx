import React from 'react'
import styles from './loader.module.css'

const Loader = () => {
  return (
    <div className={styles.preloader}>
      <div className={styles.loader}></div>
    </div>
  )
}

export default Loader