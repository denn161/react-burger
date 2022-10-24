import { useContext } from 'react'
import { v4 as uuidv4 } from 'uuid'
import { IngridientsContext } from '../../services';
import { ConstructorElement, CurrencyIcon, Button, DragIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import styles from './BurgerConstructor.module.css';



const BurgerConstructor = () => {

  const { mutationData, getOrderNumber } = useContext(IngridientsContext)

  const result = mutationData.length && mutationData.map((item) => {
    return { ...item, _id: uuidv4() }
  })

  const total = result.reduce((acc, item) => acc + item?.price, 0)

  return (
    <>
      {result.length &&
        <section className={styles.section__constructor}>
          <ConstructorElement
            type={'top'}
            isLocked={true}
            text={`${result[0].name} (верх)`}
            price={result[0].price}
            thumbnail={result[0].image}
            key={result[0]._id}
          />
          <ul className={styles.list}>
            {result.length && result.map((item) => {
              if (item.type !== 'bun') {
                return (<li className={styles.list__item} key={item._id} >
                  <DragIcon type="primary" />
                  <ConstructorElement
                    type={'middle'}
                    isLocked={false}
                    text={item.name}
                    price={item.price}
                    thumbnail={item.image}
                  />
                </li>)
              }
            }
            )}
          </ul>
          <ConstructorElement
            type={'bottom'}
            isLocked={true}
            text={`${result[6].name} (низ)`}
            price={result[6].price}
            thumbnail={result[6].image}
            key={result[6]._id}
          />
          <div className={`${styles.info} mt-10`}>
            <p className={`text text_type_digits-medium ${styles.price} mr-10`}>
              {total}
              <CurrencyIcon type="primary" /></p>
            <Button type={'primary'} size="medium" htmlType='button' onClick={getOrderNumber} >
              Оформить заказ
            </Button>
          </div>
        </section>
      }
    </>
  )
}


export default BurgerConstructor