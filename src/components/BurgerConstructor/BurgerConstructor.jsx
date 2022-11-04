
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid'
import { useDrop } from 'react-dnd';
import BunElement from './BunElement';
import { CurrencyIcon, Button } from "@ya.praktikum/react-developer-burger-ui-components";
import styles from './BurgerConstructor.module.css';
import { POST_FILLING_CONSTRUCTOR, getOrderNumber, POST_BUN_CONSTRUCTOR } from '../../services/actions';
import { itemsSelectorByConstructor } from '../../services/selectors/itemsConstructorSelector';
import DefaultComponent from './DefaultComponent';
import FillingsList from './FillingsList';
import { ingredientSelector } from '../../services/selectors/ingredientSelector';
import Loader from '../Loader/Loader';
import { userSelector } from '../../services/selectors/userSelector';
import { useCallback } from 'react';
import { toast } from 'react-toastify';


const BurgerConstructor = () => {

  const { fillings, bun, isFilling, isBun } = useSelector(itemsSelectorByConstructor)

  const { loading,isLogin} = useSelector(ingredientSelector)

  const {token,auth}=useSelector(userSelector)

  const dispatch = useDispatch()

  const navigate = useNavigate()
 
  const total = [bun, ...fillings, bun].reduce((acc, item) => acc + item.price, 0) ||
    fillings.reduce((acc, item) => acc + item.price, 0);

  const idsOfOrder = fillings.map((item) => item._id)



  const getNumberOrder = useCallback(() => {        
  
    if (!isBun && !isFilling ) {
      return
    }      
    
    // if(!isLogin){
    //     toast.error('Вы не автаризованы!')
    //     navigate('/login')
    // }

   dispatch(getOrderNumber(idsOfOrder))
 
  
  },[dispatch])

  const [{ isHover }, targetRef] = useDrop({
    accept: 'ingredient',
    collect: (monitor) => ({
      isHover: monitor.isOver(),
    }),
    drop(item) {
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
    
  if(loading){
    return <Loader/>
  }


  return (
    <>
   
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
    </>
  )
}


export default BurgerConstructor