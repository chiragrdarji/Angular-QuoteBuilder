﻿$(document).ready(function () {
    // VALIDATION SCRIPT
    $("#signupform").validate({
        rules: {
            txtfirstname:
                {
                    required: true
                },
            txtlastname:
                {
                    required: true
                },
            txttitle:
                {
                    required: true
                },
            txtcompany:
                {
                    required: true
                },
            txtemail:
                {
                    required: true,
                    regx: /^([a-z0-9,!#\$%&'\*\+/=\?\^_`\{\|}~-]+(\.[a-z0-9,!#\$%&'\*\+/=\?\^_`\{\|}~-]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*\.([a-z]{2,})){1}(;[a-z0-9,!#\$%&'\*\+/=\?\^_`\{\|}~-]+(\.[a-z0-9,!#\$%&'\*\+/=\?\^_`\{\|}~-]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*\.([a-z]{2,}))*$/
                },
            txtphone:
                {
                    required: true
                },
            ddlNumberofUsers:
                {
                    required: true
                }
        },
        messages: {
            txtfirstname:
                {
                    required: ""
                },
            txtlastname:
                {
                    required: ""
                },
            txttitle:
                {
                    required: ""
                },
            txtcompany:
                {
                    required: ""
                },
            txtemail:
                {
                    required: "", regx: ""
                },
            txtphone:
                {
                    required: ""
                },
            ddlNumberofUsers:
                {
                    required: ""
                }
        },
        errorElement: "span",
        highlight: function (element, errorClass, validClass) {

            $(element).parent().removeClass("correct").addClass("error");
            $("#" + element.id + "_err").removeClass("hidden");

        },
        unhighlight: function (element, errorClass, validClass) {
            $(element).parent().removeClass("error").addClass("correct");
            $("#" + element.id + "_err").addClass("hidden");
        }
    });

    $.validator.addMethod("regx", function (value, element, regexpr) { return regexpr.test(value); }, "");
});