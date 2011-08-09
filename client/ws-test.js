var ws = new WebSocket("ws://localhost:8080");

ws.onopen = function (e) {
  var result = document.getElementById('result');
  result.innerHTML += '<span class="log">onOpen</span><br/>';
};

ws.onclose = function (e) {
  var result = document.getElementById('result');
  result.innerHTML += '<span class="log">onClose</span><br/>';
};

ws.onmessage = function (e) {
  var result = document.getElementById('result');
  result.innerHTML += e.data + '<br>';
};

post = function () {
  var mes = document.getElementById('message');

  if (mes.value) {
    var name = document.getElementById('name');
    var data = name.value + " : " + mes.value;
    ws.send(data);
    mes.value = '';
  }
};

