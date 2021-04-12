import React from 'react';
import styles from './MainLoyalty.module.scss';
import Header from "../header";

export interface PropsTypes {
  isLoading: boolean,
  title?: string,
  children?: React.ReactNode
}

const MainLoyalty = ({isLoading = true, title = '', children}: PropsTypes) => {
  return (
    <>
      <Header />
      <main className={styles.container}>
        {title ? <h1 className={styles.title}>{title}</h1> : null}
        {
          isLoading ?
            <div className={styles.loading}>Loading...</div>
            :
            children
        }
      </main>
      </>
  )
}

export default MainLoyalty;