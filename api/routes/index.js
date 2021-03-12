const express = require('express');
const router = express.Router();

const authenticationRouter = require('../domains/Authentication/routes/authentication');

const adminRouter = require('../admin/routes');

const isAuthenticatedMiddleware = require('../domains/Authentication/middlewares/isAuthenticated');
const isAdminMiddleware = require('../domains/Authentication/middlewares/isAdmin');


/* GET home page. */
router.get('/', function(req, res, next) {
  res.status(200).json({
    name: 'API',
    version: '1.0',
    status: 200,
    message: 'Hello World'
  });
});

router.use('/auth', authenticationRouter);

router.use('/admin', [isAuthenticatedMiddleware, isAdminMiddleware], adminRouter);

module.exports = router;
