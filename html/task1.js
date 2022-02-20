
function addimage(){
    input=document.getElementById('input').value; 
    var img = document.createElement('img');
    img.src = input;
    document.getElementById('body').appendChild(img);

}