import { Button, ConstructorElement, CurrencyIcon, DragIcon } from '@ya.praktikum/react-developer-burger-ui-components'
import styles from './burger-constructor.module.css'
import React, {useEffect} from 'react'

function BurgerConstructor({ ingredients, openModal, setIngredientModal}) {

  const orderModal = () => {
    setIngredientModal(true)
    openModal()
  }

  return (
    <section className='mt-25 ml-4 mr-4'>
      <div className='mb-10' style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
        <div className='ml-8'>
          {
            ingredients.map((item) => {
              if (item.name === 'Краторная булка N-200i') {
                return <div key={item._id}>
                  <ConstructorElement
                    type="top"
                    isLocked={true}
                    text={item.name}
                    price={item.price}
                    thumbnail={item.image}
                  />
                </div>
              }
            })
          }
        </div>
        <div className={styles.custom_scroll}>
          {ingredients.map(item => {
            if (item.type !== "bun") {
              return <div className={styles.ingredient} key={item._id}>
                <DragIcon type="primary" />
                <ConstructorElement
                  text={item.name}
                  price={item.price}
                  thumbnail={item.image}
                />
              </div>
            }
          })
          }
        </div>
        <div className='ml-8'>
          {
            ingredients.map((item) => {
              if (item.name === 'Краторная булка N-200i') {
                return <div key={item._id}>
                  <ConstructorElement
                    type="bottom"
                    isLocked={true}
                    text={item.name}
                    price={item.price}
                    thumbnail={item.image}
                  />
                </div>
              }
            })
          }
        </div>
      </div>
      <div className={styles.container_value}>
        <div className={styles.value_order}>
          <p className="text text_type_main-large">610</p>
          <CurrencyIcon type="primary" />
        </div>
        <Button htmlType="button" type="primary" size="large" onClick={orderModal}>
          Оформить заказ
        </Button>
      </div>
    </section>
  )
}

export default BurgerConstructor
