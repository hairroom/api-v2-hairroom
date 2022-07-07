const express = require('express');
const { createOrder, getOrders, getOrder, deleteOrder, deleteOrders } = require('../services/order.service');
const { checkAdminRole } = require('../middlewares/auth.handler');
const passport = require('passport');

const router = express.Router();

router.post('/createOrder', createOrder);

router.get('/getOrders', 
    passport.authenticate('jwt', { session: false }),
    checkAdminRole,
    getOrders
);

router.get('/getOrder/:id', 
    passport.authenticate('jwt', { session: false }),
    checkAdminRole,
    getOrder
);

router.delete('/deleteOrder/:id', 
    passport.authenticate('jwt', { session: false }),
    checkAdminRole,
    deleteOrder
);

router.delete('/deleteAllOrders', 
    passport.authenticate('jwt', { session: false }),
    checkAdminRole,
    deleteOrders
);

module.exports = router;