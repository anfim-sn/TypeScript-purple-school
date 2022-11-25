interface IUserService {
  users: number
  getUserInDatabase(): number
}

@SetCreatedAt
class UserService implements IUserService {
  users: number = 1000

  getUserInDatabase(): number {
    return this.users
  }
}

function SetCreatedAt<T extends { new(...args: any[]): {} }>(constructor: T) {
  return class extends constructor {
    createdAt = new Date()
  }
}

type CreatedAt = {
  createdAt: Date
}

const User = new UserService() as IUserService & CreatedAt