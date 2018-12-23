var xhr = new XMLHttpRequest();
xhr.onreadystatechange = function(){
    if(xhr.readyState === 4){
        var employees = JSON.parse(xhr.responseText);
        var statusHTML = '<ul class="bulleted">';
        for(var i=0; i<employees.length; i++){
            if(employees[i].inoffice === true){
                statusHTML += '<li class="in">';
            } else {
                statusHTML += '<li class="out">';
            }
            statusHTML += employees[i].name;
            statusHTML += '</li>';
        }
        statusHTML += '</ul>';
        document.getElementById('employeeList').innerHTML = statusHTML;
    }
}

xhr.open('GET', 'data/employees.json');
xhr.send();