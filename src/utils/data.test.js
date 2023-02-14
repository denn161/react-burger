
import { checkResponse } from "./data";

describe('Работа функции checkResponse', () => {

    test('Функция возвращает json', () => {

        const mockedResponse = {
            ok: true,
            json: () => 'res-ok'
        }

        const response = checkResponse(mockedResponse)

        expect(response).toBe('res-ok')

    })

    test('Функция возвращает Failed', () => {
        const mockedResponse = {
            ok: false,
            status: 'res-not-ok'
        }

        const response = checkResponse(mockedResponse)

        expect(response).rejects.toBe("Ошибка:res-not-ok")

    })

})

// describe('Test redux and actions', () => {     
   

//     test('should be fire 3 actions in thunk login', () => {
         
//         const expectedActions = [
//             {type:LOGIN_USER_REQUEST},
//             {type:LOGIN_USER_SUCCESS,payload:user},
//             {type:SET_LOGIN_CHECKED}
//         ]
        
//         const middlewares = [thunk]

//         const mockStore = configureStore(middlewares)

//         const store = mockStore({data:null})

//         return store.dispatch(loginUser(user)).then(()=>{
//               expect(store.getActions()).toEqual(expectedActions)
//         })
//     })
// })