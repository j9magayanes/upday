import {  ADD_CATEGORY, ADD_COUNTRY, REMOVE_CATEGORY, REMOVE_COUNTRY, LOAD_DATA} from './actionCreators';

const initialState = {
    country: "",
    category: "",
    data: [],
}

export function categoryReducer( state = initialState, action) {

    switch(action.type) {
        case ADD_CATEGORY:
            var newState = {...state};
            return {
                ...newState,
                category: action.category
            };
        case REMOVE_CATEGORY:
            var newState = {...state};
            return {
                ...newState,
                category: ''
            };
        default: 
            return state;
    }
}

export function countryReducer( state = initialState, action) {

    switch(action.type) {
        case ADD_COUNTRY:
            var newState = {...state};
            return {
                ...newState,
                country: action.country
            }
            case REMOVE_COUNTRY:
                var newState = {...state};
                return {
                    ...newState,
                    country: undefined
                };
        default: 
            return state;
    }
}

export function dataReducer( state = initialState, action) {

    switch(action.type) {
        case LOAD_DATA:
            var newState = {...state};
            return {
                ...newState,
                availableData: action.data,
              };
        default: 
            return state;
    }
}

