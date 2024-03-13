import React from 'react';

import useEscapeKey from '../../hooks/useEscapeKey';

export const ToastContext = React.createContext();

function ToastProvider({children}) {
  const [toasts, setToasts] = React.useState([]);

  const createToast = (message, variant) => {
    event.preventDefault();

    console.log('creating toast');

    const newToast = {
      message: message,
      variant: variant,
      id: crypto.randomUUID(),
    }

    setToasts([...toasts, newToast]);
  }

  const removeToast = (id) => {
    const newArray = [...toasts];
    setToasts([...newArray.filter(item => item.id !== id)]);

    console.log('removing toast');
  }

  const removeAllToats = () => {
    setToasts([]);

    console.log('removing all toasts');
  }

  useEscapeKey(removeAllToats);

  return (
    <ToastContext.Provider value={{ toasts, createToast, removeToast }}> 
      {children}
    </ToastContext.Provider>
  )
}

export default ToastProvider;
