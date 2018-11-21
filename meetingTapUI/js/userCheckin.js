$(document).ready(function() {
    
    // $('#dataTables-example').DataTable({
    //     responsive: true,
    //     // dom: 'Bfrtip',
    //     ajax: "https://40ddba2a-c79f-4843-9e76-02cad7cd8fea.mock.pstmn.io/user/getUsers"
        
    // });

    $("#buttonLogin").click(function(e){
        e.preventDefault();
        // PREPARE FORM DATA
    	var param = {
            meeting_id:1,
        };

        $('#dataTables-example').DataTable({
            responsive: true,
            // dom: 'Bfrtip',
            ajax: "https://40ddba2a-c79f-4843-9e76-02cad7cd8fea.mock.pstmn.io/user/getUsers?meeting_id=1"
            
        });
    	
    	// // DO POST
    	// $.ajax({
		// 	type : "POST",
		// 	contentType : "application/json",
		// 	url : "http://localhost:3000/checkin/checkin",
		// 	data : JSON.stringify(param),
		// 	dataType : 'json',
		// 	success : function(data) {
		// 		if(data.id){
        //             alert("Successful !");
        //             $("#inputIcode").val("");
        //         }else {
        //             alert("Please check your input, it is not existed in our syetem!")
        //         }
		// 	},
		// 	error : function(e) {
		// 		alert("Error!")
		// 		console.log("ERROR: ", e);
		// 	}
        // });
     
    });
});
