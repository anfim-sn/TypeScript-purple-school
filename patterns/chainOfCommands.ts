interface IMiddleware {
  next(mid: IMiddleware): IMiddleware
  handle(req: any): any
}

abstract class AbstractMiddleware implements IMiddleware{
  private nextMiddleware: IMiddleware | undefined
  public next(mid: IMiddleware): IMiddleware {
    this.nextMiddleware = mid
    return this.nextMiddleware
  }

  handle(req: any): any {
    if (this.nextMiddleware) {
      return this.nextMiddleware.handle(req)
    }
    return
  }
}


class AuthMiddleware extends AbstractMiddleware{
  override handle(req: any): any {
    if (req.userId === 1) {
      return super.handle(req)
    }
    return {error: 'Unauthorized'}
  }
}

class ValidationMiddleware extends AbstractMiddleware{
  override handle(req: any): any {
    if (req.body) {
      return super.handle(req)
    }
    return {error: 'No Body'}
  }
}

class Controller extends AbstractMiddleware{
  override handle(req: any): any {
    return {success: req}
  }
}

const controller = new Controller()
const validation = new ValidationMiddleware()
const auth = new AuthMiddleware()

auth.next(validation).next(controller)
const req = {
  userId: 1,
  body: 'Im Anfim'
}
auth.handle(req)