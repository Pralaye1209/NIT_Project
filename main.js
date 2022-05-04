$(document).ready(function () {



    $('.input-group input[required], .input-group textarea[required], .input-group select[required]').on('keyup change', function () {
        var $form = $(this).closest('form'),
                $group = $(this).closest('.input-group'),
                $addon = $group.find('.input-group-addon'),
                $icon = $addon.find('span'),
                status = false;
        if (!$group.data('validate')) {
            status = $(this).val() ? true : false;
        } else if ($group.data('validate') == "email") {
            status = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/.test($(this).val())
        } else if ($group.data('validate') == 'phone') {
            status = /^[(]{0,1}[0-9]{3}[)]{0,1}[-\s\.]{0,1}[0-9]{3}[-\s\.]{0,1}[0-9]{4}$/.test($(this).val())
        } else if ($group.data('validate') == "length") {
            status = $(this).val().length >= $group.data('length') ? true : false;
        } else if ($group.data('validate') == "postalcode") {
            if ((!isNaN(parseFloat($(this).val())) && isFinite($(this).val()))
                    && $(this).val().length >= $group.data('length')) {
                status = true;
            } else {
                status = false;
            }
        }

        if (status) {
            $addon.removeClass('danger');
            $addon.addClass('success');
            $icon.attr('class', 'glyphicon glyphicon-ok');
        } else {
            $addon.removeClass('success');
            $addon.addClass('danger');
            $icon.attr('class', 'glyphicon glyphicon-remove');
        }

        if ($form.find('.input-group-addon.danger').length == 0) {
            $form.find('[type="submit"]').prop('disabled', false);
        } else {
            $form.find('[type="submit"]').prop('disabled', true);
        }
    });

    $('.input-group input[required], .input-group textarea[required], .input-group select[required]').trigger('change');

    var $panel = $(this).parents('.filterable'),
            $filters = $panel.find('.filters input'),
            $tbody = $panel.find('.table tbody');


    if ($filters.prop('disabled') == true) {
        $filters.prop('disbaled', false);
        $filters.first().focus();
    } else {
        $filters.val('').prop('disabled', true);
        $tbody.find('no-result').remove();
        $tbody.find('tr').show();
    }

    $('.filterable .filters input').keyup(function (e) {

        var code = e.keyCode || e.which;
        if (code == 9)
            return;
        var $input = $(this),
                inputContent = $input.val().toLowerCase(),
                $panel = $input.parents('.filterable'),
                column = $panel.find('.filters th').index($input.parents('th')),
                $table = $panel.find('.table'),
                $rows = $table.find('tbody tr');

        var $filteredRows = $rows.filter(function () {
            var value = $(this).find('td').eq(column).text().toLowerCase();

            return value.indexOf(inputContent) === -1;
        });

        $table.find('tbody .no-result').remove();
        $rows.show();
        $filteredRows.hide();

        if ($filteredRows.length === $rows.length) {
            $table
                    .find('tbody')
                    .prepend(
                            $('<tr class="no-result text-center text-warning"><td colspan="'
                                    + $table
                                    .find('.filters th').length
                                    + '"><strong>!! No Records Found !!</strong></td></tr>'));


        }
    });

    $('.filterable .btn-filter').click(function () {
        var $panel = $(this).parents('.filterable'),
                $filters = $panel.find('.filters input'),
                $tbody = $panel.find('.table tbody');
        if ($filters.prop('disabled') == true) {
            $filters.prop('disabled', false);
            $filters.first().focus();
        } else {
            $filters.val('').prop('disabled', true);
            $tbody.find('.no-result').remove();
            $tbody.find('tr').show();
        }
        return false;
    });




  $("#confirmpassword").change(function(){
  
    if($("#newpassword").val()==$("#confirmpassword").val()){
      $("#error").hide();
      
      
    }
    else{
      $("#error").html("<strong>* New and Confirm Password should be same.</strong>");
      $("#error").show();
    }
    
  
});

                                                        

});