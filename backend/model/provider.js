const mongoose = require('mongoose');

const providerSchema = new mongoose.Schema({
    contacts: {
        type: String,
        address: {
            street_adress: String,
            subdivision: String,
            postal_code: String,
            locality: String,
            country: String,
        },
        email: String,
        mobile_phone_number: String,
    },
    opening_days_hours: {
        day_of_week: {
            day_of_week: String,
            hour_periods: String,
        },
        hour_periods: String,
    },
    service: String,
    is_auto_assignable: Boolean,
    rating:String
    
},
{ typeKey: '$type' }
);
const provider =  mongoose.model('Provider', providerSchema)
module.exports = provider;