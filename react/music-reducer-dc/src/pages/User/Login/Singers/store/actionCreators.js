import {
    CHANGE_ARTIST,
    CHANGE_ENTER_LOADING,
    CHANGE_SONGS_OF_ARTIST,
} from './constants';
import {getSingerInfoRequest} from ''
import {fromJS} from 'immutable';

export const changeArtist = (data) => ({
    type: CHANGE_ARTIST,
    data: fromJS(data)
})
export const changeSongs = (data) => ({
    type: CHANGE_SONGS_OF_ARTIST,
    data
})

export const changeEnterLoading = (data) => ({
    type: CHANGE_ENTER_LOADING,
    data
})

export const getSingerInfo = (id) => {
    return dispatch => {
        getSingerInfoRequest(id)
        .then(data => {
            dispatch(changeArtist(data.artist));
            dispatch(changeSongs(data.hotSongs));
            dispatch(changeEnterLoading(false));
        })
    }
}