import { AsyncStatusEnum } from '../../enums/asyncStatusEnum'
import {FactModel} from '../fact.model'

export class  FactState {
    content: FactModel[]|null
    status: AsyncStatusEnum
  }