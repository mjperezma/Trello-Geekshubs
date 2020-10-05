import React from 'react';
import './Header.scss';
import icon from '../../images/requisito.png';

const Header = () => {
  return (
    <header className='header'>
      <h3 className='header__title'>TrelloGeek</h3>
      <img className='header__icon' src={icon} alt='icon' />
    </header>
  );
};

export default Header;
