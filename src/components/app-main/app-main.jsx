import React from 'react'
import BurgerConstructor from "../burger-constructor/burger-constructor";
import BurgerIngredients from "../burger-ingredients/burger-ingredients"
import styles from './app-main.module.css'

function AppMain({ ingredients, modalOpened, openModal, setIngredientModal, setIngredient}) {
  return (
    <main className={styles.main}>
      <BurgerIngredients ingredients={ingredients} openModal={openModal} modalOpened={modalOpened} setIngredientModal={setIngredientModal} setIngredient={setIngredient} />
      <BurgerConstructor ingredients={ingredients} openModal={openModal} setIngredientModal={setIngredientModal}/>
    </main>
  )
}

export default AppMain
