export interface LegalSection {
  h: string;
  p: string[];
}

export interface LegalDoc {
  title: string;
  updated: string;
  intro: string;
  sections: LegalSection[];
}

type Locale = 'zh-TW' | 'zh-CN' | 'en';
type DocKey = 'privacy' | 'terms' | 'refund';

const UPDATED = '2026-07-12';

export const legalContent: Record<DocKey, Record<Locale, LegalDoc>> = {
  privacy: {
    'zh-TW': {
      title: '隱私權政策',
      updated: UPDATED,
      intro: 'Optimaks Pte. Ltd.（下稱「我們」）重視你的隱私。本政策說明我們如何收集、使用與保護你的個人資料，適用於本網站與我們提供的服務。',
      sections: [
        { h: '我們收集的資料', p: ['你透過網站表單或 WhatsApp 提供的聯絡資料：姓名、公司名稱、電話、Email。', '你在「1 分鐘流程檢查」中選擇的業務類型與痛點（用於準備初步建議）。', '線上付款時，由 Stripe 處理的付款資訊。我們不會儲存你的信用卡號碼。'] },
        { h: '資料的用途', p: ['回覆你的詢問、安排流程健檢與提供服務。', '寄送與你的訂單或服務相關的通知。', '我們不會將你的資料出售或出租給任何第三方，也不會用於與服務無關的行銷。'] },
        { h: '第三方處理者', p: ['付款處理：Stripe（受其隱私政策約束）。', '網站託管：Vercel。', '自動化與通知：我們自行管理的 n8n 系統與 Google Workspace。', '這些服務商僅在提供服務所需的範圍內處理你的資料。'] },
        { h: '資料保存與你的權利', p: ['我們僅在提供服務與符合法規要求的期間內保存你的資料。', '你可以隨時來信 hello@optimaks.cc 要求查詢、更正或刪除你的個人資料。我們遵循新加坡個人資料保護法（PDPA）。'] },
        { h: 'Cookies 與分析', p: ['本網站使用不依賴 Cookie 的匿名流量分析（Vercel Analytics），僅統計頁面瀏覽情況，不追蹤個人身分。'] },
        { h: '聯絡我們', p: ['對本政策有任何疑問，請來信 hello@optimaks.cc。'] }
      ]
    },
    'zh-CN': {
      title: '隐私权政策',
      updated: UPDATED,
      intro: 'Optimaks Pte. Ltd.（下称「我们」）重视你的隐私。本政策说明我们如何收集、使用与保护你的个人资料，适用于本网站与我们提供的服务。',
      sections: [
        { h: '我们收集的资料', p: ['你透过网站表单或 WhatsApp 提供的联络资料：姓名、公司名称、电话、Email。', '你在「1 分钟流程检查」中选择的业务类型与痛点（用于准备初步建议）。', '线上付款时，由 Stripe 处理的付款资讯。我们不会储存你的信用卡号码。'] },
        { h: '资料的用途', p: ['回复你的询问、安排流程健检与提供服务。', '寄送与你的订单或服务相关的通知。', '我们不会将你的资料出售或出租给任何第三方，也不会用于与服务无关的行销。'] },
        { h: '第三方处理者', p: ['付款处理：Stripe（受其隐私政策约束）。', '网站托管：Vercel。', '自动化与通知：我们自行管理的 n8n 系统与 Google Workspace。', '这些服务商仅在提供服务所需的范围内处理你的资料。'] },
        { h: '资料保存与你的权利', p: ['我们仅在提供服务与符合法规要求的期间内保存你的资料。', '你可以随时来信 hello@optimaks.cc 要求查询、更正或删除你的个人资料。我们遵循新加坡个人资料保护法（PDPA）。'] },
        { h: 'Cookies 与分析', p: ['本网站使用不依赖 Cookie 的匿名流量分析（Vercel Analytics），仅统计页面浏览情况，不追踪个人身分。'] },
        { h: '联络我们', p: ['对本政策有任何疑问，请来信 hello@optimaks.cc。'] }
      ]
    },
    en: {
      title: 'Privacy Policy',
      updated: UPDATED,
      intro: 'Optimaks Pte. Ltd. ("we") values your privacy. This policy explains how we collect, use and protect your personal data across this website and our services.',
      sections: [
        { h: 'Data We Collect', p: ['Contact details you provide via website forms or WhatsApp: name, company, phone, email.', 'Your selections in the 1-Min Workflow Audit (business type and pain points), used to prepare initial recommendations.', 'Payment information processed by Stripe when you pay online. We never store your card number.'] },
        { h: 'How We Use It', p: ['To respond to enquiries, schedule workflow audits and deliver services.', 'To send notices related to your order or service.', 'We never sell or rent your data, and we do not use it for unrelated marketing.'] },
        { h: 'Third-Party Processors', p: ['Payments: Stripe (subject to its own privacy policy).', 'Hosting: Vercel.', 'Automation & notifications: our self-managed n8n system and Google Workspace.', 'These providers process your data only as needed to deliver our services.'] },
        { h: 'Retention & Your Rights', p: ['We retain data only as long as needed to provide services and meet legal requirements.', 'You may email hello@optimaks.cc at any time to access, correct or delete your personal data. We comply with the Singapore Personal Data Protection Act (PDPA).'] },
        { h: 'Cookies & Analytics', p: ['This site uses cookie-free, anonymous traffic analytics (Vercel Analytics) that measures page views without tracking individual identity.'] },
        { h: 'Contact', p: ['Questions about this policy? Email hello@optimaks.cc.'] }
      ]
    }
  },
  terms: {
    'zh-TW': {
      title: '服務條款',
      updated: UPDATED,
      intro: '本條款適用於你使用 Optimaks 網站及訂購我們的流程自動化服務。付款或簽署報價單即表示你同意本條款。',
      sections: [
        { h: '服務內容', p: ['流程健檢（Workflow Audit）：一次 45 分鐘的到府或線上診斷，交付一份視覺化流程藍圖（PDF）。', '系統建置（System Setup）：建置報價單載明數量的自動化工作流，並於上線前提供 2 次邏輯微調。', '雲端管家（月費）：系統託管、監控、除錯，以及每月額度內的執行次數與參數微調。'] },
        { h: '「一條工作流」的定義', p: ['一條工作流 = 單一觸發條件 + 最多 3-4 個直線動作。多條件分支、跨 3 個以上系統的整合，計為額外的工作流並另行報價。', '正式動工前，雙方將以書面（報價單或訊息確認）界定工作流範圍。'] },
        { h: '智慧財產與資料所有權', p: ['你擁有系統中產生的所有業務資料（如 Google Sheets 內容、報表、客戶紀錄）。', '系統底層架構、程式碼與自動化邏輯屬於 Optimaks，以雲端服務形式提供，不隨建置費轉讓。'] },
        { h: '客戶的配合義務', p: ['你需在合理時間內提供建置所需的資料與授權（如 Excel 檔案、WhatsApp 號碼授權）。', '因客戶未提供必要資料導致專案停滯超過 14 天，我們有權按進度請款。'] },
        { h: '服務水準與責任限制', p: ['我們盡合理努力維持系統穩定，但依賴的第三方服務（WhatsApp、Google 等）發生中斷時，我們負責盡速修復，不承擔間接損失。', '我們的總責任上限為你在過去 3 個月內支付的服務費用。'] },
        { h: '月費與終止', p: ['雲端管家月費自系統上線次月起收，可隨時取消；取消後我們停止託管與監護，並協助你匯出業務資料。'] },
        { h: '準據法', p: ['本條款受新加坡法律管轄。'] }
      ]
    },
    'zh-CN': {
      title: '服务条款',
      updated: UPDATED,
      intro: '本条款适用于你使用 Optimaks 网站及订购我们的流程自动化服务。付款或签署报价单即表示你同意本条款。',
      sections: [
        { h: '服务内容', p: ['流程健检（Workflow Audit）：一次 45 分钟的到府或线上诊断，交付一份视觉化流程蓝图（PDF）。', '系统建置（System Setup）：建置报价单载明数量的自动化工作流，并于上线前提供 2 次逻辑微调。', '云端管家（月费）：系统托管、监控、除错，以及每月额度内的执行次数与参数微调。'] },
        { h: '「一条工作流」的定义', p: ['一条工作流 = 单一触发条件 + 最多 3-4 个直线动作。多条件分支、跨 3 个以上系统的整合，计为额外的工作流并另行报价。', '正式动工前，双方将以书面（报价单或讯息确认）界定工作流范围。'] },
        { h: '智慧财产与资料所有权', p: ['你拥有系统中产生的所有业务资料（如 Google Sheets 内容、报表、客户纪录）。', '系统底层架构、程式码与自动化逻辑属于 Optimaks，以云端服务形式提供，不随建置费转让。'] },
        { h: '客户的配合义务', p: ['你需在合理时间内提供建置所需的资料与授权（如 Excel 档案、WhatsApp 号码授权）。', '因客户未提供必要资料导致专案停滞超过 14 天，我们有权按进度请款。'] },
        { h: '服务水准与责任限制', p: ['我们尽合理努力维持系统稳定，但依赖的第三方服务（WhatsApp、Google 等）发生中断时，我们负责尽速修复，不承担间接损失。', '我们的总责任上限为你在过去 3 个月内支付的服务费用。'] },
        { h: '月费与终止', p: ['云端管家月费自系统上线次月起收，可随时取消；取消后我们停止托管与监护，并协助你汇出业务资料。'] },
        { h: '准据法', p: ['本条款受新加坡法律管辖。'] }
      ]
    },
    en: {
      title: 'Terms of Service',
      updated: UPDATED,
      intro: 'These terms govern your use of the Optimaks website and your purchase of our workflow automation services. Paying or signing a quotation constitutes acceptance of these terms.',
      sections: [
        { h: 'Services', p: ['Workflow Audit: a 45-minute on-site or online diagnosis, delivering a visual workflow blueprint (PDF).', 'System Setup: implementation of the number of automated workflows stated in the quotation, with 2 rounds of logic revisions before go-live.', 'Cloud Concierge (monthly): hosting, monitoring, bug fixes, and monthly execution quota with parameter tweaks.'] },
        { h: 'Definition of "One Workflow"', p: ['One workflow = a single trigger + up to 3-4 linear actions. Multi-branch logic or integrations across more than 3 systems count as additional workflows quoted separately.', 'The scope of each workflow is confirmed in writing (quotation or message) before work begins.'] },
        { h: 'Intellectual Property & Data Ownership', p: ['You own all business data produced in the system (Google Sheets content, reports, customer records).', 'The underlying architecture, code and automation logic remain the property of Optimaks and are provided as a cloud service, not transferred with the setup fee.'] },
        { h: 'Client Cooperation', p: ['You agree to provide required data and authorisations (e.g. Excel files, WhatsApp number access) within a reasonable time.', 'If a project stalls for more than 14 days due to missing client inputs, we may invoice according to progress.'] },
        { h: 'Service Levels & Liability', p: ['We make reasonable efforts to keep systems stable. Where third-party services we rely on (WhatsApp, Google, etc.) suffer outages, we will restore service promptly but are not liable for indirect losses.', 'Our total liability is capped at the fees you paid in the preceding 3 months.'] },
        { h: 'Monthly Fees & Termination', p: ['The Cloud Concierge fee starts the month after go-live and may be cancelled anytime; upon cancellation we stop hosting and monitoring and will assist you in exporting your business data.'] },
        { h: 'Governing Law', p: ['These terms are governed by the laws of Singapore.'] }
      ]
    }
  },
  refund: {
    'zh-TW': {
      title: '退款政策',
      updated: UPDATED,
      intro: '我們希望每一筆合作都清楚明白。以下是各項服務的退款規則。',
      sections: [
        { h: '流程健檢（$79）', p: ['健檢完成並交付流程藍圖後，費用不予退還，因為你付費購買的是診斷與藍圖本身。', '於預約時段前一個工作日 17:00（新加坡時間）前來信取消，可獲全額退款。', '逾期取消或未出席，視同服務已交付，費用不退、不另重排。', '確認進行系統建置時，$79 全額折抵建置費（限付款日起 30 天內行使）。'] },
        { h: '系統建置（$479 起）', p: ['於排定開工日前一個工作日 17:00（新加坡時間）前來信取消，可獲全額退款。', '開工後即投入流程梳理、邏輯設計與系統架設等前置成本，此階段取消最高退還已付金額之 30%。', '系統上線（Go-Live）後，建置費不予退還。'] },
        { h: '雲端管家月費', p: ['可隨時取消，自次一計費週期起生效；已支付的當期月費不按比例退還。'] },
        { h: '如何申請', p: ['來信 hello@optimaks.cc 並附上訂單資訊（Email 或 Stripe 收據），我們將於 5 個工作天內處理。退款將原路退回付款方式。'] }
      ]
    },
    'zh-CN': {
      title: '退款政策',
      updated: UPDATED,
      intro: '我们希望每一笔合作都清楚明白。以下是各项服务的退款规则。',
      sections: [
        { h: '流程健检（$79）', p: ['健检完成并交付流程蓝图后，费用不予退还，因为你付费购买的是诊断与蓝图本身。', '于预约时段前一个工作日 17:00（新加坡时间）前来信取消，可获全额退款。', '逾期取消或未出席，视同服务已交付，费用不退、不另重排。', '确认进行系统建置时，$79 全额折抵建置费（限付款日起 30 天内行使）。'] },
        { h: '系统建置（$479 起）', p: ['于排定开工日前一个工作日 17:00（新加坡时间）前来信取消，可获全额退款。', '开工后即投入流程梳理、逻辑设计与系统架设等前置成本，此阶段取消最高退还已付金额之 30%。', '系统上线（Go-Live）后，建置费不予退还。'] },
        { h: '云端管家月费', p: ['可随时取消，自次一计费周期起生效；已支付的当期月费不按比例退还。'] },
        { h: '如何申请', p: ['来信 hello@optimaks.cc 并附上订单资讯（Email 或 Stripe 收据），我们将于 5 个工作天内处理。退款将原路退回付款方式。'] }
      ]
    },
    en: {
      title: 'Refund Policy',
      updated: UPDATED,
      intro: 'We want every engagement to be clear-cut. Here are the refund rules for each service.',
      sections: [
        { h: 'Workflow Audit ($79)', p: ['Once the audit is completed and the blueprint delivered, the fee is non-refundable — the diagnosis and blueprint are what you purchased.', 'Cancel by email before 5:00 PM (Singapore time) on the business day prior to your scheduled slot for a full refund.', 'Late cancellations and no-shows are treated as services delivered: no refund, no rescheduling.', 'If you proceed to System Setup, the $79 is fully credited against the setup fee (credit valid for 30 days from payment).'] },
        { h: 'System Setup (from $479)', p: ['Cancel by email before 5:00 PM (Singapore time) on the business day prior to the scheduled kick-off for a full refund.', 'Once work begins, upfront costs are incurred in process mapping, logic design and system provisioning; cancellations at this stage are refunded up to a maximum of 30% of the amount paid.', 'After go-live, the setup fee is non-refundable.'] },
        { h: 'Cloud Concierge (Monthly)', p: ['Cancel anytime, effective from the next billing cycle; the current month’s fee is not refunded pro-rata.'] },
        { h: 'How to Request', p: ['Email hello@optimaks.cc with your order details (email or Stripe receipt). We process requests within 5 business days, refunded to the original payment method.'] }
      ]
    }
  }
};

export const LEGAL_DOCS = ['privacy', 'terms', 'refund'] as const;
