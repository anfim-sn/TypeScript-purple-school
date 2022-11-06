interface IForm {
  name: string
  password: string
}

type FormValidation<Type> = {
  [Property in keyof Type]: InputValidaition
}

type InputValidaition =
  { isValid: true } |
  { isValid: false; errorMessage?: string }

const form: IForm = {
  name: 'Anfim',
  password: '123'
}

const formValidation: FormValidation<IForm> = {
  name: { isValid: true },
  password: {
    isValid: false,
    errorMessage: 'Password should have at least 5 symbols'
  }
}