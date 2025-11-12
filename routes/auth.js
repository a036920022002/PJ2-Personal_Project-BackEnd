const express = require('express');
const router = express.Router();
const {authlogin,getAllAuth,createAccount,updateAccount,deleteAccount} = require('../controller/auth');
const {verifyToken} = require('../middleware/verifyToken')

router.get('/',getAllAuth);
router.post('/login',authlogin);
router.post('/create',createAccount);
router.put('/update/:id',updateAccount)
router.delete('/delete/:id',deleteAccount)

module.exports = router;