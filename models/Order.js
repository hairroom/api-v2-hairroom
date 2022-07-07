const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
    name: { type: String, required: true, trim: false },
    lastName: { type: String, required: true, trim: true },
    phone: { type: Number, required: true, trim: true },
    email: { type: String, required: false, trim: true },
    numberIdentification: { type: String, required: true, trim: true },
    typeIdentification: {
        type: String,
        enum: {
            values: ['Cédula de Ciudadanía', 'Tarjeta de Identidad', 'Pasaporte', 'Cédula de Extranjería'],
            message: '{VALUE} no es un tipo de documento permitido'
        }
    },
    address: { type: String, required: false, trim: true },
    // service: { type: String, required: true, trim: true },
    // product: { type: String, required: false, trim: true },
    // price: { type: Number, required: true, trim: true },
    // paymentMethod: {
    //     type: String,
    //     enum: {
    //         values: ['Efectivo', 'Tarjeta Débito', 'Tarjeta de Crédito'],
    //         message: '{VALUE} no es un metodo de pago permitido',
    //     }
    // },
}, { timestamps: true });

module.exports = mongoose.model('Order', orderSchema);