interface Mediator {
  notify(sender: string, event: string): void
}

abstract class Mediated {
  mediator: Mediator | undefined
  setMediator(mediator: Mediator) {
    this.mediator = mediator
  }
}

class Notifications {
  send() {
    console.log('Sending notification')
  }
}

class Log {
  log(msg: string) {
    console.log(msg)
  }
}

class EventHandler extends Mediated{
  myEvent() {
    this.mediator?.notify('EventHandler', 'MyEvent')
  }
}

class NotificationMediator implements Mediator{
  constructor(
    public Notifications: Notifications,
    public Log: Log,
    public EventHandler: EventHandler
  ) {}
  notify(_: string, event: string) {
    if (event === 'myEvent') {
      this.Notifications.send()
      this.Log.log('Sending')
    }
  }
}

const handler = new EventHandler()
const logger = new Log()
const notifications = new Notifications()

const mediator = new NotificationMediator(
  notifications,
  logger,
  handler
)
handler.setMediator(mediator)
handler.myEvent()