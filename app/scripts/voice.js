/**
 * Created by Eugeny.horoshilov on 23.10.14.
 */

var
    button = document.querySelector('#record'),
    input = document.querySelector('#text'),
    element = document.querySelector('#voice'),
    process = false
    ;

button.addEventListener('click', function(e) {
    e.preventDefault();

    if(process){
        element.stop();
        process = false;
    } else if(!process){
        element.start();
        process = true;
    }

});

//element.addEventListener('result', function(e) {
//    input.textContent = e.detail.result;
//    console.log('result');
//});

element.addEventListener('start', function(e){
    console.log('start' + e);
});

element.addEventListener('error', function(e){
    console.log('error ' + e);
});

element.addEventListener('end', function(e){
    console.log('end' + e);
});

element.addEventListener('result', function(e){
    console.log('result ' + e);
});