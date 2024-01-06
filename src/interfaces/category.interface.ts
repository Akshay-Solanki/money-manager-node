// Interfaces
import { IBaseQueryParams } from './common.interface';

export interface ICreateCategory {
  name: string;
  type: string;
}

export interface IUpdateCategory {
  id: number;
  name: string;
  type: string;
}

export interface ICategoryQueryParams extends IBaseQueryParams {
  keyword?: string;
}
