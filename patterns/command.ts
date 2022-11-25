class User {
  constructor(public userId: number) {}
}

class CommandHistory {
  public command: Command[] = []
  push(command: Command) {
    this.command.push(command)
  }
  delete(command: Command) {
    this.command = this.command.filter(c => c.commandId !== command.commandId)
  }
}

abstract class Command {
  public commandId: number
  abstract execute(): void

  constructor(public history: CommandHistory) {
    this.commandId = Math.random()
  }
}

class AddUserCommand extends Command {
  constructor(
    private user: User,
    private receiver: UserService,
    history: CommandHistory
  ) {
    super(history)
  }

  execute(): void {
    this.receiver.saveUser(this.user)
    this.history.push(this)
  }

  undo(): void {
    this.receiver.deleteUser(this.user.userId)
    this.history.delete(this)
  }
}

class UserService {
  saveUser(user: User) {
    console.log('Save user: ', user.userId)
  }
  deleteUser(userId: Number) {
    console.log('Delete user: ', userId)
  }
}

class Controller {
  receiver = UserService
  history: CommandHistory = new CommandHistory()

  addReceiver(receiver: UserService) {
    // @ts-ignore
    this.receiver = receiver
  }

  run() {
    const addUserCommand = new AddUserCommand(
      new User(1),
      // @ts-ignore
      this.receiver,
      this.history
    )
    addUserCommand.execute()
    addUserCommand.undo()
  }
}

const controller = new Controller()
controller.addReceiver(new UserService())
controller.run()