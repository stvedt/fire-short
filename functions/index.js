const functions = require('firebase-functions');
const express = require('express');

var app = express();

app.get('/test', (req, res) => {
  res.send('test');
})

// Create and Deploy Your First Cloud Functions
// https://firebase.google.com/docs/functions/write-firebase-functions

exports.app = functions.https.onRequest(app);
