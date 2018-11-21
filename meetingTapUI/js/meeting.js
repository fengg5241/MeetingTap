$(document).ready(function() {
    var editor;

    editor = new $.fn.dataTable.Editor( {
        table: "#dataTables-example",
        ajax: "https://40ddba2a-c79f-4843-9e76-02cad7cd8fea.mock.pstmn.io/meeting/getMeetings",
        fields: [ {
                label: "name",
                name: "name"
            },
            {
                label: "location",
                name: "location"
            },
            {
                label: "start date:",
                name: "start_date",
                type: "datetime"
            },
            {
                label: "end date:",
                name: "end_date",
                type: "datetime"
            },
        ]
    } );

    // Activate an inline edit on click of a table cell
    $('#dataTables-example').on( 'click', 'tbody td:not(:first-child)', function (e) {
        editor.inline( this );
    } );

    $('#dataTables-example').DataTable({
        responsive: true,
        dom: 'Bfrtip',
        select: true,
        ajax: "https://40ddba2a-c79f-4843-9e76-02cad7cd8fea.mock.pstmn.io/meeting/getMeetings",
        columns: [
            {
                data: null,
                defaultContent: '',
                className: 'select-checkbox',
                orderable: false
            },
            { data: "name" },
            { data: "location" },
            { data: "start_date" },
            { data: "end_date" }
        ],
        select: {
            style:    'os',
            selector: 'td:first-child'
        },

        buttons: [
            { extend: 'create', editor: editor },
            { extend: 'edit',   editor: editor },
            { extend: 'remove', editor: editor }
        ]
    });
});
