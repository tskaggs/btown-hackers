// function sendSpoiler(subject_item, to_item, from_item, body_item) {
//     var datas = {subject: subject_item, to: to_item, from: from_item, body: body_item}
//     $.ajax({
//         type: "POST",
//         url: "/home/sendmail",
//         data: datas,

//         success: function(data) {
//             console.log('Email Sent');
//         }
//     });
// }

// url with custom callbacks

$('.hire_button').click(function() {
    $('#myModal').foundation('reveal', 'open', {
        url: 'http://some-url',
        success: function(data) {
            alert('modal data loaded');
        },
        error: function() {
            alert('failed loading modal');
        }
    });
});