import React from 'react'
import BurgerIngredient from '../burger-ingredient/burger-ingredient';
import styles from './burger-ingredients-category.module.css'

function BurgerIngredientsCategory({ ingredients, modalOpened, openModal, setIngredientModal, setIngredient}) {
    
    return (
        <div>
            <div className='mb-10' >
                <h2 className='text text_type_main-medium mb-6'>Булки</h2>
                <div className={styles.ingredients_container + ' pl-4 pr-4'}>
                    {
                        ingredients.map((item) => {
                            if (item.type === 'bun') {
                                return <BurgerIngredient
                                    key={item._id}
                                    image={item.image}
                                    price={item.price}
                                    name={item.name}
                                    modalOpened={modalOpened}
                                    openModal={openModal}
                                    item={item}
                                    setIngredientModal={setIngredientModal}
                                    setIngredient={setIngredient}
                                /> 
                            }
                        })
                    }
                </div>
            </div>
            <div className='mb-10' >
                <h2 className='text text_type_main-medium mb-6'>Соусы</h2>
                <div className={styles.ingredients_container + ' pl-4 pr-4'}>
                    {
                        ingredients.map((item) => {
                            if (item.type === 'sauce') {
                                return <BurgerIngredient
                                    key={item._id}
                                    image={item.image}
                                    imageAlt={item.name}
                                    price={item.price}
                                    name={item.name}
                                    modalOpened={modalOpened}
                                    openModal={openModal}
                                    item={item}
                                    setIngredientModal={setIngredientModal}
                                    setIngredient={setIngredient}
                                />
                            }
                        })
                    }
                </div>
            </div>
            <div className='mb-10' >
                <h2 className='text text_type_main-medium mb-6'>Начинка</h2>
                <div className={styles.ingredients_container + ' pl-4 pr-4'}>
                    {
                        ingredients.map((item) => {
                            if (item.type === 'main') {
                                return <BurgerIngredient
                                    key={item._id}
                                    image={item.image}
                                    imageAlt={item.name}
                                    price={item.price}
                                    name={item.name}
                                    modalOpened={modalOpened}
                                    openModal={openModal}
                                    item={item}
                                    setIngredientModal={setIngredientModal}
                                    setIngredient={setIngredient}
                                />
                            }
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default BurgerIngredientsCategory