const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://user_ro:user_ro@ds062889.mlab.com:62889/avocado');
