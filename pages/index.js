import Head from 'next/head'
import { useState } from 'react'

export default function Home() {
  const [url, setUrl] = useState('')
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(false)

  const fetchVideo = async (e) => {
    e.preventDefault()
    setLoading(true)
    setData(null)

    const res = await fetch('/api/fetchVideo', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ url }),
    })

    const result = await res.json()
    setData(result)
    setLoading(false)
  }

  return (
    <>
      <Head>
        <title>TikTok Downloader | devXCodes</title>
        <link rel="icon" href="favicon.ico" />
      </Head>

      <div className="min-h-screen bg-gray-100 flex flex-col justify-between">
        <main className="flex flex-col items-center p-6 max-w-md mx-auto w-full">
          <img src="/../icon.png" alt="Logo" className="w-24 mb-4" />
          <h1 className="text-3xl font-bold mb-4 text-center">TikTok Downloader</h1>
          <form onSubmit={fetchVideo} className="w-full">
            <input
              type="url"
              value={url}
              onChange={(e) => setUrl(e.target.value)}
              required
              placeholder="Paste TikTok URL here"
              className="w-full p-3 border rounded-md mb-4"
            />
            <button
              type="submit"
              disabled={loading}
              className="w-full bg-black text-white p-3 rounded-md font-semibold"
            >
              {loading ? 'Loading...' : 'Fetch Video'}
            </button>
          </form>

          {data && data.success && (
            <div className="mt-6 w-full text-center">
              <h2 className="text-xl font-semibold mb-2">{data.title}</h2>
              <img src={data.cover} alt="Video thumbnail" className="rounded-lg mb-4" />
              <a
                href={data.play}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-green-500 text-white px-6 py-2 rounded-full"
              >
                Download Video
              </a>
            </div>
          )}

          {data && !data.success && (
            <p className="mt-6 text-red-500">Error: {data.error || 'Something went wrong'}</p>
          )}
        </main>

        <footer className="text-center p-4 text-sm text-gray-600">
          &copy; 2025 devXCodes
        </footer>
      </div>
    </>
  )
}
