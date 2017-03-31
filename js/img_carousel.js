/**
 * Created by Maciek on 2017-03-01.
 */
 
function carousel_change(tag, number){
    var carousel = document.getElementById("carousel-example-generic");
    carousel.style.display="block";
    var ind = document.getElementsByClassName("carousel-indicators");
    var car_in = carousel.firstElementChild;
    while(car_in.childNodes.length>0){
        car_in.removeChild(car_in.childNodes[0])
    }
    while(ind[0].childNodes.length>0){
        ind[0].removeChild(ind[0].childNodes[0])
    }
    var div_in = document.createElement('div');
    for(var i=1; i<=number; i++){
        var div_in = document.createElement('div');
        var list_item = document.createElement('li');
        list_item.setAttribute("data-target","#carousel-example-generic");
        list_item.setAttribute("data-slide-to",i-1);
        if(i==1){
            div_in.className = 'item active';
            list_item.className = 'active';
        }else{
            div_in.className = 'item';
        }

        var img = document.createElement('img');
        img.setAttribute("src","images/gallery/"+tag+"0"+i+".jpg");
        img.setAttribute("alt","Krajobraz");
        ind[0].appendChild(list_item);
        div_in.appendChild(img);
        car_in.appendChild(div_in);
    }
}

$('#krj').on('click',function () {carousel_change("krj",20);})
$('#krk').on('click',function () {carousel_change("krk",4);})
$('#lud').on('click',function () {carousel_change("lud",4);})
$('#nat').on('click',function () {carousel_change("nat",25);})
$('#psz').on('click',function () {carousel_change("psz",10);})
$('#roz').on('click',function () {carousel_change("roz",8);})
$('#zw').on('click',function () {carousel_change("zw",25);})
$('#wkr').on('click',function () {document.getElementById("carousel-example-generic").style.display="none";})
