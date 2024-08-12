const mongoose = require('mongoose');

const { Schema } = mongoose;

const locationSchema = new mongoose.Schema({
    billboardOwner: {
        type: String,
        required: true,
    },
    coordinates: {
        latitude: {
            type: Number,
            required: true,
        },
        longitude: {
            type: Number,
            required: true,
        },
    },
    id: {
        type: String,
        required: true,
        unique: true,
    },
    billboardName: {
        type: String,
        required: true,
    },
    dailyViews: {
        type: Number,
        required: true,
    },
    availableDuration: {
        type: String,
        required: true,
    },
    size: {
        type: String,
        required: true,
    },
    availability: {
        type: String,
        enum: ['high', 'low', 'moderate'],
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    imageId: {
        type: String,
        required: true,
    },
});

const Location = mongoose.model('location', locationSchema);

export default mongoose.models.location || mongoose.model("location", locationSchema);

module.exports = Location;
