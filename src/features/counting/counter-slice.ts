import { Counter } from '@/types';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface State {
  list: Counter[];
}

const initialState: State = {
  list: [],
};

const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    addItems(state, action: PayloadAction<State['list']>) {
      state.list.push(...action.payload);
    },
    removeItems(state, action: PayloadAction<Counter['id'][] | undefined>) {
      if (!action.payload) state.list = initialState.list;
      else
        action.payload.forEach((id) => {
          const index = state.list.findIndex((item) => item.id === id);
          index && state.list.splice(index, 1);
        });
    },
  },
});

export const { addItems, removeItems } = counterSlice.actions;
export default counterSlice.reducer;
