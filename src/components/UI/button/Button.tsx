import React, {ReactNode} from 'react';
import styles from './Button.module.scss';

type ButtonProps = {
  type?: "button" | "submit" | "reset" | undefined,
  view?: string,
  children: ReactNode,
  disabled?: boolean,
  onClick?: React.MouseEventHandler<HTMLButtonElement> | undefined
}

const Button = ({
                  view='primary',
                  type='button',
                  children,
                  disabled=false,
                  onClick
}: ButtonProps) => {
  let classes = []

  if(view && view === 'outline') {
    classes.push(styles.outline)
  }
  else if (view && view === 'red'){
    classes.push(styles.red)
  }
  else if (view && view === 'green'){
    classes.push(styles.green)
  }
  else {
    classes.push(styles.primary)
  }

  return (
    <button
      type={type}
      className={`${styles.root} ${classes.join(' ')} `}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  )
}

export default Button;