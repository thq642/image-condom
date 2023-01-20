const { bool } = require("sharp")

const DEFAULT_QUALITY = 20

function params(req, res, next) {
  let url = req.query.url
  if (Array.isArray(url)) url = url.join('&url=')
  if (!url) return res.end('image-condom')

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
