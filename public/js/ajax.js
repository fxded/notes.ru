// XMLHttpRequest
function ajax(url, method, functionName, dataArray) {
    let xhttp = new XMLHttpRequest();
    xhttp.open(method, url, true);
    xhttp.setRequestHeader("Content-type", "application/json");//x-www-form-urlencoded
    xhttp.send(dataArray);
    
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            let receivedData = JSON.parse(xhttp.response);
            console.log('receive: '+ receivedData.fname, receivedData.lname);
            functionName(this);
        }
    }
}

function requestData(dataArr) {
    let out = '';
    for (let key in dataArr) {
        out += `${key}=${dataArr[key]}&`;
    }
    //console.log('OUT: '+out);
    return out;
}
