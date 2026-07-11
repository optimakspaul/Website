import { ImageResponse } from 'next/og';

export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default async function OpengraphImage({
  params
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const isEn = locale === 'en';
  const title = isEn
    ? 'No Admin Yet? Let a Digital Assistant Hold the Fort.'
    : locale === 'zh-CN'
      ? '还没请到人？先让数位助理顶着。'
      : '還沒請到人？先讓數位助理頂著。';
  const subtitle = isEn
    ? 'Payments chased · Jobs dispatched · Leads caught · Reports done'
    : locale === 'zh-CN'
      ? '催款 · 派单 · 接单 · 做报表，一件都不漏'
      : '催款 · 派單 · 接單 · 做報表，一件都不漏';

  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          padding: '80px',
          background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 60%, #0d9488 140%)',
          color: 'white',
          fontFamily: 'sans-serif'
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: 16, marginBottom: 48 }}>
          <div
            style={{
              width: 56,
              height: 56,
              borderRadius: 14,
              background: '#2563eb',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: 34,
              fontWeight: 800
            }}
          >
            O
          </div>
          <div style={{ fontSize: 40, fontWeight: 800 }}>Optimaks</div>
        </div>
        <div style={{ fontSize: 60, fontWeight: 800, lineHeight: 1.25, maxWidth: 1000 }}>{title}</div>
        <div style={{ fontSize: 30, marginTop: 32, color: '#a7f3d0' }}>{subtitle}</div>
        <div style={{ fontSize: 24, marginTop: 48, color: '#94a3b8' }}>optimaks.cc</div>
      </div>
    ),
    size
  );
}
