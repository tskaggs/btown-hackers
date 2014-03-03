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