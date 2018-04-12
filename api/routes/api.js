var express = require('express')
var router = express.Router()

router.get('/status', function (req, res, next) {
  res.json({status: 'ok'})
})

router.get('/login', function (req, res, next) {
  res.cookie('miniapp-auth', 'loggedin', {maxAge: 360000}).json({status: 'ok', message: 'logged in'})
})

router.get('/logout', function (req, res, next) {
  res.clearCookie('miniapp-auth').json({status: 'ok', message: 'logged out'})
})

router.get('/echo', function (req, res, next) {
  if (req.cookies['miniapp-auth'] === 'loggedin') {
    res.status(200).json({status: 'ok', result: req.query.message})
  } else {
    res.status(403).json({status: 'error', message: 'not authenticated'})
  }
})

module.exports = router
