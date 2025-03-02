import orderModel from '../models/orderModel.js';
import userModel from '../models/userModel.js';

// Fazer pedido com boleto
const placeOrder = async (req, res) => {
  try {
    const { userId, items, amount, address } = req.body;

    const orderData = {
      userId,
      items,
      address,
      amount,
      paymentMethod: 'Boleto',
      payment: false,
      date: Date.now(),
    };

    const newOrder = new orderModel(orderData);
    await newOrder.save();

    await userModel.findByIdAndUpdate(userId, { cartData: {} });

    res.json({ success: true, message: 'Pedido Feito' });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }
};
// Fazer pedido com pix
const placeOrderPix = async (req, res) => {};
// Fazer pedido com cartão
const placeOrderCard = async (req, res) => {};

// Todas os pedidos no painel admin
const allOrders = async (req, res) => {
  try {
    const orders = await orderModel.find({});
    res.json({ success: true, orders });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }
};

// Pedidos dos usuarios frontend
const userOrders = async (req, res) => {
  try {
    const { userId } = req.body;
    const orders = await orderModel.find({ userId });
    res.json({ success: true, orders });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }
};

// Atualização do status dos pedidos no painel admin
const updateStatus = async (req, res) => {
  try {
    const { orderId, status } = req.body;
    await orderModel.findByIdAndUpdate(orderId, { status });
    res.json({ success: true, message: 'Status Atualizado' });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }
};

export { placeOrder, placeOrderPix, placeOrderCard, allOrders, userOrders, updateStatus };
