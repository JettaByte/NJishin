const ws = new WebSocket("ws://localhost:1715");

// 서버로 부터 메시지를 수신한다
ws.onmessage = function(event) {
    console.log("서버가 이렇게 대답!을 했다 맨이야! ", event.data);
}

// error event handler
ws.onerror = function(event) {
    console.log("서버버님이 한판 하려고 했는데 갑자기 돌아가셨다 맨이야! ", event.data);
}