const orderModel = require('../models/Order');

const createOrder = async (req, res) => {
    const newOrder = new orderModel(req.body);
    const savedOrder = await newOrder.save();
    res.json(savedOrder);
}

const getOrders = async (req, res) => {
    try {
        const orders = await orderModel.find();
        return res.json(orders.reverse());
    } catch (error) {
        return res.json(error);
    }
}

const getOrderById = async (req, res) => {
    const orderById = await orderModel.findById(req.params.id);
    if(!orderById) return res.status(204).json();
    return res.json(orderById);
}

const getOrderByIdentification = async (req, res) => {
    try {
        const { numberIdentification, typeIdentification } = req.body
        const orderByIdentification = await orderModel.findOne({numberIdentification, typeIdentification});

        if(!orderByIdentification) return res.status(204).json({message: "User not found!"});
        
        return res.json(orderByIdentification)
    } catch (error) {
        console.error(error.message)
        return res.sendStatus(500);
    }
}

const deleteOrder = async (req, res) => {
    const deleteAll = await orderModel.findByIdAndDelete(req.params.id);
    if(!deleteAll) return res.status(204).json();
    return res.json(deleteAll);
}

const deleteOrders = async (req, res) => {
    const deleteAll = await orderModel.deleteMany();
    return res.json(deleteAll);
}

module.exports = {
    createOrder,
    getOrders,
    getOrderById,
    deleteOrder,
    deleteOrders,
    getOrderByIdentification
}