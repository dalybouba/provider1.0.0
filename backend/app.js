const express = require('express');
const app = express();
// app.use(express.bodyParser());
//declaration du body parser qu'on a installé a traver npm i --save body-parser
const bodyParser = require('body-parser');
// Parse URL-encoded bodies (as sent by HTML forms)
// app.use(express.urlencoded());

// Parse JSON bodies (as sent by API clients)
app.use(express.json());
const path = require('path');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const mongoose = require('mongoose');
const Provider = require('./model/provider')
//connect application to db named soccerDB et on change test par notre db "soccerDB"
mongoose.connect('mongodb://localhost:27017/providerDB', { useNewUrlParser: true, useUnifiedTopology: true });

// Security configuration
app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader(
        "Access-Control-Allow-Headers",
        "Origin, Accept, Content-Type, X-Requested-with, Authorization"
    );
    res.setHeader(
        "Access-Control-Allow-Methods",
        "GET, POST, DELETE, OPTIONS, PATCH, PUT"
    );
    next();
});
app.post('/provider/post', (req, res) => {
    console.log('here in adding', req.body);
    console.log('here in test', req.body.contacts.address.subdivision);
    url = req.protocol + '://' + req.get('host');

    var provider = new Provider({
        contacts: req.body.contacts,
        opening_days_hours: req.body.opening_days_hours,
        service: req.body.service,
        is_auto_assignable: req.body.is_auto_assignable
    });
    console.log('here in test 222', req.body.contacts.address.subdivision);
    provider.save().then(
        console.log('here in test 33333333', req.body.contacts.address.subdivision),
        result => {
            if (result) {
                console.log('test4444', result)
                res.status(200).json({
                    message: "added successfully"
                })
            }
            if (err) {
                console.log('Error', err);
            }

        }
    );
});

app.get('/provider/get', (req, res) => {
    Provider.find((err, docs) => {
        if (err) {
            console.log('Error', err);
        } else {
            res.status(200).json({
                message: 'here all objects',
                providers: docs
            });
        }
    })

});


app.delete('/deleteProvider/:id', (req, res) => {
    console.log('here in delete', req.params.id);
    Provider.deleteOne({ _id: req.params.id }).then(
        result => {
            if (result) {
                res.status(200).json({
                    message: 'deleted successfully'
                })
            }

        }
    )
});


app.get('/displayProvider/:id', (req, res) => {
    console.log('here in get', req.params.id);
    Theme.findOne({ _id: req.params.id }).then(
        data => {
            if (data) {
                res.status(200).json({
                    theme: data
                })
            }
        }
    )
})


app.put('/updateProvider/:id', (req, res) => {
    console.log("here in edit", req.params.id);
    const provider = new Provider({
        _id: req.body._id,
        contacts: req.body.contacts,
        opening_days_hours: req.body.opening_days_hours,
        service: req.body.service,
        is_auto_assignable: req.body.is_auto_assignable
    });
    Provider.update({ _id: req.params.id }, provider).then(
        result => {
            if (result) {
                res.status(200).json({
                    message: 'updated successfully'
                })
            }
        }
    )
});




module.exports = app;