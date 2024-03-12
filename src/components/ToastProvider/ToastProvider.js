import React from 'react';

export const ToastContext = React.createContext();

function ToastProvider({children}) {
  const [toasts, setToasts] = React.useState([]);
  const [message, setMessage] = React.useState('Message');
  const [variant, setVariant] = React.useState('notice');

  const createToast = (event) => {
    event.preventDefault();

    console.log('creating toast');

    const newToast = {
      message: message,
      variant: variant,
      id: crypto.randomUUID(),
    };

    setToasts([...toasts, newToast]);

    setMessage('');
    setVariant('notice');
  }

  const handleCloseToast = (id) => {
    const newArray = [...toasts];
    setToasts([...newArray.filter(item => item.id !== id)]);

    console.log('closing toast');
  };

  return (
    <ToastContext.Provider value={{ toasts, createToast, handleCloseToast, message, setMessage, variant, setVariant }}> 
      {children}
    </ToastContext.Provider>
  )
}

export default ToastProvider;
