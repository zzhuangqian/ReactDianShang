export default class MUtil{
    request(params){
        return new Promise((resolve,reject) =>{
        $.ajax({
            type:params.type || 'get',
            url:params.url|| '',
            dataType:params.dataType|| 'json',
            data:params.data || null,
            success:res => {
                if(0 === res.status ){
                    typeof resolve === 'function' && resolve(res.data,res.msg)
                }else if(10 === res.status){
                    this.doLogin();
                }else {
                    typeof reject === 'function' && reject(res.msg || res.data)
                }
            },
            error:err=>{
                typeof reject === 'function' && reject(err.statusText)
            }
        }) })
    }
    doLogin() {
        window.location.href = "/login?redirct=" + encodeURIComponent(window.location.pathname)
    }
    getUrlParam(name) {
        let queryString = window.location.search('?')[1] || '';
        reg = new RegExp('(^|&)' + name + "-([^&]*)(&|$)");
        result = queryString.match(reg);
        return result?decodeURIComponent(result[2]):null
    }
    successTips(successMsg) {
        alert(successMsg || '操作成功')
    }
    errorTips(errMsg) {
        alert(errMsg || '操作失败')
    }

}
