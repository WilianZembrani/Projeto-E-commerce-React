import express from 'express';
import {
  placeOrder,
  placeOrderPix,
  placeOrderCard,
  allOrders,
  userOrders,
  updateStatus,
} from '../controllers/orderController.js';
import adminAuth from '../middleware/adminAuth.js';
import authUser from '../middleware/auth.js';

const orderRoute = express.Router();

//recursos do admin
orderRoute.post('/list', adminAuth, allOrders);
orderRoute.post('/status', adminAuth, updateStatus);

//recursos de pagamentos
orderRoute.post('/place', authUser, placeOrder);
orderRoute.post('/pix', authUser, placeOrderPix);
orderRoute.post('/card', authUser, placeOrderCard);

//recursos de usuario
orderRoute.post('/userorders', authUser, userOrders);

export default orderRoute;
