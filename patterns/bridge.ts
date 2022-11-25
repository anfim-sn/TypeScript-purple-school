interface IProvider {
  sendMessage(message: string): void
  connect(config: {}): void
  disconnect(): void
}

class TelegramProvider implements IProvider{
  sendMessage(message: string): void {
    console.log(message)
  }

  connect(config: {}): void {
    console.log(config)
  }

  disconnect(): void {
    console.log('disconnected TG')
  }
}

class WhatsUpProvider implements IProvider{
  sendMessage(message: string): void {
    console.log(message)
  }

  connect(config: {}): void {
    console.log(config)
  }

  disconnect(): void {
    console.log('disconnected WU')
  }
}

class NotificationSender {
  constructor(private provider: IProvider) {}

  send() {
    this.provider.connect({})
    this.provider.sendMessage('')
    this.provider.disconnect()
  }
}

class DelayNotificationSender extends NotificationSender {
  constructor(provider: IProvider) {
    super(provider)
  }
  sendDelayed() {

  }
}

const tgSender = new NotificationSender(new TelegramProvider())
tgSender.send()
const wuSender = new DelayNotificationSender(new WhatsUpProvider())
wuSender.send()