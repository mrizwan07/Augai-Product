
    function translateText() {
        const inputText = $('#inputTextArea').val();
        const inputLanguage = $('#inputLanguage').val();
        const outputLanguage = $('#outputLanguage').val();

        const data = {
            'input_text': inputText,
            'input_language': inputLanguage,
            'output_language': outputLanguage
        };

        $.ajax({
            url: '/Translate/',
            type: 'POST',
            data: data,
            dataType: 'json',
            success: function (response) {
                const translatedText = response.translated_text;
                $('#outputTextArea').val(translatedText);
            },
            error: function () {
                alert('Error occurred while trying to translate the text.');
            }
        });
    }

    $('#inputTextArea').on('input', function () {
        translateText();
    });

    // Add language selectors for input and output text
    $('#inputLanguage, #outputLanguage').on('change', function () {
        translateText();
    });