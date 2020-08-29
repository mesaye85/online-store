/*AJAX
http://restclass.azurewebsites.net/api/points
postL create.send data
GET:
get info
PUTL update par of an existing element
PATCHL update part of an existing element
DELETEL remove an existing element

//object contructor for item
*/
class Item{
constructor(code, title, price, catagory, image){
  this.code= code;
  this.title= title;
  this.price = price;
  this.catagory = catagory;
  this.image = image;
  this.user="Mesaye"
}
}
function register(){
        var code= $('#code').val();
        var title= $('#title').val();
        var price= $('#price').val();
        var catagory= $('#catagory').val();
        var img= $('#img').val();

        var item= new Item(code,title,price,catagory,img);
        console.log(item);
        console.log(JSON.stringify(item));

   //create ajax request
   $.ajax({
       url: 'http://restclass.azurewebsites.net/api/points',
       type: 'POST',
       data: JSON.stringify(item),
       contentType: 'application/json',
       success:function(response){
           console.log('yeee',response);
       },
       error: function(errorDetails){
           console.log('ouch',errorDetails);
       }

   });
}

function init(){
    console.log('Admin page');
    $('#btn-register').on('click',register);
}
window.onload=init;
