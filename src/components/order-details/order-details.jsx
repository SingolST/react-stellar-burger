import React from 'react'
import image from '../../images/graphics.svg'
import styles from './order-details.module.css'

function OrderDetails() {
    return (
        <div className={styles.order_details + ' mt-30 mb-30 mr-25 ml-25'}>
            <p className='text text_type_digits-large mb-8'>034536</p>
            <p className='mb-15 text text_type_main-medium'>идентификатор заказа</p>
            <img className='mb-15' src={image} alt="иконка получения заказа" />
            <p className='mb-2 text text_type_main-default'>Ваш заказ начали готовить</p>
            <p className='text text_type_main-default text_color_inactive'>Дождитесь готовности на орбитальной станции</p>
        </div>
    )
}

export default OrderDetails
