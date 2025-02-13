class baseResult {

    constructor(code,msg,data) {
        this.code = code;
        this.msg = msg;
        this.data = data
    }
    setCode(code) {
        this.code = code;
    }
    getCode() {
        return this.code;
    }
    setMsg(msg) {
        this.msg = msg;
    }
    getMsg() {
        return this.msg;
    }
    setData(data) {
        this.data = data;
    }
    getData() {
        return this.data;
    }

    getResult() {
        return {'code':this.code,'msg':msg,'data':data};
    }
}
//export  default baseResult;

export default  {
    SUCCESS:new baseResult(200, "successful operation",{}),
    // user 部分
    USER_INVALID_NAME_PASSWD:new baseResult(400,"Invalid username/password supplied"),
    USER_IPV4_ERROR:new baseResult(401,"IPv4_address must be supplied"),

    USER_NAME_ALREADY_TOKEN:new baseResult(400,"user name already taken."),
    USER_MANDATORY_FIELD_EXCEPTION: new baseResult(401,"user first name, last name, email address and contact no. fields are mandatory."),
    USER_TERMS_EXCEPTION:new baseResult(402,"user must accept terms and conditions."),
    USER_NOT_ACCEPT_ROBOT:new baseResult(403,"system does not accept robot."),

    USER_VERITY_INVALID:new baseResult(421,'Verification Code is invalid.'),
    USER_VERITY_EXPIRED:new baseResult(422,'Verification Code expired.')

};
