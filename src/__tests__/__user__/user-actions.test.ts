import axios  from 'axios'
import configureStore from 'redux-mock-store'
import thunk from 'redux-thunk';
import * as actions from "../../services/actions/user/actions";
import * as types from '../../services/actions/user/constants';
import { loginUser, registerUser } from '../../services/actions/user/user';

describe('Test User actions', () => {

  const mockPost = jest.spyOn(axios, 'post')

  test('should create  an action with correct Body', () => {

    const user = {
      name: 'Denis',
      email: 'denn123@mail.ru',
      password: '123456'
    }

    const expectedAction = {
      type: types.POST_USER_SUCCES,
      payload: user
    }

    expect(actions.postUserSuccess(user)).toEqual(expectedAction)


  })

  test('should create  an errorAction with correct ', () => {

    const errorMessage = 'Error message'

    const expectedAction = {
      type: types.POST_USER_FAILED,
      payload: errorMessage
    }
    expect(actions.postUserFailed(errorMessage)).toEqual(expectedAction)

  })

  test('should create  an login User successfily with correct ', () => {

    const user = {
      name: 'Denis',
      email: 'denn123@mail.ru',
      password: '123456'
    }

    const expectedAction = {
      type: types.LOGIN_USER_SUCCESS,
      payload: user
    }

    expect(actions.loginUserSuccess(user)).toEqual(expectedAction)

  })

  it('should be fire 3 dispatch in tnunkAction register ', () => {

    mockPost.mockResolvedValueOnce({ data: { success: true, user: { name: 'test', email: 'test@mail.ru' } } })

    const data = {
      email: 'test@mail.ru',
      password: 'liebe161',
      name: 'test'
    }

    const responseData = {
      email: 'test@mail.ru',
      name: 'test'
    }
    const expectedActions = [
      { type: types.POST_USER_REQUEST, payload: data },
      { type: types.POST_USER_SUCCES, payload: responseData },
      { type: types.POST_USER_FAILED, payload: 'Что-то пошло не так' }
    ]

    const middleware = [thunk]

    const mockStore = configureStore(middleware)

    const store = mockStore({ data: null })

    return store.dispatch(registerUser(data)).then(() => {
      expect(store.getActions()).toEqual(expectedActions)
    })

  })

  it('should be fire 3 dispatch in tnunkAction login ', () => {

    mockPost.mockResolvedValueOnce({ data: { success: true, user: { name: 'test', email: 'test@mail.ru' } } })

    const data = {
      email: 'test@mail.ru',
      password: 'liebe161'
    }
    const responseData = {
      email: 'test@mail.ru',
      name: 'test'
    }
    const expectedActions = [
      { type: types.LOGIN_USER_REQUEST },
      { type: types.LOGIN_USER_SUCCESS, payload: responseData },
      { type: types.SET_LOGIN_CHECKED },
      { type: types.LOGIN_USER_FAILED, payload: 'Что-то пошло не так.Попробуйте войти заново' }
    ]

    const middleware = [thunk] 

    const mockStore = configureStore(middleware)

    const store = mockStore({ data: null })   

    return store.dispatch(loginUser(data)).then(() => {     
     expect(store.getActions()).toEqual(expectedActions)
    })

  })

})







