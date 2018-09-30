$( document ).ready(function() {
    
        $("#add").click(function() {
            $("#newStuff").append(
                $("#location").val()       
            )
            $("#newStuff").append(
                ": " + $("#content").val() + "<br>"
            )
        });
});

