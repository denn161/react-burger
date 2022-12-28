
export interface IForm {
    email: string
    password: string
    name: string
    
}

export interface IResetForm extends IForm{
       code:string
}