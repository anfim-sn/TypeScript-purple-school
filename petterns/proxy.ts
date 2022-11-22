interface IPaymentApi {
  getPaymentDetails(id: number): IPaymentDetails | undefined
}
interface IPaymentDetails {
  id: number
  sum: number
}

class PaymentApi implements IPaymentApi {
  private data = [{id: 1, sum: 1000}]

  getPaymentDetails(id: number): IPaymentDetails | undefined {
    return this.data.find(d => d.id === id)
  }
}
class PaymentAccessProxy implements IPaymentApi{
  constructor(private api: PaymentApi, private userId: number) {}

  getPaymentDetails(id: number): IPaymentDetails | undefined {
    if (this.userId === 1) {
      return this.api.getPaymentDetails(id)
    }
    console.log('Bad person')
    return
  }
}

const proxy = new PaymentAccessProxy(new PaymentApi(), 1)
