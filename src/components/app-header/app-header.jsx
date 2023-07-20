import React from 'react'
import { BurgerIcon, ListIcon, Logo, ProfileIcon } from '@ya.praktikum/react-developer-burger-ui-components'
import styles from './app-header.module.css'

function AppHeader() {
  return (
    <header className={styles.header + ' pt-4 pb-4 mt-10'}>
      <div className={styles.buttons_block}>
        <a className={styles.link + ' p-5 mt-4 mb-4'}>
          <BurgerIcon type="primary" />
          <p className='text text_type_main-default ml-2'>Конструктор</p>
        </a>
        <a className={styles.link + ' p-5 ml-2 mt-4 mb-4'}>
          <ListIcon type="secondary" />
          <p className='text text_type_main-default ml-2 text_color_inactive'>Лента заказов</p>
        </a>
      </div>
      <a className={styles.link}>
        <Logo />
      </a>
      <a className={styles.link + ' p-5 mt-4 mb-4'}>
        <ProfileIcon  type="secondary" />
        <p className='text text_type_main-default ml-2 text_color_inactive'>Личный кабинет</p>
      </a>
    </header>
  )
}

export default AppHeader
