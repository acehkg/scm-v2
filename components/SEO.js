import Head from 'next/head';

const PageSeo = ({ meta }) => {
  return (
    <Head>
      <link rel='apple-touch-icon' sizes='57x57' href='/apple-icon-57x57.png' />
      <link rel='apple-touch-icon' sizes='60x60' href='/apple-icon-60x60.png' />
      <link rel='apple-touch-icon' sizes='72x72' href='/apple-icon-72x72.png' />
      <link rel='apple-touch-icon' sizes='76x76' href='/apple-icon-76x76.png' />
      <link
        rel='apple-touch-icon'
        sizes='114x114'
        href='/apple-icon-114x114.png'
      />
      <link
        rel='apple-touch-icon'
        sizes='120x120'
        href='/apple-icon-120x120.png'
      />
      <link
        rel='apple-touch-icon'
        sizes='144x144'
        href='/apple-icon-144x144.png'
      />
      <link
        rel='apple-touch-icon'
        sizes='152x152'
        href='/apple-icon-152x152.png'
      />
      <link
        rel='apple-touch-icon'
        sizes='180x180'
        href='/apple-icon-180x180.png'
      />
      <link
        rel='icon'
        type='image/png'
        sizes='192x192'
        href='/android-icon-192x192.png'
      />
      <link
        rel='icon'
        type='image/png'
        sizes='32x32'
        href='/favicon-32x32.png'
      />
      <link
        rel='icon'
        type='image/png'
        sizes='96x96'
        href='/favicon-96x96.png'
      />
      <link
        rel='icon'
        type='image/png'
        sizes='16x16'
        href='/favicon-16x16.png'
      />
      <link rel='manifest' href='/manifest.json' />
      <meta name='msapplication-TileColor' content='#ffffff' />
      <meta name='msapplication-TileImage' content='/ms-icon-144x144.png' />
      <meta name='theme-color' content='#ffffff'></meta>
      <title>{meta.title}</title>
      <meta name='description' content={meta.description} />
      <meta property='og:type' content='website' />
      <meta name='og:title' property='og:title' content={meta.title} />
      <meta
        name='og:description'
        property='og:description'
        content={meta.description}
      />
      <meta property='og:site_name' content='Simcoe County Malt Inc.' />
      <meta
        property='og:image'
        content={`${process.env.NEXT_PUBLIC_BASE_URL}${meta.image}`}
      />
      <meta
        name='twitter:image'
        content={`${process.env.NEXT_PUBLIC_BASE_URL}${meta.image}`}
      />
      <meta name='twitter:site' content='https://www.simcoecountymalt.com' />
      <meta name='twitter:card' content='summary' />
      <meta name='twitter:title' content={meta.title} />
      <meta name='twitter:description' content={meta.description} />
    </Head>
  );
};

export default PageSeo;
