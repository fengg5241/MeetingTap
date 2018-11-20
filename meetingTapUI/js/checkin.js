$(document).ready(function() {
    $("#buttonLogin").click(function(e){
        e.preventDefault();
        // PREPARE FORM DATA
    	var param = {
            meeting_id:1,
            icode:$("#inputIcode").val()
        };
    	
    	// DO POST
    	$.ajax({
			type : "POST",
			contentType : "application/json",
			url : "http://localhost:3000/checkin/checkin",
			data : JSON.stringify(param),
			dataType : 'json',
			success : function(data) {
				if(data.id){
                    alert("Successful !");
                    $("#inputIcode").val("");
                }else {
                    alert("Please check your input, it is not existed in our syetem!")
                }
			},
			error : function(e) {
				alert("Error!")
				console.log("ERROR: ", e);
			}
        });
        



        
  

        // $.post( "http://localhost:3000/checkin/checkin",{data:param}, function( data ) {
        //     console.log(data);
        //   });
    });
});