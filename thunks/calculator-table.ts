import { calculatorTableApi } from '@/api/calculator-table-api';
import { slice } from '../slices/calculator-table';
import { AppThunk } from '../store';

export const getPriceTable = (): AppThunk => async (dispatch): Promise<void> => {
    const response = await calculatorTableApi.getCalculatorTable();
    dispatch(slice.actions.getPriceTable(response));
};