//ajax(url, method, functionName, dataArray)


document.querySelector('#btnsnd').onclick = function () {
    let fname = document.querySelector('#fname').value,
        lname = document.querySelector('#lname').value,
        data = JSON.stringify({ fname: fname,
                                lname: lname  });
        
    ajax('/', 'POST', showData, data);
}

document.querySelector('#btnsnd2').onclick = function () {
    let nTitle = document.querySelector('#noteTitle').value,
        nBody = document.querySelector('#noteBody').value,
        data = JSON.stringify({ nTitle  : nTitle,
                                nBody   : nBody  });
        
    ajax('/notes', 'POST', showData, data);
}

document.querySelector('#btnsnd3').onclick = function () {
    let id = document.querySelector('#idNote').value,
        url = '/notes/'+id,
        data = null;
        
    ajax(url, 'GET', receivGetData, data);
}

function receivGetData (data) {
    data = JSON.parse(data.response);
    console.log(data);
    let getNoteDiv = document.querySelector('#getNoteDiv'),
        newP    = document.createElement("p");
    getNoteDiv.appendChild(newP);
    newP.innerHTML =  data.title+'<br>'+data.text;
}

function showData(data) {
    data = JSON.parse(data.response);
    if ('fname' in data) {
        console.log('data: '+data.lname, data.fname);
    } else if ('_id' in data) {
        console.log('data: ',JSON.stringify(data));
        let noteDiv = document.querySelector('#noteDiv'),
            newP    = document.createElement("p");
        noteDiv.appendChild(newP);
        newP.innerHTML = 'id this note is: ' + data._id;
    }
}

