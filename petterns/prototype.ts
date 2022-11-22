interface Prototype<T> {
  clone(): T
}

class UserHistory implements Prototype<UserHistory> {
  createdAt: Date
  constructor(public email: string, public name: string) {
    this.createdAt = new Date()
  }

  clone(): UserHistory {
    let target =  new UserHistory(this.email, this.name)
    target.createdAt = this.createdAt
    return target
  }
}

let user = new UserHistory('a@a.com', 'Anfim')
let user2 = user.clone()
user2.email = 'bobby@gmail.com'
user2.name = 'Bob'
