$(document).ready(function() {
// write your code here

$.getJSON('data.json',function(data){
    $.each(data, function(key, value){
        var coor = (value.location).join(',');
        console.log(coor);
            var tblRow = "<tr>" + "<td>" + value.name + "</td>" +
           "<td>" + value.description + "<td>" +"<button>"+"<a href='https://www.google.com/maps?q="+ coor +"'> </a>" + "</button>" + "<td>" + "</tr>" 
           $(tblRow).appendTo('#table');
    })
})

});

