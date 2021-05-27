import  { songType } from '../constants/commonType';
import {UPDATEPLAYSTATUS, GETRECOMMENDPLAYLIST} from '../constants/song';

const INITIAL_STATE: songType = {
    isPlaying: false,
    recommendPlayList: [] 
}

export default function song(state = INITIAL_STATE, action){
    switch(action.type) {
        case GETRECOMMENDPLAYLIST:
            const {recommendPlayList} = action.payload
            return {
                ...state,
                recommendPlayList 
            }
        case UPDATEPLAYSTATUS:
            const { isPlaying } = action.payload
            return {
                ...state,
                isPlaying
            }
        default:
            return state 
    }
}