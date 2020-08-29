var catalog=[];

/*

function fetchData(){
catalog=[
    {code: '001',
     title: 'Iphone 11',
      price: '1000.00',
    catagory: 'Phone',
    img: src='img/iphone.jpg'}

,

    {code: '002',
    title: 'Samsung TV',
     price: '1000.00',
   catagory: 'Electronincs',
    img: src='img/tv.jpeg'}

,

{code: '003',
    title: 'speakers',
     price: '1000.00',
   catagory: 'Sound',
    img: src='img/speakers.jpeg'}

]*/

$.ajax({
    url: 'http://restclass.azurewebsites.net/api/points',
    type: 'GET',
    sucess:function(allitems){
        console.log(allitems); 
        
        for(var i=0;i<allitems.length;i++){
            var item=allitems[i];
            if(item.user==="mesaye"){
                catalog.push(item);
            }
        }
        displayCatalog();
    },

    error:function(){
        console.log('Error getting data',details);
    }

});


function displayCatalog(){
    for(var i=0;i<catalog.length;i++){
        var item=catalog[i];
        var syntax=
        `<div class="item" id=${item.code}">
         <img src=${item.img}">
        <h4> ${item.title}</h4>
        <h6> class="price"> ${item.price}</h6>
        <p>${item.catagory}</p>
        <button class="btn btn-primary"> Add to Cart </button>
        </div>
        `;
        $('#catalog').append(syntax);

    }
}

function init(){
    console.log('Catalog page');
    fetchData();
    displayCatalog();
}
window.onload=init

function register(){
    console.log('Catalog page');
}

