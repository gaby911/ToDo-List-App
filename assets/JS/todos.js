//check off specific todos by clicking

$("ul").on("click","li",function(){// to assure that will work also on the items added
    $(this).toggleClass("completed");
});

//click on X to delete todo
$("ul").on("click","span",function(event){
    event.stopPropagation(); // stops propagation of the other elements like li, ul, body
    $(this).parent().fadeOut(500, function(){ //this reffers to span
        $(this).remove();//this refers to li
    });// .parent() select the li
});

$("input[type='text']").keypress(function(event){
    if(event.which ===13){
        //grabbing new todo text from input
        var todoText =    $(this).val();
        $(this).val(""); //clears the text from input
        //create a new li and add to ul
        $("ul").append("<li><span><i class=\"fa fa-trash\"></i></span> " + todoText+ "</li>");// append() adauga un element
    }
});

$(".fa-plus").click(function(){
    $("input[type='text']").fadeToggle();
})