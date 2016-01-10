$('#formSubmit').validate({
    errorPlacement: function(error, element) {
        if ($('#errorDiv #' + $(error).prop('id')).size() === 0) {
            error.appendTo('#errorDiv');
        }
    },
    success: function(element) {
        $('#errorDiv label#'+ $(element).prop('id')).remove();
    }
});

$('#equals').on("click", function(e) {
    if($('#formSubmit').valid()) {
        var numerator1 = $('#num1').val();
        var numerator2 = $('#num2').val();
        var denominator1 = $('#denom1').val();
        var denominator2 = $('#denom2').val();
        var operation = $('#ops').val();
        var num3 = '';
        var dnum3 = '';

        if ((numerator1 < 0 && denominator1 < 0) || (numerator1 > 0 && denominator1 < 0)) {
            numerator1 = numerator1 * -1;
            denominator1 = denominator1 * -1;
        }

        if ((numerator2 < 0 && denominator2 < 0) || (numerator2 > 0 && denominator2 < 0)) {
            numerator2 = numerator2 * -1;
            denominator2 = denominator2 * -1;
        }

        switch(operation) {
            case '+' :
                num3 = (numerator1*denominator2) + (numerator2*denominator1);
                dnum3 = denominator1*denominator2;
            break;

            case '-' :
                num3 = (numerator1*denominator2) - (numerator2*denominator1);
                dnum3 = denominator1*denominator2;
            break;

            case '/' :
                num3 = (numerator1*denominator2);
                dnum3 = denominator1*numerator2;
            break;

            case '*' :
                num3 = (numerator1*numerator2);
                dnum3 = denominator1*denominator2;
            break;

            default :
            console.log('unexpected operation executed');
        }
        var isFinalFractionalValueNegative = false;

        if (num3 < 0) {
            num3 = num3 * -1;
            isFinalFractionalValueNegative = true;
        } else if (dnum3 < 0) {
            dnum3 = dnum3 * -1;
            isFinalFractionalValueNegative = true;
        }

        var gcdValue = gcd(num3, dnum3);
        num3 = num3/gcdValue;
        dnum3 = dnum3/gcdValue;

        if (isFinalFractionalValueNegative) {
            num3 = num3 * -1;
        }

        $('#num3').val(num3);
        $('#denom3').val(dnum3);
    }
});

function gcd(numerator, denominator) {
    if (denominator === 0) {
        return numerator;
    } else {
        return gcd(denominator, (numerator % denominator));
    }
}