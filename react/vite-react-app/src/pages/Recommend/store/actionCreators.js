// 与API 通信的地方
import {getBannerRequest} from '../../../api/request';

// com useEffect -> action -> api then-> dispatch(action-type) 
// -> reducer -> 新的值
export const changeBannerList = (data) => ({
    type: 'CHANGE_BANNER',
    data: data
})

export const getBannerList = () => {
    return (dispatch) => {
        getBannerList()
          .then(data => {
            //   dispatch 是有格式要求的
              dispatch(changeBannerList(data.banners))
          })
    }
}