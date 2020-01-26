//ajax(url, method, functionName, dataArray)


document.querySelector('#btnsnd').onclick = function () {
    let fname = document.querySelector('#fname').value,
        lname = document.querySelector('#lname').value;
    
    let data = JSON.stringify({ fname: fname,
                                lname: lname  });
    ajax('/', 'POST', showData, data);
}

document.querySelector('#btnsnd2').onclick = function () {
    let nTitle = document.querySelector('#noteTitle').value,
        nBody = document.querySelector('#noteBody').value;
    
    let data = JSON.stringify({ nTitle: nTitle,
                                nBody: nBody  });
    ajax('/notes', 'POST', showData, data);
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

