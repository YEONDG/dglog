'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

export default function GoogleAnalytics({ GA_MEASUREMENT_ID }) {
  const pathname = usePathname();

  useEffect(() => {
    if (GA_MEASUREMENT_ID && pathname) {
      // GA 페이지뷰 이벤트 전송 (쿼리 파라미터 없이)
      window.gtag('config', GA_MEASUREMENT_ID, {
        page_path: pathname,
      });
    }
  }, [pathname, GA_MEASUREMENT_ID]);

  return (
    <>
      <script async src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`} />
      <script
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_MEASUREMENT_ID}', {
              page_path: window.location.pathname + window.location.search,
            });
          `,
        }}
      />
    </>
  );
}
