import React, { useEffect, useState } from "react";
import styles from "./app.module.css";
import AppHeader from "../app-header/app-header";
import AppMain from "../app-main/app-main";
import Modal from "../modal/modal";
import IngredientDetails from "../ingredient-details/ingredient-details";
import OrderDetails from "../order-details/order-details";

function App() {

  const [ingredients, setIngredients] = useState([]);
  const [modalOpened, setModalOpened] = useState(false);
  const [ingredientModal, setIngredientModal] = useState(true)
  const [ingredient, setIngredient] = useState({})

  const openModal = () => {
    setModalOpened(true)
  }

  const closeModal = () => {
    setModalOpened(false)
  }


  useEffect(() => {
    const checkResponse = (res) => {
      if (res.ok) {
        return res.json();
      }

      // если ошибка, отклоняем промис
      return Promise.reject(`Ошибка: ${res.status}`);
    }

    const getData = async () => {
      const res = await fetch('https://norma.nomoreparties.space/api/ingredients')
      const arr = await checkResponse(res)
      setIngredients(arr.data)
    }
    getData()

  }, [])



  if (ingredients.length === 0) {
    return null
  }

  return (
    <div className={styles.app}>
      <AppHeader />
      <AppMain ingredients={ingredients} modalOpened={modalOpened} openModal={openModal} setIngredientModal={setIngredientModal} setIngredient={setIngredient} />
      <Modal modalOpened={modalOpened} closeModal={closeModal} >
        {
          ingredientModal ?
            <OrderDetails />
            :
            <IngredientDetails ingredient={ingredient}/>
        }
      </Modal>
    </div>
  );
}

export default App;
