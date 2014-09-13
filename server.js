var http          = require('http'),
  express         = require('express'),
  bodyParser      = require('body-parser'),
  cookieParser    = require('cookie-parser'),
  methodOverride  = require('method-override'),
  app             = express(),
  server          = http.createServer(app),
  mongoose        = require('mongoose');

app.use(bodyParser.json());
app.use(cookieParser());
app.use(methodOverride());
require('./routes')(app);

var connection_string = process.env.OPENSHIFT_MONGODB_DB_PASSWORD || '127.0.0.1:27017/curso';

if (process.env.OPENSHIFT_MONGODB_DB_PASSWORD) {
  connection_string = process.env.OPENSHIFT_MONGODB_DB_USERNAME + ":" +
  process.env.OPENSHIFT_MONGODB_DB_PASSWORD + "@" +
  process.env.OPENSHIFT_MONGODB_DB_HOST + ':' +
  process.env.OPENSHIFT_MONGODB_DB_PORT + '/' +
  process.env.OPENSHIFT_APP_NAME;
}

mongoose.connect(connection_string, function(err, res) {
  if (err)
    console.log("Error con MongoDB: "+err);
  else
    console.log("MongoDB: mongodb://"+connection_string);
});

var server_port = process.env.OPENSHIFT_NODEJS_PORT || 3000
var server_ip_address = process.env.OPENSHIFT_NODEJS_IP || '127.0.0.1'

server.listen(server_port, server_ip_address, function(err) {
  if (err)
    console.log("Error con NodeJS: "+err);
  else
    console.log("NodeJS: http://"+server_ip_address+":"+server_port+'/');
});
