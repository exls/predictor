import { IPrediction } from './IPrediction'

export interface IPredictions {
  [path: string]: {
    prediction: IPrediction
    count: number
  }
}
