import { createSlice, configureStore} from '@reduxjs/toolkit'


export const counterSlice = createSlice({
  name: 'counter',
  initialState: {value: 0},
  reducers: {
    up: (state,action)=>{
      state.value += action.payload
    },
    down: (state, action) =>{
      state.value -= action.payload
    },
    set: (state, action) =>{
      state.value = action.payload
    }
    }
})

export const store = configureStore({
  reducer: {
    counter: counterSlice.reducer
  }
})

export type RootState = ReturnType<typeof store.getState>
