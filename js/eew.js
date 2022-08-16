// const request = new XMLHttpRequest();
//
// setInterval(() => {
//     var j = document.createElement('script');
//     var url = 'http://www.kmoni.bosai.go.jp/webservice/hypo/eew/20220316233830.json';
//
//     j.setAttribute('src', url);
//     j.setAttribute('type', 'text/javascript');
//     var re = document.getElementsByTagName('body')[0].appendChild(j);
//     console.log(re)
//     return false;
//   }, 1000);

//반복문 예전코드
    // var url = 'http://www.kmoni.bosai.go.jp/webservice/hypo/eew/20220316233830.json';
    // request.open('GET', url, true);
    // request.onload = function () {
    //     console.log(request.responseText); // 임시
    // };
    // request.send();

// 예제 코드
//   function find()
//   {
//       var j = document.createElement('script');
//       var url = 'http://www.kmoni.bosai.go.jp/webservice/hypo/eew/20220316233830.json';
    
//       j.setAttribute('src', u);
//       j.setAttribute('type', 'text/javascript');
//       var re = document.getElementsByTagName('pre').appendChild(j);
//       console.log(re)
//       return false;
//   }

// function find()
// {
//     var j = document.createElement('script');
//     var s = encodeURIComponent(document.getElementById('str').value);
//     var u = 'http://b.epiloum.net/find.php?callback=loadList&s=' + s;
  
//     j.setAttribute('src', u);
//     j.setAttribute('type', 'text/javascript');
//     document.getElementsByTagName('body')[0].appendChild(j);
 
//     return false;
// }
 
// function loadList(arr)
// {
//     var o = document.getElementById('list');
//     var l;
  
//     while(o.childNodes.length)
//     {
//         o.removeChild(o.lastChild);
//     }
  
//     for(var i=0; i<arr.length; i++)
//     {
//         l = document.createElement('li');
//         l.appendChild(document.createTextNode(arr[i]));
//         o.appendChild(l);
//     }
// }