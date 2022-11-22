interface IInsurance {
  id: number
  status: string
  setVehicle(vehicle: any): void
  submit(): Promise<boolean>
}

class TFInsurance implements IInsurance {
  id = 666
  status = 'ok'
  private vehicle: any

  setVehicle(vehicle: any): void {
    this.vehicle = vehicle
  }

  async submit(): Promise<boolean> {
    const res = await fetch('', {
      method: 'POST',
      body: JSON.stringify({vehicle: this.vehicle})
    })
    const data = await res.json()
    return data.isSuccess;
  }
}

class ABInsurance implements IInsurance {
  id = 777
  status = 'done'
  private vehicle: any

  setVehicle(vehicle: any): void {
    this.vehicle = vehicle
  }

  async submit(): Promise<boolean> {
    const res = await fetch('ab', {
      method: 'POST',
      body: JSON.stringify({vehicle: this.vehicle})
    })
    const data = await res.json()
    return data.isSuccess;
  }
}

const INSURANCE_TYPE = {
  tf: TFInsurance,
  ab: ABInsurance
}
type IT = typeof INSURANCE_TYPE

class InsuranceFactory {
  db: any

  createInsurance<T extends keyof IT>(type: T): IT[T] {
    return INSURANCE_TYPE[type]
  }

  saveHistory(ins: IInsurance) {
    this.db.save(ins.id, ins.status)
  }
}

const insuranceFactory = new InsuranceFactory()
const ins2 = new (insuranceFactory.createInsurance('tf'))
insuranceFactory.saveHistory(ins2)