export default async function handler(req, res) {
    if (req.method !== 'POST') return res.status(405).end()
  
    const { url } = req.body
    if (!url) return res.status(400).json({ success: false, error: 'URL is required' })
  
    try {
      const apiUrl = `https://tikwm.com/api/?url=${encodeURIComponent(url)}`
      const response = await fetch(apiUrl)
      const result = await response.json()
  
      if (result.code !== 0) {
        return res.status(500).json({ success: false, error: 'Failed to fetch video data' })
      }
  
      const { title, cover, play } = result.data
      res.status(200).json({
        success: true,
        title,
        cover,
        play,
      })
    } catch (err) {
      res.status(500).json({ success: false, error: err.message })
    }
  }
  