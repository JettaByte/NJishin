timeChange = setInterval(function() {
    var today = new Date();
    var hours = today.getHours(); // 시
    var minutes = today.getMinutes();  // 분
    var seconds = today.getSeconds();  // 초
    $("#time").html(hours + ':' + minutes + ':' + seconds + "      NIED")
}, 1000);