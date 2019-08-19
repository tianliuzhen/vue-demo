/*
 * @Author: 李晟
 * @Date: 2019-01-07 18:33:05
 * @LastEditors: 李晟(lsenjoy@qq.com)
 * @LastEditTime: 2019-02-18 14:26:00
 * @Description: 全部按钮权限，便于开发自测，新增时最好加上注释。
 */
/* eslint-disable */

const allRoles = [
  // menu
  'systemSetting',          //  系统设置      @顶级                   menu
  'organize',               //  组织架构      @系统设置                   menu
  'users',                  //  用户管理      @系统设置                   menu
  'roles',                  //  角色管理      @系统设置                   menu
  'resources',              //  资源管理      @系统设置                   menu
  'goodsCenter',            //  商品中心      @顶级                   menu
  'goodsBase',              //  商品基础      @商品中心                   menu
  'goodsAdd',               //  新增商品      @商品基础                   menu
  'goodsList',              //  商品列表      @商品基础                   menu
  'goodsOutList',           //  下架商品      @商品基础                   menu
  'goodsStock',             //  商品库存      @商品基础                   menu
  'goodsEdit',              //  编辑商品      @商品基础                   menu
  'goodsInfo',              //  商品详情      @商品基础                   menu
  'goodsSetting',           //  商品设置      @商品中心                   menu
  'goodsBrand',             //  商品品牌      @商品设置                   menu
  'goodsCat',               //  商品分类      @商品设置                   menu
  'goodsAttr',              //  商品规格      @商品设置                   menu
  'goodsLabel',             //  商品标签      @商品设置                   menu
  'goodsInstruction',       //  商品说明      @商品设置                   menu
  'goodsShipArea',          //  不配送区域    @商品设置                   menu
  'goodsRecommend',         //  商品推荐      @商品中心                   menu
  'goodsHotPush',           //  商品热推      @商品推荐                   menu
  'goodsCatPush',           //  分类推荐      @商品推荐                   menu
  'pushGoodsList',          //  推荐商品列表  @商品推荐                   menu
  'freightTpl',             //  运费模板      @商品中心                   menu
  // button
  'userAdd',                //  用户新增      @用户管理
  'userEdit',               //  用户编辑      @用户管理
  'userStatus',             //  用户停用      @用户管理
  'userEditRole',           //  用户编辑权限   @用户管理
  'roleAdd',                //  角色添加      @角色管理
  'roleEdit',               //  角色编辑      @角色管理
  'copyResources',          //  复制权限      @角色管理
  'roleDelete',             //  角色删除      @角色删除
  'resourceAdd',            //  资源添加      @资源管理
  'resourceEdit',           //  资源编辑      @资源管理
  'resourceAddChild',       //  资源新增子资源 @资源管理
  'resourceDelete',         //  资源删除      @资源删除
  'userSet',                //  个人设置      @顶级
  'goodsDelete',            //  商品删除      @商品列表
  'goodsOut',               //  商品下架      @商品列表
  'goodsModifyCat',         //  修改分类      @商品列表
  'goodsShelve',            //  商品上架      @下架商品
  'goodsOutDelete',         //  下架商品删除   @下架商品
  'goodsStockImport',       //  商品库存导入   @商品库存
  'goodsStockExport',       //  商品库存导出   @商品库存
  'goodsStockModify',       //  商品库存修改   @商品库存
  'brandAdd',               //  新增品牌      @商品品牌
  'brandEdit',              //  品牌编辑      @商品品牌
  'brandDelete',            //  品牌删除      @商品品牌
  'catAdd',                 //  新增主类目    @商品分类
  'catEdit',                //  分类修改      @商品分类
  'catDelete',              //  分类删除      @商品分类
  'catAddChild',            //  分类新增子类   @商品分类
  'associatedAttr',         //  关联规格      @商品分类
  'attrAdd',                //  新增规格      @商品规格
  'attrEdit',               //  规格编辑      @商品规格
  'attrDelete',             //  规格删除      @商品规格
  'labelCatAdd',            //  创建标签类型   @商品标签
  'labelAdd',               //  标签添加      @商品标签
  'labelEdit',              //  标签编辑      @标签编辑
  'labelDelete',            //  标签删除      @标签删除
  'instructionAdd',         //  新增说明      @商品说明
  'instructionEdit',        //  说明编辑      @商品编辑
  'instructionDelete',      //  说明删除      @商品删除
  'areaAddTemplate',        //  新增模版      @不配送区域
  'distributionAreaEdit',   //  配送区域编辑   @不配送区域
  'distributionAreaDelete', //  配送区域删除   @不配送区域
  'hotPushAdd',             //  商品热推新增   @商品热推
  'hotPushSort',            //  商品热推排序   @商品热推
  'hotPushEdit',            //  商品热推编辑   @商品热推
  'hotPushDelete',          //  商品热推删除   @商品热推
  'catPushAdd',             //  分类推荐新增   @分类推荐
  'catPushStateChange',     //  分类推荐状态   @分类推荐
  'editPushCat',            //  编辑推荐分类   @分类推荐
  'catPushEdit',            //  分类推荐编辑   @分类推荐
  'catPushDelete',          //  分类推荐删除   @分类推荐
  'pushGoodsAdd',           //  添加推荐商品   @推荐商品列表
  'pushGoodsDelete',        //  删除推荐商品   @推荐商品列表
  'pushGoodsSort',          //  推荐商品排序   @推荐商品列表
  'freightTplAdd',          //  新增模板      @运费模板
  'freightTplEdit',         //  编辑模板      @运费模板
  'freightTplDelete'        //  删除模板       @运费模板
]

export default allRoles
