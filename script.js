import { calculateTax } from './taxCalculator.js';

$(document).ready(function () {
    $("#range-s").val(0)
    $('#valBox').val(0)
    $("#range-s").on('input', function (event) {
        event.preventDefault()
        $("#valBox").val(event.target.value)

    });
    $("#valBox").on('input', function () {
        $("#range-s").val($("#valBox").val())
    })
    $(".calculate").click(function () {
        $(".tax-table").css("display", "block")
        var taxable_income = Number($("#valBox").val());

        var tax = calculateTax(taxable_income);

        $("#tax-perc").text((tax * 100 / taxable_income).toFixed(2));
        $("#final-amount").text(tax.toLocaleString("en-US"));
        $("#cal-value").text(taxable_income.toLocaleString("en-US"));
        $("#tax-due").text(tax.toLocaleString("en-US"));
    })
});
