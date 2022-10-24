interface IPayment {
  sum: number
  from: number
  to: number
}

enum PaymentStatus {
  SUCCESS = 'success',
  FAILED = 'failed'
}

interface IPaymentRequest extends IPayment{}

interface ISuccessData extends IPayment {
  databaseId: number
}

interface IFailedData {
  errorMessage: string
  errorCode: number
}

interface IResponseSuccess {
  status: PaymentStatus.SUCCESS
  data: ISuccessData
}

interface IResponseFailed {
  status: PaymentStatus.FAILED
  data: IFailedData
}

// ---------------------------------

const request: IPaymentRequest = {
  sum: 10000,
  from: 2,
  to: 4
}

const responseSucess: IResponseSuccess = {
  status: PaymentStatus.SUCCESS,
  data: {
    databaseId: 657,
    sum: 10000,
    from: 2,
    to: 4
  }
}

const responseFailed: IResponseFailed = {
  status: PaymentStatus.FAILED,
  data: {
    errorMessage: 'Not enough of money',
    errorCode: 4
  }
}