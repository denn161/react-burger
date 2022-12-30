
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid'
import { useDrop } from 'react-dnd';
import BunElement from './BunElement';
import { CurrencyIcon, Button } from "@ya.praktikum/react-developer-burger-ui-components";
import styles from './BurgerConstructor.module.css';
import { POST_FILLING_CONSTRUCTOR, POST_BUN_CONSTRUCTOR } from '../../services/actions/constructor';
import { getOrderNumber } from '../../services/actions/orderandIngredient';
import { itemsSelectorByConstructor } from '../../services/selectors/itemsConstructorSelector';
import DefaultComponent from './DefaultComponent';
import FillingsList from './FillingsList';
import { ingredientSelector } from '../../services/selectors/ingredientSelector';
import Loader from '../Loader/Loader';
import { userSelector } from '../../services/selectors/userSelector';
import { useCallback } from 'react';
import { toast } from 'react-toastify';
import { IIngredientElement } from '../../types/constructor';



const BurgerConstructor = () => {

  const { fillings, bun, isFilling, isBun } = useSelector(itemsSelectorByConstructor)


  const { loading } = useSelector(ingredientSelector)

  const { auth } = useSelector(userSelector)

  const dispatch: any = useDispatch()

  const navigate = useNavigate()

  const total: number = [bun, ...fillings, bun].reduce((acc: number, item: IIngredientElement) => acc + item.price, 0) ||

    fillings.reduce((acc: number, item: IIngredientElement) => acc + item.price, 0);

  const idsOfOrder: Array<string> = fillings.map((item: IIngredientElement) => item._id)

  const getNumberOrder = useCallback((idsOfOrder: Array<string>) => {

    if (!isBun && !isFilling) {
      return
    }

    if (!auth) {
      toast.error('Вы не автаризованы!')
      navigate('/login')
      return
    }else{
      dispatch(getOrderNumber(idsOfOrder))
    }
   

  }, [dispatch, idsOfOrder])

  const [, targetRef] = useDrop<unknown>({
    accept: 'ingredient',
    collect: (monitor) => ({
      isHover: monitor.isOver(),
    }),
    drop(item: any) {
      if (item.type === 'bun') {
        dispatch({ type: POST_BUN_CONSTRUCTOR, payload: item })
      } else {
        dispatch({
          type: POST_FILLING_CONSTRUCTOR,
          payload: {
            ...item,
            key: uuidv4()
          }
        })
      }
    },
  });

  if (loading) {
    return <Loader />
  }



  return (
    <section className={styles.section__constructor} ref={targetRef}>
      {isBun ? (<BunElement item={bun} position='top' text='верх' />)
        : (<DefaultComponent children={'Добавьте булочку'} position={'top'} />)}

      <FillingsList ingredients={fillings} isFilling={isFilling} />

      {isBun ? (<BunElement item={bun} position='bottom' text={'низ'} />)
        :
        (<DefaultComponent children={'Добавьте булочку'} position={'bottom'} />)
      }
      <div className={`${styles.info} mt-10`}>
        <p className={`text text_type_digits-medium ${styles.price} mr-10`}>
          {total}
          <CurrencyIcon type="primary" /></p>
        <Button type={'primary'}
          size="medium" htmlType='button'
          onClick={() => getNumberOrder(idsOfOrder)}
          disabled={fillings.length && isBun ? false : true}
        >
          Оформить заказ
        </Button>
      </div>
    </section>

  )
}


export default BurgerConstructor