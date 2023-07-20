import React from 'react'
import { Tab } from '@ya.praktikum/react-developer-burger-ui-components';
import styles from './burger-ingredients.module.css'
import BurgerIngredientsCategory from '../burger-ingredients-category/burger-ingredients-category';

function BurgerIngredients({ingredients, modalOpened, openModal, setIngredientModal, setIngredient}) {
    const [current, setCurrent] = React.useState('one')

    return (
        <section>
            <h1 className='text text_type_main-large mt-10 mb-5'>Собери бургер</h1>
            <div className={styles.tabs + ' mb-10'}>
                <Tab value="bun" active={current === 'bun'} onClick={setCurrent}>
                    Булки
                </Tab>
                <Tab value="sauce" active={current === 'sauce'} onClick={setCurrent}>
                    Соусы
                </Tab>
                <Tab value="main" active={current === 'main'} onClick={setCurrent}>
                    Начинки
                </Tab>
            </div>
            <div className={styles.categories}>
                <BurgerIngredientsCategory 
                    ingredients={ingredients} 
                    openModal={openModal}
                    modalOpened={modalOpened}
                    setIngredientModal={setIngredientModal}
                    setIngredient={setIngredient}
                />
            </div>
        </section>
    )
}

export default BurgerIngredients
