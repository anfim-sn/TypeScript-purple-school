class Product {
  constructor(
    public id: number,
    public title: string,
    public price: number
  ) { }
}

class Delivery {
  constructor(
    public date: Date
  ) { }
}

class HomeDelivery extends Delivery {
  constructor(
    date: Date,
    public address: string
  ) {
    super(date)
  }
}

class PointDelivery extends Delivery {
  constructor(
    public pointId: number
  ) {
    super(new Date())
  }
}

type DeliveryOptions = HomeDelivery | PointDelivery

class Cart {
  private products: Product[] = []
  private delivery: DeliveryOptions

  public addProduct(product: Product): void {
    this.products.push(product)
  }

  public deleteProduct(productId: number): void {
    this.products = this.products.filter((product: Product) => product.id !== productId)
  }

  public getSum(): number {
    const sum = this.products.reduce((accum, product) => {
      return accum + product.price
    }, 0)
    return sum
  }

  setDelivery(delivery: DeliveryOptions): void {
    this.delivery = delivery
  }

  Checkout() {
    if (this.products.length === 0) {
      throw new Error("No Products");
    }
    if (!this.delivery) {
      throw new Error("No Delivery type");
    }
    return { success: true }
  }
}

const cart = new Cart();

cart.addProduct(new Product(1, 'Apple', 10))
cart.addProduct(new Product(2, 'Strawberry', 40))
cart.addProduct(new Product(3, 'Mango', 30))

cart.deleteProduct(2)
cart.setDelivery(new HomeDelivery(new Date(), '45, Pupkina st. Los-Angeles'))
console.log(cart.getSum());
console.log(cart.Checkout());