import axios from 'axios';

import AxiosMockAdapter from 'axios-mock-adapter';
import { API_USER_REGISTER } from '../constants/api';

const axiosMockInstance = axios.create()

export const axiosMockAdapterInstance = new AxiosMockAdapter(axiosMockInstance, { delayResponse: 0 });


export default {
    mockPostActionRegister:()=> axiosMockAdapterInstance
        .onPost(API_USER_REGISTER, { name: 'test', email: 'test@mail.ru', password: 'liebe161' })
        .reply(200, { user: { name: 'test', email: 'test@mail.ru' } })
}

















