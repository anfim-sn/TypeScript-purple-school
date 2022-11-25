interface IUserService {
  users: number
  getUserInDatabase(): number
}

class UserService implements IUserService {
  users: number = 1000

  @Catch({ rethrow: true })
  getUserInDatabase(): number {
    return this.users
  }
}

function Catch({ rethrow }: { rethrow: boolean } = { rethrow: true }) {
  return (
    target: Object,
    name: string | symbol,
    descriptor: TypedPropertyDescriptor<(...args: any[]) => any>
  ): TypedPropertyDescriptor<(...args: any[]) => any> | void => {
    const method: ((...args: any[]) => any) | undefined = descriptor.value
    descriptor.value = async (...args: any[]) => {
      try {
        return await method?.apply(target, args)
      } catch (error) {
        if (error instanceof Error) {
          if (rethrow) throw error
        }
      }
    }
  }
}