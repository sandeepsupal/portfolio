$(document).ready(
    function(){
        $(".peoplePic").click(
            function(){
                $(".comment").removeClass("selected");
                $(".peoplePic").removeClass("selected");
                $(this).addClass("selected");
                $("#comment" + this.id).addClass("selected");
                console.log(".comment" + this.id)
            }
        )
    }
)