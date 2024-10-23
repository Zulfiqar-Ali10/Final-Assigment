

////////////////////////////////// btn scroll complete ///////////////////

const scrollBtn = document.querySelector("#scroll-to-top-btn");

window.addEventListener("scroll", () => {
    if (window.pageYOffset > 3000) {
        scrollBtn.style.display = "block";
    } else {
        scrollBtn.style.display = "none"
    }

});


scrollBtn.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    })
})
////////////////////////////////// btn scroll complete ///////////////////

///////////////////////// menu ////////////////////////////////////////


const icon = document.querySelector(".icon");
const unOrderList = document.querySelector(".un-order-list");
const close = document.querySelector(".close-icon");

icon.addEventListener("click", () => {
    unOrderList.classList.add("showList");
    unOrderList.classList.remove("closemenu");
});

close.addEventListener("click", () => {
    unOrderList.classList.remove("showList");
    unOrderList.classList.add("closemenu");
});

///////////////////////// menu ////////////////////////////////////////

/////////////////////// form //////////////////////////////////

 $(document).ready(function() {
    $("#Form").on("submit", function(e){
        e.preventDefault();
    
        var fname = $("#fname").val();
        var email = $("#email").val();
        var textarea = $("#textarea").val();
    
    
        if(fname == ""){
            $("#span1").text("This field is required")
        }
        else{
            $("#span1").text("")
        }if(email == ""){
            $("#span2").text("This field is required")
        }
        else{
            $("#span2").text("")
        }if(textarea == ""){
            $("#span3").text("This field is required")
        }
        else{
            $("#span3").text("")
        }
    
        if(fname !== "" && email !== "" && textarea !== ""){
           $("#result").text("Thanks For Submitting")
        }
    
       })
       /////////////////////////////////////////////// slick sliders ///////////////////////

       $('.your-slider').slick({
        dots: true,
        infinite: true, 
        speed: 500,
        slidesToShow: 1, 
        slidesToScroll: 1
    });
















});
/////////////////////// form //////////////////////////////////