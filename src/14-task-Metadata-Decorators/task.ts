import 'reflect-metadata'

const POSITIVE_METADATA_KEY = Symbol('POSITIVE_METADATA_KEY')

interface IUserService {
  _users: number
  getUsersInDatabase(): number
  setUsersInDatabase(): void
}

class UserService implements IUserService {
  private _users: number

  setUsersInDatabase(): number {
    return this._users
  }
  @Validate()
  getUsersInDatabase(@Positive() num: number): void {
    this._users = num
  }
}

function Positive() {
  return (
    target: Object,
    propertyKey: string | symbol,
    parameterIndex: number
  ) => {
    let existParams: number[] = Reflect.getOwnMetadata(POSITIVE_METADATA_KEY, target, propertyKey) || []
    existParams.push(parameterIndex)
    Reflect.defineMetadata(POSITIVE_METADATA_KEY, existParams, target, propertyKey)
  }
}
function Validate() {
  return (
    target: Object,
    propertyKey: string | symbol,
    descriptor: TypedPropertyDescriptor<(...args: any[]) => any>
  ) => {
    let method = descriptor.value
    descriptor.value = (...args: any) => {
      let positiveParams: number[] = Reflect.getOwnMetadata(POSITIVE_METADATA_KEY, target, propertyKey)
      if (positiveParams) {
        for (let index of positiveParams) {
          if (args[i] < 0) {
            throw new Error('Must be positive')
          }
        }
      }
      return method?.apply(this, args)
    }
  }
}
