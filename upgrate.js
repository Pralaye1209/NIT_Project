$(document).ready(function () {
    $("#upgradeto").change(function () {
        var val = $('#upgradeto :selected').val();
        $('#totaldues').hide();
        totalvalue = 0;
        if ('SM' == val) {
            totalvalue = ($('#totalunits').text()) * 200;
            $('#totaldue').text(totalvalue);

        } else if ('GM' == val) {
            totalvalue = ($('#totalunits').text()) * 250;
            $('#totaldue').text(totalvalue);
        } else if ('PM' == val) {
            totalvalue = ($('#totalunits').text()) * 300;
            $('#totaldue').text(totalvalue);
        }
        $('#dues').val(totalvalue);
    });

});
    