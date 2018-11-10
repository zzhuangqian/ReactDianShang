import MUtil from 'util/mm.jsx'
const _mm = new MUtil()

export default class User {
    login(loginInfo){
        return _mm.request({
            type:'post',
            url:'/manage/user/login.do',
            data:loginInfo
        })
    }
    checkLogInfo(loginInfo){
       let {username , password} = loginInfo
       if(typeof username !== 'string' || username.length === 0 ){
           return {
               status:false,
               msg:'用户名不能为空！'
           }
       }
       if(typeof password !== 'string' || password.length === 0){
           return {
               status:false,
               msg:'密码不能为空'
           }
       }
       return {
           status:true,
           msg:'验证通过'
       }
    }
    logout(){
        return _mm.request({
            type:'post',
            url:'/user/logout.do'
        })
    }
    getUserList(pageNum){
        return _mm.request({
            type:'post',
            url:'/manage/user/list.do',
            data:{
                pageNum:pageNum
            }
        })
    }
}