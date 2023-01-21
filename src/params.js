const DEFAULT_QUALITY = 20

function params(req, res, next) {
  let url = req.query.url
  if (Array.isArray(url)) url = url.join('&url=')

  // if there's no url to process return index.html
  if (!url) return res.sendFile('index.html', { root: __dirname + '/../public' })

  url = url.replace(/http:\/\/1\.1\.\d\.\d\/bmi\/(https?:\/\/)?/i, 'http://')

  // main parameter
  req.params.url = url
  req.params.webp = !req.query.jpeg

  // params for compressible image
  req.params.quality = parseInt(req.query.q, 10) || DEFAULT_QUALITY

  // params for resizeble image
  req.params.width = parseInt(req.query.w, 10) || null
  req.params.height = parseInt(req.query.h, 10) || null


  next()
}

module.exports = params
