$(document).ready(function(){
    $('#contact').validate({
        debug: true,
        errorClass: 'alert alert-danger',
        ErrorLabelContainer: '#output-area',
        errorElement: 'div',
        rules: {
            name: {
                required: true
            },
            email: {
                email: true,
                required: true
            },
            message: {
                required: true,
            }
        },
        messages: {
            name: {
                required: 'Please enter your name.'
            },
            email: {
                email: 'Please provide a valid email.',
                required: 'Please enter an email.'
            },
            message: {
                required: 'Please enter a message.',
            }
        },
        submitHandler: (form) => {
            console.log('is this on?')
            $('#contact').ajaxSubmit({
                type: 'POST',
                url: $('#contact').attr('action'),
                success:(ajaxOutput) => {
                    $('#output-area').css('display','')
                    $('#output-area').html(ajaxOutput)

                    if($('.alert-success') >= 1){
                        $('#contact')[0].reset()
                    }

                }
            })
        }

    })
})