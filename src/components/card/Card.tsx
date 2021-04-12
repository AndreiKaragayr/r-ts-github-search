import React from 'react';
import styles from './Card.module.scss';
import {NavLink} from "react-router-dom";

type CardProps = {
  avatar_url: string,
  login: string
}

const Card = ({avatar_url, login}: CardProps) => {
  return (
    <div className={styles.root}>
      <NavLink to={`/users/${login}`} className={styles.link} />
      <img src={avatar_url} alt="avatar" className={styles.image}/>

      <div className={styles.content}>
        <p className={styles.title}>{login}</p>
      </div>
    </div>
  )
}

export default Card;