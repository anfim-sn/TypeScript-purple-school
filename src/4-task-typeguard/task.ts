interface IPayment {
  sum: number
  from: number
  to: number
}

enum PaymentStatus {
  SUCCESS = 'success',
  FAILED = 'failed'
}

interface IPaymentRequest extends IPayment { }

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

type f = (res: IResponseSuccess | IResponseFailed) => number
type Res = IResponseSuccess | IResponseFailed


function isSuccess(res: Res): res is IResponseSuccess {
  return res.status === PaymentStatus.SUCCESS
}

function getIdFromData(res: Res): number {
  if (isSuccess(res)) {
    return res.data.databaseId
  } else {
    throw new Error(res.data.errorMessage);
  }
}