$("button").click(function(){
    var name = $(".name").val();
    
    var age = $(".age").val();
    
    var year = $(".year").val();
    var yearDiff= parseInt(year) - parseInt(2019);
    var yourAge= yearDiff + parseInt(age);
    
  
    $("p").text(name + ",you're age will be " + yourAge + " in the year" + year);
});