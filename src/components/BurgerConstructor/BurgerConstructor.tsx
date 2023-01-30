

import { useNavigate } from 'react-router-dom';
import { useCallback, useMemo } from 'react';
import { toast } from 'react-toastify';
import { v4 as uuidv4 } from 'uuid'
import { useDrop } from 'react-dnd';
import { CurrencyIcon, Button } from "@ya.praktikum/react-developer-burger-ui-components";
import styles from './BurgerConstructor.module.css';
import { addBunByConstructor, addFillingConstructor } from '../../services/actions/constructor';
import { getOrderNumber } from '../../services/actions/orderandIngredient';
import { itemsSelectorByConstructor } from '../../services/selectors/itemsConstructorSelector';
import DefaultComponent from './DefaultComponent';
import FillingsList from './FillingsList';
import { ingredientSelector } from '../../services/selectors/ingredientSelector';
import Loader from '../Loader/Loader';
import BunElement from './BunElement';
import { userSelector } from '../../services/selectors/userSelector';
import { IIngredientElement } from '../../types/constructor';
import { useDispatch, useSelector } from '../../services/store/hooks';



const BurgerConstructor = () => {

  const { fillings, bun, isFilling, isBun } = useSelector(itemsSelectorByConstructor)

  const { loading } = useSelector(ingredientSelector)

  const { token, auth } = useSelector(userSelector)


  const dispatch: any = useDispatch()

  const navigate = useNavigate()

  const total: number = useMemo(
    () =>
      [bun, ...fillings, bun].reduce<number>((acc: number, item) => acc + item.price, 0) ||

      fillings.reduce<number>((acc, item) => acc + item.price, 0),
    [bun, fillings]
  )

  const idsOfOrder: Array<string> = fillings.map((item) => item._id)
  
  const getNumberOrder = useCallback((idsOfOrder: Array<string>) => {

    if (!isBun && !isFilling) {
      return
    }

    if (!auth) {
      toast.error('Вы не автаризованы!')
      navigate('/login')
      return
    }
    dispatch(getOrderNumber(idsOfOrder))

  }, [dispatch, idsOfOrder, auth, isBun, isFilling])

  const [, targetRef] = useDrop<unknown>({
    accept: 'ingredient',
    collect: (monitor) => ({
      isHover: monitor.isOver(),
    }),
    drop(item: any) {
      if (item.type === 'bun') {
        dispatch(addBunByConstructor(item))
      } else {
        const payload = {
          ...item, key: uuidv4()
        }
        dispatch(addFillingConstructor(payload))
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
          size="medium" htmlType='submit'
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