
//项目域名
var rootDomain = "https://1000z1000p.com/bennj_server"
  //通用模块 
var kUser_Common_API = "common_execute.action"
    /**用户模块 */
var kUser_Execute_API = "user_execute.action"
      /**修改头像 */
var kUser_UploadFile_API = "user_uploadFile.action"
        /**店铺模块 */
var KUser_Shop_API = "shop_execute.action"
          /**购物模块 */
var kUSer_Trade_API = "trade_execute.action"

module.exports={
  rootDomain: rootDomain,
  common_API: kUser_Common_API,
  execute_API :kUser_Execute_API,
  uploadFile_API : kUser_UploadFile_API,
  shop_API : KUser_Shop_API,
  trade_API : kUSer_Trade_API
}