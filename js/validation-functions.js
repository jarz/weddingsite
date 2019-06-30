$(document).ready(function() {
    $('#rsvp-form').submit(function(e) {
        // Prevent form submission
        e.preventDefault();

        // Get the form instance
        var $form = $(e.target);

        // Get the BootstrapValidator instance

        // Use Ajax to submit form data
        var url = 'https://script.google.com/macros/s/AKfycby5YONrF_xGqMsfFZTn1ftiPNdqkFHLYCHdDga2n1hkVICLnkI/exec';
        // show the loading 
        $('#postForm').prepend($('<span></span>').addClass('glyphicon glyphicon-refresh glyphicon-refresh-animate'));
        var jqxhr = $.post(url, $form.serialize(), function(data) {
            console.log("Success! Data: " + data.statusText);
            $('#rsvp-form').addClass('hidden');
            $('#rsvp-thank-you').removeClass('hidden');            
        })
            .fail(function(data) {
                console.warn("Error! Data: " + data.statusText);
                // HACK - check if browser is Safari - and redirect even if fail b/c we know the form submits.
                if (navigator.userAgent.search("Safari") >= 0 && navigator.userAgent.search("Chrome") < 0) {
                    //alert("Browser is Safari -- we get an error, but the form still submits -- continue.");
                    $('#rsvp-form').addClass('hidden');
                    $('#rsvp-thank-you').removeClass('hidden');
                }
            });
    });

    $('#add2').click(function(e){
        e.preventDefault();
        $('#name2').removeClass('hidden');
        $('#add2').addClass("hidden");
    });

    $('#rm2').click(function(e){
        e.preventDefault();
        $('#name2').addClass('hidden');
        $('#firstname2').val('');
        $('#lastname2').val('');
        $('#add2').removeClass('hidden');
    });

    $('#add3').click(function(e){
        e.preventDefault();
        $('#name3').removeClass('hidden');
        $('#add3').addClass('hidden');
        $('#rm2').addClass('hidden');
    });

    $('#rm3').click(function(e){
        e.preventDefault();
        $('#name3').addClass('hidden');
        $('#firstname3').val('');
        $('#lastname3').val('');
        $('#add3').removeClass('hidden');
        $('#rm2').removeClass('hidden');
    });

    $('#add4').click(function(e){
        e.preventDefault();
        $('#name4').removeClass('hidden');
        $('#add4').addClass('hidden');
        $('#rm3').addClass('hidden');
    });

    $('#rm4').click(function(e){
        e.preventDefault();
        $('#name4').addClass('hidden');
        $('#firstname4').val('');
        $('#lastname4').val('');
        $('#add4').removeClass('hidden');
        $('#rm3').removeClass('hidden');
    });

    $('#add5').click(function(e){
        e.preventDefault();
        $('#name5').removeClass('hidden');
        $('#add5').addClass('hidden');
        $('#rm4').addClass('hidden');
    });

    $('#rm5').click(function(e){
        e.preventDefault();
        $('#name5').addClass('hidden');
        $('#firstname5').val('');
        $('#lastname5').val('');
        $('#add5').removeClass('hidden');
        $('#rm4').removeClass('hidden');
    });

    $('input[type=radio][name=attending]').change(function() {
        $('#postForm').removeClass('hidden');
        $('#postForm').removeAttr('disabled');

        if (this.value === 'YES') {
            $('#addl').removeClass('hidden');
        } else {
            $('#addl').addClass('hidden');
        }
      });
});