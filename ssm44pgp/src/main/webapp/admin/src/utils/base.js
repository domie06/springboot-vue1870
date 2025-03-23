const base = {
    get() {
                return {
            url : "http://localhost:8080/ssm44pgp/",
            name: "ssm44pgp",
            // 退出到首页链接
            indexUrl: 'http://localhost:8080/ssm44pgp/front/index.html'
        };
            },
    getProjectName(){
        return {
            projectName: "绿色农产品推广应用网站"
        } 
    }
}
export default base
