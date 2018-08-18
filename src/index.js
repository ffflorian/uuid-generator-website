const UUID = require('pure-uuid');
document.getElementById('uuid').innerHTML = new UUID(4).format();
