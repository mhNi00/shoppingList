
let idCounter = 0;
//Wait for page to finish loading
window.addEventListener("load",function(){
    //Run function when you submit form
    document.getElementById("shoppingList").addEventListener("submit",function(e){
      //Stop the form from submitting:
      e.preventDefault();

      //Get your input value
      var shopItem = document.getElementById("inputItem").value;

      newItem = document.createElement("div");
      newItem.innerHTML = "<div id=shopItem"+idCounter+">"+"<div class=shopItemContents>"+shopItem+
      "</div><button type=submit id=edit"+idCounter+">Edytuj</button><button  id=delete"+idCounter+" onclick=deleteItem(this)>Usuń</button></div>";
      insertPosition = document.getElementById("addItem");
      document.body.insertBefore(newItem, insertPosition);
      idCounter++;
    });

});

function deleteItem(element)
{
  var number = element.id;
  number = number.replace("delete", "");
  var el = document.getElementById("shopItem"+number);
  el.remove();
};