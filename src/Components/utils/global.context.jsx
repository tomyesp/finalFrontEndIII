import { createContext, useEffect, useReducer } from "react";
import axios from "axios";

export const initialState = {
  theme: "light",
  data: [],
  loading: false,
  error: null
}

export const reducer = (state, action) => {
  switch (action.type) {
    case "GetDataFromAPI_LOADING":
      return { ...state, loading: true, error: null };
    case "GetDataFromAPI_SUCCESS":
      return { ...state, data: action.payload, loading: false, error: null };
    case "GetDataFromAPI_ERROR":
      return { ...state, loading: false, error: action.payload };
    case "ChangeTheme":
      return { ...state, theme: state.theme === "light" ? "dark" : "light" };
    default:
      return state;
  }
};

export const ContextGlobal = createContext(undefined);

export const ContextProvider = ({ children }) => {

  const [state, dispatch] = useReducer(reducer, initialState)

  useEffect(() => {
    // solicitud GET a la API para obtener la lista de dentistas
    dispatch({ type: "GetDataFromAPI_LOADING" });
    axios
      .get('https://jsonplaceholder.typicode.com/users')
      .then((response) => {
        dispatch({ type: "GetDataFromAPI_SUCCESS", payload: response.data });
      })
      .catch((error) => {
        console.error('Error al obtener dentistas:', error);
        dispatch({ type: "GetDataFromAPI_ERROR", payload: error });
      });
  }, []);


  return (
    <ContextGlobal.Provider value={{state, dispatch}}>
      {children}
    </ContextGlobal.Provider>
  );
};
