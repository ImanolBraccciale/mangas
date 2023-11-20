import { combineReducers } from 'redux';
import { ALL_MANGAS, MANGAS_ID, MANGAS_NAME } from '../actiontypes';
 
export const initialState = {
    mangas: [],
    mangaID: null,
    mangaName: '',
  };

  
export const mangasReducer = (state = initialState, action:any) => {
    switch (action.type) {
      case ALL_MANGAS:
        return {
          ...state,
          mangas: action.payload,
        };
      case MANGAS_ID:
        return {
          ...state,
          mangaID: action.payload,
        };
      case MANGAS_NAME:
        return {
          ...state,
          mangaName: action.payload,
        };
      default:
        return state;
    }
  };

const rootReducer = combineReducers({
 
});

export default rootReducer;