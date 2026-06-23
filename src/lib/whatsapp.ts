/**
 * Checks if a valid WhatsApp phone number exists.
 */
export function hasWhatsAppNumber(phoneNumber: string | undefined): boolean {
  return Boolean(phoneNumber && phoneNumber.replace(/\D/g, '').length > 0);
}

/**
 * Builds a direct click-to-chat WhatsApp URL using wa.me.
 * Safe fallback is returned if phoneNumber is missing.
 */
export function buildWhatsAppUrl(phoneNumber: string | undefined, message: string): string {
  const phone = phoneNumber ? phoneNumber.replace(/\D/g, '') : '';
  if (!phone) {
    return '#why-trust-us'; // Safe fallback anchor
  }
  return `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
}

interface AuditMessageData {
  businessType: string;
  mainProblem: string;
  currentTools: string;
  name: string;
  company: string;
  phone: string;
  email: string;
}

/**
 * Generates the pre-filled message text optimized for WhatsApp leads.
 */
export function buildAuditWhatsAppMessage(data: AuditMessageData, isChinese: boolean): string {
  if (isChinese) {
    return `您好 Optimaks，我已完成 1 分鐘流程檢測。

聯絡資訊：
- 姓名：${data.name || '未提供'}
- 公司：${data.company || '未提供'}
- WhatsApp 號碼：${data.phone || '未提供'}
- Email：${data.email || '未提供'}

流程檢測結果：
1. 業務類型：${data.businessType || '未提供'}
2. 主要營運卡點：${data.mainProblem || '未提供'}
3. 目前使用工具：${data.currentTools || '未提供'}

我想進一步評估我們公司的流程在哪些地方可能存在漏單、耗時或浪費資金的問題。`;
  }

  return `Hi Optimaks, I completed the 1-Min Workflow Audit.

Contact Details:
- Name: ${data.name || 'Not provided'}
- Company: ${data.company || 'Not provided'}
- WhatsApp / Phone: ${data.phone || 'Not provided'}
- Email: ${data.email || 'Not provided'}

Workflow Audit Answers:
1. Business Type: ${data.businessType || 'Not provided'}
2. Key Bottleneck: ${data.mainProblem || 'Not provided'}
3. Current Tools: ${data.currentTools || 'Not provided'}

I would like to review where my business workflow may be leaking leads, time, or money.`;
}
