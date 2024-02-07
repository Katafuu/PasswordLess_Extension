var inputID = document.getElementById('uname');

//add a listener to the object for blur
inputID.addEventListener('blur',function(){
    //the value attribute is the way to get what the user entered.
    console.log(inputID.value);
});