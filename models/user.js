const mongoose = require('mongoose')
const Schema = mongoose.Schema

const User = new Schema(
    {
        username: { type: String, required: true },
        email: { type: String, required: true },
        products: [{ type: Schema.Types.ObjectId, ref: 'products' }]
    },
    { timestamps: true }
)

module.exports = mongoose.model('users', User)