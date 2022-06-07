# context API :

-> A single place to manage related information : Relica for Redux
process:
createContext
Provider
-data
Wrap application provider
useContext

# useReducer :

-> A function to manage state

# Redux-1 :

-> It is a single place to manage all information.
-actions
-dispatch -
By Rovin Singh

- cmd: `npm i redux react-redux`
- create Reducer Function
- createStore and Pass Reducer Function and initialState to it.
- wrap our Application ReduxeProvider and pass store to it.
- using useDispatch and useSelector in our application
  - useDispatch to perform action
  - useSelector for reading data from store
