//ajax(url, method, functionName, dataArray) {
// POST -> date = '2018-12-30'


document.querySelector('#btnsnd').onclick = function () {
    let fname = document.querySelector('#fname').value,
        lname = document.querySelector('#lname').value;
    
    let data = JSON.stringify({ fname: fname,
                                lname: lname  });
    ajax('/', 'POST', showData, /*requestData(*/data/*)*/);
}



function showData(data) {
    data = JSON.parse(data.response);
    console.log('data: '+data.lname, data.fname);
}
