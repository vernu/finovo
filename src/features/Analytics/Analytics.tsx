import Script from 'next/script'

const Analytics = () => {
  return (
    <>
      {/* Global Site Tag (gtag.js) - Google Analytics  */}
      <Script
        id='gtag1'
        strategy='afterInteractive'
        src={`https:www.googletagmanager.com/gtag/js?id=G-G0XT7DG4PD`}
      />
      <Script
        id='gtag2'
        strategy='afterInteractive'
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-G0XT7DG4PD', {
                page_path: window.location.pathname,
            });
     `,
        }}
      />
      <Script
        id='ms-clarity1'
        strategy='afterInteractive'
        dangerouslySetInnerHTML={{
          __html: `
          (function(c,l,a,r,i,t,y){
            c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
            t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
            y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
        })(window, document, "clarity", "script", "ih8ljgvd6k");
     `,
        }}
      />
    </>
  )
}

export default Analytics
