const net = require('net');
var stdin = process.openStdin();


const client = new net.Socket();
//client.setKeepAlive(5000);

var port = 3000;
var host = '192.168.1.3';


client.connect(port, host, function() {
    console.log('Konkektiran');
    //var d = new Date();
    //var t = d.toLocaleTimeString();
    // client.write('Gdje si Adriano');
    stdin.addListener("data", function(d) {
        if(d.toString().trim() == 'stop') {
            client.destroy();
        }
        client.write(d.toString().trim()+'\n');

    });
});
client.on('error', function(error) {
    console.log('Chat je zatvoren!');
});
/*setInterval(()=> {
    var d = new Date();
var t = d.toLocaleTimeString();
client.write(t);
}, 2000);*/

client.on('data', function (data) {
    console.log('Poruka ' + data)
});


client.on('end', function () {
    client.write('Konekcija je zatvorena');
});