import Head from 'next/head';

export default function SEO({
  title = 'Adless Tiktok Downloader | No bothering ads, no limits',
  description = 'Download Tiktok videos without watermark for free',
  keywords = 'Tiktok downloader, download tiktok videos, no watermark, Adless, adless tiktok download, devxcodes tiktok download, free tiktok downloader',
  url = 'https://tiktok-downloader-gray.vercel.app/',
  image = 'https://tiktok-downloader-gray.vercel.app/icon.png',
}) {
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content="Dev School" />
      <link rel="canonical" href={url} />

      {/* Open Graph */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:url" content={url} />
      <meta property="og:type" content="website" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
    </Head>
  );
}