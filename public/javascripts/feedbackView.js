$(function() {
    $.getJSON('api', updateFeedback);

    $('.feedback-form').submit(function (e) {
        e.preventDefault();

        $.post('api', {
            name:$('#feedback-form-name').val(),
            title:$('#feedback-form-title').val(),
            message:$('#feedback-form-message').val()

        },updateFeedback)
        
    });

    $('.feedback-messages').on('click', function (e) {
        if(e.target.className == 'glyphicon glyphicon-remove' ){
            $.ajax({
                url: 'api/' + e.target.id,
                type:'DELETE',
                success: updateFeedback
            });// ajax
        }//target the delete button
    })


    function updateFeedback(data) {
        // console.log(data);
        var myJSON = JSON.stringify(data);
        // document.getElementById("demoOne").innerHTML = myJSON;
        var output = '';
        $.each(data,function(key, item) {


            console.log(item.title);
            console.log(item.message);

            // console.log(item,'itemss');
            output += '     <div class="feedback-item item-list media-list">';
            output += '       <div class="feedback-item media">';
            output += '       <div class="media-left">' + '<button class="feedback-delete btn btn-danger"><span id=" '+ key +'" class="glyphicon glyphicon-remove"></span></button>';
            output += '         <div class="feedback-info media-body">';
            output += '           <div class="feedback-hea d">';
            output += '             <div class="feedback-title"> ' + item.title + ' <small class="feedback-name label label-info"> ' + item.name + ' </small></div>';
            output += '           </div>';
            output += '           <div class="feedback-message">  ' + item.message + ' </div>';
            output += '         </div>';
            output += '       </div>';
            output += '     </div>';

        });
        $('.feedback-messages').html(output);
    }
});
