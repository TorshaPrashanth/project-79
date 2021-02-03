menu_list_array = ["Chicken Tandoori Pizza",
                   "Veg Supreme Pizza",
                   "Paneer Tikka Pizza",
                   "Deluxe Veggie Pizza",
                   "Veg Extravaganza Pizza"];
                   function getmenu(){
                     htmldavarta;
                    htmldata="<ol class='menulist'>"
                    menu_list_array.sort();
                    for(var i=0;i<menu_list_array.length;i++){
                        htmldata=htmldata + '<li>' + menu_list_array[i] + '</li>'
                    }
                    htmldata=htmldata+"</ol>"
                    document.getElementById(display_menu).innerHTML = htmldata;
                    }
function add_item(){
 var htmldavarta;
 var item-document.getElementById("add_item").value;
menu_list_array.push(item);
htmldata="<section class='cards'>"
for(var i=0;i<menu_list_array.length;i++){
    htmldata=htmldata + '<div class=card >' + <img src="images/pizzaImg.png"></img> + menu_list_array[i] + '</div>'
}
htmldata=htmldata+"</section>"
                    document.getElementById(display_addmenu).innerHTML = htmldata;
}