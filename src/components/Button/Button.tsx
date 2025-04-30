import React, { FC, useState } from 'react';

interface ButtonProps {
  id?: string | number;
  containerClass?: string | number;
  href?: string | number;
  onClick?: () => void;
  children: React.ReactNode;
  btnPrimary?: boolean;
  btnLg?: boolean;
  hideElement?: boolean;
  hideElementLg?: boolean;
  offcanvasBtn?: boolean;
}

const Button: FC<ButtonProps> = ({ 
  id, 
  containerClass,
  href,
  onClick,
  children,
  btnPrimary,
  btnLg,
  hideElement,
  hideElementLg,
  offcanvasBtn,
}) => {
  const [isActive, setIsActive] = useState(false);
  
  const handleClick = () => {
    setIsActive(!isActive);
    if (onClick) {
      onClick();
    }
  };

  const btnClasses = 
  `btn relative z-10 text-white border-[1px] transition-transform duration-300 ease-out inline-block
  ${btnPrimary ? 'btn-primary bg-orange-500 border-orange-500 hover:bg-darkBlue-500 hover:border-darkBlue-500' : ''}
  ${btnLg ? 'btn-lg' : ''}
  ${hideElementLg ? 'lg:hidden' : ''} 
  ${hideElement ? 'hidden lg:inline-block' : ''}
  ${offcanvasBtn && isActive ? 'data-active:bg-darkBlue-500 data-active:border-white' : ''}
  `;

  const linkClasses =
  `btn relative z-10 text-white border-[1px] px-[1rem] py-[0.5rem] transition-transform duration-300 ease-out inline-block
  ${btnPrimary ? 'btn-primary bg-orange-500 border-orange-500 hover:bg-darkBlue-500 hover:border-darkBlue-500' : ''}
  ${btnLg ? 'btn-lg' : ''}
  ${hideElementLg ? 'lg:hidden' : ''} 
  ${hideElement ? 'hidden lg:inline-block' : ''}
  ${offcanvasBtn && isActive ? 'data-active:bg-darkBlue-500 data-active:border-white' : ''}
  `;

  const renderButton = () => (
    <div className={`relative inline-block ${containerClass}`}>
      <button 
        id={id?.toString()}
        className={btnClasses}
        onClick={handleClick}
        data-active={isActive}
      >
        <div className='btn-title'>{children}</div>
      </button>
    </div>
  );

  const renderLink = () => (
    <div className={`relative inline-block ${containerClass}`}>
      <a 
        id={id?.toString()}
        href={href?.toString()}
        className={linkClasses}
        onClick={handleClick}
        data-active={isActive}
      >
        <div className='btn-title'>{children}</div>
      </a>
    </div>
  );

  return href ? renderLink() : renderButton();
}

export default Button;