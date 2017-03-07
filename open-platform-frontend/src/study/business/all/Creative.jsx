import React, {Component} from "react";
import RightMarkDown from '../../../common/RightMarkDown';


export default class Creative extends Component {
    render() {
        return (
            <RightMarkDown source={['## 上海创新中心',
                '***',
                '### 业务介绍',
                '上海创新中心成立于2016年下半年，由上海技术中心和Web事业部合并而来。' +
                '作为趣医网在上海的核心研发中心，上海创新中心除了为各事业部提供研发协助之外，本身也负责几项重要产品的开发工作，' +
                '包括趣医官方网站、智能导诊、医学信息组件、趣支付等产品。以下为详细介绍。',

                '***',
                '### 产品介绍',
                '#### 趣医官网',
                '趣医官方网站作为趣医的门户，起到了流量入口的作用。作为公司部署在C端的核心业务，预约挂号是官网的核心功能之一。' +
                '官网已支持全国逾1000家医院的预约挂号，用户可从地区、医院、科室、医生等多个维度进行筛选，选择合适的号源。',
                '\n 在预约挂号之外，官网还展示了上万条健康资讯、疾病、药品等信息，使得网站的整体定位不再是单纯的预约挂号平台，而是综合性的医疗服务网站，',
                '#### 智能导诊',
                '作为上海创新中心的明星产品，智能导诊充分体现了“创新”的理念。针对很多患者在生病后因无法进行自诊而导致挂错科室的痛点，上海创新中心开发了智能导诊系统，' +
                '帮助患者在出现一定症状时能够方便、快速、较准确的定位疾病，并根据所患疾病能够快速匹配医疗资源，及早就医，并力求做到省时、省力、省钱。',
                '\n 目前智能导诊已经定义了3600+条标准化症状，可导诊近一千种常见疾病。科学区分主症, 支持病程选择, ' +
                '并可选择多种伴随症状, 预测结果准确合理。并且连接趣医疾病体系，打通医院，医生，科室，并以此构造就医闭环。',
                '\n 该产品也获得了第五届中国创新创业大赛电子信息行业总决赛企业组十二强。',
                '#### 趣支付',
                '趣支付是前文提到的综合支付平台上的核心产品，由上海创新中心负责开发，致力于为缴费用户提供移动和PC端的支付服务，如挂号费、医药费、住院预交金、就诊卡充值等，' +
                '并为医院提供费用代收和结算服务（免手续费），查询收款/退款记录，并提供账单查询和对账服务。该产品聚合了主流的支付渠道，如银联支付、微信支付、建行支付等。',
                '\n 从优势上来说，趣支付的账户资金由银行提供监管，在线通道由中国银联认证，安全上有绝对保障。' +
                '同时，凡是申请开通“趣支付”的医院，平台搭建及对接费用全部由趣医网承担，院方无需支付任何费用。' +
                '发生的在线支付手续费由“趣支付”平台全部承担，医院不承担任何额外费用。而且可以使用医院现有银行账户收款，保持医院和现有银行的合作关系不变。',
                '#### 医学信息组件',
                '医学信息组件包含医药疾病组件、新闻资讯组件、医院科室医生组件，以及患者数据组件，统一由上海创新中心维护，向各事业部产品提供数据支撑。',

                '***',
                '### 发展方向',
                '上海创新中心的目标是把官网做成成熟的流量入口，通过聚合各种医疗信息，结合推荐、评论、搜索等功能，全方位满足用户需求。同时，作为研发中心，持续为各事业部提供可靠的研发支持。',
            ]}/>
        )
    }
}