import React, {useEffect} from "react";
import styles from './burger-ingredient.module.css'
import { CurrencyIcon, Counter } from '@ya.praktikum/react-developer-burger-ui-components';
import IngredientDetails from "../ingredient-details/ingredient-details";
import Modal from "../modal/modal";

function BurgerIngredient({ image, price, name, item, openModal, setIngredientModal, setIngredient}) {
   
    const getIngredient = () => {
        setIngredient(item)
        setIngredientModal(false)
        openModal()
    }

    return (
        <div className={styles.ingredient} onClick={getIngredient}>
            <img className='mb-1' src={image} alt={name} />
            <p className='text text_type_digits-medium mb-1'>
                {price}
                <CurrencyIcon type="primary" />
            </p>
            <p className={styles.text_name + ' text text_type_main-default'}>{name}</p>
            <Counter count={1} size="default" extraClass="m-1" />
        </div>
    )
}

export default BurgerIngredient