/*
 * @Author: 李晟
 * @Date: 2019-01-08 11:07:32
 * @LastEditors: 罗杰
 * @LastEditTime: 2019-08-07 09:22:42
 * @Description: 菜单栏路由数据，替换 initMenuAndCode 接口的 菜单数据，便于开发自测。
 */
/* eslint-disable */

// 参数说明：
// router: 将转换为 vue router 对象的 path 和 meta 里的 icon 参数
// name: vue router 对象的 name, meta 里的 title, 可决定标签页名称、影响缓存页
// children: 子集，如有值 结构需遵循相同规范，目前只能有两层children 也就是三级菜单
// hidden: 为 true 时该路由不会在菜单栏显示
// dynamic: 有值时表示当前路由为动态路由，值为动态参数的参数名称

const getRouter = [
  {
    'router': 'userCenter',
    'name': '用户中心',
    'children': [{
      'router': 'memberManagement',
      'name': '会员中心'
    },
    {
      'router': 'splManagement',
      'name': '供应商管理',
      'children': [{
        'router': 'splAuditList',
        'name': '供应商审核'
      },
      {
        'router': 'splList',
        'name': '供应商列表'
      }]
    },
    {
      'router': 'dtbManagement',
      'name': '分销商管理'
    }]
  },
  {
    'router': 'goodsCenter',
    'name': '商品中心',
    'children': [{
      'router': 'goodsBase',
      'name': '商品基础',
      'children': [{
        'router': 'goodsAdd',
        'name': '新增商品'
      }, {
        'router': 'goodsEdit',
        'name': '编辑商品',
        'hidden': true,
        'dynamic': 'id'
      }, {
        'router': 'goodsList',
        'name': '商品列表'
      }, {
        'router': 'goodsOutList',
        'name': '下架商品列表'
      }, {
        'router': 'goodsStock',
        'name': '商品库存'
      }, {
        'router': 'goodsInfo',
        'name': '商品详情',
        'hidden': true,
        'dynamic': 'id'
      }]
    },
    {
      'router': 'goodsSetting',
      'name': '商品设置',
      'children': [{
        'router': 'goodsBrand',
        'name': '商品品牌'
      }, {
        'router': 'goodsCat',
        'name': '商品分类'
      }, {
        'router': 'goodsAttr',
        'name': '商品规格'
      }, {
        'router': 'goodsLabel',
        'name': '商品标签'
      }, {
        'router': 'goodsInstruction',
        'name': '商品说明'
      }, {
        'router': 'goodsShipArea',
        'name': '不配送区域'
      }]
    },
    {
      'router': 'goodsRecommend',
      'name': '商品推荐',
      'children': [{
        'router': 'goodsHotPush',
        'name': '商品热推'
      }, {
        'router': 'goodsCatPush',
        'name': '分类推荐'
      }, {
        'router': 'pushGoodsList',
        'name': '推荐商品列表',
        'hidden': true,
        'dynamic': 'id'
      }]
    },
    {
      'router': 'freightTpl',
      'name': '运费模板'
    }]
  },
  {
    'router': 'systemSetting',
    'name': '系统设置',
    'children': [{
      'router': 'organize',
      'name': '组织架构'
    }, {
      'router': 'users',
      'name': '用户管理'
    }, {
      'router': 'root',
      'name': '角色管理',
      'children': [
        {
          'router': 'rootlist',
          'name': '角色列表'
        },
        {
          'router': 'addroot',
          'name': '添加角色'
        },{
          'router': 'editroot',
          'name': '编辑角色',
          'hidden': true
        }
      ]
    }, {
      'router': 'setting',
      'name': '个人设置',
      'hidden': true
    }, {
      'router': 'resources',
      'name': '资源管理'
    }]
  },
  {
    'router': 'orderCenter',
    'name': '订单中心',
    'children': [
      {
        'router': 'orderManagement',
        'name': '订单管理',
        'children': [
          {
            'router': 'orderQuick',
            'name': '订单速查'
          },
          {
            'router': 'unpaidOrders',
            'name': '未付款订单'
          },
          {
            'router': 'confirmedOrder',
            'name': '待确认订单'
          },
          {
            'router': 'standbyOrder',
            'name': '待发货订单'
          },
          {
            'router': 'deliveryOrder',
            'name': '已发货订单'
          },
          {
            'router': 'completedOrder',
            'name': '已完成订单'
          },
          {
            'router': 'cancelledOrder',
            'name': ' 已取消订单'
          },
          {
            'router': 'createAfter',
            'name': '开通售后'
          },
          {
            'router': 'orderDetail',
            'name': '订单详情',
            'hidden': true,
            'dynamic': 'id'
          },
          {
            'router': 'orderDelivery',
            'name': '订单发货',
            'hidden': true
          },
          {
            'router': 'deliveryDetail',
            'name': '发货信息',
            'hidden': true
          },
          {
            'router': 'operationRecord',
            'name': '操作记录',
            'hidden': true
          }
        ]
      },
      {
        'router': 'purchasingOrderManagement',
        'name': '采购单管理',
        'children': [
          {
            'router': 'purchaseOrdersList',
            'name': '采购单列表'
          },
          {
            'router': 'directPurchaseList',
            'name': '采购直发'
          },
          {
            'router': 'supplierOrders',
            'name': '供应商订单列表'
          },
          {
            'router': 'straightSupplierOrders',
            'name': '供应商直发'
          },
          {
            'router': 'procurementDetails',
            'name': '采购单详情',
            'hidden': true,
            'dynamic': 'id'
          },
          {
            'router': 'procurementSendDetail',
            'name': '采购单直发详情',
            'hidden': true,
            'dynamic': 'id'
          },
          {
            'router': 'supplierDetails',
            'name': '供应商详情',
            'hidden': true,
            'dynamic': 'id,pid'
          }
        ]
      },
      {
        'router': 'orderAftersale',
        'name': '订单售后',
        'children': [
          {
            'router': 'AftersaleList',
            'name': '售后列表'
          },
          {
            'router': 'AftersaleDetail',
            'name': '售后详情',
            'dynamic': 'id',
            'hidden': true
          },
          {
            'router': 'waitReview',
            'name': '待审核'
          },
          {
            'router': 'waitRefundGoods',
            'name': '待退货'
          },
          {
            'router': 'waitDelivery',
            'name': '待收货'
          },
          {
            'router': 'waitRefundMoney',
            'name': '待退款'
          },
          {
            'router': 'AftersaleFinish',
            'name': '已完成'
          },
          {
            'router': 'AftersaleSupplier',
            'name': '供应商售后'
          },
          {
            'router': 'AftersaleSupplierDetail',
            'name': '供应商售后详情',
            'dynamic': 'id',
            'hidden': true
          }
        ]
      },
      {
        'router': 'orderWaring',
        'name': '订单异常',
        'children': [
          {
            'router': 'waringSetting',
            'name': '预警设置'
          },
          {
            'router': 'warningTotal',
            'name': '异常订单汇总'
          },
          {
            'router': 'confirmedWarring',
            'name': '待确认异常'
          },
          {
            'router': 'supplierOrderWaring',
            'name': '供应商订单异常'
          },
          {
            'router': 'suporderwarning',
            'name': '供应商下单异常'
          },
          {
            'router': 'deliveryWaring',
            'name': '待发货异常'
          },
          {
            'router': 'afterSaleAudit',
            'name': '售后审核异常'
          },
          {
            'router': 'afterSaleReceipt',
            'name': '售后收货异常'
          },
          {
            'router': 'purchaseReturn',
            'name': '采购应退异常'
          },
          {
            'router': 'warningExpress',
            'name': '快递异常'
          },
          {
            'router': 'depotRemainExpress',
            'name': '剩件列表'
          },
          {
            'router':'AftersaleSupplierDetail',
            'name':'供应商售后详情',
            'dynamic': 'id',
            'hidden':true           
          },
          {
            'router':'warningOrderDetail',
            'name':'供应商订单详情',
            'dynamic': 'id',
            'hidden':true           
          },
          {
            'router':'warningProcurementDetails',
            'name':'采购单详情',
            'dynamic': 'id',
            'hidden':true           
          }
        ]
      }
    ]
  },
  {
    'router': 'marketCenter',
    'name': '营销中心',
    'children': [
      {
        'router': 'promotionManagement',
        'name': '促销管理',
        'children': [
          {
            'router': 'fullReduction',
            'name': '满减/满折',
          },
          {
            'router': 'limitedPostage',
            'name': '限时包邮'
          },
          {
            'router': 'giftActivity',
            'name': '赠品活动'
          },
          {
            'router': 'convertActivity',
            'name': '换购活动'
          },
          {
            'router': 'limitedSecKill',
            'name': '限时秒杀'
          },
          {
            'router': 'groupBuying',
            'name': '拼团'
          },
          {
            'router': 'bargainActivity',
            'name': '砍价'
          }
        ]
      },
      {
        'router': 'couponManagement',
        'name': '优惠券管理',
        'children': [
          {
            'router': 'signIn',
            'name': '签到金配置',
          },
          {
            'router': 'draw',
            'name': '大转盘'
          },
          {
            'router': 'packet',
            'name': '瓜分红包'
          },
          {
            'router': 'coupon',
            'name': '优惠券'
          }
        ]
      },
      {
        'router': 'advertisement',
        'name': '广告管理',
        'children': [
          {
            'router': 'advertList',
            'name': '广告列表',
          }
        ]
      },
      {
        'router': 'evaluationment',
        'name': '评论管理',
        'children': [
          {
            'router': 'evaluationList',
            'name': '评论列表',
          }
        ]
      }
    ]
  },
  {
    'router':'account',
    'name':'结算管理',
    'children':[
      {
      'router':'general',
      'name':'综合设置',
      'children':[
          {
            'router':'paymentAccount',
            'name':'收付款账号',
          },
          {
            'router':'supplierPaymentAccount',
            'name':'供应商收付款账号',
          },
          {
            'router':'paymentPassword',
            'name':'支付密码设置',
          },
          {
            'router':'accountType',
            'name':'账号类型',
          },
          {
            'router':'supplierCreditment',
            'name':'供应商授信',
          }
    ]
      },
      {
        'router':'salesManagement',
        'name':'销售款管理',
        'children':[
            {
              'router':'unpaidManagement',
              'name':'销售未收款管理',
            },
            {
              'router':'receivedManagement',
              'name':'销售已收款管理',
            },
            {
              'router':'norefundManagement',
              'name':'销售未退款管理',
            },
            {
              'router':'refundManagement',
              'name':'销售已退款管理',
            },
            {
              'router':'salesOrderDetail',
              'name':'销售款订单详情',
              'dynamic': 'id',
              'hidden':true           
            },
            {
              'router':'orderAfterDetail',
              'name':'销售退款售后详情',
              'dynamic': 'id',
              'hidden':true           
            }]
      },
      {
        'router': 'purchaseFund',
        'name': '采购款管理',
        'children': [
          {
            'router': 'unpayList',
            'name': '未付款列表',
          },
          {
            'router': 'paidList',
            'name': '已付款列表'
          },
          {
            'router': 'paymentDetails',
            'name': '付款明细'
          },
          {
            'router': 'notRefundList',
            'name': '未退款列表'
          },
          {
            'router': 'refundList',
            'name': '已退款列表'
          },
          {
            'router': 'refundDetails',
            'name': '退款明细'
          },
          {
            'router': 'unpayDetails',
            'name': '采购订单订单详情',
            'dynamic': 'pid',
            'hidden': true
          }
        ]
      },
      {
      'router': 'directPurchaseFund',
      'name': '采购直发款管理',
      'children': [
        {
          'router': 'payLimitList',
          'name': '限时付款列表',
        },
        {
          'router': 'directUnpayList',
          'name': '未付款列表',
        },
        {
          'router': 'directPaidList',
          'name': '已付款列表'
        },
        {
          'router': 'directPaymentDetails',
          'name': '付款明细'
        },
        {
          'router': 'directNotRefundList',
          'name': '未退款列表'
        },
        {
          'router': 'directRefundList',
          'name': '已退款列表'
        },
        {
          'router': 'directRefundDetails',
          'name': '退款明细'
        },
        {
          'router': 'directUnpayDetails',
          'name': '采购订单订单详情',
          'dynamic': 'pid',
          'hidden': true
        }
      ]},
      {
      'router':'abnormal',
      'name':'异常补差',
      'children':[
        {
          'router':'abnormalComplete',
          'name':'异常补差'
        },
        {
          'router':'supplierDirectAbnormal',
          'name':'供应商直发异常'
        },
        {
          'router':'supplierNonDirect',
          'name':'供应商非直发异常'
        },      
        {
          'router':'abnormalOrderDetail',
          'name':'订单详情',
          'dynamic': 'id',
          'hidden':true           
        },
        {
          'router':'abnormalPurchaseDetail',
          'name':'采购单详情',
          'dynamic': 'id',
          'hidden':true           
        }
      ]
    }
    ]
  },
  {
    'router':'dataCenter',
    'name':'数据中心',
    'children':[
      {
        'router':'dataPanel',
        'name':'数据面板'
      },
      {
        'router':'goodsCount',
        'name':'商品统计'
      },
      {
        'router':'orderCount',
        'name':'订单统计'
      }
    ]
  }
]

export default getRouter
