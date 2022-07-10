// Add the current date and time to the header
// Variable to hold current date and time
var currentDateTime = moment().format('MMM Do, YYYY');

$('#current-date-time').text(currentDateTime);

$('#current-date-time').css('font-weight', 'bold');

$('#current-date-time').css('font-size', '25px')
