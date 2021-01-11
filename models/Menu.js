const mongoose = require('mongoose');
const Schema = mongoose.Schema
const slugify = require('slugify');

//create Schema and Model

const FoodMenuSchema = new Schema({
    name: {
        type: String,
        required: [true, 'Please add a name'],
        unique: true,
        trim: true,
        maxlength: [18, 'Name cannot be more than eighteen charaters']
    },
    slug: String,
    description: {
        type: String,
        required: [true, 'Please add a description'],
        maxlength: [250, 'Description cannot br more than 250 characters']
    },
    email: {
        type: String,
        match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
            'Please add a valid email'
        ],
        unique: true
    },
    address: {
        type: String,
        required: [true, 'Please add your address']
    },
    price: Number,
    quantity: Number,
    // location: {
    //     // GeoJson Point
    //     type: {
    //         type: String,
    //         enum: ['Point'],
    //         required: true
    //     },
    //     coordinates: {
    //         type: [Number],
    //         required: true,
    //         index: '2dsphere'
    //     },
    //     formattedAddress: String,
    //     street: String,
    //     city: String,
    //     zipcode: Number,
    //     country: String
    // },
    averageRating: {
        type: Number,
        min: [1, 'Rating must be at least 1'],
        max: [10, 'Rating cannot be more than 10']
    },
    photo: {
        type: String,
        default: 'no_photo.jpg'
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

//create menu slug from the name
FoodMenuSchema.pre('save', function() {
    //console.log('Slugify ran', this.name);
    this.slug = slugify(this.name, {lower: true});
    next();
});

const FoodMenu = mongoose.model('Menu', FoodMenuSchema);

module.exports = FoodMenu;

// var myMenu = new FoodMenu({})
