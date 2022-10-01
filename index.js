
$(".btn").click(function () {
		
	let a = $(".txt").val() 


if(a!== ""){
   
   
     $("#do").append('<li class="list" >'+a+'</li>')
     
     $(".txt").val("")
     $(".list").dblclick(function(){
     $(this).remove() ; 
     
        
    })

 }  





})

$(".txt").keyup(function(event){
   if(event.keyCode == 13){
     $("#btn").click();
   }         
});






 
            
  