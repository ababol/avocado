import Head from 'next/head';
import GlobalStyle from './GlobalStyle';

export default ({title}) => (
  <Head>
    <link rel="apple-touch-icon" sizes="57x57" href="static/favicons/apple-icon-57x57.png" />
    <link rel="apple-touch-icon" sizes="60x60" href="static/favicons/apple-icon-60x60.png" />
    <link rel="apple-touch-icon" sizes="72x72" href="static/favicons/apple-icon-72x72.png" />
    <link rel="apple-touch-icon" sizes="76x76" href="static/favicons/apple-icon-76x76.png" />
    <link rel="apple-touch-icon" sizes="114x114" href="static/favicons/apple-icon-114x114.png" />
    <link rel="apple-touch-icon" sizes="120x120" href="static/favicons/apple-icon-120x120.png" />
    <link rel="apple-touch-icon" sizes="144x144" href="static/favicons/apple-icon-144x144.png" />
    <link rel="apple-touch-icon" sizes="152x152" href="static/favicons/apple-icon-152x152.png" />
    <link rel="apple-touch-icon" sizes="180x180" href="static/favicons/apple-icon-180x180.png" />
    <link rel="icon" type="image/png" sizes="192x192"  href="static/favicons/android-icon-192x192.png" />
    <link rel="icon" type="image/png" sizes="32x32" href="static/favicons/favicon-32x32.png" />
    <link rel="icon" type="image/png" sizes="96x96" href="static/favicons/favicon-96x96.png" />
    <link rel="icon" type="image/png" sizes="16x16" href="static/favicons/favicon-16x16.png" />
    <meta name="msapplication-TileImage" content="static/favicons/ms-icon-144x144.png" />
    <meta charSet='utf-8' />
    <meta name='viewport' content='initial-scale=1.0, width=device-width' />
    <title>{title}</title>
    <link rel="stylesheet" href="https://unpkg.com/react-instantsearch-theme-algolia@3.0.0/style.min.css" />
    <GlobalStyle />
  </Head>
);
