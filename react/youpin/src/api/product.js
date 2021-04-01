import axios from 'axios'

export default {
    // es6 id 默认值 如果不传值的话 id就默认为0
    info(id=0) {
        return axios.get('/product/info',{
            params:{
                id
            }
        })
    }
}

