import React from 'react';
import {Link} from 'react-router-dom';

function InformationDesktop() {
  return (
    <section className='information-desktop'>
      <ul className='information-desktop__list'>
        <li className='information-desktop__item'>
          <Link to='/promos-info-page'>
            <span className='information-desktop__link'>Акции</span>
          </Link>
        </li>
        <li className='information-desktop__item'>
          <Link to='/bonuses-page'>
            <span className='information-desktop__link'>Бонусы</span>
          </Link>
        </li>
        <li className='information-desktop__item'>
          <Link to='delivery-info-page'>
            <span className='information-desktop__link'>Доставка</span>
          </Link>
        </li>
        <li className='information-desktop__item'>
          <Link to='/about-web-site-page'>
            <span className='information-desktop__link'>О сайте</span>
          </Link>
        </li>
      </ul>
    </section>
  );
}

export default InformationDesktop;
