import React, {useState} from 'react';
import styles from './ingredient-details.module.css'

function IngredientDetails({ingredient}) {
  return (
    <div>
      {
        <div className='mt-10 mr-10 mb-15 ml-10' id={ingredient._id}>
          <div className={styles.title_block}>
            <p className='text text_type_main-large'>Детали ингредиента</p>
          </div>
          <div className={styles.info_block}>
            <img className='mb-4' src={ingredient.image_large} alt={ingredient.name} />
            <p className={styles.info_name + ' text text_type_main-medium mb-8'}>{ingredient.name}</p>
            <div className={styles.info_ingredients}>
              <div>
                <p className={styles.text_info + ' text text_type_main-default text_color_inactive'}>Калории,ккал</p>
                <p className={styles.text_info + ' text text_type_digits-default text_color_inactive'}>{ingredient.calories}</p>
              </div>
              <div>
                <p className={styles.text_info + ' text text_type_main-default text_color_inactive'}>Белки, г</p>
                <p className={styles.text_info + ' text text_type_digits-default text_color_inactive'}>{ingredient.proteins}</p>
              </div>
              <div>
                <p className={styles.text_info + ' text text_type_main-default text_color_inactive'}>Жиры, г</p>
                <p className={styles.text_info + ' text text_type_digits-default text_color_inactive'}>{ingredient.fat}</p>
              </div>
              <div>
                <p className={styles.text_info + ' text text_type_main-default text_color_inactive'}>Углеводы, г</p>
                <p className={styles.text_info + ' text text_type_digits-default text_color_inactive'}>{ingredient.carbohydrates}</p>
              </div>
            </div>
          </div>
        </div>
      }   
    </div>

  )
}

export default IngredientDetails
