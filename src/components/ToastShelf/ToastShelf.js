import React from 'react';

import Toast from '../Toast';
import styles from './ToastShelf.module.css';

function ToastShelf({toasts, setToasts}) {

  const handleCloseToast = (id) => {
    const newArray = [...toasts];
    setToasts([...newArray.filter(item => item.id !== id)]);

    console.log('closing toast');
  };

  console.log(toasts);

  return (
    <ol className={styles.wrapper}>
      {toasts.length > 0 && toasts.map(({variant, message, id}) => (
        <li key={id} className={styles.toastWrapper}>
          <Toast id={id} variant={variant} onClose={() => handleCloseToast(id)}>{message}</Toast>
        </li>
      ))}
    </ol>
  );
}

export default React.memo(ToastShelf);
