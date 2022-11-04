import React, { useState, useRef,useEffect,useCallback } from 'react';
import { useDispatch,useSelector } from 'react-redux';
import { nameShema, emailSchema, passSchema, checkValidate } from '../../components/validation';
import { Input,Button } from '@ya.praktikum/react-developer-burger-ui-components';
import './profile.scss';
import { userSelector } from '../../services/selectors/userSelector';
import Loader from '../../components/Loader/Loader';
import { getUser, updateUserInfo } from '../../services/actions';
import { getCookie } from '../../utils/cookies';


const innitialInputState = {
  nameState: true,
  loginState: true,
  pswdState: true
};

const ProfileInfo = () => {

  const [form, setForm] = useState({
    name: 'Денис',
    email: 'denn161',
    password: ''
  })
  const [inputsState, setInputsState] = useState(innitialInputState);
  const [nameErr, setNameErr] = useState(false);
  const [loginErr, setLoginErr] = useState(false);
  const [passErr, setPassErr] = useState(false);
  const nameInputRef = useRef(null);
  const loginInputRef = useRef(null);
  const pswdInputRef = useRef(null);

  const dispatch = useDispatch()

  const token = getCookie('accessToken')||{}
   

  const {user,loading} = useSelector(userSelector)
  
  
 const  disable = nameErr||loginErr||passErr||form.name===''||form.email===''
  
  const isShowBtns =true
  
  const handleSubmit = useCallback((e)=>{
    e.preventDefault();
    dispatch(updateUserInfo(form))
    
},[dispatch,form])


const  reverseForm = useCallback((e)=>{
         e.preventDefault();   
         setForm({
           ...form,
           ...user
         })  
         setPassErr(false)
     checkValidate(nameShema, setNameErr, user.name);
     checkValidate(emailSchema, setLoginErr, user.email); 

},[form,user])  


  const changeInput = e => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }
  

  useEffect(()=>{
    if(token){
      dispatch(getUser())
    }
  },[dispatch])

   useEffect(()=>{
    if(user){
       setForm({
        ...form,
        ...user
       })
    }

   },[user])

   if(loading){
    return <Loader/>
 }


  return (
    <section className='profile__content'>
      <form className='profile__form' onSubmit={handleSubmit}>
        <Input
          ref={nameInputRef}
          name="name"
          type="text"
          value={form.name}
          onChange={e => {
            changeInput(e)
            checkValidate(nameShema, setNameErr, e.target.value);
          }}
          icon="EditIcon"
          placeholder="Имя"
          error={nameErr}
          errorText={
            form.name === ''
              ? 'Заполните поле'
              : 'Некорректный формат имени'
          }
          onIconClick={() => {
            setInputsState({
              ...innitialInputState,
              nameState: false
            });
            nameInputRef?.current.focus()
          }}
          onBlur={() => {
            setInputsState({
              ...innitialInputState,
              nameState: true
            });
          }}
          disabled={inputsState.nameState}
        />
        <Input
          ref={loginInputRef}
          name="login"
          type="text"
          value={form.email}
          onChange={e => {
            changeInput(e)
            checkValidate(emailSchema, setLoginErr, e.target.value);
          }}
          icon="EditIcon"
          placeholder="Логин"
          error={loginErr}
          errorText={
            form.email === ''
              ? 'Заполните поле'
              : 'Некорректный формат логина'
          }
          onIconClick={() => {
            setInputsState({
              ...innitialInputState,
              loginState: false
            });
            loginInputRef?.current.focus()
          }}
          onBlur={() => {
            setInputsState({
              ...innitialInputState,
              loginState: true
            });
          }}
          disabled={inputsState.loginState}
        />
        <Input
          ref={pswdInputRef}
          name="password"
          type={'password'}
          value={form.password}
          onChange={e => {
            changeInput(e)
            checkValidate(passSchema, setPassErr, e.target.value);
          }}
          icon="EditIcon"
          placeholder="Пароль"
          error={passErr}
          errorText={
            form.password === ''
              ? 'Заполните поле'
              : 'Некорректный формат логина'
          }
          onIconClick={() => {
            setInputsState({
              ...innitialInputState,
              pswdState: false
            });
            pswdInputRef?.current.focus()
          }}
          onBlur={() => {
            setInputsState({
              ...innitialInputState,
              pswdState: true
            });
          }}
          disabled={inputsState.pswdState}
        />
        {isShowBtns&& (
           <div className='profile__info-btns'>
              <Button size='medium' htmlType='button' onClick={reverseForm} >Отмена</Button>
              <Button size='medium' disabled={disable} htmlType='submit'>Сохранить</Button>
           </div>
        )}
      </form>
    </section>
  )
}

export default ProfileInfo