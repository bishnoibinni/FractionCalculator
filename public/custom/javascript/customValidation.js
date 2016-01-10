$.validator.addMethod("nonZeroDenominator", function(value, element) {
    var reg = new RegExp("^-?[0-9]+$");
    return reg.test(value) && parseInt(value) !== 0;
});

$.validator.addMethod("onlyNumeric", function(value, element) {
    var reg = new RegExp("^-?[0-9]+$");
    return reg.test(value);
});


$.extend($.validator.messages, {
    nonZeroDenominator: 'Denominator should be a non Zero Integer',
    onlyNumeric: 'Field should contain only integers',
    required: 'Cannot be Empty'
});
