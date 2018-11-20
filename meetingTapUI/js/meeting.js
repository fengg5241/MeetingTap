$(document).ready(function() {
    var editor;

    editor = new $.fn.dataTable.Editor( {
        table: "#dataTables-example",
        fields: [ {
                label: "Rendering engine:",
                name: "Rendering engine"
            }
        ]
    } );

    $('#dataTables-example').DataTable({
        responsive: true,
        dom: 'Bfrtip',
        select: true,
        buttons: [
            { extend: 'create', editor: editor },
            { extend: 'edit',   editor: editor },
            { extend: 'remove', editor: editor }
        ]
    });
});