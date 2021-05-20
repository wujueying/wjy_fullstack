import { GETRECOMMENDPLAYLIST } from "../constants/song";
import { songType } from '../constants/commonType';

const INITIAL_STATE: songType = {
    recommendPlayList: []
}

export default function song(state = INITIAL_STATE, action) {
    switch(action.type) {
        case GETRECOMMENDPLAYLIST:
            const { recommendPlayList } = action.payload;
            return {
                ...state,
                recommendPlayList
            }
            break;
        default:
            return state
    }
}