$( "#reminder" ).submit(function( event ) {
    event.preventDefault();
    var telNo = $(".phone-input").val();
    var sendInfo = {
        "number":telNo
    }
    console.log(sendInfo);

    $.ajax({
        url: 'https://us-central1-cred-f404a.cloudfunctions.net/addContact',
        type: 'post',
        dataType: 'application/json',
        data: sendInfo
    });

    analytics.logEvent('contact requested');

    $("#reminder, .notify-note").slideUp(200);
    $(".notify-header").text("You got it!");
});