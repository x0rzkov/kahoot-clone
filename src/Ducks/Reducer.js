const initialState = {
    quiz: {},
    nickname: '',
    selectedPin: 0,
    quizToEdit: {}
}

const SELECTED_QUIZ = 'SELECTED_QUIZ'
const NEW_NICKNAME = 'NICKNAME'
const SELECTED_PIN = 'SELECTED_PIN'
const SELECTED_EDIT = 'SELECTED_EDIT'

export default function reducer(state = initialState, action){
    switch (action.type) {
        case SELECTED_QUIZ:
            return Object.assign({}, state, {quiz: action.payload})
        case NEW_NICKNAME:
            return Object.assign({}, state, {nickname: action.payload})
        case SELECTED_PIN:
            return Object.assign({}, state, {selectedPin: action.payload})
    
        default:
            break;
    }
}


export function selectedQuiz(quiz){
    return{
        type: SELECTED_QUIZ,
        payload: quiz
    }
}
export function handleNickname(nickname){
    return{
        type: NEW_NICKNAME,
        payload: nickname
    }
}
export function selectedPin(pin){
    return{
        type: SELECTED_PIN,
        payload: pin
    }
}
export function editingQuiz(quiz){
    return {
        type: SELECTED_EDIT,
        payload: quiz
    }
}