class User {
  GHToken: string = ''
  JWTToken: string = ''
}

interface AuthStrategy {
  auth(user: User): boolean
}

class Auth {
  constructor(private strategy: AuthStrategy) {}

  setStrategy(strategy: AuthStrategy) {
    this.strategy = strategy
  }

  public authUser(user: User): boolean {
    return this.strategy.auth(user)
  }
}

class JWTStrategy implements AuthStrategy {
  auth(user: User): boolean {
    if (user.JWTToken) {
      return true
    }
    return false
  }
}

class GHStrategy implements AuthStrategy {
  auth(user: User): boolean {
    if (user.GHToken) {
      // some API fetch
      return true
    }
    return false
  }
}

const user = new User()
user.JWTToken = 'token'
const auth = new Auth(new JWTStrategy())
auth.authUser(user)
auth.setStrategy(new GHStrategy())
auth.authUser(user)
