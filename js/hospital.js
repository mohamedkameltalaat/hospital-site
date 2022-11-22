
$("document").ready(function(){

    $("header .container i").click(function(){
        $(this).toggleClass("fa-times");
        $("header nav ul").toggleClass("active")
    })
    $(window).on("scroll load",function(){
          $("header .container i").removeClass("fa-times");
        $("header nav ul").removeClass("active")
    })
})

let lists =document.querySelectorAll(".facility .container div a img");
lists.forEach(function(element){
    element.addEventListener("click",function(e){
        e.preventDefault()
        console.log();
        let d =document.createElement("div");
        let y =document.createElement("img");
        let t=document.createElement("i");
        t.className="fa fa-times";
        d.appendChild(t);
        y.src=this.src
        d.appendChild(y);
        d.className="overly";
        document.body.appendChild(d);
    })
    
    $("body").on("click",".fa-times",function(){
        $(".overly").remove();
    })

})



