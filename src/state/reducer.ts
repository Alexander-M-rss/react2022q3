import React from 'react';
import { IPersonCardProps } from '../components/personCard';
import { IFormValues } from 'components/formTypes';
import { IItemData, SORTING, DEFAULT_PER_PAGE } from 'api/api';

export enum ACTION {
  addPersonCard = 'addPersonCard',
  saveFormValues = 'saveFormValues',
  saveItemsData = 'saveItemsData',
  setDetailsIdx = 'setDetailsIdx',
  resetDetailsIdx = 'resetDetailsIdx',
}

interface IItemsPayload {
  itemsData: IItemData[];
  errMsg: string;
  pages: number;
  search?: string;
  sorting?: SORTING;
  page?: number;
  itemsPerPage?: number;
}

export interface IAction {
  type: ACTION;
  payload?: IPersonCardProps | IFormValues | IItemsPayload | number;
}

export interface IGlobalState {
  personCards: IPersonCardProps[];
  formValues?: IFormValues;
  itemsData?: IItemData[];
  errMsg: string;
  search: string;
  pages: number;
  sorting: SORTING;
  itemsPerPage: number;
  page: number;
  detailsIdx: number;
}

export const initialGlobalState: IGlobalState = {
  personCards: [],
  errMsg: '',
  search: '',
  pages: 1,
  sorting: SORTING.nameAsc,
  itemsPerPage: DEFAULT_PER_PAGE,
  page: 1,
  detailsIdx: -1,
};

const reducer: React.Reducer<IGlobalState, IAction> = (
  globalState: IGlobalState,
  action: IAction
) => {
  const { type, payload } = action;

  switch (type) {
    case ACTION.addPersonCard:
      return {
        ...globalState,
        personCards: [...globalState.personCards, payload as IPersonCardProps],
      };
    case ACTION.saveFormValues:
      return {
        ...globalState,
        formValues: payload as IFormValues,
      };
    case ACTION.saveItemsData:
      return {
        ...globalState,
        ...(payload as IItemsPayload),
      };
    case ACTION.setDetailsIdx:
      return {
        ...globalState,
        detailsIdx: payload as number,
      };
    case ACTION.resetDetailsIdx:
      return {
        ...globalState,
        detailsIdx: -1,
      };
    default:
      return globalState;
  }
};

export default reducer;
