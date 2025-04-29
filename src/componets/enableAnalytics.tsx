import React from 'react'
import { Helmet } from 'react-helmet-async'

function EnableAnalytics() {
    const analyticsScript = `
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'G-HNRDRLR76Z');
  `;
  return (
    <Helmet>
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-HNRDRLR76Z"></script>
        <script dangerouslySetInnerHTML={{ __html: analyticsScript }} />
    </Helmet>
  )
}

export default EnableAnalytics