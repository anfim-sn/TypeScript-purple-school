abstract class Logger {
  abstract log(message: string): void

  printDate(date: Date): void {
    this.log(date.toString())
  }
}

class LogWithDate extends Logger {
  log(message: string) {
    console.log(message)
  }

  logWithDate(message: string): void {
    this.printDate(new Date())
    this.log(message)
  }
}