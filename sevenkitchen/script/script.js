//loader function
window.addEventListener('load', function(){
    var hiddenBody = this.document.querySelector('.hide');
    var backgroundScreen = document.querySelector('body');
    var loadingScreen =  document.querySelector('.loader');
    backgroundScreen.classList.add('background-color');
    hiddenBody.style.display = 'none';
   
    
    setTimeout( function() {
        backgroundScreen.classList.remove('background-color');
        loadingScreen.style.display = 'none';
        hiddenBody.style.display = 'block';
    },2000);
    

});

//rupiah format price
function formatTxt(cobacoba) {
    let format = 'Rp ' + cobacoba.toLocaleString('id-ID');
    var priceandGram = format +' /500gr' 
    document.getElementById('priceForFood').innerHTML = priceandGram;
}
formatTxt(135000);
var buttonClass = document.querySelector('#buttonFirstFood');



buttonClass.addEventListener('click', function(){
    
     buttonClass.classList.add('buttonHover');
    setTimeout(function(){

        buttonClass.classList.remove('buttonHover');
        
    },300);

    window.location = 'https://wa.me/628123193955?text=Hallo,Permisi saya mau beli rendang()KG'
});

