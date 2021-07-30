import React from 'react';
import {Link} from 'react-router-dom';

import {useSelector, useDispatch} from 'react-redux';
import {clearCart} from '../redux/actions/cart';

import cartEmptyImage from '../assets/images/cart_empty.png';

function Cart() {
  const dispatch = useDispatch();

  const cartProductItems = useSelector(({cart}) => cart.items);
  const {totalCount, totalPrice} = useSelector(({cart}) => cart);

  const addedProducts = Object.keys(cartProductItems)
      .map((key) => {
        return cartProductItems[key];
      });

  const onClearCart = () => {
    if (window.confirm('Вы действительно хотите очистить корзину?')) {
      dispatch(clearCart());
    }
  };

  return (
    <div className='cart' >
      {totalCount !== 0 ? (
      <div className='cart__list-wrapper'>
        <div className='cart__title-wrapper'>
          <p className='cart__title'>Корзина</p>
          <button
            className='cart__clear-button'
            onClick={onClearCart} >
            Очистить корзину
          </button>
        </div>
        <ul className='cart__list'>
          {
            addedProducts && addedProducts.map((productItemGroup) => {
              const totalPrice =
            productItemGroup[0].price * productItemGroup.length;
              const img = productItemGroup[0].imageURL;

              return (
                <li
                  key={productItemGroup[0].id}
                  className='cart__item'>
                  <div className='cart__image-info-wrapper'>
                    <div className='cart__image'>
                      <img
                        src={img}
                        width='150' height='90' />
                    </div>
                    <div className='cart__info-block'>
                      <p className='cart__product-name'>
                        {productItemGroup[0].name}
                      </p>
                      <p className='cart__product-weight'>
                        {productItemGroup[0].weight} г.
                      </p>
                      <p className='cart__total-price'>{totalPrice} ₽</p>
                    </div>
                  </div>
                  <div className='cart__buttons'>
                    <button className='cart__buttons_delete'>
                      <svg enableBackground="new 0 0 40 40"
                        id="Слой_1" version="1.1"
                        viewBox="0 0 40 40" xmlSpace="preserve"
                        xmlns="http://www.w3.org/2000/svg">
                        <g>
                          <path
                            d="M28,40H11.8c-3.3,0-5.9-2.7-5.9-5.9V16c0-0.6,
                          0.4-1,1-1s1,0.4,1,1v18.1c0,
                          2.2,1.8,3.9,3.9,3.9H28c2.2,0,3.9-1.8,3.9-3.9V16
                          c0-0.6,0.4-1,1-1s1,0.4,1,1v18.1C33.9,37.3,31.2,40,
                          28,40z"/>
                        </g>
                        <g>
                          <path
                            d="M33.3,4.9h-7.6C25.2,2.1,22.8,0,19.9,0s-5.3,
                          2.1-5.8,4.9H6.5c-2.3,0-4.1,1.8-4.1,4.1S4.2,13,6.5,
                          13h26.9c2.3,0,4.1-1.8,4.1-4.1S35.6,4.9,33.3,4.9z
                          M19.9,2c1.8,0,3.3,1.2,3.7,2.9h-7.5C16.6,3.2,18.1,2,
                          19.9,2z M33.3,11H6.5   c-1.1,0-2.1-0.9-2.1-2.1c0-1.1,
                          0.9-2.1,2.1-2.1h26.9c1.1,0,2.1,0.9,2.1,2.1C35.4,10.1,
                          34.5,11,33.3,11z"/>
                        </g>
                        <g>
                          <path d="M12.9,35.1c-0.6,0-1-0.4-1-1V17.4c0-0.6,0.4-1,
                          1-1s1,0.4,1,1v16.7C13.9,34.6,13.4,35.1,12.9,35.1z"/>
                        </g>
                        <g>
                          <path d="M26.9,35.1c-0.6,0-1-0.4-1-1V17.4c0-0.6,0.4-1,
                        1-1s1,0.4,1,1v16.7C27.9,34.6,27.4,35.1,26.9,35.1z"/>
                        </g>
                        <g>
                          <path
                            d="M19.9,35.1c-0.6,0-1-0.4-1-1V17.4c0-0.6,0.4-1,
                            1-1s1,0.4,1,1v16.7C20.9,34.6,20.4,35.1,19.9,35.1z"/>
                        </g>
                      </svg>
                    </button>
                    <div className='cart__buttons_counter-buttons'>
                      <button className='cart__counter-button'>-</button>
                      <span className='cart__product-count'>
                        {productItemGroup.length}
                      </span>
                      <button className='cart__counter-button'>+</button>
                    </div>
                  </div>
                </li>
              );
            })
          }
        </ul>
        <div className='cart__order-btns-wrapper'>
          <p className='cart__total-price-title'>
            Итого: <span>{totalPrice} ₽</span>
          </p>
          <button className='cart__place-order-btn'>
            Оформить заказ
          </button>
          <Link to='/'>
            <button className='cart__empty-btn-back'>
                Продолжить покупки
            </button>
          </Link>
        </div>
      </div>) :
      (
        <div className='cart__empty-wrapper'>
          <div className='cart__empty'>
            <p className='cart__empty-title'>Ваша корзина пуста...</p>
            <img className='cart__empty-img' src={cartEmptyImage} alt="" />
            <p className='cart__empty-text'>
              Скорее всего вы еще не выбрали ни одного блюда
              пожалуйста вернитесь на главную страницу и выберите
              для себя блюдо из нашего меню.
            </p>
            <Link to='/'>
              <button className='cart__empty-btn-back'>
                Вернуться на главную
              </button>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}

export default Cart;
