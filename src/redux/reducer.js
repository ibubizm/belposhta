const initialState = {
    data: [],
    language: 'rus',
    currentDir: [],
    currentPage: {}
}


export function ItemReducer(state = initialState, action) {
    switch (action.type) {
        case 'LANGUAGE':
            return {
                ...state,
                language: action.payload
            }
        case 'DATA':
            return {
                ...state,
                data: action.payload
            }
        case 'CURRENT_DIR':
            return {
                ...state,
                currentDir: action.payload
            }

        case 'CURRENT_PAGE':
            return {
                ...state,
                currentPage: action.payload
            }
        default:
            return state;
    }
}

export const getData = (data) => ({
    type: 'DATA',
    payload: data
})

export const setLanguage = (lan) => ({
    type: 'LANGUAGE',
    payload: lan
})

export const getChildItems = (dir) => ({
    type: 'CURRENT_DIR',
    payload: dir
})

export const getCurrentPage = (page) => ({
    type: 'CURRENT_PAGE',
    payload: page
})