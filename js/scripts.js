window.onload = function() {

    initAJAX();
    
}


var initAJAX = function(){

var ajax;




if (window.XMLHttpRequest) {
    // Mozilla, Safari, IE7+ ...
    ajax = new XMLHttpRequest();
} else if (window.ActiveXObject) {
    // IE 6 and older
    ajax = new ActiveXObject('Microsoft.XMLHTTP');
}

// run this when the ajax request completes
ajax.onreadystatechange = function() {
  if (ajax.readyState === 4 && ajax.status === 200) {
    var customerData = JSON.parse(ajax.responseText);
    console.log(customerData);
    populate(customerData);
  }
};

// start the AJAX request
ajax.open('GET', 'http://localhost:8080/javabank5/api/customer', true);
ajax.setRequestHeader('Content-type', 'application/json');
ajax.send();

var populate = function(customerData) {

    var customersTable = document.getElementById("customers");

    customerData.forEach(function(item) {
    
        var row = customersTable.insertRow(-1);
        var cell2 = row.insertCell(0);
        var cell3 = row.insertCell(1);
        var cell4 = row.insertCell(2);
        var cell5 = row.insertCell(3);
        var cell6 = row.insertCell(4);
        var cell7 = row.insertCell(5);
        cell2.innerHTML = item.firstName;
        cell3.innerHTML = item.lastName;
        cell4.innerHTML = item.email;
        cell5.innerHTML = item.phone;
        cell6.innerHTML = "<a class='btn btn-success' href='#'>edit</a>";
        cell7.innerHTML = "<a class='btn btn-danger' href='#'>delete</a>";
        
    });

};


}

