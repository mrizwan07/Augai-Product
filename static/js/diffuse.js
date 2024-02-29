
$(".spin").hide();
jQuery('body').css('opacity', '1');

function hidden() {
    $(".spin").hide();
    document.getElementById('download').click();
    jQuery('body').css('opacity', '1');
}

function handleFileUpload() {
    $(".spin").show();
    jQuery('body').css('opacity', '0.6');

    var fileInput = document.getElementById('upload-input');
    var files = fileInput.files;
    if (files.length > 10) {
        alert("Files must be less then 10");
        $(".spin").hide();
        jQuery('body').css('opacity', '1');
        return;
    }

    var formData = new FormData();

    var input = $('#upload-input')[0];

    for (var i = 0; i < input.files.length; i++) {
        formData.append('images', input.files[i]);
    }

    formData.append('csrfmiddlewaretoken', $('input[name=csrfmiddlewaretoken]').val());

    setTimeout(hidden, 3000);

    $.ajax({
        type: 'POST',
        url: 'submitRecord/',
        data: formData,
        processData: false,
        contentType: false,
        success: function (response) {
            console.log(response);
        },
        error: function (error) {
            // Handle the error response
            console.error(error);
        }
    });
}