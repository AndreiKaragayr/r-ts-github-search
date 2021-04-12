import React, {ReactNode} from 'react';
import styles from './Panel.module.scss';

type PanelProps = {
  title?: string,
  children: ReactNode
}

const Panel = ({children, title}: PanelProps) => {
  return (
    <div className={styles.root}>
      {
        title && <h2 className={styles.title}>{title}</h2>
      }
      {children}
    </div>
  )
}

export default Panel