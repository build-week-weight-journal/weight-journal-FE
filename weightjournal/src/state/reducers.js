import * as types from "./actionTypes";

export const userReducer = (
  state = { gettingUser: false, updatingUser: false, user: [], error: null },
  action
) => {
  switch (action.type) {
    case types.GET_USER:
      return { ...state, gettingUser: true };
    case types.UPDATE_USER:
      return { ...state, updatingUser: true };
    // case types.DELETE_USER:
    //   return {...state , deletingUser:true};
    case types.SUCCESS:
      return {
        ...state,
        user: action.payload,
        gettingUser: false,
        updatingUser: false,
        error: null
      };
    case types.FAILURE:
      return {
        ...state,
        error: action.payload,
        gettingUser: false,
        updatingUser: false
      };
    default:
      return state;
  }
};

export const loginReducer = (
  state = {
    loggingIn: false,
    loggingOut: false,
    isLoggedIn: localStorage.getItem("token") && true,
    error: null
  },
  action
) => {
  switch (action.type) {
    case types.LOGIN:
      return { ...state, loggingIn: true };
    case types.LOGOUT:
      return { ...state, loggingOut: true };
    case types.SUCCESS:
      return {
        ...state,
        loggingIn: false,
        loggingOut: false,
        isLoggedIn: true,
        error: null
      };
    case types.FAILURE:
      return {
        ...state,
        loggingIn: false,
        loggingOut: false,
        error: action.payload
      };
    default:
      return state;
  }
};

export const exercisesReducer = (
  state = {
    addingExercise: false,
    fetchingExercises: false,
    deletingExercise: false,
    exercises: [],
    error: '',
  },
  action
) => {
  switch (action.type) {
    case types.ADD_EXERCISE:
      return {
        ...state,
        addingExercise: true
      };
    case types.FETCH_EXERCISES:
      return {
        ...state,
        fetchingExercises: true
      };
    case types.DELETE_EXERCISE:
      return {
        ...state,
        deletingExercise: true
      };
    case types.SUCCESS:
      return {
        ...state,
        exercises: action.payload,
        addingExercise: false,
        fetchingExercises: false,
        deletingExercise: false,
        error: null
      };
    case types.FAILURE:
      return {
        ...state,
        addingExercise: false,
        fetchingExercises: false,
        deletingExercise: false,
        error: action.payload
      };
    default:
      return state;
  }
};
export const exeReducer = (
  state = {
    gettingExercise: "initial",
    updatingExercise: false,
    addingWorkout: false,
    deletingWorkout: false,
    error: null,
    exercise: [],
  },
  action
) => {
  switch (action.type) {
    case types.GET_EXERCISE:
      return {
        ...state,
        gettingExercise: true
      };
    case types.SUCCESSFUL:
      return {
        ...state,
        exercise: action.payload,
        gettingExercise: false,
        updatingExercise: false,
        addingWorkout: false,
        deletingWorkout: false,
        error: null
      };
    case types.FAILURE:
      return {
        ...state,
        gettingExercise: false,
        updatingExercise: false,
        addingWorkout: false,
        deletingWorkout: false,
        error: action.payload
      };
    default:
      return state;
  }
};

