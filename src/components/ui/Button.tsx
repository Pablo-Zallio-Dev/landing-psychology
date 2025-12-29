import React from 'react'


interface ButtonProps {
    children?: React.ReactNode;
    onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
    className?: string;
    type?: 'submit' | 'button'
    variant?: 'primary' | 'secondary'
}
const Button: React.FC<ButtonProps> = ({ children, onClick, className = '', type = 'button', variant = 'primary' }) => {
  
  const combinedClassName = `btn btn-${variant} ${className}`;
  
  return (
    <button type={type} onClick={onClick} className={combinedClassName} >
        {children}
    </button>
    
  )
}

export default Button