import MUtil from 'util/mm.jsx'
const _mm = new MUtil()
export default class Statistic{
    getHomeCount(loginInfo){
        return _mm.request({
            url:'/manage/statistic/base_count.do'          
        })
    }
}