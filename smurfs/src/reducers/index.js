import {
    ADDING_SMURF,
    ADDING_SMURF_SUCCESS,
    ADDING_SMURF_FAILURE,

    GETTING_SMURFS,
    GETTING_SMURFS_SUCCESS,
    GETTING_SMURFS_FAILURE,

    UPDATE_SMURF,
    UPDATING_SMURF,
    UPDATING_COMPLETE,

    DELETE_SMURF,
    DELETING_SMURF,
    DELETING_COMPLETE,

    ERROR_HANDLE
} from '../actions/smurfActions'

const initialState = {
    smurfs: [],
    fetchingSmurfs: false,
    addingSmurf: false,
    error: null
}

export default function (state = initialState, action) {
    switch (action.type) {
        case ADDING_SMURF:
            return { ...state, addingSmurf: true }
        case ADDING_SMURF_SUCCESS:
            return { ...state, smurfs: action.payload, addingSmurf: false }
        case ADDING_SMURF_FAILURE:
            const ADDING_SMURF_ERROR = `Smurf Creation Error: \n${action.payload}`
            return { ...state, error: ADDING_SMURF_ERROR }

        case GETTING_SMURFS:
            return { ...state, fetchingSmurfs: true }
        case GETTING_SMURFS_SUCCESS:
            return { ...state, smurfs: action.payload, fetchingSmurfs: false }
        case GETTING_SMURFS_FAILURE:
            const GETTING_SMURFS_ERROR = `API Retrieval Error: \n${action.payload}`
            return { ...state, error: GETTING_SMURFS_ERROR }

        case UPDATE_SMURF:
            return {}
        case UPDATING_SMURF:
            return { ...state, updatingSmurf: true }
        case UPDATING_COMPLETE:
            return { ...state, updatingSmurf: false }

        case DELETE_SMURF:
            return {}
        case DELETING_SMURF:
            return { ...state, deletingSmurf: true }
        case DELETING_COMPLETE:
            return { ...state, deletingSmurf: false }

        case ERROR_HANDLE:
            return { ...state, error: action.payload }

        default:
            return state
    }
}