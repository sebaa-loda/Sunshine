import { GET_FORECAST} from "./actionsTypes";

const initialState = {
  forecast: {},
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_FORECAST:
      return {
        ...state,
        forecast: action.payload,
      };
    //   case GET_POKEMON_BY_ID:
    //     return {
    //       ...state,
    //       pokemonDetail: action.payload,
    //     };
    //   case GET_POKEMON_BY_NAME:
    //     return {
    //       ...state,
    //       pokemons: action.payload,
    //     };
    //   case CLEAR:
    //     return {
    //       ...state,
    //       pokemonDetail: action.payload,
    //     };
    //   case GET_TYPES:
    //     return {
    //       ...state,
    //       types: action.payload,
    //     };
    //   case ADD_TYPE_FILTER:
    //     return {
    //       ...state,
    //       typeFilter: [...state.typeFilter, action.payload],
    //     };
    //   case REMOVE_TYPE_FILTER:
    //     return {
    //       ...state,
    //       typeFilter: state.typeFilter.filter((type) => type !== action.payload),
    //     };
    //   case POST_POKEMON:
    //     return {
    //       ...state,
    //       pokemons: [...state.pokemons, action.payload]
    //     };
    //   case SET_ORIGIN_FILTER:
    //     return {
    //       ...state,
    //       allPokemons: action.payload,
    //     };
    //   case SET_ORDER:
    //     return{
    //       ...state,
    //       orderPokemons: action.payload,
    //     }
    //   case SET_PAGE:
    //     return{
    //       ...state,
    //       page: action.payload,
    //     }
    default:
      return { ...state };
  }
};

export default reducer;
