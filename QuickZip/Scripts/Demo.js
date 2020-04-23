var IsShow = false;
var IsEnableCancel = '';
jquery_1_11_3_min_p(document).ready(function () {
    jquery_1_11_3_min_p("#DivSaveSuccbtn").click(function () {
        jquery_1_12_1("#DivSaveSucc").dialog("close");
    });
    jquery_1_11_3_min_p(document).keypress(
        function (event) {
            if (event.which == '13') {
                event.preventDefault();
            }
        });

    jquery_1_11_3_min_p("#txtPhNumber").blur("input propertychange paste", function (e) {
        var val = $(this).val()
        if (val.length < 10) {
            $(this).val('');
            $(this).addClass('validate');
        }
    });

    /*Avinash Only for [Hero Specific]*/
    jquery_1_11_3_min_p("#txtRefrence1").keyup("input propertychange paste", function (e) {
        var val = $(this).val()
        var reg = /^0/gi;
        if (val.match(reg)) {
            $(this).val(val.replace(reg, ""));
        }
        if (val == "0000000") {
            $(this).val(val.replace(reg, ""));
        }

        if (val.length > 7) {
            $(this).val(val.substring(0, val.length - 1));
        }
    });

    jquery_1_11_3_min_p("#txtAcNo").blur("input propertychange paste", function (e) {
        var val = $(this).val()
        if (val.length < 9) {
            $(this).val('');
            $(this).addClass('validate');
        }
    });

    jquery_1_11_3_min_p("#txtAcNo").keypress(function (e) {

        if (e.which != 8 && e.which != 0 && (e.which < 48 || e.which > 57)) {

            return false;
        }
    });
    /*Avinash Only for [Hero Specific]*/

    //added by garima 07-02-2020
    jquery_1_11_3_min_p("#notacvalrdemandate").click(function () {
        jquery_1_11_3_min_p("#debitnetbank").css('display', 'block');
        jquery_1_11_3_min_p("#netbanking").css('display', 'block');
        jquery_1_11_3_min_p("#netbankingshow").css('display', 'block');
        jquery_1_11_3_min_p("#debitbankingshow").css('display', 'block');
        jquery_1_11_3_min_p('#ContentPlaceHolder1_txtEmandatestatus').val(1);
        CheckEmandate();
    });

    jquery_1_11_3_min_p("#notacvalrdphysical").click(function () {
        jquery_1_11_3_min_p("#debitnetbank").css('display', 'none');
        jquery_1_11_3_min_p("#netbanking").css('display', 'none');
        jquery_1_11_3_min_p("#netbankingshow").css('display', 'none');
        jquery_1_11_3_min_p("#debitbankingshow").css('display', 'none');
        jquery_1_11_3_min_p('#ContentPlaceHolder1_txtEmandatestatus').val(0);
    });

    ////end

    if (jquery_1_11_3_min_p('#ContentPlaceHolder1_lblUserType').html() == "u") {
        CheckUserCreatable(0);
    } //CommentAvinash
    CheckLogoOrQR();
    CheckPhysicalEmandate();

    // Bank not live on e-mandate on checking condition
    jquery_1_11_3_min_p("#EnetbankingNo").click(function () {
        confirmbankformpopup();
        jquery_1_12_1("#Emandatereg").dialog("close");

    });



    jquery_1_11_3_min_p('#btnQrlogoOK').click(function () {
        var QR = 0;
        var LOGO = 0;
        var type = 0;
        if (jquery_1_11_3_min_p("input:radio[name='radiobtn']").is(":checked")) {

            if (jquery_1_11_3_min_p("input:radio[name=radiobtn]:checked").val() == '1') {
                QR = 1;
                LOGO = 0;
                type = 1;
            }

            else {
                QR = 0;
                LOGO = 1;
                type = 2;
            }



            jquery_1_12_1("#dvqrlogopopup").dialog("close");
            jquery_1_11_3_min_p('input[name="radiobtn"]').prop('checked', false);

            window.open("../CreatePdf.aspx?id=" + jquery_1_11_3_min_p('#lblmandateId').text() + "&type=" + type + "", '_blank');

        }
        else {


        }



        //    if (jquery_1_11_3_min_p("input:radio[name=radiobtn]:checked").val() == '1'){
        //        QR=1;
        //        LOGO=0;
        //        type=1;
        //    }
        //   
        //    else{
        //        QR=0;
        //        LOGO=1;
        //        type=2;
        //    }


        //   
        //    jquery_1_12_1("#dvqrlogopopup").dialog("close");
        //     jquery_1_11_3_min_p('input[name="radiobtn"]').prop('checked', false);
        //        
        //         window.open("../CreatePdf.aspx?id=" + jquery_1_11_3_min_p('#lblmandateId').text() + "&type=" +  type + "", '_blank');




    });



    jquery_1_11_3_min_p("#netbankingdebitNo").click(function () {
        jquery_1_11_3_min_p("#btnFirstVal").attr('disabled', true);
        jquery_1_11_3_min_p("#btnSecVal").attr('disabled', true);
        jquery_1_12_1("#netbankingdebit").dialog("close");

    });
    jquery_1_11_3_min_p("#netbankingdebitYes").click(function () {
        //             jquery_1_11_3_min_p("#btnFirstVal").attr('disabled', true);
        //            jquery_1_11_3_min_p("#btnSecVal").attr('disabled', true);
        //            Edit();

        jquery_1_12_1("#netbankingdebit").dialog("close");
        jquery_1_11_3_min_p("#btnEditDisable").click();
    });
    ///////////////////////////////////////////////////////

    //jquery_1_11_3_min_p("#rdEmandate").prop("checked", true);
    jquery_1_11_3_min_p('#txtRefrence1').bind("cut copy paste", function (e) {
        e.preventDefault();
    });
    jquery_1_11_3_min_p('#txtRefrence2').bind("cut copy paste", function (e) {
        e.preventDefault();
    });
    jquery_1_11_3_min_p(".closeder").click(function () {
        jquery_1_12_1(this).parent().dialog("close");
    });
    jquery_1_11_3_min_p(".close").click(function () {
        jquery_1_12_1("#refund").dialog("close");
    });
    jquery_1_11_3_min_p("#ESPNo").click(function () {
        jquery_1_12_1("#DivSecondTimeESP").dialog("close");
    });
    jquery_1_11_3_min_p("#btnDivSecondOk").click(function () {
        jquery_1_12_1("#DivSecondTimeESP").dialog("close");
    });

    jquery_1_11_3_min_p(".rejectclose").click(function () {
        jquery_1_12_1("#reject").dialog("close");
    });
    jquery_1_11_3_min_p("#btncancenNo").click(function () {
        jquery_1_12_1("#DivCancel").dialog("close");
    });
    jquery_1_11_3_min_p("#btnCancel").click(function () {
        ChkCancel();
    });

    jquery_1_11_3_min_p("#btndatesave").click(function () {
        var ToDate = jquery_1_11_3_min_p('#txtTo2').val();
        if (ToDate == '') {
            jquery_1_11_3_min_p('#txtTo2').addClass('validate');
        } else {
            var mandateId = jquery_1_11_3_min_p('#lblmandateId').text();
            var UserId = jquery_1_11_3_min_p('#ContentPlaceHolder1_lblUserid').html();
            jquery_1_11_3_min_p.ajax({
                type: "POST",
                contentType: "application/json; charset=utf-8",
                url: "../WebServices/BankForm.asmx/UpdateToDate",
                data: "{'mandateId':'" + mandateId + "','UserId':'" + UserId + "','ToDate':'" + ToDate + "'}",
                dataType: "json",
                success: function (data) {

                    jquery_1_11_3_min_p('#txtTo').removeClass('validate');
                    jquery_1_11_3_min_p('#txtTo').val(jquery_1_11_3_min_p('#txtTo2').val());

                    jquery_1_11_3_min_p('#lblData').text('Date Updated Successfully.');
                    jquery_1_12_1("#DateMandatoryESign").dialog("close");
                    admin();
                    jquery_1_11_3_min_p("#chkUntil").prop("checked", false);
                }
            });
        }
    });


    jquery_1_11_3_min_p("#btnYesreject").click(function () {
        var mandateId = jquery_1_11_3_min_p('#lblmandateId').text();
        var UserId = jquery_1_11_3_min_p('#ContentPlaceHolder1_lblUserid').html();
        jquery_1_11_3_min_p.ajax({
            type: "POST",
            contentType: "application/json; charset=utf-8",
            url: "../WebServices/BankForm.asmx/UpdateIsFinalReject",
            data: "{'mandateId':'" + mandateId + "','UserId':'" + UserId + "'}",
            dataType: "json",
            success: function (data) {
                jquery_1_11_3_min_p("#btnEditDisable").attr('disabled', true);
                jquery_1_11_3_min_p("#btnFirstVal").attr('disabled', true);
                jquery_1_11_3_min_p("#btnSecVal").attr('disabled', true);
                jquery_1_12_1("#reject").dialog("close");
            }
        });
    });


    jquery_1_11_3_min_p("#btnEdit").attr('disabled', true);
    jquery_1_11_3_min_p("#btnNew").attr('disabled', true);
    var PaymentData = [];
    var dw = jquery_1_11_3_min_p(document).width();
    var dh = jquery_1_11_3_min_p(document).height();
    var kh = dh - 180;
    var kk = dh - 220;
    jquery_1_11_3_min_p(".panel-body").css("overflow-y", "auto");
    if (dw <= "350") {

        //       jquery_1_11_3_min_p('#btnNew').click(function () {
        //      jquery_1_11_3_min_p(".panel-body").css("max-height","355px");
        //      });
        jquery_1_11_3_min_p(".panel-body").css("max-height", kk);
    } else {

        jquery_1_11_3_min_p(".panel-body").css("max-height", kh);
    }

    jquery_1_11_3_min_p('input:radio[name="rdoGender"]').filter('[value="Cash"]').prop('checked', true);
    jquery_1_11_3_min_p('#ModeOfPayment').change(function () {
        if (jquery_1_11_3_min_p('input[name=rdoGender]:checked', '#ModeOfPayment').val() == 'Cash') {
            jquery_1_11_3_min_p("#BtnAdd").css('display', 'none');
            jquery_1_11_3_min_p("#divCheque").css('display', 'none');
            jquery_1_11_3_min_p("#ElectronicPaymentMode").css('display', 'none');
            jquery_1_11_3_min_p("#DivDD").css('display', 'none');
            jquery_1_11_3_min_p("#divrefrenceNo").css('display', 'none');
        } else if (jquery_1_11_3_min_p('input[name=rdoGender]:checked', '#ModeOfPayment').val() == 'Cheque') {
            jquery_1_11_3_min_p("#BtnAdd").css('display', 'block');
            jquery_1_11_3_min_p("#divCheque").css('display', 'block');
            jquery_1_11_3_min_p("#ElectronicPaymentMode").css('display', 'none');
            jquery_1_11_3_min_p("#DivDD").css('display', 'none');
            jquery_1_11_3_min_p("#divrefrenceNo").css('display', 'none');
        } else if (jquery_1_11_3_min_p('input[name=rdoGender]:checked', '#ModeOfPayment').val() == 'DD') {
            jquery_1_11_3_min_p("#BtnAdd").css('display', 'block');
            jquery_1_11_3_min_p("#divCheque").css('display', 'none');
            jquery_1_11_3_min_p("#ElectronicPaymentMode").css('display', 'none');
            jquery_1_11_3_min_p("#DivDD").css('display', 'block');
            jquery_1_11_3_min_p("#divrefrenceNo").css('display', 'none');
        } else {
            jquery_1_11_3_min_p("#BtnAdd").css('display', 'block');
            jquery_1_11_3_min_p("#divCheque").css('display', 'none');
            jquery_1_11_3_min_p("#ElectronicPaymentMode").css('display', 'block');
            jquery_1_11_3_min_p("#DivDD").css('display', 'none');
            jquery_1_11_3_min_p("#divrefrenceNo").css('display', 'none');
        }
        jquery_1_11_3_min_p('#ElectronicPaymentMode').change(function () {
            jquery_1_11_3_min_p("#divrefrenceNo").css('display', 'block');
        });
    });




    jquery_1_11_3_min_p("#ContentPlaceHolder1_btnPhysicall").click(function () {
        jquery_1_11_3_min_p("#ContentPlaceHolder1_btnEemandate").css('display', 'none');
        var UserId = jquery_1_11_3_min_p('#ContentPlaceHolder1_lblUserid').html();
        jquery_1_11_3_min_p.ajax({
            type: "POST",
            contentType: "application/json; charset=utf-8",
            url: "../WebServices/BankForm.asmx/UpdatePhysical",
            data: "{'mandateId':'" + jquery_1_11_3_min_p('#lblmandateId').text() + "','ISSendEmailCustomer':'" + jquery_1_11_3_min_p('#ContentPlaceHolder1_lblISSendEmailCustomer').text() + "','UserId':'" + UserId + "'}",
            dataType: "json",
            async: false,
            success: function (result) {
                //jquery_1_11_3_min_p("#ARequset").css('display', 'none');
                jquery_1_11_3_min_p("#ContentPlaceHolder1_AResponse").css('display', 'none');
                jquery_1_11_3_min_p("#btnScanHalf").css('display', 'none');
                jquery_1_11_3_min_p("#btnScan").css('display', 'block');
                jquery_1_11_3_min_p("#btnMandatePrint").css('display', 'block');
                if (jquery_1_11_3_min_p('#ContentPlaceHolder1_lblOverMandate').html().toUpperCase() == "TRUE") {
                    jquery_1_11_3_min_p("#btnOldOverPrintMandate").css('display', 'block');
                    jquery_1_11_3_min_p("#btnBlankMandateprint").css('display', 'block');
                } else {
                    jquery_1_11_3_min_p("#btnOldOverPrintMandate").css('display', 'none');
                    jquery_1_11_3_min_p("#btnBlankMandateprint").css('display', 'none');
                }
                window.open("../CreatePdf.aspx?id=" + jquery_1_11_3_min_p('#lblmandateId').text() + "", '_blank');//
            },
            error: function (result) {

            }
        })
    });

    jquery_1_11_3_min_p("#btnedityesyNO").click(function () {
        RemoveImage();
        jquery_1_11_3_min_p('#btnEditDisable').css('display', 'none');
        jquery_1_11_3_min_p("#btnSave").css('display', 'block');
        EnableAllControl();
        jquery_1_12_1("#editpopmandate").dialog("close");
    });
    jquery_1_11_3_min_p("#btneditNO").click(function () {
        jquery_1_12_1("#editpopmandate").dialog("close");
    });




    jquery_1_11_3_min_p("#btnEditDisable").click(function () {
        if (ChecKmandate()) {
            if (jquery_1_11_3_min_p('#ContentPlaceHolder1_lblIsMandateEdit').text().toUpperCase() == "FALSE") {
                jquery_1_11_3_min_p('#lblData').text('You cannot edit this mandate contact to Admin');
                admin();
            } else {
                jquery_1_11_3_min_p('#btnEditDisable').css('display', 'none');
                jquery_1_11_3_min_p("#btnScan").css('display', 'none');
                // jquery_1_11_3_min_p("#btnFirstVal").attr('disabled', true);
                // jquery_1_11_3_min_p("#btnSave")["0"].value='Update';
                jquery_1_11_3_min_p("#btnSave").css('display', 'block');
                jquery_1_11_3_min_p("#btnMandatePrint").css('display', 'none');//Avinash:
                EnableAllControl();
            }
        }
    });

    jquery_1_11_3_min_p("#btnSecVal").click(function () {
        if (Validation() == true) {
            // jquery_1_11_3_min_p("#btnScan").css('display', 'block');//CommentedAvinash
            //jquery_1_11_3_min_p("#btnMandatePrint").css('display', 'block'); //CommentedAvinash
            var IsFirstValidate = false;
            if (jquery_1_11_3_min_p('#ContentPlaceHolder1_lblIsValidationCountEnable').html() == 1) {
                if (jquery_1_11_3_min_p('#ContentPlaceHolder1_lblUserType').html() == 'a' || jquery_1_11_3_min_p('#ContentPlaceHolder1_lblUserType').html() == 'E') {
                    if (parseInt(parseInt(jquery_1_11_3_min_p('#ContentPlaceHolder1_lblFinalAcValidationAdminCount').html()) + 1) <= parseInt(jquery_1_11_3_min_p('#ContentPlaceHolder1_lblAcValidationAdminCount').html())) {
                        var UserId = jquery_1_11_3_min_p('#ContentPlaceHolder1_lblUserid').html();
                        jquery_1_11_3_min_p.ajax({
                            type: "POST",
                            contentType: "application/json; charset=utf-8",
                            url: "../WebServices/BankForm.asmx/UpdateAutoRejectReasonAcValidation",
                            data: "{'mandateId':'" + jquery_1_11_3_min_p('#lblmandateId').text() + "','UserId':'" + UserId + "'}",
                            dataType: "json",
                            success: function (data) {
                                jquery_1_11_3_min_p("#btnScanHalf").attr('disabled', true);
                                jquery_1_11_3_min_p("#btnScan").attr('disabled', true);
                                jquery_1_11_3_min_p("#btnMandatePrint").attr('disabled', true);
                                jquery_1_11_3_min_p("#btnOldOverPrintMandate").attr('disabled', true);
                                jquery_1_11_3_min_p("#btnBlankMandateprint").attr('disabled', true);
                                jquery_1_11_3_min_p("#btnScanPrint").attr('disabled', true);
                                jquery_1_11_3_min_p("#ContentPlaceHolder1_btnEemandate").attr('disabled', true);
                                jquery_1_11_3_min_p("#btnPhysicalMandate").attr('disabled', true);
                                reject();
                            }
                        });
                    } else {

                        jquery_1_11_3_min_p('#ContentPlaceHolder1_lblAcValidationAdminCount').html(parseInt(jquery_1_11_3_min_p('#ContentPlaceHolder1_lblAcValidationAdminCount').html()) + 1);
                        IsFirstValidate = true;
                    }


                } else if (jquery_1_11_3_min_p('#ContentPlaceHolder1_lblUserType').html() == 'u') {
                    if (parseInt(parseInt(jquery_1_11_3_min_p('#ContentPlaceHolder1_lblFinalAcValidationUserCount').html()) + 1) <= parseInt(jquery_1_11_3_min_p('#ContentPlaceHolder1_lblAcValidationUserCount').html())) {
                        var UserId = jquery_1_11_3_min_p('#ContentPlaceHolder1_lblUserid').html();
                        jquery_1_11_3_min_p.ajax({
                            type: "POST",
                            contentType: "application/json; charset=utf-8",
                            url: "../WebServices/BankForm.asmx/UpdateAutoRejectReasonAcValidation",
                            data: "{'mandateId':'" + jquery_1_11_3_min_p('#lblmandateId').text() + "','UserId':'" + UserId + "'}",
                            dataType: "json",
                            success: function (data) {
                                jquery_1_11_3_min_p("#btnScanHalf").attr('disabled', true);
                                jquery_1_11_3_min_p("#btnScan").attr('disabled', true);
                                jquery_1_11_3_min_p("#btnMandatePrint").attr('disabled', true);
                                jquery_1_11_3_min_p("#btnOldOverPrintMandate").attr('disabled', true);
                                jquery_1_11_3_min_p("#btnBlankMandateprint").attr('disabled', true);
                                jquery_1_11_3_min_p("#btnScanPrint").attr('disabled', true);
                                jquery_1_11_3_min_p("#ContentPlaceHolder1_btnEemandate").attr('disabled', true);
                                jquery_1_11_3_min_p("#btnPhysicalMandate").attr('disabled', true);
                                jquery_1_11_3_min_p("#btnEditDisable").attr('disabled', true);
                                jquery_1_11_3_min_p("#btnFirstVal").attr('disabled', true);
                                jquery_1_11_3_min_p("#btnSecVal").attr('disabled', true);
                                jquery_1_11_3_min_p('#lblData').text('You have exceeded no. of maximum validation either create new record or contact admin');
                                admin();
                            }
                        });
                    } else {
                        jquery_1_11_3_min_p('#ContentPlaceHolder1_lblAcValidationUserCount').html(parseInt(jquery_1_11_3_min_p('#ContentPlaceHolder1_lblAcValidationUserCount').html()) + 1);

                        IsFirstValidate = true;


                    }
                }
            } else {
                IsFirstValidate = true;

            }

            if (IsFirstValidate == true) {
                var UserId = jquery_1_11_3_min_p('#ContentPlaceHolder1_lblUserid').html();
                // if(jquery_1_11_3_min_p('#ContentPlaceHolder1_lblIsValidationCountEnable').html()==1)
                //      {
                //             jquery_1_11_3_min_p("#btnSecVal").attr('disabled', false);
                //             }else{
                jquery_1_11_3_min_p("#btnSecVal").attr('disabled', true);
                //             }
                //   
                jquery_1_11_3_min_p.ajax({
                    type: "POST",
                    contentType: "application/json; charset=utf-8",
                    url: "../WebServices/BankForm.asmx/UpdateSecond",
                    data: "{'mandateId':'" + jquery_1_11_3_min_p('#lblmandateId').text() + "','UserId':'" + UserId + "'}",
                    dataType: "json",
                    async: false,
                    success: function (AllResultData) {
                        var i = 0;
                        var IsEnach = '';
                        var IsPhysical = '';
                        var isnach = '';
                        var jsonData6 = eval(AllResultData.d.Table6);
                        if (jsonData6[i].IsNachLive == 1) {
                            isnach = jsonData6[i].IsNachLive;
                            var i = 0;
                            var jsonData6 = eval(AllResultData.d.Table6);
                            jquery_1_11_3_min_p("#lblbankFullName").text(kendo_all_min_js("#txtBankName").data("kendoDropDownList").value());
                            if (jquery_1_11_3_min_p('#txtIFSC').val() != '') {
                                jquery_1_11_3_min_p('#lblIFSC').text(jquery_1_11_3_min_p('#txtIFSC').val());
                            } else {
                                jquery_1_11_3_min_p('#lblIFSC').text(jquery_1_11_3_min_p('#txtMICR').val());
                            }
                            jquery_1_11_3_min_p("#ContentPlaceHolder1_AResponse").css('display', 'none');
                            var i = 0;
                            var jsonData4 = eval(AllResultData.d.Table4);

                            jquery_1_11_3_min_p('#lblmandateId').text(jsonData4[i].mandateid);
                            jquery_1_11_3_min_p('#ContentPlaceHolder1_lblSmandateId').val(jsonData4[i].mandateid);


                            ISPhysical = jsonData4[i].ISPhysical;
                            isenach = jsonData4[i].isenach;
                            jquery_1_11_3_min_p('#lblActivityId').text(jsonData4[i].ActivityId);
                            var i = 0;
                            var jsonData6 = eval(AllResultData.d.Table6);
                            var IsENAchLive = '';


                            IsENAchLive = jsonData6[i].is_enach_live;
                            var i = 0;

                            var jsonData = eval(AllResultData.d.Table);
                            var jsonDatabankname = eval(AllResultData.d.Table3);
                            if (AllResultData.d.Table[i].IFSCResult == 'IFSC' || AllResultData.d.Table1[i].MICRResult == 'MICR') {

                                jquery_1_11_3_min_p.ajax({
                                    type: "POST",
                                    contentType: "application/json; charset=utf-8",
                                    url: "../WebServices/BankForm.asmx/GetTraceNo",
                                    data: "{}",
                                    dataType: "json",
                                    success: function (result) {
                                        jquery_1_11_3_min_p("#ContentPlaceHolder1_Iframe1").attr("src", "../Payment/payment.aspx?id=" + jquery_1_11_3_min_p('#lblmandateId').text() + "&AcNo=" + jquery_1_11_3_min_p('#txtAcNo').val() + "&Ifsc=" + (jsonData4[i].IFSC) + "&EntityId=" + jquery_1_11_3_min_p('#ContentPlaceHolder1_lblEntityId').text() + "&ActivityId=" + jquery_1_11_3_min_p('#lblActivityId').text() + " &IsNAchLive=" + isnach + "&TraceNumber=" + result.d + "&IsEnach=" + jsonData4[i].isenach + "&IsPhysical=" + jsonData4[i].ISPhysical + "&SponsorBankCode=" + kendo_all_min_js("#txtSponsorCode").data("kendoDropDownList").text() + "&UtilityCode=" + jquery_1_11_3_min_p("#txtutilityCode").val() + "&bankname=" + (jsonDatabankname[i].Bankname) + "");
                                        jquery_1_11_3_min_p('#preloader_3').show();
                                        jquery_1_11_3_min_p("#ContentPlaceHolder1_Iframe1").css('display', 'none');

                                        printForm();
                                    }
                                });
                            } else {
                                jquery_1_11_3_min_p("#IFSCImgCross").css('display', 'block');
                                jquery_1_11_3_min_p("#IFSCImgTick").css('display', 'none');

                                jquery_1_11_3_min_p('#txtIFSC').addClass('validate');
                                jquery_1_11_3_min_p('#txtIFSC').val('');
                                jquery_1_11_3_min_p('#txtIFSC').attr("placeholder", "Invalid IFSC!!");

                                jquery_1_11_3_min_p('#lblValidation').text('Account Validation');
                                UnSuccess();//
                            }
                        } else {
                            jquery_1_11_3_min_p('#lblData').text('Bank is not live on NACH');
                            jquery_1_11_3_min_p(".overlay").css('visibility', 'hidden');
                            jquery_1_11_3_min_p("#preloader_1").css('display', 'none');
                            admin();
                        }
                    },
                    error: function (result) {

                    }
                })
            }
        }
    });


    jquery_1_11_3_min_p("#btnFirstVal").click(function () {

        if (Validation() == true) {
            var IsFirstValidate = false;
            if (jquery_1_11_3_min_p('#ContentPlaceHolder1_lblIsValidationCountEnable').html() == 1) {
                if (jquery_1_11_3_min_p('#ContentPlaceHolder1_lblUserType').html() == 'a' || jquery_1_11_3_min_p('#ContentPlaceHolder1_lblUserType').html() == 'E') {
                    if (parseInt(parseInt(jquery_1_11_3_min_p('#ContentPlaceHolder1_lblFinalBankValidationAdminCount').html()) + 1) <= parseInt(jquery_1_11_3_min_p('#ContentPlaceHolder1_lblBankValidationAdminCount').html())) {
                        var UserId = jquery_1_11_3_min_p('#ContentPlaceHolder1_lblUserid').html();
                        jquery_1_11_3_min_p.ajax({
                            type: "POST",
                            contentType: "application/json; charset=utf-8",
                            url: "../WebServices/BankForm.asmx/UpdateAutoRejectReasonBankValidation",
                            data: "{'mandateId':'" + jquery_1_11_3_min_p('#lblmandateId').text() + "','UserId':'" + UserId + "'}",
                            dataType: "json",
                            success: function (data) {
                                jquery_1_11_3_min_p("#btnScanHalf").attr('disabled', true);
                                jquery_1_11_3_min_p("#btnScan").attr('disabled', true);
                                jquery_1_11_3_min_p("#btnMandatePrint").attr('disabled', true);
                                jquery_1_11_3_min_p("#btnOldOverPrintMandate").attr('disabled', true);
                                jquery_1_11_3_min_p("#btnBlankMandateprint").attr('disabled', true);
                                jquery_1_11_3_min_p("#btnScanPrint").attr('disabled', true);
                                jquery_1_11_3_min_p("#ContentPlaceHolder1_btnEemandate").attr('disabled', true);
                                jquery_1_11_3_min_p("#btnPhysicalMandate").attr('disabled', true);

                                reject();
                            }
                        });
                    } else {
                        jquery_1_11_3_min_p('#ContentPlaceHolder1_lblBankValidationAdminCount').html(parseInt(jquery_1_11_3_min_p('#ContentPlaceHolder1_lblBankValidationAdminCount').html()) + 1);
                        IsFirstValidate = true;



                    }
                } else if (jquery_1_11_3_min_p('#ContentPlaceHolder1_lblUserType').html() == 'u') {
                    if (parseInt(parseInt(jquery_1_11_3_min_p('#ContentPlaceHolder1_lblFinalBankValidationUserCount').html()) + 1) <= parseInt(jquery_1_11_3_min_p('#ContentPlaceHolder1_lblBankValidationUserCount').html())) {
                        var UserId = jquery_1_11_3_min_p('#ContentPlaceHolder1_lblUserid').html();
                        jquery_1_11_3_min_p.ajax({
                            type: "POST",
                            contentType: "application/json; charset=utf-8",
                            url: "../WebServices/BankForm.asmx/UpdateAutoRejectReasonBankValidation",
                            data: "{'mandateId':'" + jquery_1_11_3_min_p('#lblmandateId').text() + "','UserId':'" + UserId + "'}",
                            dataType: "json",
                            success: function (data) {
                                jquery_1_11_3_min_p("#btnScanHalf").attr('disabled', true);
                                jquery_1_11_3_min_p("#btnScan").attr('disabled', true);
                                jquery_1_11_3_min_p("#btnMandatePrint").attr('disabled', true);
                                jquery_1_11_3_min_p("#btnOldOverPrintMandate").attr('disabled', true);
                                jquery_1_11_3_min_p("#btnBlankMandateprint").attr('disabled', true);
                                jquery_1_11_3_min_p("#btnScanPrint").attr('disabled', true);
                                jquery_1_11_3_min_p("#ContentPlaceHolder1_btnEemandate").attr('disabled', true);
                                jquery_1_11_3_min_p("#btnPhysicalMandate").attr('disabled', true);
                                jquery_1_11_3_min_p("#btnEditDisable").attr('disabled', true);
                                jquery_1_11_3_min_p("#btnSecVal").attr('disabled', true);
                                jquery_1_11_3_min_p("#btnFirstVal").attr('disabled', true);
                                jquery_1_11_3_min_p('#lblData').text('You have exceeded no. of maximum validation either create new record or contact admin');
                                admin();
                            }
                        });

                    } else {
                        jquery_1_11_3_min_p('#ContentPlaceHolder1_lblBankValidationUserCount').html(parseInt(jquery_1_11_3_min_p('#ContentPlaceHolder1_lblBankValidationUserCount').html()) + 1);

                        IsFirstValidate = true;

                    }
                }
            } else {
                IsFirstValidate = true;
            }

            if (IsFirstValidate == true) {
                var UserId = jquery_1_11_3_min_p('#ContentPlaceHolder1_lblUserid').html();
                jquery_1_11_3_min_p(".overlay").css('visibility', 'visible');
                jquery_1_11_3_min_p("#preloader_1").css('display', 'block');
                jquery_1_11_3_min_p.ajax({
                    type: "POST",
                    contentType: "application/json; charset=utf-8",
                    url: "../WebServices/BankForm.asmx/UpdateFirst",
                    data: "{'mandateId':'" + jquery_1_11_3_min_p('#lblmandateId').text() + "','UserId':'" + UserId + "'}",
                    dataType: "json",
                    async: false,
                    success: function (AllResultData) {
                        var i = 0;
                        var jsonData6 = eval(AllResultData.d.Table6);

                        if (jsonData6[i].IsNachLive == 1) {

                            jquery_1_11_3_min_p("#IFSCImgCross").css('display', 'block');
                            jquery_1_11_3_min_p("#IFSCImgTick").css('display', 'none');
                            jquery_1_11_3_min_p("#NACHTick").css('display', 'block');
                            jquery_1_11_3_min_p("#NACHCross").css('display', 'none');

                            var i = 0;
                            var jsonData6 = eval(AllResultData.d.Table6);
                            var jsonData7 = eval(AllResultData.d.Table7);
                            jquery_1_11_3_min_p("#lblbankFullName").text(jsonData6[i].FullBank);
                            if (jquery_1_11_3_min_p('#txtIFSC').val() != '') {
                                jquery_1_11_3_min_p('#lblIFSC').text(jquery_1_11_3_min_p('#txtIFSC').val());
                            } else {
                                jquery_1_11_3_min_p('#lblIFSC').text(jquery_1_11_3_min_p('#txtMICR').val());
                            }
                            var IsENAchLive = '';
                            if (1 == 1) {

                                IsENAchLive = jsonData6[i].is_enach_live;

                                /*garima 07-02-2020*/
                                var Phone_Number = jsonData7[0].PhoneNumber.trim();
                                var emailid = jsonData7[0].Emailid.trim();
                                jquery_1_11_3_min_p("#lblmobile").text(Phone_Number);
                                jquery_1_11_3_min_p("#lblemail").text(emailid);

                                if (emailid != "") {
                                    jquery_1_11_3_min_p("#imgtickemail").css('display', 'block');
                                    jquery_1_11_3_min_p("#imgcrossemail").css('display', 'none');
                                }
                                if (Phone_Number != "") {
                                    jquery_1_11_3_min_p("#imgtkmobile").css('display', 'block');
                                    jquery_1_11_3_min_p("#imgcrossmobile").css('display', 'none');
                                }





                                var i = 0;
                                var jsonData = eval(AllResultData.d.Table);




                                if (AllResultData.d.Table[i].IFSCResult == 'IFSC' || AllResultData.d.Table1[i].MICRResult == 'MICR') {
                                    jquery_1_11_3_min_p('#ContentPlaceHolder1_txtcheckifscvalid').val(1);
                                    var isentityaccountvalidation = jquery_1_11_3_min_p('#ContentPlaceHolder1_txtentityaccountvalidationflag').val();
                                    if (isentityaccountvalidation == "0") {
                                        if (jquery_1_11_3_min_p('#ContentPlaceHolder1_txtEmandatestatus').val() == "0") {
                                            jquery_1_11_3_min_p("#Divmandatemode").css('display', 'none');
                                            jquery_1_11_3_min_p("#notacvalrdphysical").css('display', 'none');
                                            jquery_1_11_3_min_p("#notacvalrdemandate").css('display', 'none');
                                            jquery_1_11_3_min_p("#debitnetbank").css('display', 'none');
                                            jquery_1_11_3_min_p("#netbankingshow").css('display', 'none');
                                            jquery_1_11_3_min_p("#debitbankingshow").css('display', 'none');
                                            jquery_1_11_3_min_p("#aadharbankingshow").css('display', 'none');
                                            jquery_1_11_3_min_p("#mandatedebit").css('display', 'none');
                                            jquery_1_11_3_min_p("#mandatenetbank").css('display', 'none');
                                            jquery_1_11_3_min_p("#mandateaadhar").css('display', 'none');
                                            jquery_1_11_3_min_p("#Div23").css('display', 'none');
                                            jquery_1_11_3_min_p("#Div24").css('display', 'none');

                                            var isphysical = jquery_1_11_3_min_p('#ContentPlaceHolder1_txtentitymandatephysical').val();
                                            var isemandate = jquery_1_11_3_min_p('#ContentPlaceHolder1_txtentitymandateemandate').val();

                                            if (isphysical != "0" && isemandate != "0") {
                                                jquery_1_11_3_min_p("#Divmandatemode").css('display', 'block');
                                                jquery_1_11_3_min_p("#notacvalrdphysical").css('display', 'block');
                                                jquery_1_11_3_min_p("#notacvalrdemandate").css('display', 'block');
                                                jquery_1_11_3_min_p("#physicalcheck").css('display', 'block');
                                                jquery_1_11_3_min_p("#emandatecheck").css('display', 'block');
                                                jquery_1_11_3_min_p("#Div23").css('display', 'block');
                                                jquery_1_11_3_min_p("#Div24").css('display', 'block');
                                            }
                                            if (isphysical == "0" && isemandate != "0") {
                                                jquery_1_11_3_min_p("#Divmandatemode").css('display', 'block');
                                                jquery_1_11_3_min_p("#notacvalrdphysical").css('display', 'none');
                                                jquery_1_11_3_min_p("#notacvalrdemandate").css('display', 'block');
                                                jquery_1_11_3_min_p("#notacvalrdemandate").prop("checked", true);
                                                jquery_1_11_3_min_p("#physicalcheck").css('display', 'none');
                                                jquery_1_11_3_min_p("#emandatecheck").css('display', 'block');
                                                jquery_1_11_3_min_p("#Div23").css('display', 'block');
                                                jquery_1_11_3_min_p("#Div24").css('display', 'block');
                                            }
                                            if (isphysical != "0" && isemandate == "0") {
                                                jquery_1_11_3_min_p("#Divmandatemode").css('display', 'block');
                                                jquery_1_11_3_min_p("#notacvalrdphysical").css('display', 'block');
                                                jquery_1_11_3_min_p("#notacvalrdemandate").css('display', 'none');
                                                jquery_1_11_3_min_p("#notacvalrdphysical").prop("checked", true);
                                                jquery_1_11_3_min_p("#physicalcheck").css('display', 'block');
                                                jquery_1_11_3_min_p("#emandatecheck").css('display', 'none');
                                                jquery_1_11_3_min_p("#btnScanHalf").css('display', 'none');
                                                jquery_1_11_3_min_p("#btnScan").css('display', 'block');
                                            }
                                            /* var checkphysical = jquery_1_11_3_min_p('#ContentPlaceHolder1_txtphysical').val();
                                             var checkemandate = jquery_1_11_3_min_p('#ContentPlaceHolder1_txtemandate').val();
                                             if (checkphysical == "true") {
                                                 jquery_1_11_3_min_p("#notacvalrdphysical").css('display', 'block');
                                                 jquery_1_11_3_min_p("#notacvalrdphysical").prop("checked", true);
                                                 jquery_1_11_3_min_p("#notacvalrdemandate").css('display', 'none');
                                                   jquery_1_11_3_min_p("#btnScanHalf").css('display', 'none');
                                                 jquery_1_11_3_min_p("#btnScan").css('display', 'block');
                                                 jquery_1_11_3_min_p("#physicalcheck").css('display', 'block');
                                                 jquery_1_11_3_min_p("#emandatecheck").css('display', 'none');
 
                                             }
                                             if (checkemandate == "true") {
                                                 jquery_1_11_3_min_p("#notacvalrdphysical").css('display', 'none');
                                                 jquery_1_11_3_min_p("#notacvalrdemandate").css('display', 'block');
                                                 jquery_1_11_3_min_p("#notacvalrdemandate").prop("checked", true);
 
                                                 jquery_1_11_3_min_p("#physicalcheck").css('display', 'none');
                                                 jquery_1_11_3_min_p("#emandatecheck").css('display', 'block');
 
                                             }
                                             if (checkphysical == "false" && checkemandate == "false") {
                                                 jquery_1_11_3_min_p("#notacvalrdphysical").css('display', 'block');
                                                 jquery_1_11_3_min_p("#notacvalrdemandate").css('display', 'block');
                                                 jquery_1_11_3_min_p("#notacvalrdemandate").prop("checked", false);
                                                 jquery_1_11_3_min_p("#notacvalrdphysical").prop("checked", false);
                                                 jquery_1_11_3_min_p("#physicalcheck").css('display', 'block');
                                                 jquery_1_11_3_min_p("#emandatecheck").css('display', 'block');
 
                                             }*/

                                            // added by garima
                                            checkMandateType(jsonData7);

                                        } else {

                                            jquery_1_11_3_min_p("#Divmandatemode").css('display', 'none');
                                            jquery_1_11_3_min_p("#notacvalrdphysical").css('display', 'none');
                                            jquery_1_11_3_min_p("#notacvalrdemandate").css('display', 'none');
                                        }


                                    } else if (isentityaccountvalidation == "1") {
                                        if (jquery_1_11_3_min_p('#ContentPlaceHolder1_txtEmandatestatus').val() == "0") {
                                            jquery_1_11_3_min_p("#debitnetbank").css('display', 'none');
                                            jquery_1_11_3_min_p("#netbankingshow").css('display', 'none');
                                            jquery_1_11_3_min_p("#debitbankingshow").css('display', 'none');
                                            jquery_1_11_3_min_p("#aadharbankingshow").css('display', 'none');
                                            jquery_1_11_3_min_p("#mandatedebit").css('display', 'none');
                                            jquery_1_11_3_min_p("#mandatenetbank").css('display', 'none');
                                            jquery_1_11_3_min_p("#mandateaadhar").css('display', 'none');
                                            jquery_1_11_3_min_p("#Divmandatemode").css('display', 'none');
                                            jquery_1_11_3_min_p("#notacvalrdphysical").css('display', 'none');
                                            jquery_1_11_3_min_p("#notacvalrdemandate").css('display', 'none');
                                            jquery_1_11_3_min_p("#Div23").css('display', 'none');
                                            jquery_1_11_3_min_p("#Div24").css('display', 'none');
                                        }

                                    }

                                    jquery_1_11_3_min_p('#lblSuccess').text('Bank Validated Successfully');
                                    jquery_1_11_3_min_p("#IFSCImgCross").css('display', 'none');
                                    jquery_1_11_3_min_p("#IFSCImgTick").css('display', 'block');
                                    jquery_1_11_3_min_p(".overlay").css('visibility', 'hidden');
                                    jquery_1_11_3_min_p("#preloader_1").css('display', 'none');
                                    jquery_1_11_3_min_p('#lblValidation').text('Bank Validation');
                                    UnSuccess();//
                                    ////                  jquery_1_11_3_min_p("#ContentPlaceHolder1_Iframe1").attr("src", "../Payment/payment.aspx?id="+jquery_1_11_3_min_p('#lblmandateId').text()+"&AcNo="+jquery_1_11_3_min_p('#txtAcNo').val()+"&Ifsc="+ (jsonData4[i].IFSC)+"&EntityId="+  jquery_1_11_3_min_p('#ContentPlaceHolder1_lblEntityId').text()+"&ActivityId="+  jquery_1_11_3_min_p('#lblActivityId').text()+"");

                                    //                  jquery_1_11_3_min_p("#ContentPlaceHolder1_Iframe1").attr("src", "../Payment/payment.aspx?id="+jquery_1_11_3_min_p('#lblmandateId').text()+"&AcNo="+jquery_1_11_3_min_p('#txtAcNo').val()+"&Ifsc="+ (jsonData4[i].IFSC)+"&EntityId="+  jquery_1_11_3_min_p('#ContentPlaceHolder1_lblEntityId').text()+"&ActivityId="+  jquery_1_11_3_min_p('#lblActivityId').text()+" &IsNAchLive="+  IsNAchLive+"");
                                    //                     

                                    //        printForm();
                                    //        
                                    //         jquery_1_11_3_min_p("#btnScanHalf").css('display', 'block');
                                    //         jquery_1_11_3_min_p("#btnScan").css('display', 'block');

                                } else {

                                    jquery_1_11_3_min_p('#ContentPlaceHolder1_txtcheckifscvalid').val(0);

                                    jquery_1_11_3_min_p("#btnSave").attr('disabled', true);
                                    //            if(jquery_1_11_3_min_p('#ContentPlaceHolder1_lblIsValidationCountEnable').html()==1)
                                    //                 {
                                    //                  jquery_1_11_3_min_p("#btnFirstVal").attr('disabled', false);
                                    //                 }else{
                                    jquery_1_11_3_min_p("#btnFirstVal").attr('disabled', true);
                                    //                 }
                                    //         
                                    jquery_1_11_3_min_p("#btnEditDisable").css('display', 'block');




                                    jquery_1_11_3_min_p('#btnEditDisable').attr('disabled', false);
                                    jquery_1_11_3_min_p('#btnSave').attr('disabled', true);
                                    jquery_1_11_3_min_p('#txtAcNo').attr('disabled', true);
                                    jquery_1_11_3_min_p('#txtCust1').attr('disabled', true);
                                    jquery_1_11_3_min_p("#txtCust2").attr('disabled', true);
                                    jquery_1_11_3_min_p('#txtCust2').attr('disabled', true);
                                    if (jquery_1_11_3_min_p('#txtCust2').val() == '') {
                                        jquery_1_11_3_min_p("#txtCust3").attr('disabled', false);
                                    } else {
                                        jquery_1_11_3_min_p("#txtCust3").attr('disabled', true);
                                    }

                                    jquery_1_11_3_min_p('#txtCust3').attr('disabled', true);



                                    jquery_1_11_3_min_p('#txtIFSC').attr('disabled', true);
                                    jquery_1_11_3_min_p('#txtMICR').attr('disabled', true);


                                    jquery_1_11_3_min_p('#txtRefrence1').attr('disabled', true);

                                    jquery_1_11_3_min_p('#txtRefrence2').attr('disabled', true);

                                    jquery_1_11_3_min_p('#txtAmountRupees').attr('disabled', true);

                                    kendo_all_min_js("#txtBankName").data("kendoDropDownList").enable(false);
                                    kendo_all_min_js("#txtSponsorCode").data("kendoDropDownList").enable(false);

                                    //kendo_all_min_js("#txtutilityCode").attr(false);

                                    jquery_1_11_3_min_p('#txtAmount').attr('disabled', true);

                                    jquery_1_11_3_min_p('#txtperiodfrom').attr('disabled', true);

                                    jquery_1_11_3_min_p('#txtFrom').attr('disabled', true);

                                    jquery_1_11_3_min_p('#txtEmailId').attr('disabled', true);

                                    jquery_1_11_3_min_p('#txtPhNumber').attr('disabled', true);

                                    jquery_1_11_3_min_p('#txtTo').attr('disabled', true);

                                    if (jquery_1_11_3_min_p('#txtTo').val() == '') {
                                        jquery_1_11_3_min_p("#chkUntil").prop("checked", false);
                                        jquery_1_11_3_min_p("#chkUntil").addClass('divDisable');
                                        jquery_1_11_3_min_p("#txtTo").removeClass('divDisable');

                                    } else {
                                        jquery_1_11_3_min_p("#chkUntil").prop("checked", true);

                                        jquery_1_11_3_min_p("#txtTo").addClass('divDisable');
                                    }

                                    jquery_1_11_3_min_p("#debitto").addClass('divDisable');
                                    jquery_1_11_3_min_p("#frequency").addClass('divDisable');
                                    jquery_1_11_3_min_p("#debittype").addClass('divDisable');
                                    //            jquery_1_11_3_min_p('input:radio[name="rdoNomFrequency"]').attr('disabled', true);
                                    //             jquery_1_11_3_min_p('input:radio[name="rdoNomGender"]').attr('disabled', true);
                                    if (jquery_1_11_3_min_p('#txtIFSC').val() != '') {


                                        if (jsonData[i].IFSCResult == 'No') {
                                            jquery_1_11_3_min_p('#txtIFSC').addClass('validate');
                                            jquery_1_11_3_min_p('#txtIFSC').val('');
                                            jquery_1_11_3_min_p("#txtMICR").prop('disabled', true);
                                            jquery_1_11_3_min_p("#txtIFSC").prop('disabled', true);
                                            jquery_1_11_3_min_p('#txtIFSC').attr("placeholder", "Invalid IFSC!!");
                                            //                    jquery_1_11_3_min_p('#lblUnSuccess').text('Wrong IFSC');
                                            jquery_1_11_3_min_p(".overlay").css('visibility', 'hidden');
                                            jquery_1_11_3_min_p("#preloader_1").css('display', 'none');
                                            jquery_1_11_3_min_p('#lblValidation').text('Bank Validation');
                                            UnSuccess();//
                                        }
                                    }
                                    if (jquery_1_11_3_min_p('#txtMICR').val() != '') {
                                        var jsonData = eval(AllResultData.d.Table1);
                                        if (jsonData[i].MICRResult == 'No') {
                                            jquery_1_11_3_min_p('#txtMICR').addClass('validate');
                                            jquery_1_11_3_min_p('#txtMICR').val('');
                                            jquery_1_11_3_min_p("#txtMICR").prop('disabled', true);
                                            jquery_1_11_3_min_p("#txtIFSC").prop('disabled', true);
                                            jquery_1_11_3_min_p('#txtMICR').attr("placeholder", "Invalid MICR!!");
                                            //                    jquery_1_11_3_min_p('#lblUnSuccess').text('Wrong MICR');
                                            jquery_1_11_3_min_p(".overlay").css('visibility', 'hidden');
                                            jquery_1_11_3_min_p("#preloader_1").css('display', 'none');
                                            jquery_1_11_3_min_p('#lblValidation').text('Bank Validation');
                                            UnSuccess();//
                                        }
                                    }
                                }

                                BindGrid(AllResultData.d.Table2);//
                                var jsonData = eval(AllResultData.d.Table3);
                                if (jsonData[i] != undefined) {
                                    jquery_1_11_3_min_p('#txtBankName').val(jsonData[i].Bank);
                                    jquery_1_11_3_min_p("#txtBankName").attr('disabled', true);
                                }

                                jquery_1_11_3_min_p("#btnBack").attr('disabled', false);
                                jquery_1_11_3_min_p("#btnEdit").attr('disabled', true);

                                jquery_1_11_3_min_p("#btnDelete").attr('disabled', true);
                                jquery_1_11_3_min_p("#btnNew").attr('disabled', false);
                            } else {

                                jquery_1_11_3_min_p('#txtIFSC').val('');
                                kendo_all_min_js("#txtBankName").data("kendoDropDownList").value('0');
                                jquery_1_11_3_min_p('#lblData').text('Account can not be validated in real time, try different Bank');
                                jquery_1_11_3_min_p(".overlay").css('visibility', 'hidden');
                                jquery_1_11_3_min_p("#preloader_1").css('display', 'none');

                                admin();
                            }
                        } else {


                            jquery_1_11_3_min_p('#lblData').text('Bank is not live on NACH');
                            jquery_1_11_3_min_p("#NACHTick").css('display', 'none');
                            jquery_1_11_3_min_p("#NACHCross").css('display', 'block');
                            jquery_1_11_3_min_p(".overlay").css('visibility', 'hidden');
                            jquery_1_11_3_min_p("#preloader_1").css('display', 'none');

                            admin();

                        }
                    },
                    error: function (result) {

                    }
                })
            }
        }
    });




    jquery_1_11_3_min_p("#btnNewMandate").click(function () {

        jquery_1_11_3_min_p('#lblmandateId').text('');
        jquery_1_11_3_min_p('#ContentPlaceHolder1_lblSmandateId').val('');
        jquery_1_12_1("#divreference").dialog('close');
        SaveData();
    });

    jquery_1_11_3_min_p("#btnUpdateMandate").click(function () {
        jquery_1_11_3_min_p('#DivRefrenceDetail div').each(function () {
            var row = jquery_1_11_3_min_p(this);
            var Arrlist = [];
            Arrlist = row["0"].className.split(' ');
            if (Arrlist[2] != undefined) {
                if (Arrlist[2] == 'highlight') {
                    jquery_1_11_3_min_p('#lblmandateId').text(row["0"].id);
                    jquery_1_11_3_min_p('#ContentPlaceHolder1_lblSmandateId').val(row["0"].id);
                }
            }

        });
        if (jquery_1_11_3_min_p('#lblmandateId').text().trim() == '') {
            alert('Please select Mandate');
        } else {
            jquery_1_12_1("#divreference").dialog('close');

            SaveData();

        }
    });


    jquery_1_11_3_min_p("#BtnAdd").click(function () {

        if (jquery_1_11_3_min_p('#txtAmmount').val() != '') {
            if (parseInt(jquery_1_11_3_min_p('#txtAmmount').val()) <= parseInt(jquery_1_11_3_min_p('#lblBalance').text())) {

                if (jquery_1_11_3_min_p('input[name=rdoGender]:checked', '#ModeOfPayment').val() == 'Cheque') {
                    PaymentData.push({
                        Type: 'Cheque',
                        Amount: jquery_1_11_3_min_p('#txtAmmount').val(),
                        RefNo: jquery_1_11_3_min_p('#txtChequeNo').val(),
                        ChequeDate: jquery_1_11_3_min_p('#txtChequeDate').val(),
                        BranchName: jquery_1_11_3_min_p('#txtBranName').val(),
                        BankName: jquery_1_11_3_min_p('#txtBaName').val()
                    });
                    jquery_1_11_3_min_p('#lblChequeAmount').text(parseInt(jquery_1_11_3_min_p('#txtAmmount').val()) + parseInt(jquery_1_11_3_min_p('#lblChequeAmount').text()));
                } else if (jquery_1_11_3_min_p('input[name=rdoGender]:checked', '#ModeOfPayment').val() == 'DD') {
                    PaymentData.push({
                        Type: 'DD',
                        Amount: jquery_1_11_3_min_p('#txtAmmount').val(),
                        RefNo: jquery_1_11_3_min_p('#txtDDNo').val(),
                        ChequeDate: jquery_1_11_3_min_p('#txtDDDate').val(),
                        BranchName: jquery_1_11_3_min_p('#txtBranchName').val(),
                        BankName: jquery_1_11_3_min_p('#txtBankNamee').val()
                    });
                    jquery_1_11_3_min_p('#lblDDAmount').text(parseInt(jquery_1_11_3_min_p('#txtAmmount').val()) + parseInt(jquery_1_11_3_min_p('#lblDDAmount').text()));
                } else {
                    if (jquery_1_11_3_min_p('input[name=rdoGender]:checked', '#ElectronicPaymentMode').val() == 'Dr') {
                        PaymentData.push({
                            Type: 'Dr',
                            Amount: jquery_1_11_3_min_p('#txtAmmount').val(),
                            RefNo: jquery_1_11_3_min_p('#txtRef').val(),
                            ChequeDate: '',
                            BranchName: '',
                            BankName: ''
                        });
                        jquery_1_11_3_min_p('#lblDrAmount').text(parseInt(jquery_1_11_3_min_p('#txtAmmount').val()) + parseInt(jquery_1_11_3_min_p('#lblDrAmount').text()));
                        jquery_1_11_3_min_p('#lblDrRef').text(jquery_1_11_3_min_p('#txtRef').val());
                    } else if (jquery_1_11_3_min_p('input[name=rdoGender]:checked', '#ElectronicPaymentMode').val() == 'Cr') {
                        PaymentData.push({
                            Type: 'Cr',
                            Amount: jquery_1_11_3_min_p('#txtAmmount').val(),
                            RefNo: jquery_1_11_3_min_p('#txtRef').val(),
                            ChequeDate: '',
                            BranchName: '',
                            BankName: ''
                        });
                        jquery_1_11_3_min_p('#lblCrAmount').text(parseInt(jquery_1_11_3_min_p('#txtAmmount').val()) + parseInt(jquery_1_11_3_min_p('#lblCrAmount').text()));
                        jquery_1_11_3_min_p('#lblCrRef').text(jquery_1_11_3_min_p('#txtRef').val());
                    } else {
                        PaymentData.push({
                            Type: 'NB',
                            Amount: jquery_1_11_3_min_p('#txtAmmount').val(),
                            RefNo: jquery_1_11_3_min_p('#txtRef').val(),
                            ChequeDate: '',
                            BranchName: '',
                            BankName: ''
                        });
                        jquery_1_11_3_min_p('#lblNBrAmount').text(parseInt(jquery_1_11_3_min_p('#txtAmmount').val()) + parseInt(jquery_1_11_3_min_p('#lblNBrAmount').text()));
                        jquery_1_11_3_min_p('#lblNBrRef').text(jquery_1_11_3_min_p('#txtRef').val());
                    }
                }
                jquery_1_11_3_min_p('#txtAmmount').val('');
                jquery_1_11_3_min_p('#lblTenderAmount').text(parseInt(jquery_1_11_3_min_p('#lblCashAmount').text()) + parseInt(jquery_1_11_3_min_p('#lblChequeAmount').text()) + parseInt(jquery_1_11_3_min_p('#lblDDAmount').text()) + parseInt(jquery_1_11_3_min_p('#lblDrAmount').text()) + parseInt(jquery_1_11_3_min_p('#lblCrAmount').text()) + parseInt(jquery_1_11_3_min_p('#lblNBrAmount').text()));

                jquery_1_11_3_min_p('#lblBalance').text(parseInt(jquery_1_11_3_min_p('#lblTotal').val()) - parseInt(jquery_1_11_3_min_p('#lblTenderAmount').text()));
                jquery_1_11_3_min_p('#txtRef').val('');
                jquery_1_11_3_min_p('#txtBankNamee').val('');
                jquery_1_11_3_min_p('#txtDDName').val('');
                jquery_1_11_3_min_p('#txtBranchName').val('');
                jquery_1_11_3_min_p('#txtDDDate').val('');
                jquery_1_11_3_min_p('#txtDDNo').val('');

                jquery_1_11_3_min_p('#txtChequeNo').val('');
                jquery_1_11_3_min_p('#txtBranName').val('');
                jquery_1_11_3_min_p('#txtBaName').val('');
                jquery_1_11_3_min_p('#txtChequeDate').val('');
            } else {
                alert('Your Amount Is Greater Than Balance');
                jquery_1_11_3_min_p('#txtAmmount').val('');
            }
        } else {
            jquery_1_11_3_min_p('#txtAmmount').addClass('validate');
        }
    });


    jquery_1_11_3_min_p('#txtAmmount').change(function () {

        if (parseInt(jquery_1_11_3_min_p('#txtAmmount').val()) <= parseInt(jquery_1_11_3_min_p('#lblBalance').text())) {

            if (jquery_1_11_3_min_p('input[name=rdoGender]:checked', '#ModeOfPayment').val() == 'Cash') {
                PaymentData.push({
                    Type: 'Cash',
                    Amount: jquery_1_11_3_min_p('#txtAmmount').val(),
                    RefNo: '',
                    ChequeDate: '',
                    BranchName: '',
                    BankName: ''
                });
                jquery_1_11_3_min_p('#lblCashAmount').text(parseInt(jquery_1_11_3_min_p('#txtAmmount').val()) + parseInt(jquery_1_11_3_min_p('#lblCashAmount').text()));
                jquery_1_11_3_min_p('#txtAmmount').val('');
            }


            jquery_1_11_3_min_p('#lblTenderAmount').text(parseInt(jquery_1_11_3_min_p('#lblCashAmount').text()) + parseInt(jquery_1_11_3_min_p('#lblChequeAmount').text()) + parseInt(jquery_1_11_3_min_p('#lblDDAmount').text()) + parseInt(jquery_1_11_3_min_p('#lblDrAmount').text()) + parseInt(jquery_1_11_3_min_p('#lblCrAmount').text()) + parseInt(jquery_1_11_3_min_p('#lblNBrAmount').text()));

            jquery_1_11_3_min_p('#lblBalance').text(parseInt(jquery_1_11_3_min_p('#lblTotal').val()) - parseInt(jquery_1_11_3_min_p('#lblTenderAmount').text()));

        } else {
            alert('Your Amount Is Greater Than Balance');
            jquery_1_11_3_min_p('#txtAmmount').val('');
        }
    });



    jquery_1_11_3_min_p("#lblTotal").keypress(function (e) {

        if (e.which != 8 && e.which != 0 && (e.which < 48 || e.which > 57)) {

            return false;
        }
    });


    jquery_1_11_3_min_p("#txtAmmount").keypress(function (e) {

        if (e.which != 8 && e.which != 0 && (e.which < 48 || e.which > 57)) {

            return false;
        }
    });


    jquery_1_11_3_min_p('#btnMandatePrint').click(function () {
        var UserId = jquery_1_11_3_min_p('#ContentPlaceHolder1_lblUserid').html();
        jquery_1_11_3_min_p.ajax({
            type: "POST",
            contentType: "application/json; charset=utf-8",
            url: "../WebServices/BankForm.asmx/UpdatePrintCount",
            data: "{'mandateId':'" + jquery_1_11_3_min_p('#lblmandateId').text() + "','UserId':'" + UserId + "'}",
            dataType: "json",
            async: false,
            success: function (result) {

            },
            error: function (result) {
                alert("Error");
            }
        });
        //jquery_1_11_3_min_p('#btnMandatePrint a').attr('href', "../CreatePdf.aspx?id=" + jquery_1_11_3_min_p('#lblmandateId').text() + "");
        CheckQRAndLogo();
        jquery_1_11_3_min_p('#btnScan').show();
    });

    jquery_1_11_3_min_p('#btnOldOverPrintMandate').click(function () {
        jquery_1_11_3_min_p('#btnOldOverPrintMandate a').attr('href', "../Reports/OverPrintedMandateOld.aspx?id=" + jquery_1_11_3_min_p('#lblmandateId').text() + "");
    });

    jquery_1_11_3_min_p('#btnBlankMandateprint').click(function () {

        jquery_1_11_3_min_p('#btnBlankMandateprint a').attr('href', "../Reports/PrintedMandate.aspx?id=" + jquery_1_11_3_min_p('#lblmandateId').text() + "");
    });

    //BindGrd();
    //jquery_1_11_3_min_p("#divform").css('display', 'block');

    jquery_1_11_3_min_p('#btnEdit').click(function () {

        jquery_1_11_3_min_p("#divform").css('display', 'block');
        jquery_1_11_3_min_p("#grd").css('display', 'none');
        Edit();
    });



    jquery_1_11_3_min_p("#btnBack").click(function () {
        //   window.location = 'BankForm.aspx';
        jquery_1_11_3_min_p('#txtRefrence1').attr('disabled', false);
        BindGrd(11);
        jquery_1_11_3_min_p("#divform").css('display', 'none');
        Reset();
        jquery_1_11_3_min_p("#ContentPlaceHolder1_AResponse").css('display', 'none');
        //  jquery_1_11_3_min_p("#ARequset").css('display', 'none');
        jquery_1_11_3_min_p('#txtCode').attr("placeholder", "Required");
        jquery_1_11_3_min_p("#btnEdit").attr('disabled', true);
        jquery_1_11_3_min_p("#btnNew").attr('disabled', false);
        jquery_1_11_3_min_p("#btnSave").attr('disabled', true);
        jquery_1_11_3_min_p("#btnDelete").attr('disabled', true);
        jquery_1_11_3_min_p("#btnBack").attr('disabled', true);
        jquery_1_11_3_min_p("#depo-cust").css('display', 'none');
        jquery_1_11_3_min_p("#btnPrint").css('display', 'none');
        jquery_1_11_3_min_p("#btnScanHalf").css('display', 'none');
        jquery_1_11_3_min_p("#btnScan").css('display', 'none');
        jquery_1_11_3_min_p("#btnValidate").css('display', 'none');
        jquery_1_11_3_min_p("#btnBack").css('display', 'none');
        //          jquery_1_11_3_min_p("#grd").css('display', 'block');
        //  Reset();
    });
    jquery_1_11_3_min_p('#btnScan').click(function () {
        jquery_1_11_3_min_p("#ContentPlaceHolder1_Iframe").attr("src", "../Payment/ScanMandate.aspx?id=" + jquery_1_11_3_min_p('#lblmandateId').text() + "&No=" + jquery_1_11_3_min_p('#txtRefrence1').val() + "&AcNo=" + jquery_1_11_3_min_p('#txtAcNo').val() + "&CustomerName=" + jquery_1_11_3_min_p('#txtCust1').val() + "");

        ScanForm();
    });



    jquery_1_11_3_min_p('#btnScanHalf').click(function () {
        jquery_1_11_3_min_p("#ContentPlaceHolder1_Iframe").attr("src", "../Payment/ScanFullMandate.aspx?id=" + jquery_1_11_3_min_p('#lblmandateId').text() + "&No=" + jquery_1_11_3_min_p('#txtRefrence1').val() + "");

        ScanForm();
    });

    jquery_1_11_3_min_p('#btnNew').click(function () {
        window.location = 'BankForm.aspx';
        //        Reset();
        //        
        // jquery_1_11_3_min_p("#btnSave").attr('disabled', false);

        //        jquery_1_11_3_min_p('#lblmsg').text('');

        ////           jquery_1_11_3_min_p('#txtIFSC').attr('disabled',false);
        ////           jquery_1_11_3_min_p('#txtMICR').attr('disabled',false);
        //jquery_1_11_3_min_p('#preloader_1').hide();
        //        jquery_1_11_3_min_p("#divform").css('display', 'block');
        //        jquery_1_11_3_min_p("#grd").css('display', 'none');
        //        jquery_1_11_3_min_p("#btnEdit").attr('disabled', true);
        //        jquery_1_11_3_min_p("#btnNew").attr('disabled', true);
        //        
        //        jquery_1_11_3_min_p("#btnDelete").attr('disabled', true);
        //        jquery_1_11_3_min_p("#btnBack").attr('disabled', false);
        //        jquery_1_11_3_min_p("#depo-cust").css('display', 'none');
        //      
        //        jquery_1_11_3_min_p("#btnBack").css('display', 'block');
        //         jquery_1_11_3_min_p('#txtAcNo').focus();
    });

    //    jquery_1_11_3_min_p("#txtAmountRupees").keypress(function (e) {
    //   
    //    });
    jquery_1_11_3_min_p("#txtAmountRupees").keyup(function (e) {
        if (jquery_1_11_3_min_p("#txtAmountRupees").val().length == 1) {
            if (jquery_1_11_3_min_p("#txtAmountRupees").val().trim() == '0') {
                jquery_1_11_3_min_p("#txtAmountRupees").val('');
            }
        }
        var No = inWords(jquery_1_11_3_min_p("#txtAmountRupees").val());
        // var Rupees =jquery_1_11_3_min_p("#txtAmountRupees").val();
        //    jquery_1_11_3_min_p.ajax({
        //        type: "POST",
        //        contentType: "application/json; charset=utf-8",
        //        url: "../WebServices/BankForm.asmx/GetPrice",
        //        data: JSON.stringify({ Rupees: Rupees}),
        //        dataType: "json",
        //        async: false,
        //        success: function (result) {
        //            var i = 0;

        //            var jsonData = eval(result.d.Table);
        jquery_1_11_3_min_p("#txtAmount").val(No);

        //        },
        //        error: function (result) {
        //           
        //        }
        //    })

    });
    jquery_1_11_3_min_p("#txtRefrence1").keyup(function (e) {
        if (jquery_1_11_3_min_p("#txtRefrence1").val() == '') {
            jquery_1_11_3_min_p("#txtRefrence2").attr('disabled', true);
        } else {
            jquery_1_11_3_min_p("#txtRefrence2").attr('disabled', false);
        }
    });


    jquery_1_11_3_min_p("#txtCust1").keyup(function (e) {
        if (jquery_1_11_3_min_p("#txtCust1").val() == '') {
            jquery_1_11_3_min_p("#txtCust2").attr('disabled', true);
        } else {
            jquery_1_11_3_min_p("#txtCust2").attr('disabled', false);
        }
    });



    jquery_1_11_3_min_p('#txtIFSC').change(function () {

        if (jquery_1_11_3_min_p('#txtIFSC').val().length > 0) {
            if (jquery_1_11_3_min_p('#txtIFSC').val().length < 11) {
                jquery_1_11_3_min_p('#txtIFSC').addClass('validate');
                jquery_1_11_3_min_p('#txtIFSC').val('');
                jquery_1_11_3_min_p('#txtIFSC').attr("placeholder", "Please enter 11-digit  !!!");
            } else {
                jquery_1_11_3_min_p('#txtIFSC').removeClass('validate');
            }
        }

        if (jquery_1_11_3_min_p("#txtIFSC").val() == '') {
            jquery_1_11_3_min_p("#txtMICR").attr('disabled', false);
        } else {
            jquery_1_11_3_min_p("#txtMICR").val('');
            jquery_1_11_3_min_p("#txtMICR").attr('disabled', true);
        }

        if (jquery_1_11_3_min_p('#txtIFSC').val().trim() != '') {
            jquery_1_11_3_min_p('#txtIFSC').removeClass('validate');
        }
    });




    jquery_1_11_3_min_p('#txtMICR').change(function () {

        if (jquery_1_11_3_min_p('#txtMICR').val().length > 0) {
            if (jquery_1_11_3_min_p('#txtMICR').val().length < 9) {
                jquery_1_11_3_min_p('#txtMICR').addClass('validate');
                jquery_1_11_3_min_p('#txtMICR').val('');
                jquery_1_11_3_min_p('#txtMICR').attr("placeholder", "Please enter 9-digit  !!!");
            } else {
                jquery_1_11_3_min_p('#txtCodePlc').removeClass('validate');
            }
        }

        if (jquery_1_11_3_min_p("#txtMICR").val() == '') {
            jquery_1_11_3_min_p("#txtIFSC").attr('disabled', false);

        } else {
            jquery_1_11_3_min_p("#txtIFSC").val('');
            jquery_1_11_3_min_p("#txtIFSC").attr('disabled', true);
        }

        if (jquery_1_11_3_min_p('#txtMICR').val().trim() != '') {
            jquery_1_11_3_min_p('#txtMICR').removeClass('validate');
        }
    });


    jquery_1_11_3_min_p("#txtCust3").keyup(function (e) {
        this.value = this.value.toUpperCase();
    });
    jquery_1_11_3_min_p("#txtCust2").keyup(function (e) {
        this.value = this.value.toUpperCase();
    });

    jquery_1_11_3_min_p("#txtAcNo").keyup(function (e) {
        this.value = this.value.toUpperCase();
    });

    jquery_1_11_3_min_p("#txtIFSC").keyup(function (e) {
        this.value = this.value.toUpperCase();
    });


    jquery_1_11_3_min_p("#txtCust1").keyup(function (e) {
        this.value = this.value.toUpperCase();
    });


    jquery_1_11_3_min_p("#txtCust2").keyup(function (e) {
        if (jquery_1_11_3_min_p("#txtCust2").val() == '') {
            jquery_1_11_3_min_p("#txtCust3").attr('disabled', true);
        } else {
            jquery_1_11_3_min_p("#txtCust3").attr('disabled', false);
        }

    });


    jquery_1_11_3_min_p("#txtIFSC").keyup(function (e) {

    });

    jquery_1_11_3_min_p("#txtMICR").keyup(function (e) {

    });


    jquery_1_11_3_min_p("#txtAmountRupees").keypress(function (e) {

        if (e.which != 8 && e.which != 0 && (e.which < 48 || e.which > 57)) {

            return false;
        }
    });



    jquery_1_11_3_min_p("#txtmobileemandate").keypress(function (e) {

        if (e.which != 8 && e.which != 0 && (e.which < 48 || e.which > 57)) {

            return false;
        }
    });
    jquery_1_11_3_min_p("#txtPhNumber").keypress(function (e) {

        if (e.which != 8 && e.which != 0 && (e.which < 48 || e.which > 57)) {

            return false;
        }
    });
    jquery_1_11_3_min_p("#txtMICR").keypress(function (e) {

        if (e.which != 8 && e.which != 0 && (e.which < 48 || e.which > 57)) {

            return false;
        }
    });


    jquery_1_11_3_min_p('#chkUntil').change(function () {

        if (jquery_1_11_3_min_p("#chkUntil").prop('checked') == true) {
            jquery_1_11_3_min_p("#txtTo").val('');
            jquery_1_11_3_min_p("#txtTo").addClass('divDisable');

        } else {
            jquery_1_11_3_min_p("#txtTo").removeClass('divDisable');
        }
    });
    jquery_1_11_3_min_p('#txtEmailId').change(function () {
        var regex = /^[a-zA-Z0-9._-]+@([a-zA-Z0-9.-]+\.)+[a-zA-Z0-9.-]{2,4}$/;
        if (regex.test(document.getElementById("txtEmailId").value) == true) {


        } else {

            jquery_1_11_3_min_p('#txtEmailId').val('');
            jquery_1_11_3_min_p('#txtEmailId').attr("placeholder", "Invalid E-Mail!!");
        }

    });
    jquery_1_11_3_min_p('#txtemailemandate').change(function () {
        var regex = /^[a-zA-Z0-9._-]+@([a-zA-Z0-9.-]+\.)+[a-zA-Z0-9.-]{2,4}$/;
        if (regex.test(document.getElementById("txtemailemandate").value) == true) {


        } else {

            jquery_1_11_3_min_p('#txtemailemandate').val('');
            jquery_1_11_3_min_p('#txtemailemandate').attr("placeholder", "Invalid E-Mail!!");
        }

    });

    jquery_1_11_3_min_p('#txtmobileemandate').change(function () {

        if (jquery_1_11_3_min_p('#txtmobileemandate').val().length > 0) {
            if (jquery_1_11_3_min_p('#txtmobileemandate').val().length < 10) {

                jquery_1_11_3_min_p('#txtmobileemandate').val('');
                jquery_1_11_3_min_p('#txtmobileemandate').attr("placeholder", "Please enter 10-digit  !!!");
            } else {

            }
        }
    });

    var dataCountry = [];
    var dataCategory = [];
    var UserId = jquery_1_11_3_min_p('#ContentPlaceHolder1_lblUserid').html();
    var EntityId = jquery_1_11_3_min_p('#ContentPlaceHolder1_lblEntityId').text();
    jquery_1_11_3_min_p.ajax({
        type: "POST",
        contentType: "application/json; charset=utf-8",
        url: "../WebServices/BankForm.asmx/BindDetails",
        data: "{'EntityId':'" + EntityId + "','UserId':'" + UserId + "'}",
        dataType: "json",
        async: false,
        success: function (result) {


            //--------------------Added By Vimal(09 jan 2020) as Discuss with Avinash Sir


            var jsonData12 = eval(result.d.Table12);

            if (jsonData12[0].IsEnableCancel == false) {
                jquery_1_11_3_min_p("#btnCancel").attr('disabled', true);
                jquery_1_11_3_min_p("#btnCancel").css('display', 'none');
            }
            else {
                jquery_1_11_3_min_p("#btnCancel").attr('disabled', false);
                jquery_1_11_3_min_p("#btnCancel").css('display', 'block');
            }


            //-----------------------------------------------------------------//



            var jsonData = eval(result.d.Table7);
            jquery_1_11_3_min_p('#debittype input').each(function () {
                var row = jquery_1_11_3_min_p(this);
                if (row["0"].name == "rdoNomDebit") {
                    var i = 0;
                    jQuery.each(jsonData, function (rec) {
                        if (row.siblings("span").text() == jsonData[i].debittype) {
                            if (jsonData[i].isenable == true) {
                                jquery_1_11_3_min_p(row).attr('disabled', false);
                            } else {
                                jquery_1_11_3_min_p(row).attr('disabled', true);
                            }
                        }
                        i++;
                    });
                }
            });


            var jsonData = eval(result.d.Table8);
            jquery_1_11_3_min_p('#frequency input').each(function () {
                var row = jquery_1_11_3_min_p(this);
                if ((row["0"].name) == "rdoNomFrequency") {
                    var i = 0;
                    jQuery.each(jsonData, function (rec) {

                        if (row.siblings("span").text().replace("&", "and") == jsonData[i].frequency) {
                            if (jsonData[i].isenable == true) {
                                jquery_1_11_3_min_p(row).attr('disabled', false);
                            } else {
                                jquery_1_11_3_min_p(row).attr('disabled', true);
                            }

                        }
                        i++;
                    });
                }
            });

            var jsonData = eval(result.d.Table10);
            jquery_1_11_3_min_p('#debitto input').each(function () {
                var row = jquery_1_11_3_min_p(this);
                if (row["0"].name == "rdoNomGender") {
                    var i = 0;
                    jQuery.each(jsonData, function (rec) {
                        if (row.siblings("span").text() == jsonData[i].todebit) {
                            if (jsonData[i].isenable == true) {
                                jquery_1_11_3_min_p(row).attr('disabled', false);
                            } else {
                                jquery_1_11_3_min_p(row).attr('disabled', true);
                            }

                        }
                        i++;
                    });
                }
            });


            var jsonData = eval(result.d.Table9);
            if (jsonData[0].isenable == true) {
                jquery_1_11_3_min_p("#txtTo").attr('disabled', false);
            } else {
                jquery_1_11_3_min_p("#txtTo").attr('disabled', true);
            }
            if (jsonData[1].isenable == true) {
                jquery_1_11_3_min_p("#chkUntil").attr('disabled', false);
            } else {
                jquery_1_11_3_min_p("#chkUntil").attr('disabled', true);
            }

            var i = 0;
            var jsonData = eval(result.d);
            dataCountry.push({
                text: "Select",
                value: "0"
            });
            jQuery.each(jsonData.Table2, function (rec) {
                dataCountry.push({
                    value: jsonData.Table2[i].name,
                    text: jsonData.Table2[i].name
                });
                i++;
            });


            i = 0;
            if (jsonData.Table11.length > 1) {
                dataCategory.push({ text: "Select", value: "0" });
                jQuery.each(jsonData.Table11, function (rec) {
                    dataCategory.push({
                        value: jsonData.Table11[i].CategoryCode, text: jsonData.Table11[i].CategoryName
                    });
                    i++;
                });
            }
            else {
                dataCategory.push({
                    text: jsonData.Table11[0].CategoryName, value: jsonData.Table11[0].CategoryCode
                });
            }

            kendo_all_min_js("#txtBankName").kendoDropDownList({
                filter: "contains",
                dataTextField: "text",
                dataValueField: "value",
                dataSource: dataCountry
            });



            kendo_all_min_js("#ddlCategory").kendoDropDownList({
                filter: "contains",
                dataTextField: "text",
                dataValueField: "value",
                dataSource: dataCategory
            });



            var i = 0;
            var dataBankCode = [];
            var jsonData = eval(result.d);

            jQuery.each(jsonData.Table3, function (rec) {
                dataBankCode.push({
                    SponsorBankcode: jsonData.Table3[i].name,
                    utilityCode: jsonData.Table3[i].utilityCode
                });
                i++;
            });

            kendo_all_min_js("#txtSponsorCode").kendoDropDownList({
                filter: "contains",
                dataTextField: "SponsorBankcode",
                dataValueField: "utilityCode",
                dataSource: dataBankCode,
                change: ValueAssign
            });


            jquery_1_11_3_min_p("#txtutilityCode").val(jsonData.Table3[0].utilityCode);
            //      var i = 0;
            //               var data = [];
            //            var jsonData = eval(result.d);
            //         
            //            jQuery.each(jsonData.Table4, function (rec) {
            //                data.push({ UtilityCodeId: jsonData.Table4[i].UtilityCodeId, UtilityCode: jsonData.Table4[i].UtilityCode });

            //                i++;

            //            });
            //             kendo_all_min_js("#txtutilityCode").kendoDropDownList({
            //        filter: "contains",
            //        dataTextField: "UtilityCode",
            //        dataValueField: "UtilityCodeId",
            //        dataSource: data
            //    });



            var i = 0;
            var jsonData = eval(result.d.Table);
            jquery_1_11_3_min_p('#ContentPlaceHolder1_lblTodateMandataoryforEsign').text(jsonData[i].IsTodatemandatoryenach);
            jquery_1_11_3_min_p('#ContentPlaceHolder1_lblISSendEmailCustomer').text(jsonData[i].ISSendEmailCustomer);
            jquery_1_11_3_min_p('#txtSponsorCode').val(jsonData[i].SponsorBankCode);
            if (jsonData[i].ModeOfPayment == 'Y') {
                IsShow = true;
                jquery_1_11_3_min_p("#pnl2").css('display', 'block');
                jquery_1_11_3_min_p("#lblTotal").attr('disabled', true);
            } else {
                IsShow = false;
            }




            //jquery_1_11_3_min_p('#txtFrom').val(jsonData[i].Date);
            jquery_1_11_3_min_p('#txtFrom').val(jsonData[i].FromDate);//jquery_1_11_3_min_p('#txtFrom').val(jsonData[i].Date);
            jquery_1_11_3_min_p('#txtperiodfrom').val(jsonData[i].Date);
            jquery_1_11_3_min_p('#txtEntityName').val(jsonData[i].Name);
            jquery_1_11_3_min_p("#txtEntityName").attr('disabled', true);

            //            jquery_1_11_3_min_p('#txtutilityCode').val(jsonData[i].UtilityCode);


            var Type = jsonData[i].DebitType;
            if (Type == 'f') {
                jquery_1_11_3_min_p('input:radio[name="rdoNomDebit"]').filter('[value="f"]').prop('checked', true);
            } else if (Type == 'm') {
                jquery_1_11_3_min_p('input:radio[name="rdoNomDebit"]').filter('[value="m"]').prop('checked', true);
            }


            var Type = jsonData[i].FrequencyType;
            if (Type == 'm') {
                jquery_1_11_3_min_p('input:radio[name="rdoNomFrequency"]').filter('[value="m"]').prop('checked', true);
            } else if (Type == 'q') {
                jquery_1_11_3_min_p('input:radio[name="rdoNomFrequency"]').filter('[value="q"]').prop('checked', true);
            } else if (Type == 'h') {
                jquery_1_11_3_min_p('input:radio[name="rdoNomFrequency"]').filter('[value="h"]').prop('checked', true);
            } else if (Type == 'y') {
                jquery_1_11_3_min_p('input:radio[name="rdoNomFrequency"]').filter('[value="y"]').prop('checked', true);
            } else if (Type == 'a') {
                jquery_1_11_3_min_p('input:radio[name="rdoNomFrequency"]').filter('[value="a"]').prop('checked', true);
            }



            var Type = jsonData[i].ToDebit;
            if (Type == 'sb') {
                jquery_1_11_3_min_p('input:radio[name="rdoNomGender"]').filter('[value="sb"]').prop('checked', true);
            } else if (Type == 'ca') {
                jquery_1_11_3_min_p('input:radio[name="rdoNomGender"]').filter('[value="ca"]').prop('checked', true);
            } else if (Type == 'cc') {
                jquery_1_11_3_min_p('input:radio[name="rdoNomGender"]').filter('[value="cc"]').prop('checked', true);
            } else if (Type == 're') {
                jquery_1_11_3_min_p('input:radio[name="rdoNomGender"]').filter('[value="re"]').prop('checked', true);
            } else if (Type == 'rd') {
                jquery_1_11_3_min_p('input:radio[name="rdoNomGender"]').filter('[value="rd"]').prop('checked', true);
            } else if (Type == 'ot') {
                jquery_1_11_3_min_p('input:radio[name="rdoNomGender"]').filter('[value="ot"]').prop('checked', true);
            }

            if (jsonData[i].PeriodType == 'u') {
                jquery_1_11_3_min_p("#chkUntil").prop("checked", true);

                jquery_1_11_3_min_p("#txtTo").addClass('divDisable');

            } else {
                jquery_1_11_3_min_p("#chkUntil").prop("checked", false);

                jquery_1_11_3_min_p("#txtTo").removeClass('divDisable');
            }
            var i = 0;

            var jsonData = eval(result.d.Table1);
            jquery_1_11_3_min_p("#imgLogo").attr('src', jsonData[i].ImagePath);

            var i = 0;
            var jsonData = eval(result.d.Table5);
            jQuery.each(jsonData, function (rec) {
                if (jsonData[i].PaymentMode == 'Cash') {
                    jquery_1_11_3_min_p('#DivCash').css('display', 'block');
                    jquery_1_11_3_min_p('#divca').css('display', 'block');
                }
                if (jsonData[i].PaymentMode == 'Cheque') {
                    jquery_1_11_3_min_p('#DivChequee').css('display', 'block');
                    jquery_1_11_3_min_p('#divcq').css('display', 'block');
                }
                if (jsonData[i].PaymentMode == 'DD') {
                    jquery_1_11_3_min_p('#DivDDD').css('display', 'block');
                    jquery_1_11_3_min_p('#divdd').css('display', 'block');
                }
                if (jsonData[i].PaymentMode == 'E') {
                    jquery_1_11_3_min_p('#DivElectronic').css('display', 'block');
                    jquery_1_11_3_min_p('#divcad').css('display', 'block');
                }
                i++;

            });
        },
        error: function (result) {

        }
    })
    BindAllDataPage();

    jquery_1_11_3_min_p('#btnSavePayment').click(function () {
        if (PaymentData.length > 0) {
            if (jquery_1_11_3_min_p('#lblBalance').html().trim() == "0") {
                var i = 0;

                var PaymentDataX = "<dtXml>";

                jQuery.each(PaymentData, function (rec) {
                    PaymentDataX += "<dtXml ";
                    PaymentDataX += 'Type="' + PaymentData[i].Type + '" ';

                    PaymentDataX += 'Amount="' + PaymentData[i].Amount + '" ';

                    PaymentDataX += 'RefNo="' + PaymentData[i].RefNo + '" ';

                    PaymentDataX += 'Date="' + PaymentData[i].ChequeDate + '" ';

                    PaymentDataX += 'BranchName="' + PaymentData[i].BranchName + '" ';

                    PaymentDataX += 'BankName="' + PaymentData[i].BankName + '" ';



                    PaymentDataX += " />";
                    i++;
                });

                PaymentDataX += "</dtXml>";

                var mandateId = jquery_1_11_3_min_p('#lblmandateId').text();


                jquery_1_11_3_min_p.ajax({
                    type: "POST",
                    contentType: "application/json; charset=utf-8",
                    url: "../WebServices/BankForm.asmx/InsertDataPayment",
                    data: "{'mandateId':'" + mandateId + "','PaymentDataX':'" + PaymentDataX + "'}",
                    dataType: "json",
                    success: function (result) {

                        PaymentData = [];
                        //                Reset();

                        Subitted();
                    },
                    error: function (result) {

                    }

                });


            }
        }
    });
    jquery_1_11_3_min_p('#btnSave').click(function () {

        if (Validation() == true) {


            if (CheckRefrence() == true) {

            }
        }
    });
    if (GetParameterValues('MandateId') != '') {

        jquery_1_11_3_min_p("#divform").css('display', 'block');
        jquery_1_11_3_min_p("#grd").css('display', 'none');
        jquery_1_11_3_min_p("#btnNew").attr('disabled', true);
        jquery_1_11_3_min_p("#btnEdit").attr('disabled', true);


        var MandateId = GetParameterValues('MandateId');

        jquery_1_11_3_min_p('#lblmandateId').text(MandateId);
        jquery_1_11_3_min_p('#ContentPlaceHolder1_lblSmandateId').val(MandateId);
        Edit();

        jquery_1_11_3_min_p("#btnSave").attr('disabled', true);

        jquery_1_11_3_min_p("#ContentPlaceHolder1_AResponse").css('display', 'none');
        //  jquery_1_11_3_min_p("#ARequset").css('display', 'block');



        //  jquery_1_11_3_min_p("#ARequset").attr('download', 'Request.xml');



        jquery_1_11_3_min_p("#btnScanHalf").css('display', 'none');
        jquery_1_11_3_min_p("#btnScan").css('display', 'none');
        jquery_1_11_3_min_p("#btnMandatePrint").css('display', 'none');
        jquery_1_11_3_min_p("#btnOldOverPrintMandate").css('display', 'none');
        jquery_1_11_3_min_p("#btnBlankMandateprint").css('display', 'none');
        jquery_1_11_3_min_p("#btnOldOverPrintMandate").css('display', 'none');
        jquery_1_11_3_min_p("#btnScanPrint").css('display', 'none');
        jquery_1_11_3_min_p("#ContentPlaceHolder1_btnEemandate").attr('disabled', true);
        jquery_1_11_3_min_p("#btnPhysicalMandate").attr('disabled', true);
        jquery_1_11_3_min_p("#btnEditDisable").attr('disabled', true);
        //            jquery_1_11_3_min_p("#btnSecVal").attr('disabled', true);

        if (GetParameterValuesName(MandateId) == "MandateId") {

            jquery_1_11_3_min_p("#ContentPlaceHolder1_btnEemandate").attr('disabled', true);
            Success();
            jquery_1_11_3_min_p('#lblSuccess').text('Mandate e-signed successfully. Now, you can download E-Mandate');
        }


        if (GetParameterValuesName(MandateId) == "ErrorCode") {
            // var IsShow=0;
            var ErrorData = GetFirstValue();
            // jquery_1_11_3_min_p.ajax({
            // type: "POST",
            // contentType: "application/json; charset=utf-8",
            // url: "../WebServices/BankForm.asmx/GetDivSecondGoShow",
            // data: "{'mandateId':'" + jquery_1_11_3_min_p('#ContentPlaceHolder1_lblSmandateId').val() + "'}",
            // dataType: "json",
            // success: function (data) {
            // var JsonData=data.d.Table;
            // var i=0;
            // if(JsonData[i].isespsecondtime==false)
            // {
            // if(ErrorData!='User has cancelled the eSign Transaction')
            // {
            // IsShow=1;
            // jquery_1_11_3_min_p("#DivSecond").css('display', 'block');
            // jquery_1_11_3_min_p("#btnDivSecondOk").css('display', 'none');
            // jquery_1_11_3_min_p('#lblErrormsg').text(ErrorData);
            // DivSecondTimeESP();
            // }
            // else{
            jquery_1_11_3_min_p("#DivSecond").css('display', 'none');
            jquery_1_11_3_min_p("#btnDivSecondOk").css('display', 'block');
            jquery_1_11_3_min_p('#lblErrormsg').text(ErrorData);
            DivSecondTimeESP();
            // }
            // }
            // }
            // });


        }


        if (GetParameterValuesName(MandateId) == "IdC") {
            jquery_1_11_3_min_p('#lblData').text("User has cancelled the E-Sign Transaction");
            admin();
        }
        jquery_1_11_3_min_p("#btnEditDisable").attr('disabled', false);
    }

    jquery_1_11_3_min_p("#ContentPlaceHolder1_AResponse").attr('download', '' + jquery_1_11_3_min_p('#txtRefrence1').val() + '.xml');
});

function UnSuccess() {
    jquery_1_12_1("#UnSuccess").dialog({
        resizable: false,
        dialogClass: "DivSaveSucc1",
        height: "auto",
        width: jquery_1_12_1(window).width() > 600 ? '40%' : '300',
        modal: true,
        buttons: {
            "OK": function () {

                if (jquery_1_11_3_min_p('#ContentPlaceHolder1_txtentityaccountvalidationflag').val() == "0") {
                    /////////Check true ifsc////////////////////
                    var checktrueifsc = jquery_1_11_3_min_p('#ContentPlaceHolder1_txtcheckifscvalid').val();
                    if (checktrueifsc == "1") {
                        //////////check btnemandateclick while acoount validation is cross from entity side
                        var emandate = jquery_1_11_3_min_p('#ContentPlaceHolder1_txtEmandatestatus').val();
                        if (emandate == "1") {
                            if (validateEmailAndPhone()) {
                                jquery_1_12_1(this).dialog("close");
                                if (jquery_1_11_3_min_p('input:radio[name=rbnetbanking]:checked').val() == 'N') {
                                    jquery_1_11_3_min_p('#ContentPlaceHolder1_txtmandatetype').val('N');
                                    CheckMobilebanking();
                                }
                                if (jquery_1_11_3_min_p('input:radio[name=rbnetbanking]:checked').val() == 'D') {
                                    jquery_1_11_3_min_p('#ContentPlaceHolder1_txtmandatetype').val('D');
                                    CheckMobilebanking();
                                }
                                if (jquery_1_11_3_min_p('input:radio[name=rbnetbanking]:checked').val() == 'A') {
                                    jquery_1_11_3_min_p('#ContentPlaceHolder1_txtmandatetype').val('A');
                                    jquery_1_11_3_min_p(".TestEmandate").trigger("click");
                                }
                            }
                        }
                        else {
                            Updatemandatemode(); //AG

                        }
                    }
                    ////////////////end check account validation
                    else {
                        jquery_1_12_1(this).dialog("close");
                    }
                    /////////////////ifsc check end

                } else if (jquery_1_11_3_min_p('#ContentPlaceHolder1_txtentityaccountvalidationflag').val() == "1") {
                    Isfirstvalidation();
                    var checktrueifsc = jquery_1_11_3_min_p('#ContentPlaceHolder1_txtcheckifscvalid').val();
                    if (checktrueifsc == "1") {

                        var emandate = jquery_1_11_3_min_p('#ContentPlaceHolder1_txtEmandatestatus').val();
                        if (emandate == "1") {
                            if (validateEmailAndPhone()) {
                                jquery_1_12_1(this).dialog("close");
                                if (jquery_1_11_3_min_p('input:radio[name=rbnetbanking]:checked').val() == 'N') {
                                    jquery_1_11_3_min_p('#ContentPlaceHolder1_txtmandatetype').val('N');
                                    CheckMobilebanking();
                                }
                                if (jquery_1_11_3_min_p('input:radio[name=rbnetbanking]:checked').val() == 'D') {
                                    jquery_1_11_3_min_p('#ContentPlaceHolder1_txtmandatetype').val('D');
                                    CheckMobilebanking();
                                }
                                if (jquery_1_11_3_min_p('input:radio[name=rbnetbanking]:checked').val() == 'A') {
                                    jquery_1_11_3_min_p('#ContentPlaceHolder1_txtmandatetype').val('A');
                                    jquery_1_11_3_min_p(".TestEmandate").trigger("click");
                                }
                            }
                        }
                        else {
                            jquery_1_12_1(this).dialog("close");
                            jquery_1_11_3_min_p("#btnFirstVal").attr('disabled', true);
                            jquery_1_11_3_min_p("#btnSecVal").css('display', 'block');
                            jquery_1_11_3_min_p("#btnSecVal").attr('disabled', false);
                        }
                    } else {
                        jquery_1_12_1(this).dialog("close");
                        jquery_1_11_3_min_p("#btnFirstVal").attr('disabled', true);
                        jquery_1_11_3_min_p("#btnSecVal").css('display', 'block');
                        jquery_1_11_3_min_p("#btnSecVal").attr('disabled', true);

                    }
                }
            }

        }
    });
}

/*function validateEmailAndPhone()
{
var flag=true;
 if (jquery_1_11_3_min_p('#txtmobileemandate').val() == ''&&jquery_1_11_3_min_p('#txtemailemandate').val() == '') {
//        jquery_1_11_3_min_p('#txtmobileemandate').addClass('validate');
//          jquery_1_11_3_min_p('#txtemailemandate').addClass('validate');
        jquery_1_11_3_min_p("#lblemailwarn").css('display', 'block');
         flag = false;
    }
  if (jquery_1_11_3_min_p('#lblmobile').text() == '' && jquery_1_11_3_min_p('#lblemail').text() == '') {
//        jquery_1_11_3_min_p('#txtmobileemandate').addClass('validate');
//          jquery_1_11_3_min_p('#txtemailemandate').addClass('validate');
        jquery_1_11_3_min_p("#lblemailwarn").css('display', 'block');
         flag = false;
    }
   else {
        UpdateEmailAndPhone();
        flag = true;
   }
    return flag;
}*/
// added by garima 07-02-2020
function validateEmailAndPhone() {
    var flag = true;
    var IsFlag_Txt = 0;
    var IsFlag_lbl = 0;
    if (jquery_1_11_3_min_p('#txtmobileemandate').val() == '' && jquery_1_11_3_min_p('#txtemailemandate').val() == '') {
        jquery_1_11_3_min_p("#lblemailwarn").css('display', 'block');
        flag = false;
        IsFlag_Txt = 0;
    }
    else {
        IsFlag_Txt = 1;

    }

    if (jquery_1_11_3_min_p('#lblmobile').text().trim() == '' && jquery_1_11_3_min_p('#lblemail').text().trim() == '') {
        jquery_1_11_3_min_p("#lblemailwarn").css('display', 'block');
        flag = false;
        IsFlag_lbl = 0;
    }
    else { IsFlag_lbl = 1; }

    if ((IsFlag_Txt) + (IsFlag_lbl) > 0) {

        UpdateEmailAndPhone();
        jquery_1_11_3_min_p("#lblemailwarn").css('display', 'none');
        flag = true;
    }
    else { flag = false; }
    return flag;
}

function admin() {
    jquery_1_12_1("#admin").dialog({
        resizable: false,
        dialogClass: "DivSaveSucc1",
        height: "auto",
        width: jquery_1_12_1(window).width() > 600 ? '35%' : '300',
        modal: true,
        buttons: {
            "OK": function () {
                jquery_1_12_1(this).dialog("close");
            }
        }
    });
}

function OpenConsientPopUp(checkemandatetype) {
    jquery_1_11_3_min_p('#ContentPlaceHolder1_txtmandatetype').val(checkemandatetype);
    confirmbankformpopup();
}

function OpenMailSuccess(checkmailtype) {
    jquery_1_11_3_min_p('#lblSuccess').text(checkmailtype);
    Success();
}

function OpenMailSuccess1() {
    jquery_1_12_1("#DivEmailPopup").dialog({
        resizable: false,
        dialogClass: "DivSaveSucc1",
        height: "auto",
        width: jquery_1_12_1(window).width() > 600 ? '28%' : '300',
        modal: true,
        buttons: {
            "OK": function () {
                jquery_1_12_1(this).dialog("close");
            }
        }
    });
}

function CheckMobilebanking() {
    var checkemandatetype = jquery_1_11_3_min_p('#ContentPlaceHolder1_txtmandatetype').val();
    if (checkemandatetype == "N") {
        var netbankingmail = jquery_1_11_3_min_p('#ContentPlaceHolder1_txtNetValidateMail').val();
        var netbankingmanual = jquery_1_11_3_min_p('#ContentPlaceHolder1_txtNetManual').val();
        var netbankingsms = jquery_1_11_3_min_p('#ContentPlaceHolder1_txtNetSMS').val();
        if (netbankingmanual == "1" && netbankingmail == "1" && netbankingsms == "1") {
            Emandatereg();
        } else if (netbankingmanual == "1" && netbankingmail == "1" && netbankingsms == "0") {
            Emandatereg();
        } else if (netbankingmanual == "1" && netbankingmail == "0" && netbankingsms == "1") {
            Emandatereg();
        } else if (netbankingmanual == "1" && netbankingmail == "0" && netbankingsms == "0") {
            confirmbankformpopup();
        } else if (netbankingmanual == "0" && netbankingmail == "1" && netbankingsms == "1") {
            Emandatereg();
        } else if (netbankingmanual == "0" && netbankingmail == "1" && netbankingsms == "0") {
            Emandatereg();
        } else if (netbankingmanual == "0" && netbankingmail == "0" && netbankingsms == "1") {
            Emandatereg();
        }
    }
    if (checkemandatetype == "D") {
        var debitmail = jquery_1_11_3_min_p('#ContentPlaceHolder1_txtDebitValidateMail').val();
        var debitmanual = jquery_1_11_3_min_p('#ContentPlaceHolder1_txtDebitManual').val();
        var debitsms = jquery_1_11_3_min_p('#ContentPlaceHolder1_txtDebitSMS').val();
        if (debitmail == "1" && debitmanual == "1" && debitsms == "1") {
            Emandatereg();
        } else if (netbankingmanual == "1" && netbankingmail == "1" && debitsms == "0") {
            Emandatereg();
        } else if (debitmanual == "1" && debitmail == "0" && debitsms == "1") {
            Emandatereg();
        } else if (debitmanual == "1" && debitmail == "0" && debitsms == "0") {
            confirmbankformpopup();
        } else if (debitmanual == "0" && debitmail == "1" && debitsms == "1") {
            Emandatereg();
        } else if (debitmanual == "0" && debitmail == "1" && debitsms == "0") {
            Emandatereg();
        } else if (debitmanual == "0" && debitmail == "0" && debitsms == "1") {
            Emandatereg();
        }
    }
    if (checkemandatetype == "A") {
        var aadharmail = jquery_1_11_3_min_p('#ContentPlaceHolder1_txtAadharValidateMail').val();
        var aadharmanual = jquery_1_11_3_min_p('#ContentPlaceHolder1_txtAadharManual').val();
        var aadharsms = jquery_1_11_3_min_p('#ContentPlaceHolder1_txtAadharSMS').val();
        if (aadharmail == "1" && aadharmanual == "1" && aadharsms == "1") {
            Emandatereg();
        } else if (aadharmanual == "1" && aadharmail == "1" && aadharsms == "0") {
            Emandatereg();
        } else if (aadharmanual == "1" && aadharmail == "0" && aadharsms == "1") {
            Emandatereg();
        } else if (aadharmanual == "1" && aadharmail == "0" && aadharsms == "0") {
            confirmbankformpopup();
        } else if (aadharmanual == "0" && aadharmail == "1" && aadharsms == "1") {
            Emandatereg();
        } else if (aadharmanual == "0" && aadharmail == "1" && aadharsms == "0") {
            Emandatereg();
        } else if (aadharmanual == "0" && aadharmail == "0" && aadharsms == "1") {
            Emandatereg();
        }
    }
    //added by garima 
    Isfirstvalidation();
}

function CheckEmandate() {
    jquery_1_11_3_min_p.ajax({
        type: "POST",
        contentType: "application/json; charset=utf-8",
        url: "../WebServices/BankForm.asmx/CheckNetBanking",
        data: "{'entityid':'" + jquery_1_11_3_min_p('#ContentPlaceHolder1_lblEntityId').text() + "','MandateId':'" + jquery_1_11_3_min_p('#lblmandateId').text() + "'}",
        dataType: "json",
        async: false,
        success: function (AllResultData) {
            var jsonData1 = eval(AllResultData.d.Table1);
            if (jsonData1.length > 0) {
                jquery_1_11_3_min_p('#ContentPlaceHolder1_txtnetbankinglive').val(jsonData1[0].NetBanking);
                jquery_1_11_3_min_p('#ContentPlaceHolder1_txtdebitlive').val(jsonData1[0].DebitCard);
                if (jsonData1[0].Is_eNACH_Live == true) {
                    jquery_1_11_3_min_p('#ContentPlaceHolder1_txtaadharlive').val(1);
                } else {
                    jquery_1_11_3_min_p('#ContentPlaceHolder1_txtaadharlive').val(0);
                }

                var jsonData = eval(AllResultData.d.Table);

                if (jsonData[0].PhoneNumber != 0) {

                    jquery_1_11_3_min_p('#imgcrossmobile').css("display", "none");
                    jquery_1_11_3_min_p('#imgtkmobile').css("display", "block");
                    jquery_1_11_3_min_p('#lblmobile').text(jsonData[0].PhoneNumber);

                }
                else {
                    jquery_1_11_3_min_p('#imgcrossmobile').css("display", "block");
                    jquery_1_11_3_min_p('#imgtkmobile').css("display", "none");
                    jquery_1_11_3_min_p('#lblmobile').text("");

                }

                if (jsonData[0].EmailId != "") {
                    jquery_1_11_3_min_p('#imgcrossemail').css("display", "none");
                    jquery_1_11_3_min_p('#imgtickemail').css("display", "block");
                    jquery_1_11_3_min_p('#lblemail').text(jsonData[0].EmailId);

                }
                else {
                    jquery_1_11_3_min_p('#imgcrossemail').css("display", "block");
                    jquery_1_11_3_min_p('#imgtickemail').css("display", "none");
                }

                if (jsonData[0].NetBanking == true) {
                    var netbanking = 1;
                    jquery_1_11_3_min_p('#ContentPlaceHolder1_txtNetValidateMail').val(jsonData[0].NetValidateMail);
                    jquery_1_11_3_min_p('#ContentPlaceHolder1_txtNetManual').val(jsonData[0].NetManual);
                    jquery_1_11_3_min_p('#ContentPlaceHolder1_txtNetSMS').val(jsonData[0].NetSMS);
                } else {
                    var netbanking = 0;
                    jquery_1_11_3_min_p('#ContentPlaceHolder1_txtNetValidateMail').val(jsonData[0].NetValidateMail);
                    jquery_1_11_3_min_p('#ContentPlaceHolder1_txtNetManual').val(jsonData[0].NetManual);
                    jquery_1_11_3_min_p('#ContentPlaceHolder1_txtNetSMS').val(jsonData[0].NetSMS);
                }
                if (jsonData[0].Debit == true) {
                    var debitcard = 1;
                    jquery_1_11_3_min_p('#ContentPlaceHolder1_txtDebitValidateMail').val(jsonData[0].DebitValidateMail);
                    jquery_1_11_3_min_p('#ContentPlaceHolder1_txtDebitManual').val(jsonData[0].DebitManual);
                    jquery_1_11_3_min_p('#ContentPlaceHolder1_txtDebitSMS').val(jsonData[0].DebitSMS);
                } else {
                    var debitcard = 0;
                    jquery_1_11_3_min_p('#ContentPlaceHolder1_txtDebitValidateMail').val(jsonData[0].DebitValidateMail);
                    jquery_1_11_3_min_p('#ContentPlaceHolder1_txtDebitManual').val(jsonData[0].DebitManual);
                    jquery_1_11_3_min_p('#ContentPlaceHolder1_txtDebitSMS').val(jsonData[0].DebitSMS);
                }
                if (jsonData[0].Aadhar == true) {
                    var aadharcard = 1;
                    jquery_1_11_3_min_p('#ContentPlaceHolder1_txtAadharValidateMail').val(jsonData[0].AadharValidateMail);
                    jquery_1_11_3_min_p('#ContentPlaceHolder1_txtAadharManual').val(jsonData[0].AadharManual);
                    jquery_1_11_3_min_p('#ContentPlaceHolder1_txtAadharSMS').val(jsonData[0].AadharSMS);
                } else {
                    var aadharcard = 0;
                    jquery_1_11_3_min_p('#ContentPlaceHolder1_txtAadharValidateMail').val(jsonData[0].AadharValidateMail);
                    jquery_1_11_3_min_p('#ContentPlaceHolder1_txtAadharManual').val(jsonData[0].AadharManual);
                    jquery_1_11_3_min_p('#ContentPlaceHolder1_txtAadharSMS').val(jsonData[0].AadharSMS);
                }
                var livenetbanking = 0;
                var livedebit = 0;
                var liveaadhar = 0;
                if (jquery_1_11_3_min_p('#ContentPlaceHolder1_txtnetbankinglive').val() == "0" && netbanking != "0") {
                    jquery_1_11_3_min_p("#mandatenetbank").css('display', 'inline-block');
                    jquery_1_11_3_min_p("#NetBTick").css('display', 'none');
                    jquery_1_11_3_min_p("#NetBCross").css('display', 'block');
                    jquery_1_11_3_min_p("#netbankingshow").css('display', 'block');
                    jquery_1_11_3_min_p('input:radio[name="rbnetbanking"]').filter('[value="N"]').prop('checked', false);
                    jquery_1_11_3_min_p('input:radio[name="rbnetbanking"]').filter('[value="N"]').attr('disabled', true);
                    if (jquery_1_11_3_min_p('#ContentPlaceHolder1_txtcheckflag').val() == "1") { } else {
                        jquery_1_11_3_min_p("#debitnetbank").css('display', 'block');
                    }
                } else if (jquery_1_11_3_min_p('#ContentPlaceHolder1_txtnetbankinglive').val() != "0" && netbanking == "0") {
                    jquery_1_11_3_min_p("#mandatenetbank").css('display', 'none');
                    jquery_1_11_3_min_p("#NetBTick").css('display', 'none');
                    jquery_1_11_3_min_p("#NetBCross").css('display', 'block');
                    if (jquery_1_11_3_min_p('#ContentPlaceHolder1_txtcheckflag').val() == "1") { } else {
                        jquery_1_11_3_min_p("#debitnetbank").css('display', 'block');
                    }
                } else if (jquery_1_11_3_min_p('#ContentPlaceHolder1_txtnetbankinglive').val() != "0" && netbanking != "0") {
                    jquery_1_11_3_min_p("#mandatenetbank").css('display', 'inline-block');
                    jquery_1_11_3_min_p("#NetBTick").css('display', 'block');
                    jquery_1_11_3_min_p("#NetBCross").css('display', 'none');
                    jquery_1_11_3_min_p("#netbankingshow").css('display', 'block');
                    jquery_1_11_3_min_p('#ContentPlaceHolder1_txtcheckflag').val(1);
                    livenetbanking = 1;
                    jquery_1_11_3_min_p('input:radio[name="rbnetbanking"]').filter('[value="N"]').attr('disabled', false);
                    jquery_1_11_3_min_p("#debitnetbank").css('display', 'block');
                }
                if (jquery_1_11_3_min_p('#ContentPlaceHolder1_txtdebitlive').val() == "0" && debitcard != "0") {
                    jquery_1_11_3_min_p("#mandatedebit").css('display', 'inline-block');
                    jquery_1_11_3_min_p("#DEBITTick").css('display', 'none');
                    jquery_1_11_3_min_p("#DEBITCross").css('display', 'block');
                    jquery_1_11_3_min_p("#debitbankingshow").css('display', 'block');
                    jquery_1_11_3_min_p('input:radio[name="rbnetbanking"]').filter('[value="D"]').prop('checked', false);
                    jquery_1_11_3_min_p('input:radio[name="rbnetbanking"]').filter('[value="D"]').prop('disabled', true);
                    if (jquery_1_11_3_min_p('#ContentPlaceHolder1_txtcheckflag').val() == "1") { } else {
                        jquery_1_11_3_min_p("#debitnetbank").css('display', 'block');
                    }
                } else if (jquery_1_11_3_min_p('#ContentPlaceHolder1_txtdebitlive').val() != "0" && debitcard == "0") {
                    jquery_1_11_3_min_p("#mandatedebit").css('display', 'none');
                    jquery_1_11_3_min_p("#DEBITTick").css('display', 'none');
                    jquery_1_11_3_min_p("#DEBITCross").css('display', 'block');
                    if (jquery_1_11_3_min_p('#ContentPlaceHolder1_txtcheckflag').val() == "1") { } else {
                        jquery_1_11_3_min_p("#debitnetbank").css('display', 'block');
                    }
                } else if (jquery_1_11_3_min_p('#ContentPlaceHolder1_txtdebitlive').val() != "0" && debitcard != "0") {
                    jquery_1_11_3_min_p("#mandatedebit").css('display', 'inline-block');
                    jquery_1_11_3_min_p("#DEBITTick").css('display', 'block');
                    jquery_1_11_3_min_p("#DEBITCross").css('display', 'none');
                    jquery_1_11_3_min_p('input:radio[name="rbnetbanking"]').filter('[value="D"]').prop('disabled', false);
                    jquery_1_11_3_min_p('#ContentPlaceHolder1_txtcheckflag').val(1);
                    livedebit = 1;
                    jquery_1_11_3_min_p("#debitnetbank").css('display', 'block');
                    jquery_1_11_3_min_p("#debitbankingshow").css('display', 'block');
                }

                if (jquery_1_11_3_min_p('#ContentPlaceHolder1_txtaadharlive').val() == "0" && aadharcard != "0") {
                    jquery_1_11_3_min_p("#mandateaadhar").css('display', 'inline-block');
                    jquery_1_11_3_min_p("#AdharTick").css('display', 'none');
                    jquery_1_11_3_min_p("#AdharCross").css('display', 'block');
                    jquery_1_11_3_min_p("#aadharbankingshow").css('display', 'block');
                    jquery_1_11_3_min_p('input:radio[name="rbnetbanking"]').filter('[value="A"]').prop('checked', false);
                    jquery_1_11_3_min_p('input:radio[name="rbnetbanking"]').filter('[value="A"]').prop('disabled', true);
                    if (jquery_1_11_3_min_p('#ContentPlaceHolder1_txtcheckflag').val() == "1") { } else {
                        jquery_1_11_3_min_p("#debitnetbank").css('display', 'block');
                    }
                    jquery_1_11_3_min_p("#aadharbankingshow").css('display', 'none');
                } else if (jquery_1_11_3_min_p('#ContentPlaceHolder1_txtaadharlive').val() != "0" && aadharcard == "0") {
                    jquery_1_11_3_min_p("#mandateaadhar").css('display', 'none');
                    jquery_1_11_3_min_p("#AdharTick").css('display', 'none');
                    jquery_1_11_3_min_p("#AdharCross").css('display', 'block');
                    if (jquery_1_11_3_min_p('#ContentPlaceHolder1_txtcheckflag').val() == "1") { } else {
                        jquery_1_11_3_min_p("#debitnetbank").css('display', 'block');
                    }
                    jquery_1_11_3_min_p("#aadharbankingshow").css('display', 'none');
                } else if (jquery_1_11_3_min_p('#ContentPlaceHolder1_txtaadharlive').val() != "0" && aadharcard != "0") {
                    jquery_1_11_3_min_p("#mandateaadhar").css('display', 'inline-block');
                    jquery_1_11_3_min_p("#AdharTick").css('display', 'block');
                    jquery_1_11_3_min_p("#AdharCross").css('display', 'none');
                    jquery_1_11_3_min_p('#ContentPlaceHolder1_txtcheckflag').val(1);
                    jquery_1_11_3_min_p('input:radio[name="rbnetbanking"]').filter('[value="A"]').prop('disabled', false);
                    liveaadhar = 1;
                    jquery_1_11_3_min_p("#debitnetbank").css('display', 'block');
                    jquery_1_11_3_min_p("#aadharbankingshow").css('display', 'block');
                }
                if (livenetbanking == "0" && liveaadhar == "0" && livedebit == "0") {
                    jquery_1_12_1("#UnSuccess").dialog("close");
                    jquery_1_11_3_min_p("#btnSecVal").attr('disabled', true);
                    netbankingdebit();
                }
                if (livenetbanking != "0" && livedebit != "0" && liveaadhar != "0") {
                    jquery_1_11_3_min_p('input:radio[name="rbnetbanking"]').filter('[value="N"]').prop('checked', true);
                    jquery_1_11_3_min_p('input:radio[name="rbnetbanking"]').filter('[value="D"]').prop('checked', false);
                    jquery_1_11_3_min_p('input:radio[name="rbnetbanking"]').filter('[value="A"]').prop('checked', false);


                } else if (livenetbanking == "0" && livedebit != "0" && liveaadhar != "0") {

                    jquery_1_11_3_min_p('input:radio[name="rbnetbanking"]').filter('[value="N"]').prop('checked', false);
                    jquery_1_11_3_min_p('input:radio[name="rbnetbanking"]').filter('[value="D"]').prop('checked', true);
                    jquery_1_11_3_min_p('input:radio[name="rbnetbanking"]').filter('[value="A"]').prop('checked', false);

                } else if (livenetbanking == "0" && livedebit == "0" && liveaadhar != "0") {

                    jquery_1_11_3_min_p('input:radio[name="rbnetbanking"]').filter('[value="N"]').prop('checked', false);
                    jquery_1_11_3_min_p('input:radio[name="rbnetbanking"]').filter('[value="D"]').prop('checked', false);
                    jquery_1_11_3_min_p('input:radio[name="rbnetbanking"]').filter('[value="A"]').prop('checked', true);
                }

                if (livenetbanking != "0" && livedebit == "0" && liveaadhar != "0") {
                    jquery_1_11_3_min_p('input:radio[name="rbnetbanking"]').filter('[value="N"]').prop('checked', true);
                    jquery_1_11_3_min_p('input:radio[name="rbnetbanking"]').filter('[value="D"]').prop('checked', false);
                    jquery_1_11_3_min_p('input:radio[name="rbnetbanking"]').filter('[value="A"]').prop('checked', false);
                }

                if (livenetbanking != "0" && livedebit != "0" && liveaadhar == "0") {
                    jquery_1_11_3_min_p('input:radio[name="rbnetbanking"]').filter('[value="N"]').prop('checked', true);
                    jquery_1_11_3_min_p('input:radio[name="rbnetbanking"]').filter('[value="D"]').prop('checked', false);
                    jquery_1_11_3_min_p('input:radio[name="rbnetbanking"]').filter('[value="A"]').prop('checked', false);

                } else if (livenetbanking != "0" && livedebit == "0" && liveaadhar == "0") {
                    jquery_1_11_3_min_p('input:radio[name="rbnetbanking"]').filter('[value="N"]').prop('checked', true);
                    jquery_1_11_3_min_p('input:radio[name="rbnetbanking"]').filter('[value="D"]').prop('checked', false);
                    jquery_1_11_3_min_p('input:radio[name="rbnetbanking"]').filter('[value="A"]').prop('checked', false);

                } else if (livenetbanking == "0" && livedebit != "0" && liveaadhar == "0") {
                    jquery_1_11_3_min_p('input:radio[name="rbnetbanking"]').filter('[value="N"]').prop('checked', false);
                    jquery_1_11_3_min_p('input:radio[name="rbnetbanking"]').filter('[value="D"]').prop('checked', true);
                    jquery_1_11_3_min_p('input:radio[name="rbnetbanking"]').filter('[value="A"]').prop('checked', false);

                } else if (livenetbanking == "0" && livedebit == "0" && liveaadhar != "0") {
                    jquery_1_11_3_min_p('input:radio[name="rbnetbanking"]').filter('[value="N"]').prop('checked', false);
                    jquery_1_11_3_min_p('input:radio[name="rbnetbanking"]').filter('[value="D"]').prop('checked', false);
                    jquery_1_11_3_min_p('input:radio[name="rbnetbanking"]').filter('[value="A"]').prop('checked', true);
                }
            }
        }
    });
}



function Checknetbanking() {
    jquery_1_11_3_min_p.ajax({
        type: "POST",
        contentType: "application/json; charset=utf-8",
        url: "../WebServices/BankForm.asmx/CheckNetBanking",
        data: "{'entityid':'" + jquery_1_11_3_min_p('#ContentPlaceHolder1_lblEntityId').text() + "','MandateId':'" + jquery_1_11_3_min_p('#lblmandateId').text() + "'}",
        dataType: "json",
        // async: false,
        success: function (AllResultData) {

            var jsonData1 = eval(AllResultData.d.Table1);
            if (jsonData1.length > 0) {

                jquery_1_11_3_min_p('#ContentPlaceHolder1_txtnetbankinglive').val(jsonData1[0].NetBanking);
                jquery_1_11_3_min_p('#ContentPlaceHolder1_txtdebitlive').val(jsonData1[0].DebitCard);
                if (jsonData1[0].Is_eNACH_Live == true) {
                    jquery_1_11_3_min_p('#ContentPlaceHolder1_txtaadharlive').val(1);
                } else {
                    jquery_1_11_3_min_p('#ContentPlaceHolder1_txtaadharlive').val(0);
                }


                var jsonData = eval(AllResultData.d.Table);
                if (jsonData[0].NetBanking == true) {
                    var netbanking = 1;
                    jquery_1_11_3_min_p('#ContentPlaceHolder1_txtNetValidateMail').val(jsonData[0].NetValidateMail);
                    jquery_1_11_3_min_p('#ContentPlaceHolder1_txtNetManual').val(jsonData[0].NetManual);
                    jquery_1_11_3_min_p('#ContentPlaceHolder1_txtNetSMS').val(jsonData[0].NetSMS);
                } else {
                    var netbanking = 0;
                    jquery_1_11_3_min_p('#ContentPlaceHolder1_txtNetValidateMail').val(jsonData[0].NetValidateMail);
                    jquery_1_11_3_min_p('#ContentPlaceHolder1_txtNetManual').val(jsonData[0].NetManual);
                    jquery_1_11_3_min_p('#ContentPlaceHolder1_txtNetSMS').val(jsonData[0].NetSMS);
                }
                if (jsonData[0].Debit == true) {
                    var debitcard = 1;
                    jquery_1_11_3_min_p('#ContentPlaceHolder1_txtDebitValidateMail').val(jsonData[0].DebitValidateMail);
                    jquery_1_11_3_min_p('#ContentPlaceHolder1_txtDebitManual').val(jsonData[0].DebitManual);
                    jquery_1_11_3_min_p('#ContentPlaceHolder1_txtDebitSMS').val(jsonData[0].DebitSMS);
                } else {
                    var debitcard = 0;
                    jquery_1_11_3_min_p('#ContentPlaceHolder1_txtDebitValidateMail').val(jsonData[0].DebitValidateMail);
                    jquery_1_11_3_min_p('#ContentPlaceHolder1_txtDebitManual').val(jsonData[0].DebitManual);
                    jquery_1_11_3_min_p('#ContentPlaceHolder1_txtDebitSMS').val(jsonData[0].DebitSMS);
                }
                if (jsonData[0].Aadhar == true) {
                    var aadharcard = 1;
                    jquery_1_11_3_min_p('#ContentPlaceHolder1_txtAadharValidateMail').val(jsonData[0].AadharValidateMail);
                    jquery_1_11_3_min_p('#ContentPlaceHolder1_txtAadharManual').val(jsonData[0].AadharManual);
                    jquery_1_11_3_min_p('#ContentPlaceHolder1_txtAadharSMS').val(jsonData[0].AadharSMS);
                } else {
                    var aadharcard = 0;
                    jquery_1_11_3_min_p('#ContentPlaceHolder1_txtAadharValidateMail').val(jsonData[0].AadharValidateMail);
                    jquery_1_11_3_min_p('#ContentPlaceHolder1_txtAadharManual').val(jsonData[0].AadharManual);
                    jquery_1_11_3_min_p('#ContentPlaceHolder1_txtAadharSMS').val(jsonData[0].AadharSMS);
                }
                // alert(jquery_1_11_3_min_p('#ContentPlaceHolder1_txtcheckissecval').val());
                if (jquery_1_11_3_min_p('#ContentPlaceHolder1_txtcheckissecval').val() == "0") {
                    var isecondval = 0;
                } else {
                    if (jsonData[0].IsSecondValidation == true) {
                        var isecondval = 1;
                    } else {
                        var isecondval = 0;
                    }

                    //  var isecondval=1;
                }
                var accountvalidation = jquery_1_11_3_min_p('#ContentPlaceHolder1_txtaccountcheck').val();
                jquery_1_11_3_min_p('#ContentPlaceHolder1_txtcheckissecval').val(isecondval);
                var isphysical = jquery_1_11_3_min_p('#ContentPlaceHolder1_txtphysical').val();
                var isemandate = jquery_1_11_3_min_p('#ContentPlaceHolder1_txtemandate').val();
                var livenetbanking = 0;
                var livedebit = 0;
                var liveaadhar = 0;
                if (isemandate == "true") {

                    if (accountvalidation == "1" && isecondval == "0") {
                        jquery_1_11_3_min_p("#debitnetbank").css('display', 'none');
                        jquery_1_11_3_min_p("#netbankingshow").css('display', 'none');
                        jquery_1_11_3_min_p("#debitbankingshow").css('display', 'none');
                        jquery_1_11_3_min_p("#aadharbankingshow").css('display', 'none');
                        jquery_1_11_3_min_p("#mandatedebit").css('display', 'none');
                        jquery_1_11_3_min_p("#mandatenetbank").css('display', 'none');
                        jquery_1_11_3_min_p("#mandateaadhar").css('display', 'none');

                    } else if (accountvalidation == "2" && isecondval == "0") {

                        if (jquery_1_11_3_min_p('#ContentPlaceHolder1_txtnetbankinglive').val() == "0" && netbanking != "0") {
                            jquery_1_11_3_min_p("#mandatenetbank").css('display', 'inline-block');
                            jquery_1_11_3_min_p("#NetBTick").css('display', 'none');
                            jquery_1_11_3_min_p("#NetBCross").css('display', 'block');
                            jquery_1_11_3_min_p("#netbankingshow").css('display', 'block');
                            jquery_1_11_3_min_p('input:radio[name="rbnetbanking"]').filter('[value="N"]').prop('checked', false);
                            jquery_1_11_3_min_p('input:radio[name="rbnetbanking"]').filter('[value="N"]').attr('disabled', true);
                            if (jquery_1_11_3_min_p('#ContentPlaceHolder1_txtcheckflag').val() == "1") { } else {
                                jquery_1_11_3_min_p("#debitnetbank").css('display', 'block');
                            }
                        } else if (jquery_1_11_3_min_p('#ContentPlaceHolder1_txtnetbankinglive').val() != "0" && netbanking == "0") {
                            jquery_1_11_3_min_p("#mandatenetbank").css('display', 'none');
                            jquery_1_11_3_min_p("#NetBTick").css('display', 'none');
                            jquery_1_11_3_min_p("#NetBCross").css('display', 'block');
                            if (jquery_1_11_3_min_p('#ContentPlaceHolder1_txtcheckflag').val() == "1") { } else {
                                jquery_1_11_3_min_p("#debitnetbank").css('display', 'block');
                            }
                        } else if (jquery_1_11_3_min_p('#ContentPlaceHolder1_txtnetbankinglive').val() != "0" && netbanking != "0") {
                            jquery_1_11_3_min_p("#mandatenetbank").css('display', 'inline-block');
                            jquery_1_11_3_min_p("#NetBTick").css('display', 'block');
                            jquery_1_11_3_min_p("#NetBCross").css('display', 'none');
                            jquery_1_11_3_min_p("#netbankingshow").css('display', 'block');
                            jquery_1_11_3_min_p('#ContentPlaceHolder1_txtcheckflag').val(1);
                            livenetbanking = 1;
                            jquery_1_11_3_min_p('input:radio[name="rbnetbanking"]').filter('[value="N"]').attr('disabled', false);
                            jquery_1_11_3_min_p("#debitnetbank").css('display', 'block');


                        }
                        if (jquery_1_11_3_min_p('#ContentPlaceHolder1_txtdebitlive').val() == "0" && debitcard != "0") {
                            jquery_1_11_3_min_p("#mandatedebit").css('display', 'inline-block');
                            jquery_1_11_3_min_p("#DEBITTick").css('display', 'none');
                            jquery_1_11_3_min_p("#DEBITCross").css('display', 'block');
                            jquery_1_11_3_min_p("#debitbankingshow").css('display', 'block');
                            jquery_1_11_3_min_p('input:radio[name="rbnetbanking"]').filter('[value="D"]').prop('checked', false);
                            jquery_1_11_3_min_p('input:radio[name="rbnetbanking"]').filter('[value="D"]').prop('disabled', true);
                            if (jquery_1_11_3_min_p('#ContentPlaceHolder1_txtcheckflag').val() == "1") { } else {
                                jquery_1_11_3_min_p("#debitnetbank").css('display', 'block');
                            }
                        } else if (jquery_1_11_3_min_p('#ContentPlaceHolder1_txtdebitlive').val() != "0" && debitcard == "0") {
                            jquery_1_11_3_min_p("#mandatedebit").css('display', 'none');
                            jquery_1_11_3_min_p("#DEBITTick").css('display', 'none');
                            jquery_1_11_3_min_p("#DEBITCross").css('display', 'block');
                            if (jquery_1_11_3_min_p('#ContentPlaceHolder1_txtcheckflag').val() == "1") { } else {
                                jquery_1_11_3_min_p("#debitnetbank").css('display', 'block');
                            }
                        } else if (jquery_1_11_3_min_p('#ContentPlaceHolder1_txtdebitlive').val() != "0" && debitcard != "0") {
                            jquery_1_11_3_min_p("#mandatedebit").css('display', 'inline-block');
                            jquery_1_11_3_min_p("#DEBITTick").css('display', 'block');
                            jquery_1_11_3_min_p("#DEBITCross").css('display', 'none');
                            jquery_1_11_3_min_p('input:radio[name="rbnetbanking"]').filter('[value="D"]').prop('disabled', false);
                            jquery_1_11_3_min_p('#ContentPlaceHolder1_txtcheckflag').val(1);
                            livedebit = 1;

                            jquery_1_11_3_min_p("#debitnetbank").css('display', 'block');

                            jquery_1_11_3_min_p("#debitbankingshow").css('display', 'block');
                        }

                        if (jquery_1_11_3_min_p('#ContentPlaceHolder1_txtaadharlive').val() == "0" && aadharcard != "0") {
                            jquery_1_11_3_min_p("#mandateaadhar").css('display', 'inline-block');
                            jquery_1_11_3_min_p("#AdharTick").css('display', 'none');
                            jquery_1_11_3_min_p("#AdharCross").css('display', 'block');
                            jquery_1_11_3_min_p("#aadharbankingshow").css('display', 'block');
                            jquery_1_11_3_min_p('input:radio[name="rbnetbanking"]').filter('[value="A"]').prop('checked', false);
                            jquery_1_11_3_min_p('input:radio[name="rbnetbanking"]').filter('[value="A"]').prop('disabled', true);
                            if (jquery_1_11_3_min_p('#ContentPlaceHolder1_txtcheckflag').val() == "1") { } else {
                                jquery_1_11_3_min_p("#debitnetbank").css('display', 'block');
                            }
                            jquery_1_11_3_min_p("#aadharbankingshow").css('display', 'none');
                        } else if (jquery_1_11_3_min_p('#ContentPlaceHolder1_txtaadharlive').val() != "0" && aadharcard == "0") {
                            jquery_1_11_3_min_p("#mandateaadhar").css('display', 'none');
                            jquery_1_11_3_min_p("#AdharTick").css('display', 'none');
                            jquery_1_11_3_min_p("#AdharCross").css('display', 'block');
                            if (jquery_1_11_3_min_p('#ContentPlaceHolder1_txtcheckflag').val() == "1") { } else {
                                jquery_1_11_3_min_p("#debitnetbank").css('display', 'block');
                            }
                            jquery_1_11_3_min_p("#aadharbankingshow").css('display', 'none');
                        } else if (jquery_1_11_3_min_p('#ContentPlaceHolder1_txtaadharlive').val() != "0" && aadharcard != "0") {
                            jquery_1_11_3_min_p("#mandateaadhar").css('display', 'inline-block');
                            jquery_1_11_3_min_p("#AdharTick").css('display', 'block');
                            jquery_1_11_3_min_p("#AdharCross").css('display', 'none');
                            jquery_1_11_3_min_p('#ContentPlaceHolder1_txtcheckflag').val(1);
                            jquery_1_11_3_min_p('input:radio[name="rbnetbanking"]').filter('[value="A"]').prop('disabled', false);
                            liveaadhar = 1;

                            jquery_1_11_3_min_p("#debitnetbank").css('display', 'block');
                            jquery_1_11_3_min_p("#aadharbankingshow").css('display', 'block');
                        }
                        if (livenetbanking == "0" && liveaadhar == "0" && livedebit == "0") {
                            jquery_1_12_1("#UnSuccess").dialog("close");
                            jquery_1_11_3_min_p("#btnSecVal").attr('disabled', true);
                            netbankingdebit();
                        }
                        if (livenetbanking != "0" && livedebit != "0" && liveaadhar != "0") {

                            jquery_1_11_3_min_p('input:radio[name="rbnetbanking"]').filter('[value="N"]').prop('checked', true);
                            jquery_1_11_3_min_p('input:radio[name="rbnetbanking"]').filter('[value="D"]').prop('checked', false);
                            jquery_1_11_3_min_p('input:radio[name="rbnetbanking"]').filter('[value="A"]').prop('checked', false);


                        } else if (livenetbanking == "0" && livedebit != "0" && liveaadhar != "0") {

                            jquery_1_11_3_min_p('input:radio[name="rbnetbanking"]').filter('[value="N"]').prop('checked', false);
                            jquery_1_11_3_min_p('input:radio[name="rbnetbanking"]').filter('[value="D"]').prop('checked', true);
                            jquery_1_11_3_min_p('input:radio[name="rbnetbanking"]').filter('[value="A"]').prop('checked', false);

                        } else if (livenetbanking == "0" && livedebit == "0" && liveaadhar != "0") {

                            jquery_1_11_3_min_p('input:radio[name="rbnetbanking"]').filter('[value="N"]').prop('checked', false);
                            jquery_1_11_3_min_p('input:radio[name="rbnetbanking"]').filter('[value="D"]').prop('checked', false);
                            jquery_1_11_3_min_p('input:radio[name="rbnetbanking"]').filter('[value="A"]').prop('checked', true);

                        }

                        if (livenetbanking != "0" && livedebit == "0" && liveaadhar != "0") {

                            jquery_1_11_3_min_p('input:radio[name="rbnetbanking"]').filter('[value="N"]').prop('checked', true);
                            jquery_1_11_3_min_p('input:radio[name="rbnetbanking"]').filter('[value="D"]').prop('checked', false);
                            jquery_1_11_3_min_p('input:radio[name="rbnetbanking"]').filter('[value="A"]').prop('checked', false);

                        }

                        if (livenetbanking != "0" && livedebit != "0" && liveaadhar == "0") {

                            jquery_1_11_3_min_p('input:radio[name="rbnetbanking"]').filter('[value="N"]').prop('checked', true);
                            jquery_1_11_3_min_p('input:radio[name="rbnetbanking"]').filter('[value="D"]').prop('checked', false);
                            jquery_1_11_3_min_p('input:radio[name="rbnetbanking"]').filter('[value="A"]').prop('checked', false);

                        } else if (livenetbanking != "0" && livedebit == "0" && liveaadhar == "0") {

                            jquery_1_11_3_min_p('input:radio[name="rbnetbanking"]').filter('[value="N"]').prop('checked', true);
                            jquery_1_11_3_min_p('input:radio[name="rbnetbanking"]').filter('[value="D"]').prop('checked', false);
                            jquery_1_11_3_min_p('input:radio[name="rbnetbanking"]').filter('[value="A"]').prop('checked', false);


                        } else if (livenetbanking == "0" && livedebit != "0" && liveaadhar == "0") {

                            jquery_1_11_3_min_p('input:radio[name="rbnetbanking"]').filter('[value="N"]').prop('checked', false);
                            jquery_1_11_3_min_p('input:radio[name="rbnetbanking"]').filter('[value="D"]').prop('checked', true);
                            jquery_1_11_3_min_p('input:radio[name="rbnetbanking"]').filter('[value="A"]').prop('checked', false);


                        } else if (livenetbanking == "0" && livedebit == "0" && liveaadhar != "0") {

                            jquery_1_11_3_min_p('input:radio[name="rbnetbanking"]').filter('[value="N"]').prop('checked', false);
                            jquery_1_11_3_min_p('input:radio[name="rbnetbanking"]').filter('[value="D"]').prop('checked', false);
                            jquery_1_11_3_min_p('input:radio[name="rbnetbanking"]').filter('[value="A"]').prop('checked', true);


                        }
                    } else if (accountvalidation == "2" && isecondval == "1") {

                        if (jquery_1_11_3_min_p('#ContentPlaceHolder1_txtnetbankinglive').val() == "0" && netbanking != "0") {
                            jquery_1_11_3_min_p("#mandatenetbank").css('display', 'inline-block');
                            jquery_1_11_3_min_p("#NetBTick").css('display', 'none');
                            jquery_1_11_3_min_p("#NetBCross").css('display', 'block');
                            jquery_1_11_3_min_p("#netbankingshow").css('display', 'block');
                            jquery_1_11_3_min_p('input:radio[name="rbnetbanking"]').filter('[value="N"]').prop('checked', false);
                            jquery_1_11_3_min_p('input:radio[name="rbnetbanking"]').filter('[value="N"]').attr('disabled', true);
                            if (jquery_1_11_3_min_p('#ContentPlaceHolder1_txtcheckflag').val() == "1") { } else {
                                jquery_1_11_3_min_p("#debitnetbank").css('display', 'block');
                            }
                        } else if (jquery_1_11_3_min_p('#ContentPlaceHolder1_txtnetbankinglive').val() != "0" && netbanking == "0") {
                            jquery_1_11_3_min_p("#mandatenetbank").css('display', 'none');
                            jquery_1_11_3_min_p("#NetBTick").css('display', 'none');
                            jquery_1_11_3_min_p("#NetBCross").css('display', 'block');
                            if (jquery_1_11_3_min_p('#ContentPlaceHolder1_txtcheckflag').val() == "1") { } else {
                                jquery_1_11_3_min_p("#debitnetbank").css('display', 'block');
                            }
                        } else if (jquery_1_11_3_min_p('#ContentPlaceHolder1_txtnetbankinglive').val() != "0" && netbanking != "0") {
                            jquery_1_11_3_min_p("#mandatenetbank").css('display', 'inline-block');
                            jquery_1_11_3_min_p("#NetBTick").css('display', 'block');
                            jquery_1_11_3_min_p("#NetBCross").css('display', 'none');
                            jquery_1_11_3_min_p("#netbankingshow").css('display', 'block');
                            jquery_1_11_3_min_p('#ContentPlaceHolder1_txtcheckflag').val(1);
                            jquery_1_11_3_min_p('input:radio[name="rbnetbanking"]').filter('[value="N"]').attr('disabled', false);
                            livenetbanking = 1;

                            jquery_1_11_3_min_p("#debitnetbank").css('display', 'block');


                        }
                        if (jquery_1_11_3_min_p('#ContentPlaceHolder1_txtdebitlive').val() == "0" && debitcard != "0") {
                            jquery_1_11_3_min_p("#mandatedebit").css('display', 'inline-block');
                            jquery_1_11_3_min_p("#DEBITTick").css('display', 'none');
                            jquery_1_11_3_min_p("#DEBITCross").css('display', 'block');
                            jquery_1_11_3_min_p("#debitbankingshow").css('display', 'block');
                            jquery_1_11_3_min_p('input:radio[name="rbnetbanking"]').filter('[value="D"]').prop('checked', false);
                            jquery_1_11_3_min_p('input:radio[name="rbnetbanking"]').filter('[value="D"]').prop('disabled', true);
                            if (jquery_1_11_3_min_p('#ContentPlaceHolder1_txtcheckflag').val() == "1") { } else {
                                jquery_1_11_3_min_p("#debitnetbank").css('display', 'block');
                            }
                        } else if (jquery_1_11_3_min_p('#ContentPlaceHolder1_txtdebitlive').val() != "0" && debitcard == "0") {
                            jquery_1_11_3_min_p("#mandatedebit").css('display', 'none');
                            jquery_1_11_3_min_p("#DEBITTick").css('display', 'none');
                            jquery_1_11_3_min_p("#DEBITCross").css('display', 'block');
                            if (jquery_1_11_3_min_p('#ContentPlaceHolder1_txtcheckflag').val() == "1") { } else {
                                jquery_1_11_3_min_p("#debitnetbank").css('display', 'block');
                            }
                        } else if (jquery_1_11_3_min_p('#ContentPlaceHolder1_txtdebitlive').val() != "0" && debitcard != "0") {
                            jquery_1_11_3_min_p("#mandatedebit").css('display', 'inline-block');
                            jquery_1_11_3_min_p("#DEBITTick").css('display', 'block');
                            jquery_1_11_3_min_p("#DEBITCross").css('display', 'none');
                            jquery_1_11_3_min_p('#ContentPlaceHolder1_txtcheckflag').val(1);
                            jquery_1_11_3_min_p('input:radio[name="rbnetbanking"]').filter('[value="D"]').prop('disabled', false);
                            livedebit = 1;

                            jquery_1_11_3_min_p("#debitnetbank").css('display', 'block');

                            jquery_1_11_3_min_p("#debitbankingshow").css('display', 'block');
                        }

                        if (jquery_1_11_3_min_p('#ContentPlaceHolder1_txtaadharlive').val() == "0" && aadharcard != "0") {
                            jquery_1_11_3_min_p("#mandateaadhar").css('display', 'inline-block');
                            jquery_1_11_3_min_p("#AdharTick").css('display', 'none');
                            jquery_1_11_3_min_p("#AdharCross").css('display', 'block');
                            jquery_1_11_3_min_p("#aadharbankingshow").css('display', 'block');
                            jquery_1_11_3_min_p('input:radio[name="rbnetbanking"]').filter('[value="A"]').prop('checked', false);
                            jquery_1_11_3_min_p('input:radio[name="rbnetbanking"]').filter('[value="A"]').prop('disabled', true);
                            if (jquery_1_11_3_min_p('#ContentPlaceHolder1_txtcheckflag').val() == "1") { } else {
                                jquery_1_11_3_min_p("#debitnetbank").css('display', 'block');
                            }
                            jquery_1_11_3_min_p("#aadharbankingshow").css('display', 'none');
                        } else if (jquery_1_11_3_min_p('#ContentPlaceHolder1_txtaadharlive').val() != "0" && aadharcard == "0") {
                            jquery_1_11_3_min_p("#mandateaadhar").css('display', 'none');
                            jquery_1_11_3_min_p("#AdharTick").css('display', 'none');
                            jquery_1_11_3_min_p("#AdharCross").css('display', 'block');
                            if (jquery_1_11_3_min_p('#ContentPlaceHolder1_txtcheckflag').val() == "1") { } else {
                                jquery_1_11_3_min_p("#debitnetbank").css('display', 'block');
                            }
                            jquery_1_11_3_min_p("#aadharbankingshow").css('display', 'none');
                        } else if (jquery_1_11_3_min_p('#ContentPlaceHolder1_txtaadharlive').val() != "0" && aadharcard != "0") {
                            jquery_1_11_3_min_p("#mandateaadhar").css('display', 'inline-block');
                            jquery_1_11_3_min_p("#AdharTick").css('display', 'block');
                            jquery_1_11_3_min_p("#AdharCross").css('display', 'none');
                            jquery_1_11_3_min_p('#ContentPlaceHolder1_txtcheckflag').val(1);
                            jquery_1_11_3_min_p('input:radio[name="rbnetbanking"]').filter('[value="A"]').prop('disabled', false);
                            liveaadhar = 1;

                            jquery_1_11_3_min_p("#debitnetbank").css('display', 'block');
                            jquery_1_11_3_min_p("#aadharbankingshow").css('display', 'block');
                        }
                        if (livenetbanking == "0" && liveaadhar == "0" && livedebit == "0") {
                            jquery_1_12_1("#UnSuccess").dialog("close");
                            jquery_1_11_3_min_p("#btnSecVal").attr('disabled', true);
                            netbankingdebit();
                        }
                        if (livenetbanking != "0" && livedebit != "0" && liveaadhar != "0") {

                            jquery_1_11_3_min_p('input:radio[name="rbnetbanking"]').filter('[value="N"]').prop('checked', true);
                            jquery_1_11_3_min_p('input:radio[name="rbnetbanking"]').filter('[value="D"]').prop('checked', false);
                            jquery_1_11_3_min_p('input:radio[name="rbnetbanking"]').filter('[value="A"]').prop('checked', false);


                        } else if (livenetbanking == "0" && livedebit != "0" && liveaadhar != "0") {

                            jquery_1_11_3_min_p('input:radio[name="rbnetbanking"]').filter('[value="N"]').prop('checked', false);
                            jquery_1_11_3_min_p('input:radio[name="rbnetbanking"]').filter('[value="D"]').prop('checked', true);
                            jquery_1_11_3_min_p('input:radio[name="rbnetbanking"]').filter('[value="A"]').prop('checked', false);

                        } else if (livenetbanking == "0" && livedebit == "0" && liveaadhar != "0") {

                            jquery_1_11_3_min_p('input:radio[name="rbnetbanking"]').filter('[value="N"]').prop('checked', false);
                            jquery_1_11_3_min_p('input:radio[name="rbnetbanking"]').filter('[value="D"]').prop('checked', false);
                            jquery_1_11_3_min_p('input:radio[name="rbnetbanking"]').filter('[value="A"]').prop('checked', true);

                        }

                        if (livenetbanking != "0" && livedebit == "0" && liveaadhar != "0") {

                            jquery_1_11_3_min_p('input:radio[name="rbnetbanking"]').filter('[value="N"]').prop('checked', true);
                            jquery_1_11_3_min_p('input:radio[name="rbnetbanking"]').filter('[value="D"]').prop('checked', false);
                            jquery_1_11_3_min_p('input:radio[name="rbnetbanking"]').filter('[value="A"]').prop('checked', false);

                        }

                        if (livenetbanking != "0" && livedebit != "0" && liveaadhar == "0") {

                            jquery_1_11_3_min_p('input:radio[name="rbnetbanking"]').filter('[value="N"]').prop('checked', true);
                            jquery_1_11_3_min_p('input:radio[name="rbnetbanking"]').filter('[value="D"]').prop('checked', false);
                            jquery_1_11_3_min_p('input:radio[name="rbnetbanking"]').filter('[value="A"]').prop('checked', false);

                        } else if (livenetbanking != "0" && livedebit == "0" && liveaadhar == "0") {

                            jquery_1_11_3_min_p('input:radio[name="rbnetbanking"]').filter('[value="N"]').prop('checked', true);
                            jquery_1_11_3_min_p('input:radio[name="rbnetbanking"]').filter('[value="D"]').prop('checked', false);
                            jquery_1_11_3_min_p('input:radio[name="rbnetbanking"]').filter('[value="A"]').prop('checked', false);


                        } else if (livenetbanking == "0" && livedebit != "0" && liveaadhar == "0") {

                            jquery_1_11_3_min_p('input:radio[name="rbnetbanking"]').filter('[value="N"]').prop('checked', false);
                            jquery_1_11_3_min_p('input:radio[name="rbnetbanking"]').filter('[value="D"]').prop('checked', true);
                            jquery_1_11_3_min_p('input:radio[name="rbnetbanking"]').filter('[value="A"]').prop('checked', false);


                        } else if (livenetbanking == "0" && livedebit == "0" && liveaadhar != "0") {

                            jquery_1_11_3_min_p('input:radio[name="rbnetbanking"]').filter('[value="N"]').prop('checked', false);
                            jquery_1_11_3_min_p('input:radio[name="rbnetbanking"]').filter('[value="D"]').prop('checked', false);
                            jquery_1_11_3_min_p('input:radio[name="rbnetbanking"]').filter('[value="A"]').prop('checked', true);


                        }
                    } else if (accountvalidation == "1" && isecondval == "1") {
                        if (jquery_1_11_3_min_p('#ContentPlaceHolder1_txtnetbankinglive').val() == "0" && netbanking != "0") {
                            jquery_1_11_3_min_p("#mandatenetbank").css('display', 'inline-block');
                            jquery_1_11_3_min_p("#NetBTick").css('display', 'none');
                            jquery_1_11_3_min_p("#NetBCross").css('display', 'block');
                            jquery_1_11_3_min_p("#netbankingshow").css('display', 'block');
                            jquery_1_11_3_min_p('input:radio[name="rbnetbanking"]').filter('[value="N"]').prop('checked', false);
                            jquery_1_11_3_min_p('input:radio[name="rbnetbanking"]').filter('[value="N"]').attr('disabled', true);
                            if (jquery_1_11_3_min_p('#ContentPlaceHolder1_txtcheckflag').val() == "1") { } else {
                                jquery_1_11_3_min_p("#debitnetbank").css('display', 'block');
                            }
                        } else if (jquery_1_11_3_min_p('#ContentPlaceHolder1_txtnetbankinglive').val() != "0" && netbanking == "0") {
                            jquery_1_11_3_min_p("#mandatenetbank").css('display', 'none');
                            jquery_1_11_3_min_p("#NetBTick").css('display', 'none');
                            jquery_1_11_3_min_p("#NetBCross").css('display', 'block');
                            if (jquery_1_11_3_min_p('#ContentPlaceHolder1_txtcheckflag').val() == "1") { } else {
                                jquery_1_11_3_min_p("#debitnetbank").css('display', 'block');
                            }
                        } else if (jquery_1_11_3_min_p('#ContentPlaceHolder1_txtnetbankinglive').val() != "0" && netbanking != "0") {
                            jquery_1_11_3_min_p("#mandatenetbank").css('display', 'inline-block');
                            jquery_1_11_3_min_p("#NetBTick").css('display', 'block');
                            jquery_1_11_3_min_p("#NetBCross").css('display', 'none');
                            jquery_1_11_3_min_p("#netbankingshow").css('display', 'block');
                            jquery_1_11_3_min_p('input:radio[name="rbnetbanking"]').filter('[value="N"]').attr('disabled', false);
                            jquery_1_11_3_min_p('#ContentPlaceHolder1_txtcheckflag').val(1);
                            livenetbanking = 1;

                            jquery_1_11_3_min_p("#debitnetbank").css('display', 'block');


                        }
                        if (jquery_1_11_3_min_p('#ContentPlaceHolder1_txtdebitlive').val() == "0" && debitcard != "0") {
                            jquery_1_11_3_min_p("#mandatedebit").css('display', 'inline-block');
                            jquery_1_11_3_min_p("#DEBITTick").css('display', 'none');
                            jquery_1_11_3_min_p("#DEBITCross").css('display', 'block');
                            jquery_1_11_3_min_p("#debitbankingshow").css('display', 'block');
                            jquery_1_11_3_min_p('input:radio[name="rbnetbanking"]').filter('[value="D"]').prop('checked', false);
                            jquery_1_11_3_min_p('input:radio[name="rbnetbanking"]').filter('[value="D"]').prop('disabled', true);
                            if (jquery_1_11_3_min_p('#ContentPlaceHolder1_txtcheckflag').val() == "1") { } else {
                                jquery_1_11_3_min_p("#debitnetbank").css('display', 'block');
                            }
                        } else if (jquery_1_11_3_min_p('#ContentPlaceHolder1_txtdebitlive').val() != "0" && debitcard == "0") {
                            jquery_1_11_3_min_p("#mandatedebit").css('display', 'none');
                            jquery_1_11_3_min_p("#DEBITTick").css('display', 'none');
                            jquery_1_11_3_min_p("#DEBITCross").css('display', 'block');
                            if (jquery_1_11_3_min_p('#ContentPlaceHolder1_txtcheckflag').val() == "1") { } else {
                                jquery_1_11_3_min_p("#debitnetbank").css('display', 'block');
                            }
                        } else if (jquery_1_11_3_min_p('#ContentPlaceHolder1_txtdebitlive').val() != "0" && debitcard != "0") {
                            jquery_1_11_3_min_p("#mandatedebit").css('display', 'inline-block');
                            jquery_1_11_3_min_p("#DEBITTick").css('display', 'block');
                            jquery_1_11_3_min_p("#DEBITCross").css('display', 'none');
                            jquery_1_11_3_min_p('input:radio[name="rbnetbanking"]').filter('[value="D"]').prop('disabled', false);
                            jquery_1_11_3_min_p('#ContentPlaceHolder1_txtcheckflag').val(1);
                            livedebit = 1;

                            jquery_1_11_3_min_p("#debitnetbank").css('display', 'block');

                            jquery_1_11_3_min_p("#debitbankingshow").css('display', 'block');
                        }

                        if (jquery_1_11_3_min_p('#ContentPlaceHolder1_txtaadharlive').val() == "0" && aadharcard != "0") {
                            jquery_1_11_3_min_p("#mandateaadhar").css('display', 'inline-block');
                            jquery_1_11_3_min_p("#AdharTick").css('display', 'none');
                            jquery_1_11_3_min_p("#AdharCross").css('display', 'block');
                            jquery_1_11_3_min_p("#aadharbankingshow").css('display', 'block');
                            jquery_1_11_3_min_p('input:radio[name="rbnetbanking"]').filter('[value="A"]').prop('checked', false);
                            jquery_1_11_3_min_p('input:radio[name="rbnetbanking"]').filter('[value="A"]').prop('disabled', true);
                            if (jquery_1_11_3_min_p('#ContentPlaceHolder1_txtcheckflag').val() == "1") { } else {
                                jquery_1_11_3_min_p("#debitnetbank").css('display', 'block');
                            }
                            jquery_1_11_3_min_p("#aadharbankingshow").css('display', 'none');
                        } else if (jquery_1_11_3_min_p('#ContentPlaceHolder1_txtaadharlive').val() != "0" && aadharcard == "0") {
                            jquery_1_11_3_min_p("#mandateaadhar").css('display', 'none');
                            jquery_1_11_3_min_p("#AdharTick").css('display', 'none');
                            jquery_1_11_3_min_p("#AdharCross").css('display', 'block');
                            if (jquery_1_11_3_min_p('#ContentPlaceHolder1_txtcheckflag').val() == "1") { } else {
                                jquery_1_11_3_min_p("#debitnetbank").css('display', 'block');
                            }
                            jquery_1_11_3_min_p("#aadharbankingshow").css('display', 'none');
                        } else if (jquery_1_11_3_min_p('#ContentPlaceHolder1_txtaadharlive').val() != "0" && aadharcard != "0") {
                            jquery_1_11_3_min_p("#mandateaadhar").css('display', 'inline-block');
                            jquery_1_11_3_min_p("#AdharTick").css('display', 'block');
                            jquery_1_11_3_min_p("#AdharCross").css('display', 'none');
                            jquery_1_11_3_min_p('#ContentPlaceHolder1_txtcheckflag').val(1);
                            jquery_1_11_3_min_p('input:radio[name="rbnetbanking"]').filter('[value="A"]').prop('disabled', false);
                            liveaadhar = 1;

                            jquery_1_11_3_min_p("#debitnetbank").css('display', 'block');
                            jquery_1_11_3_min_p("#aadharbankingshow").css('display', 'block');
                        }

                        if (livenetbanking == "0" && liveaadhar == "0" && livedebit == "0") {
                            jquery_1_12_1("#UnSuccess").dialog("close");
                            jquery_1_11_3_min_p("#btnSecVal").attr('disabled', true);
                            netbankingdebit();
                        }
                        if (livenetbanking != "0" && livedebit != "0" && liveaadhar != "0") {

                            jquery_1_11_3_min_p('input:radio[name="rbnetbanking"]').filter('[value="N"]').prop('checked', true);
                            jquery_1_11_3_min_p('input:radio[name="rbnetbanking"]').filter('[value="D"]').prop('checked', false);
                            jquery_1_11_3_min_p('input:radio[name="rbnetbanking"]').filter('[value="A"]').prop('checked', false);


                        } else if (livenetbanking == "0" && livedebit != "0" && liveaadhar != "0") {

                            jquery_1_11_3_min_p('input:radio[name="rbnetbanking"]').filter('[value="N"]').prop('checked', false);
                            jquery_1_11_3_min_p('input:radio[name="rbnetbanking"]').filter('[value="D"]').prop('checked', true);
                            jquery_1_11_3_min_p('input:radio[name="rbnetbanking"]').filter('[value="A"]').prop('checked', false);

                        } else if (livenetbanking == "0" && livedebit == "0" && liveaadhar != "0") {

                            jquery_1_11_3_min_p('input:radio[name="rbnetbanking"]').filter('[value="N"]').prop('checked', false);
                            jquery_1_11_3_min_p('input:radio[name="rbnetbanking"]').filter('[value="D"]').prop('checked', false);
                            jquery_1_11_3_min_p('input:radio[name="rbnetbanking"]').filter('[value="A"]').prop('checked', true);

                        }

                        if (livenetbanking != "0" && livedebit == "0" && liveaadhar != "0") {

                            jquery_1_11_3_min_p('input:radio[name="rbnetbanking"]').filter('[value="N"]').prop('checked', true);
                            jquery_1_11_3_min_p('input:radio[name="rbnetbanking"]').filter('[value="D"]').prop('checked', false);
                            jquery_1_11_3_min_p('input:radio[name="rbnetbanking"]').filter('[value="A"]').prop('checked', false);

                        }

                        if (livenetbanking != "0" && livedebit != "0" && liveaadhar == "0") {

                            jquery_1_11_3_min_p('input:radio[name="rbnetbanking"]').filter('[value="N"]').prop('checked', true);
                            jquery_1_11_3_min_p('input:radio[name="rbnetbanking"]').filter('[value="D"]').prop('checked', false);
                            jquery_1_11_3_min_p('input:radio[name="rbnetbanking"]').filter('[value="A"]').prop('checked', false);

                        } else if (livenetbanking != "0" && livedebit == "0" && liveaadhar == "0") {

                            jquery_1_11_3_min_p('input:radio[name="rbnetbanking"]').filter('[value="N"]').prop('checked', true);
                            jquery_1_11_3_min_p('input:radio[name="rbnetbanking"]').filter('[value="D"]').prop('checked', false);
                            jquery_1_11_3_min_p('input:radio[name="rbnetbanking"]').filter('[value="A"]').prop('checked', false);


                        } else if (livenetbanking == "0" && livedebit != "0" && liveaadhar == "0") {

                            jquery_1_11_3_min_p('input:radio[name="rbnetbanking"]').filter('[value="N"]').prop('checked', false);
                            jquery_1_11_3_min_p('input:radio[name="rbnetbanking"]').filter('[value="D"]').prop('checked', true);
                            jquery_1_11_3_min_p('input:radio[name="rbnetbanking"]').filter('[value="A"]').prop('checked', false);


                        } else if (livenetbanking == "0" && livedebit == "0" && liveaadhar != "0") {

                            jquery_1_11_3_min_p('input:radio[name="rbnetbanking"]').filter('[value="N"]').prop('checked', false);
                            jquery_1_11_3_min_p('input:radio[name="rbnetbanking"]').filter('[value="D"]').prop('checked', false);
                            jquery_1_11_3_min_p('input:radio[name="rbnetbanking"]').filter('[value="A"]').prop('checked', true);


                        }

                    }


                } else if (isphysical == "true") {
                    jquery_1_11_3_min_p("#debitnetbank").css('display', 'none');
                    jquery_1_11_3_min_p("#mandatedebit").css('display', 'none');
                    jquery_1_11_3_min_p("#mandatenetbank").css('display', 'none');
                    jquery_1_11_3_min_p("#mandateaadhar").css('display', 'none');
                    jquery_1_11_3_min_p("#ContentPlaceHolder1_btnEemandate").css('display', 'none');

                }

            } else {
                jquery_1_11_3_min_p("#debitnetbank").css('display', 'none');
                jquery_1_11_3_min_p("#mandatedebit").css('display', 'none');
                jquery_1_11_3_min_p("#mandatenetbank").css('display', 'none');
                jquery_1_11_3_min_p("#mandateaadhar").css('display', 'none');
            }

        }
    });
}


function CheckUserCreatable(_Check) {


    var MandateID = _Check.toString();
    var UserID = jquery_1_11_3_min_p('#ContentPlaceHolder1_lblUserid').text();
    jquery_1_11_3_min_p.ajax({
        type: "POST",
        contentType: "application/json; charset=utf-8",
        url: "BankForm.aspx/CheckUserCreatable",
        //  data: "{'UserID':'" +UserID +"','MandateID':'"+_Check+"'}",
        data: JSON.stringify({
            UserID: UserID, MandateID: MandateID
        }),
        dataType: "json",
        success: function (AllResultData) {

            var jsonData = eval(AllResultData.d.Table);
            if (jsonData.length > 0) {
                if (jsonData[0].IsRead == true) {
                    jquery_1_11_3_min_p("#btnSave").css('display', 'none');
                    jquery_1_11_3_min_p("#btnNew").css('display', 'none');
                    jquery_1_11_3_min_p("#btnEdit").css('display', 'none');
                    jquery_1_11_3_min_p("#btnMandatePrint").attr('disabled', true);
                    //   jquery_1_11_3_min_p("#btnCancel").css('display', 'none');
                    jquery_1_11_3_min_p("#btnBack").css('display', 'block');

                    jquery_1_11_3_min_p("#btnFirstVal").css('display', 'none');
                    jquery_1_11_3_min_p("#btnSecVal").css('display', 'none');
                    jquery_1_11_3_min_p("#btnEditDisable").css('display', 'none');
                    jquery_1_11_3_min_p("#btnPhysicalMandate").css('display', 'none');
                    jquery_1_11_3_min_p("#btnEemandate").css('display', 'none');
                }

                if (jsonData[0].IsCreate == true) {
                    if (_Check == 0) {
                        jquery_1_11_3_min_p("#btnSave").css('display', 'block');
                        jquery_1_11_3_min_p("#btnBack").css('display', 'block');
                    }
                    else {
                        jquery_1_11_3_min_p("#btnSave").css('display', 'none');
                    }
                    jquery_1_11_3_min_p("#btnNew").css('display', 'block');
                    jquery_1_11_3_min_p("#btnEdit").css('display', 'none');
                    jquery_1_11_3_min_p("#btnBack").css('display', 'block');
                }
            }

            if (jsonData[0].IsCreate != true && jsonData[0].IsRead != true) {
                jquery_1_11_3_min_p("#btnSave").css('display', 'none');
                jquery_1_11_3_min_p("#btnNew").css('display', 'none');
                jquery_1_11_3_min_p("#btnEdit").css('display', 'none');
                jquery_1_11_3_min_p("#btnMandatePrint").attr('disabled', true);
                //  jquery_1_11_3_min_p("#btnCancel").css('display', 'none');
                jquery_1_11_3_min_p("#btnBack").css('display', 'none');

                jquery_1_11_3_min_p("#btnFirstVal").css('display', 'none');
                jquery_1_11_3_min_p("#btnSecVal").css('display', 'none');
                jquery_1_11_3_min_p("#btnEditDisable").css('display', 'none');
                jquery_1_11_3_min_p("#btnPhysicalMandate").css('display', 'none');
                jquery_1_11_3_min_p("#btnEemandate").css('display', 'none');
            }

        }
    });
}



function CheckPhysicalEmandate() {
    jquery_1_11_3_min_p.ajax({
        type: "POST",
        contentType: "application/json; charset=utf-8",
        url: "../WebServices/BankForm.asmx/CheckNetBanking",
        data: "{'entityid':'" + jquery_1_11_3_min_p('#ContentPlaceHolder1_lblEntityId').text() + "','MandateId':''}",
        dataType: "json",
        // async: false,
        success: function (AllResultData) {
            var jsonData = eval(AllResultData.d.Table);
            if (jsonData.length > 0) {
                var physical = "";
                var Emandate = "";
                var IsAccountvalidation = "";
                if (jsonData[0].Physical == true) {
                    physical = 1;
                } else {
                    physical = 0;
                }
                if (jsonData[0].Emandate == true) {
                    Emandate = 1;
                } else {
                    Emandate = 0;
                }
                if (jsonData[0].IsAccountvalidation == true) {
                    IsAccountvalidation = 1;
                } else {
                    IsAccountvalidation = 0;
                }
                if (jsonData[0].Customeremailid == true) {
                    jquery_1_11_3_min_p('#ContentPlaceHolder1_txtcheckemailval').val(1)
                } else {
                    jquery_1_11_3_min_p('#ContentPlaceHolder1_txtcheckemailval').val(0)
                }
                if (jsonData[0].Customerphnumber == true) {
                    jquery_1_11_3_min_p('#ContentPlaceHolder1_txtcheckphoneval').val(1)
                } else {
                    jquery_1_11_3_min_p('#ContentPlaceHolder1_txtcheckphoneval').val(0)
                }

                if (physical != "0" && Emandate != "0") {
                    jquery_1_11_3_min_p('#ContentPlaceHolder1_txtentitymandatephysical').val(1);
                    jquery_1_11_3_min_p('#ContentPlaceHolder1_txtentitymandateemandate').val(1);
                }
                if (physical == "0" && Emandate != "0") {
                    jquery_1_11_3_min_p('#ContentPlaceHolder1_txtentitymandatephysical').val(0);
                    jquery_1_11_3_min_p('#ContentPlaceHolder1_txtentitymandateemandate').val(1);
                }
                if (physical != "0" && Emandate == "0") {
                    jquery_1_11_3_min_p('#ContentPlaceHolder1_txtentitymandatephysical').val(1);
                    jquery_1_11_3_min_p('#ContentPlaceHolder1_txtentitymandateemandate').val(0);
                }

                if (IsAccountvalidation == "0") {
                    jquery_1_11_3_min_p('#ContentPlaceHolder1_txtentityaccountvalidationflag').val(0);
                } else {
                    jquery_1_11_3_min_p('#ContentPlaceHolder1_txtentityaccountvalidationflag').val(1);
                }

            }
        }

    });
}



function DateMandatoryESign() {
    jquery_1_12_1("#MsgDiv").dialog("close");
    jquery_1_12_1("#DateMandatoryESign").dialog({
        resizable: false,
        dialogClass: "DivSaveSucc1",
        height: "auto",
        width: jquery_1_12_1(window).width() > 600 ? '40%' : '300',
        modal: true

    });
}

function reject() {
    jquery_1_12_1("#reject").dialog({
        resizable: false,
        dialogClass: "DivSaveSucc1",
        height: "auto",
        width: jquery_1_12_1(window).width() > 600 ? '40%' : '300',
        modal: true
    });
}

function guidelines() {
    jquery_1_12_1("#guidelines").dialog({
        resizable: false,
        dialogClass: "DivSaveSucc1",
        height: "auto",
        width: jquery_1_12_1(window).width() > 600 ? '30%' : '300',
        modal: true
    });
}



function DisbaleUpperControl() {
    jquery_1_11_3_min_p("#btnScanHalf").attr('disabled', false);
    jquery_1_11_3_min_p("#btnScan").attr('disabled', false);
    jquery_1_11_3_min_p("#btnMandatePrint").attr('disabled', false);
    jquery_1_11_3_min_p("#btnOldOverPrintMandate").css('display', 'none');
    jquery_1_11_3_min_p("#btnBlankMandateprint").attr('disabled', false);
    jquery_1_11_3_min_p("#btnScanPrint").attr('disabled', false);
    jquery_1_11_3_min_p("#ContentPlaceHolder1_btnEemandate").attr('disabled', false);
    jquery_1_11_3_min_p("#btnPhysicalMandate").attr('disabled', false);
    //           jquery_1_11_3_min_p("#btnEditDisable").attr('disabled', true);
    //            jquery_1_11_3_min_p("#btnFirstVal").attr('disabled', true);
    //            jquery_1_11_3_min_p("#btnSecVal").attr('disabled', true);
    jquery_1_12_1("#reject").dialog("close");
}
// function closePopup(obj) {
//               // alert(786);
//                jquery_1_12_1("#printForm").dialog("close");

//            }

//function NACHUnSuccess() {
//    jquery_1_12_1("#NACHUnSuccess").dialog({
//        resizable: false,
//        dialogClass: "DivSaveSucc1",
//        height: "auto",
//        width: jquery_1_12_1(window).width() > 600 ? '28%' : '300',
//        modal: true,
//        buttons: {
//            "Ok": function () {

//                jquery_1_12_1(this).dialog("close");

//            }

//        }
//    });
//}
function Success() {
    jquery_1_12_1("#Success").dialog({
        resizable: false,
        dialogClass: "DivSaveSucc1",
        height: "auto",
        width: jquery_1_12_1(window).width() > 600 ? '28%' : '300',
        modal: true,
        buttons: {
            "OK": function () {

                jquery_1_12_1(this).dialog("close");

            }

        }
    });
}

//function AccValidate() {
//    jquery_1_12_1("#AccValidate").dialog({
//        resizable: false,
//        dialogClass: "DivSaveSucc1",
//        height: "auto",
//        width: jquery_1_12_1(window).width() > 600 ? '28%' : '300',
//        modal: true,
//        buttons: {
//            "Ok": function () {

//                jquery_1_12_1(this).dialog("close");

//            },
//            "Print": function () {

//                //jquery_1_12_1(this).dialog("close");

//            }

//        }
//    });
//}

function ScanForm() {
    jquery_1_12_1("#ScanForm").dialog({
        resizable: false,
        dialogClass: "DivSaveSucc1",
        height: "auto",
        width: jquery_1_12_1(window).width() > 600 ? '90%' : '300',
        modal: true

    });
}



function printForm() {
    jquery_1_12_1("#printForm").dialog({
        resizable: false,
        dialogClass: "DivSaveSucc1",
        height: 310,
        width: jquery_1_12_1(window).width() > 600 ? '42%' : '300',
        modal: true
        //        buttons: {
        //            "Ok": function () {

        //                jquery_1_12_1(this).dialog("close");

        //            }

        //        }
    });
}

function Isfirstvalidation() {
    var UserId = jquery_1_11_3_min_p('#ContentPlaceHolder1_lblUserid').html();
    jquery_1_11_3_min_p.ajax({
        type: "POST",
        contentType: "application/json; charset=utf-8",
        url: "../WebServices/BankForm.asmx/UpdateFirstVal",
        data: "{'mandateId':'" + jquery_1_11_3_min_p('#lblmandateId').text() + "','UserId':'" + UserId + "'}",
        dataType: "json",
        async: false,
        success: function (result) {

        }
    })
}

function enachvalidate() {
    jquery_1_11_3_min_p("#ContentPlaceHolder1_Iframe2").attr("src", "ValidateENACH.aspx?id=" + jquery_1_11_3_min_p('#lblmandateId').text() + "");

    jquery_1_12_1("#enachvalidate").dialog({
        resizable: false,
        dialogClass: "DivSaveSucc1",
        height: "auto",
        width: jquery_1_12_1(window).width() > 600 ? '35%' : '130',
        modal: true
        //        buttons: {
        //            "Ok": function () {

        //                jquery_1_12_1(this).dialog("close");

        //            }

        //        }
    });
}




function scanImage() {
    var mandateId = jquery_1_11_3_min_p('#lblmandateId').text();
    if (mandateId != "") {
        jquery_1_11_3_min_p.ajax({
            type: "POST",
            contentType: "application/json; charset=utf-8",

            url: "../WebServices/BankForm.asmx/EditMehtod",
            data: "{'mandateId':'" + mandateId + "'}",
            dataType: "json",
            success: function (result) {
                var i = 0;
                var jsonData = eval(result.d.Table);

                if (jsonData[i].IsPrint == 'YES') {

                    jquery_1_11_3_min_p("#btnScanHalf").css('display', 'none');
                    jquery_1_11_3_min_p("#btnScan").css('display', 'block');
                    jquery_1_11_3_min_p("#btnMandatePrint").css('display', 'block');
                    if (jquery_1_11_3_min_p('#ContentPlaceHolder1_lblOverMandate').html().toUpperCase() == "TRUE") {
                        jquery_1_11_3_min_p("#btnOldOverPrintMandate").css('display', 'block');
                        jquery_1_11_3_min_p("#btnBlankMandateprint").css('display', 'block');
                    } else {
                        jquery_1_11_3_min_p("#btnOldOverPrintMandate").css('display', 'none');
                        jquery_1_11_3_min_p("#btnBlankMandateprint").css('display', 'none');
                    }

                } else {
                    jquery_1_11_3_min_p("#btnOldOverPrintMandate").css('display', 'none');
                    jquery_1_11_3_min_p("#btnMandatePrint").css('display', 'none');
                    jquery_1_11_3_min_p("#btnBlankMandateprint").css('display', 'none');
                }

                if (jsonData[i].IsScan == 'YES') {
                    jquery_1_11_3_min_p("#btnScanPrint").css('display', 'block');
                    jquery_1_11_3_min_p("#imgscanImage").attr('src', jsonData[i].jpgpath + "?" + new Date().getTime());

                } else {
                    jquery_1_11_3_min_p("#btnScanPrint").css('display', 'none');

                }


                BindGrid(result.d.Table1)//



            },
            error: function (result) {

            }
        });
    }



    jquery_1_12_1("#scanImage").dialog({
        resizable: false,
        dialogClass: "DivSaveSucc1",
        height: "auto",
        width: jquery_1_12_1(window).width() > 600 ? '55%' : '300',
        modal: true
        //        buttons: {
        //            "Ok": function () {

        //                jquery_1_12_1(this).dialog("close");

        //            }

        //        }
    });
}




//function printForm(){
//    jquery_1_12_1("#printForm").dialog({
//        resizable: false,
//        dialogClass: "DivSaveSucc1",
//        height: "auto",
//        width: jquery_1_12_1(window).width() > 600 ? '35%' : '300',
//        modal: true,
//        buttons: {
//            "Ok": function () {

//                jquery_1_12_1(this).dialog("close");

//            }

//        }
//    });
//}

function BindGrid(result) {
    var wh = jquery_1_11_3_min_p(document).height();
    var gh1 = wh - 280;
    var data = [];
    var i = 0;
    var jsonData = eval(result);


    jQuery.each(jsonData, function (rec) {
        data.push({
            MandateId: jsonData[i].MandateId,
            Description: jsonData[i].Description,
            Status: jsonData[i].Status,
            Date: jsonData[i].Date,
            Time: jsonData[i].Time
        });
        i++;

    });



    kendo_all_min_js("#grd1").kendoGrid({
        toolbar: ["excel"],
        excel: {
            fileName: "Mandate.xlsx",
            filterable: true,
            allPages: true
        },
        dataSource: {
            data: data,
            schema: {

                model: {
                    id: "MandateId",
                    fields: {
                        MandateId: {
                            type: "numeric"
                        },
                        Description: {
                            type: "string"
                        },
                        Status: {
                            type: "string"
                        },
                        Date: {
                            type: "string"
                        },
                        Time: {
                            type: "string"
                        },
                        CreatedOn: {
                            type: "string"
                        }

                    }
                }

            },
            //  pageSize: 10

        },
        selectable: "single",
        height: 550,
        scrollable: true,
        //  pageNumber: 1,
        sortable: true,
        reorderable: true,
        resizable: true,
        groupable: false,
        filterable: true,

        dataBound: function (e) {
            var grid = this;
            var i = 0;
            grid.tbody.find('tr').each(function () {
                var row = jquery_1_11_3_min_p(this);
                if (data[i]["Status"] == 'Success') {
                    row.find("#DivStatus").append('<span class="" style="color: #07884d;"><i class="fa fa-check-square-o"></i>Success</span>');
                }
                if (data[i]["Status"] == 'UnSuccess') {
                    row.find("#DivStatus").append('  <span class="" style="color: #bf3524;"><i class="fa fa-times-circle-o"></i>UnSuccess</span>');
                }
                i++;
            });
        },
        pageable: false,
        columns: [{
            hidden: true,
            field: "MandateId",
            width: "10% "
        },
        {
            field: "Description",
            title: "Description",
            width: "50%"
        },
        {
            template: "<div id='DivStatus'></div>",

            title: "Transaction Status",
            width: "50%"
        },
        {
            field: "Date",
            title: "Date",
            width: "15%"
        },
        {
            field: "Time",
            title: "Time",
            width: "15%"
        }

        ]
    });
    kendo_all_min_js(".k-grid-content").css('max-height', gh1);
}



function Validation() {

    var flag = 0;
    if (jquery_1_11_3_min_p('#DivModeType').css('display') == 'block') {
        if (jquery_1_11_3_min_p('input:radio[name=rdoMandate]:checked').val() == 'None') {
            jquery_1_11_3_min_p('#DivModeType').addClass('validate');
            flag = 1;
        }
    }
    //      if(jquery_1_11_3_min_p('input:radio[name=rdoMandatetype]:checked').val()=='N')
    //         {  jquery_1_11_3_min_p('#DivMandateType').addClass('validate');
    //             flag = 1;
    //         }
    if (jquery_1_11_3_min_p('#txtIFSC').val() == '' && jquery_1_11_3_min_p('#txtMICR').val() == '') {
        jquery_1_11_3_min_p('#txtIFSC').addClass('validate');
        jquery_1_11_3_min_p('#txtMICR').addClass('validate');
        jquery_1_11_3_min_p('#txtIFSC').attr("placeholder", "required");
        jquery_1_11_3_min_p('#txtMICR').attr("placeholder", "required");
        flag = 1;
    }
    if (jquery_1_11_3_min_p('#txtperiodfrom').val() == '') {
        jquery_1_11_3_min_p('#txtperiodfrom').addClass('validate');
        flag = 1;
    }

    if (jquery_1_11_3_min_p('#txtAcNo').val() == '') {
        jquery_1_11_3_min_p('#txtAcNo').addClass('validate');
        flag = 1;
    }
    if (jquery_1_11_3_min_p('#txtRefrence1').val() == '') {
        jquery_1_11_3_min_p('#txtRefrence1').addClass('validate');
        flag = 1;
    }


    if (jquery_1_11_3_min_p('#txtFrom').val() == '') {
        jquery_1_11_3_min_p('#txtFrom').addClass('validate');
        flag = 1;
    }

    if (kendo_all_min_js("#txtBankName").data("kendoDropDownList").value() == '0') {

        kendo_all_min_js("#txtBankName").data("kendoDropDownList").span.css('background', ' #f9e5e5');
        flag = 1;
    }
    if (kendo_all_min_js("#ddlCategory").data("kendoDropDownList").value() == '0') {
        kendo_all_min_js("#ddlCategory").data("kendoDropDownList").span.css({ "background": "#f9e5e5", "border": "1px solid red" });
        flag = 1;
    }

    if (jquery_1_11_3_min_p('#txtAmountRupees').val() == '') {
        jquery_1_11_3_min_p('#txtAmountRupees').addClass('validate');
        flag = 1;
    }


    if (jquery_1_11_3_min_p('#txtCust1').val() == '') {
        jquery_1_11_3_min_p('#txtCust1').addClass('validate');
        flag = 1;
    }


    //    if (jquery_1_11_3_min_p('#ContentPlaceHolder1_txtcheckemailval').val() == "1" && jquery_1_11_3_min_p('#ContentPlaceHolder1_txtcheckphoneval').val() == "1") {
    //        if (jquery_1_11_3_min_p('#txtPhNumber').val() == '' && jquery_1_11_3_min_p('#txtEmailId').val() == '') {
    //            jquery_1_11_3_min_p('#txtPhNumber').addClass('validate');
    //            jquery_1_11_3_min_p('#txtEmailId').addClass('validate');
    //            flag = 1;
    //        }
    //    }
    //    if (jquery_1_11_3_min_p('#ContentPlaceHolder1_txtcheckemailval').val() == "1" && jquery_1_11_3_min_p('#ContentPlaceHolder1_txtcheckphoneval').val() == "0") {
    //        if (jquery_1_11_3_min_p('#txtEmailId').val() == '') {

    //            jquery_1_11_3_min_p('#txtEmailId').addClass('validate');
    //            flag = 1;
    //        }
    //    }
    //    if (jquery_1_11_3_min_p('#ContentPlaceHolder1_txtcheckemailval').val() == "0" && jquery_1_11_3_min_p('#ContentPlaceHolder1_txtcheckphoneval').val() == "1") {
    //        if (jquery_1_11_3_min_p('#txtPhNumber').val() == '') {
    //            jquery_1_11_3_min_p('#txtPhNumber').addClass('validate');
    //            flag = 1;
    //        }
    //    }

    /*Avinash*/
    var txtfrom = jquery_1_11_3_min_p('#txtFrom').val().split('-');
    txtfrom = txtfrom[1] + '-' + txtfrom[0] + '-' + txtfrom[2];
    var txtTo = jquery_1_11_3_min_p('#txtTo').val().split('-');
    txtTo = txtTo[1] + '-' + txtTo[0] + '-' + txtTo[2];
    var _datetxtFrom = new Date(txtfrom)
    var _datetxtTo = new Date(txtTo) //txtFrom //txtTo
    if (_datetxtFrom > _datetxtTo) {
        jquery_1_11_3_min_p('#txtTo').val("");
        jquery_1_11_3_min_p('#txtTo').addClass('validate');
        flag = 1;

    }
    /**/



    if (flag == 1) {

        return false;
    } else {
        return true;
    }
}



function RemoveClass() {

    if (jquery_1_11_3_min_p('input:radio[name=rdoMandate]:checked').val() != 'None') {
        jquery_1_11_3_min_p('#DivModeType').removeClass('validate');

    }
    //  if(jquery_1_11_3_min_p('input:radio[name=rdoMandatetype]:checked').val()!='N')
    // {
    //    jquery_1_11_3_min_p('#DivMandateType').removeClass('validate');
    //  
    // }
    if (jquery_1_11_3_min_p('#txtTo2') != undefined) {
        if (jquery_1_11_3_min_p('#txtTo2').val() != '') {

            jquery_1_11_3_min_p('#txtTo2').removeClass('validate');
        }
    }

    if (kendo_all_min_js("#txtBankName").data("kendoDropDownList") != '0') {

        kendo_all_min_js("#txtBankName").data("kendoDropDownList").span.css('background', 'transparent');

    }
    if (jquery_1_11_3_min_p('#txtCust1').val() != '') {
        jquery_1_11_3_min_p('#txtCust1').removeClass('validate');
    }


    if (jquery_1_11_3_min_p('#txtAcNo').val() != '') {
        jquery_1_11_3_min_p('#txtAcNo').removeClass('validate');
        flag = 1;
    }

    if (jquery_1_11_3_min_p('#txtMICR').val() != '') {
        jquery_1_11_3_min_p('#txtMICR').removeClass('validate');
        jquery_1_11_3_min_p('#txtIFSC').removeClass('validate');
    }

    if (jquery_1_11_3_min_p('#txtIFSC').val() != '') {
        jquery_1_11_3_min_p('#txtMICR').removeClass('validate');
        jquery_1_11_3_min_p('#txtIFSC').removeClass('validate');
    }

    if (jquery_1_11_3_min_p('#txtAmountRupees').val() != '') {
        jquery_1_11_3_min_p('#txtAmountRupees').removeClass('validate');
    }

    if (jquery_1_11_3_min_p('#txtperiodfrom').val() != '') {
        jquery_1_11_3_min_p('#txtperiodfrom').removeClass('validate');

    }
    if (jquery_1_11_3_min_p('#txtRefrence1').val() != '') {
        jquery_1_11_3_min_p('#txtRefrence1').removeClass('validate');

    }


    if (jquery_1_11_3_min_p('#txtFrom').val() != '') {
        jquery_1_11_3_min_p('#txtFrom').removeClass('validate');

    }

    if (jquery_1_11_3_min_p('#txtTo').val() != '') {
        jquery_1_11_3_min_p('#txtTo').removeClass('validate');

    }


    if (jquery_1_11_3_min_p('#txtPhNumber').val() != '') {
        jquery_1_11_3_min_p('#txtPhNumber').removeClass('validate');
        //   jquery_1_11_3_min_p('#txtEmailId').removeClass('validate');

    }

    if (jquery_1_11_3_min_p('#txtEmailId').val() != '') {
        // jquery_1_11_3_min_p('#txtPhNumber').removeClass('validate');
        jquery_1_11_3_min_p('#txtEmailId').removeClass('validate');

    }
    if (jquery_1_11_3_min_p('#txtmobileemandate').val() != '') {
        // jquery_1_11_3_min_p('#txtPhNumber').removeClass('validate');
        jquery_1_11_3_min_p('#txtmobileemandate').removeClass('validate');
        jquery_1_11_3_min_p("#lblemailwarn").css('display', 'none');

    }
    if (jquery_1_11_3_min_p('#txtemailemandate').val() != '') {
        // jquery_1_11_3_min_p('#txtPhNumber').removeClass('validate');
        jquery_1_11_3_min_p('#txtemailemandate').removeClass('validate');
        jquery_1_11_3_min_p("#lblemailwarn").css('display', 'none');
    }


}


function BindGrd(data) {
    jquery_1_11_3_min_p('#grd div').remove();
    var wh = jquery_1_11_3_min_p(document).height();

    var ww = jquery_1_11_3_min_p(document).width();

    var gh = wh - 177;
    var UserId = jquery_1_11_3_min_p('#ContentPlaceHolder1_lblUserid').html();
    var dataCompny = [];
    jquery_1_11_3_min_p.ajax({
        type: "POST",
        contentType: "application/json; charset=utf-8",
        url: "../WebServices/BankForm.asmx/BindGrid",
        data: JSON.stringify({
            UserId: UserId
        }),
        dataType: "json",
        async: true,
        success: function (result) {


            var i = 0;
            var jsonData = eval(result.d);


            jQuery.each(jsonData.Table, function (rec) {
                dataCompny.push({
                    MandateFreshId: jsonData.Table[i].MandateFreshId,
                    mandateMode: jsonData.Table[i].mandateMode,
                    AutoRejectReason: jsonData.Table[i].AutoRejectReason,
                    AcceptRefNo: jsonData.Table[i].AcceptRefNo,
                    updatedon: jsonData.Table[i].updatedon,
                    UpdateBy: jsonData.Table[i].UpdateBy,
                    username: jsonData.Table[i].username,
                    Enach: jsonData.Table[i].Enach,
                    IsMobileData: jsonData.Table[i].IsMobileData,
                    RejectedReason: jsonData.Table[i].RejectedReason,
                    REJECTED: jsonData.Table[i].REJECTED,
                    IsLiveInNACH: jsonData.Table[i].IsLiveInNACH,
                    CreatedOn: jsonData.Table[i].CreatedOn,
                    Srno: jsonData.Table[i].Srno,
                    IsScan: jsonData.Table[i].IsScan,
                    IsPrint: jsonData.Table[i].IsPrint,
                    DateOnMandate: jsonData.Table[i].DateOnMandate,
                    ToDebit: jsonData.Table[i].ToDebit,
                    BankName: jsonData.Table[i].BankName,
                    Code: jsonData.Table[i].Code,
                    Frequency: jsonData.Table[i].Frequency,
                    status: jsonData.Table[i].status,
                    Customer1: jsonData.Table[i].Customer1,
                    debittype: jsonData.Table[i].debittype,
                    AcNo: jsonData.Table[i].AcNo,
                    mandateid: jsonData.Table[i].mandateid,
                    Refrence1: jsonData.Table[i].Refrence1,
                    FromDate: jsonData.Table[i].FromDate,
                    Customer1: jsonData.Table[i].Customer1,
                    Amount: jsonData.Table[i].Amount,
                    AmountRupees: jsonData.Table[i].AmountRupees,
                    EmailId: jsonData.Table[i].EmailId,
                    SponsorBankCode: jsonData.Table[i].SponsorBankCode,
                    UtilityCode: jsonData.Table[i].UtilityCode,
                    PhoneNumber: jsonData.Table[i].PhoneNumber,
                    NPCIErrorDesc: jsonData.Table[i].NPCIErrorDesc
                    , NPCIMsgId: jsonData.Table[i].NPCIMsgId, MSGId: jsonData.Table[i].MSGId, UMRN: jsonData.Table[i].UMRN
                    , AggregatorValue: jsonData.Table[i].AggregatorValue
                    , Amount_Numeric: jsonData.Table[i].Amount_Numeric
                    , SendToBankDate: jsonData.Table[i].SendToBankDate
                });
                i++;


            });

            kendo_all_min_js("#grd").kendoGrid({
                toolbar: ["excel"],
                excel: {
                    fileName: "Mandate.xlsx",
                    filterable: true,
                    allPages: true
                },

                dataSource: {
                    data: dataCompny,
                    schema: {

                        model: {
                            id: "mandateid",
                            fields: {

                                Srno: {
                                    type: "string"
                                },
                                mandateid: {
                                    type: "numeric"
                                },
                                BankName: {
                                    type: "string"
                                },
                                status: {
                                    type: "string"
                                },
                                Amount: {
                                    type: "string"
                                },
                                AcNo: {
                                    type: "string"
                                },
                                FromDate: {
                                    type: "string"
                                },
                                DateOnMandate: {
                                    type: "string"
                                },
                                Code: {
                                    type: "string"
                                },
                                Refrence1: {
                                    type: "string"
                                },
                                FromDate: {
                                    type: "string"
                                },
                                Customer1: {
                                    type: "string"
                                },
                                debittype: {
                                    type: "string"
                                },
                                Frequency: {
                                    type: "string"
                                },
                                ToDebit: {
                                    type: "string"
                                },
                                IsPrint: {
                                    type: "string"
                                },
                                IsScan: {
                                    type: "string"
                                },
                                IsLiveInNACH: {
                                    type: "string"
                                },
                                CreatedOn: {
                                    type: "string"
                                },
                                AmountRupees: {
                                    type: "string"
                                },
                                EmailId: {
                                    type: "string"
                                },
                                SponsorBankCode: {
                                    type: "string"
                                },
                                UtilityCode: {
                                    type: "string"
                                },
                                PhoneNumber: {
                                    type: "string"
                                },
                                AcceptRefNo: {
                                    type: "string"
                                },
                                NPCIErrorDesc: {
                                    type: "string"
                                }, NPCIMsgId: {
                                    type: "string"
                                }, MSGId: {
                                    type: "string"
                                }, UMRN: {
                                    type: "string"
                                },
                                AggregatorValue: {
                                    type: "string"
                                },
                                Amount_Numeric: {
                                    type: "string"
                                },
                                SendToBankDate: {
                                    type: "string"
                                }

                            }
                        }

                    },
                    //  pageSize: 10

                },
                selectable: "single",
                height: 550,
                scrollable: true,
                //  pageNumber: 1,
                sortable: true,
                reorderable: true,
                resizable: true,
                groupable: false,
                filterable: true,
                dataBound: function (e) {
                    var grid = this;

                    grid.tbody.find("tr").dblclick(function (e) {
                        jquery_1_11_3_min_p('#txtRefrence1').attr('disabled', true);
                        jquery_1_11_3_min_p(".overlay").css('visibility', 'visible');
                        jquery_1_11_3_min_p("#preloader_1").css('display', 'block');
                        var dataItem = grid.dataItem(this);
                        var mandateid = dataItem.mandateid;

                        jquery_1_11_3_min_p('#ContentPlaceHolder1_lblMandateShowid').text(dataItem.MandateFreshId);
                        jquery_1_11_3_min_p('#ContentPlaceHolder1_lblSmandateId').val(mandateid);
                        jquery_1_11_3_min_p('#lblmandateId').html(mandateid);
                        jquery_1_11_3_min_p("#btnBack").attr('disabled', false);
                        jquery_1_11_3_min_p("#btnEdit").attr('disabled', true);
                        jquery_1_11_3_min_p("#btnDelete").attr('disabled', true);
                        jquery_1_11_3_min_p("#btnSave").attr('disabled', false);
                        jquery_1_11_3_min_p('input:radio[name="rdoMandatetype"]').filter('[value="P"]').prop('disabled', true);
                        jquery_1_11_3_min_p('input:radio[name="rdoMandatetype"]').filter('[value="E"]').prop('disabled', true);
                        jquery_1_11_3_min_p("#btnNew").attr('disabled', true);

                        //                       if(dataItem.IsLiveInNACH=='false')
                        //                       {
                        Edit();
                        //CheckPhysicalEmandate();
                        jquery_1_11_3_min_p("#divform").css('display', 'block');
                        jquery_1_11_3_min_p("#grd").css('display', 'none');
                        //  Checknetbanking();

                        //                       }
                        //-------------------------------------------------------------------------calling edit function from binding function


                        jquery_1_11_3_min_p(".overlay").css('visibility', 'hidden');
                        jquery_1_11_3_min_p("#preloader_1").css('display', 'none');
                        CheckUserCreatable(mandateid);
                    });

                    //                    grid.tbody.find("tr").click(function(e) {
                    //                        var dataItem = grid.dataItem(this);
                    //                        var mandateid = dataItem.mandateid;
                    //                        jquery_1_11_3_min_p('#lblmandateId').html(mandateid);
                    //                        jquery_1_11_3_min_p('#ContentPlaceHolder1_lblSmandateId').val(mandateid);
                    //                        jquery_1_11_3_min_p("#btnNew").attr('disabled', false);
                    //                        jquery_1_11_3_min_p("#btnEdit").attr('disabled', false);
                    //                        jquery_1_11_3_min_p("#btnSave").attr('disabled', true);

                    //                        jquery_1_11_3_min_p("#btnDelete").attr('disabled', false);
                    //                         //CheckUserCreatable(mandateid);
                    //                    });
                },
                pageable: false,
                columns: [{
                    hidden: true,
                    field: "mandateid",
                    width: "100px"
                },

                //                    { field: "Srno", title: "S.No.", width: "135px", reorderable: false, filterable: false },
                //                     {
                //                           template: "<div id='DivStatus'></div>",

                //                           title: "Mandate Status",
                //                           width: "150px"
                //                       },
                {
                    field: "status",
                    title: "Mandate Status",
                    width: "120px"
                },
                //                         {
                //                           template: "<div id='DivREJECTED'></div>",

                //                           title: "HO Acceptance",
                //                           width: "150px"
                //                       },


                {
                    field: "MandateFreshId",
                    title: "Mandate ID",
                    width: "100px"
                },
                {
                    field: "Refrence1",
                    title: "Reference 1",
                    width: "100px"
                },
                {
                    field: "AcceptRefNo",
                    title: "Accept Reference Number",
                    width: "170px"
                },
                {
                    field: "NPCIMsgId",
                    title: "NPCI Msg Id",
                    width: "140px"
                },
                {
                    field: "MSGId",
                    title: "MSG Id",
                    width: "200px"
                },
                {
                    field: "UMRN",
                    title: "UMRN",
                    width: "200px"
                },
                {
                    field: "AggregatorValue",
                    title: "Aggregator",
                    width: "200px"
                },
                {
                    field: "mandateMode",
                    title: "Mandate Mode",
                    width: "130px"
                }, {
                    field: "AutoRejectReason",
                    title: "Auto Rejected Reason",
                    width: "150px"
                },

                {
                    field: "REJECTED",
                    title: "HO Acceptance",
                    width: "115px"
                },
                {
                    field: "RejectedReason",
                    title: "Rejection Reason",
                    width: "125px"
                },
                {
                    field: "IsMobileData",
                    title: "Uploaded From",
                    width: "115px"
                },
                {
                    field: "Enach",
                    title: "Mandate Type",
                    width: "110px"
                },
                {
                    field: "Customer1",
                    title: "Acc. Holder Name",
                    width: "135px"
                },

                {
                    field: "DateOnMandate",
                    title: "Date on Mandate",
                    width: "130px"
                },
                {
                    field: "FromDate",
                    title: "EMI Start Date",
                    width: "130px"
                },
                {
                    field: "IsPrint",
                    title: "Mandate Printed",
                    width: "130px"
                },
                {
                    field: "IsScan",
                    title: "Mandate Scan",
                    width: "110px"
                },
                {
                    field: "Amount_Numeric",
                    title: "Amount",
                    width: "100px"
                },
                {
                    field: "Amount",
                    title: "Amount(In Words)",
                    width: "220px"
                },
                {
                    field: "AcNo",
                    title: "Account No.",
                    width: "140px"
                },
                {
                    field: "Code",
                    title: "IFSC/MICR",
                    width: "100px"
                },
                {
                    field: "BankName",
                    title: "Bank Name",
                    width: "180px"
                },
                {
                    field: "Frequency",
                    title: "Frequency",
                    width: "135px"
                },
                {
                    field: "debittype",
                    title: "Debit Type",
                    width: "110px"
                },
                {
                    field: "ToDebit",
                    title: "Debit To",
                    width: "90px"
                },
                {
                    field: "SponsorBankCode",
                    title: "Sponsor Bank Code",
                    width: "100px"
                },
                {
                    field: "username",
                    title: "Created By",
                    width: "145px"
                },
                {
                    field: "CreatedOn",
                    title: "Created On",
                    width: "140px"
                },
                {
                    field: "UpdateBy",
                    title: "Last Activity By",
                    width: "140px"
                },
                {
                    field: "updatedon",
                    title: "Last Activity On",
                    width: "140px"
                },
                {
                    field: "SendToBankDate",
                    title: "Initiated To Bank",
                    width: "120px"
                },

                {
                    field: "NPCIErrorDesc",
                    title: "Error Description",
                    width: "200px"
                }

                ]
            });
            kendo_all_min_js(".k-grid-content").css('max-height', gh);
            if (data == 11) {
                jquery_1_11_3_min_p('#preloader_1').hide();
                jquery_1_11_3_min_p("#grd").css('display', 'block');
            } else {
                jquery_1_11_3_min_p('#preloader_1').hide();
                jquery_1_11_3_min_p("#divform").css('display', 'block');
            }

        },
        beforeSend: function () {
            if (data == 11) {
                jquery_1_11_3_min_p("#grd").css('display', 'none');

                jquery_1_11_3_min_p("#divform").css('display', 'none');
                jquery_1_11_3_min_p('#preloader_1').show();
            } else {
                jquery_1_11_3_min_p("#grd").css('display', 'none');

                jquery_1_11_3_min_p("#divform").css('display', 'none');
                jquery_1_11_3_min_p('#preloader_1').show();
            }




        },
        error: function (result) {

        }
    });
    //     kendo_all_min_js("#grd").kendoTooltip({
    //    filter: "td",
    //   content: function(e) {return e.target.html();

    //    
    //    },
    //      show: function(e){
    //        if(this.content.text() !=""){
    //           jquery_1_11_3_min_p('[role="tooltip"]').css("visibility", "visible");
    //        }

    //      },
    //      hide: function(){
    //        jquery_1_11_3_min_p('[role="tooltip"]').css("visibility", "hidden");
    //      }
    //    }).data("kendoTooltip");
}

function EnableAllControl() {
    jquery_1_11_3_min_p("#chkUntil").removeClass('divDisable');
    jquery_1_11_3_min_p("#btnPhysicalMandate").css('display', 'none');
    jquery_1_11_3_min_p("#ContentPlaceHolder1_btnEemandate").css('display', 'none');
    jquery_1_11_3_min_p("#btnSecVal").attr('disabled', true);
    jquery_1_11_3_min_p("#btnFirstVal").attr('disabled', true);
    jquery_1_11_3_min_p('#txtMICR').attr('disabled', false);
    jquery_1_11_3_min_p('#btnSave').attr('disabled', false);
    jquery_1_11_3_min_p('#txtAcNo').attr('disabled', false);
    jquery_1_11_3_min_p('#txtCust1').attr('disabled', false);
    jquery_1_11_3_min_p("#txtCust2").attr('disabled', false);
    jquery_1_11_3_min_p('#txtCust2').attr('disabled', false);
    jquery_1_11_3_min_p('input:radio[name="rdoMandate"]').attr('disabled', false);
    if (jquery_1_11_3_min_p('#txtCust2').val() == '') {
        jquery_1_11_3_min_p("#txtCust3").attr('disabled', true);
    } else {
        jquery_1_11_3_min_p("#txtCust3").attr('disabled', false);
    }

    jquery_1_11_3_min_p('#txtCust3').attr('disabled', false);



    jquery_1_11_3_min_p('#txtIFSC').attr('disabled', false);
    jquery_1_11_3_min_p('#txtMICR').attr('disabled', false);

    //            if(jsonData[i].IFSC==""){
    //               jquery_1_11_3_min_p('#txtIFSC').attr('disabled',true);
    //            }

    //              if(jsonData[i].MICR==""){
    //               jquery_1_11_3_min_p('#txtMICR').attr('disabled',true);
    //            }


    jquery_1_11_3_min_p('#txtRefrence1').attr('disabled', true);

    jquery_1_11_3_min_p('#txtRefrence2').attr('disabled', false);

    jquery_1_11_3_min_p('#txtAmountRupees').attr('disabled', false);

    kendo_all_min_js("#txtBankName").data("kendoDropDownList").enable(true);
    kendo_all_min_js("#txtSponsorCode").data("kendoDropDownList").enable(true);
    kendo_all_min_js("#ddlCategory").data("kendoDropDownList").enable(true);
    //               kendo_all_min_js("#txtutilityCode").attr('disabled', true);

    jquery_1_11_3_min_p('input:radio[name="rdoMandatetype"]').filter('[value="P"]').prop('disabled', false);
    jquery_1_11_3_min_p('input:radio[name="rdoMandatetype"]').filter('[value="E"]').prop('disabled', false);

    jquery_1_11_3_min_p('#txtperiodfrom').attr('disabled', false);

    jquery_1_11_3_min_p('#txtFrom').attr('disabled', false);

    jquery_1_11_3_min_p('#txtEmailId').attr('disabled', false);

    jquery_1_11_3_min_p('#txtPhNumber').attr('disabled', false);

    jquery_1_11_3_min_p('#txtTo').attr('disabled', false);

    //          if (jquery_1_11_3_min_p('#txtTo').val() == '') {
    //           jquery_1_11_3_min_p("#chkUntil").prop("checked", true);
    //              jquery_1_11_3_min_p("#chkUntil").attr('disabled', false);
    //              jquery_1_11_3_min_p("#txtTo").attr('disabled', true);

    //            } else {
    //            jquery_1_11_3_min_p("#chkUntil").prop("checked", false);
    //              
    //                jquery_1_11_3_min_p("#txtTo").attr('disabled', false);
    //            }


    //            jquery_1_11_3_min_p('input:radio[name="rdoNomFrequency"]').attr('disabled', false);
    //             jquery_1_11_3_min_p('input:radio[name="rdoNomGender"]').attr('disabled', false);
    jquery_1_11_3_min_p("#debitto").removeClass('divDisable');
    jquery_1_11_3_min_p("#frequency").removeClass('divDisable');
    jquery_1_11_3_min_p("#debittype").removeClass('divDisable');

}

function Edit() {

    jquery_1_11_3_min_p(".overlay").css('visibility', 'visible');
    jquery_1_11_3_min_p("#preloader_1").css('display', 'block');
    jquery_1_11_3_min_p('#txtAcNo').focus();
    //            jquery_1_11_3_min_p("#btnSave")["0"].value='Update';
    jquery_1_11_3_min_p("#btnSave").css('display', 'none');
    jquery_1_11_3_min_p("#btnEditDisable").css('display', 'block');
    jquery_1_11_3_min_p("#btnBack").css('display', 'block');
    jquery_1_11_3_min_p("#btnBack").attr('disabled', false);
    jquery_1_11_3_min_p("#btnEditDisable").attr('disabled', false);

    var mandateId = jquery_1_11_3_min_p('#lblmandateId').text();
    if (mandateId != "") {
        jquery_1_11_3_min_p.ajax({
            type: "POST",
            contentType: "application/json; charset=utf-8",
            url: "../WebServices/BankForm.asmx/EditMehtod",
            data: "{'mandateId':'" + mandateId + "'}",
            dataType: "json",
            success: function (result) {

                jquery_1_11_3_min_p('#ContentPlaceHolder1_lblmandatemsg').text('');
                var i = 0;
                var jsonData = eval(result.d.Table4);


                if (jsonData.length > 0) {
                    jquery_1_11_3_min_p('#LiRegistrationFund').css('display', 'block');
                } else {
                    jquery_1_11_3_min_p('#LiRegistrationFund').css('display', 'none');
                }

                var i = 0;
                var jsonData = eval(result.d.Table);

                var Mandatetype = jsonData[i].isphysical;
                var Mandateetype = jsonData[i].enach;
                jquery_1_11_3_min_p('#ContentPlaceHolder1_txtphysical').val(Mandatetype);
                jquery_1_11_3_min_p('#ContentPlaceHolder1_txtemandate').val(Mandateetype);
                jquery_1_11_3_min_p('#ContentPlaceHolder1_lblmandatecheckdata').val(jsonData[i].EncryptMandateId);

                if (Mandatetype && !jsonData[0].isAccountValidation && jsonData[0].status != "Saved") {
                    jquery_1_11_3_min_p("#btnScan").css('display', 'block');
                }
                else if (Mandatetype && jsonData[0].isAccountValidation && jsonData[0].status != "Saved" && jsonData[0].status != "Bank Validated") {
                    jquery_1_11_3_min_p("#btnScan").css('display', 'block');
                }
                else {
                    jquery_1_11_3_min_p("#btnScan").css('display', 'none');
                }
                if (jsonData[i].MandateMode != null) {
                    var MandateMode = jsonData[i].MandateMode.trim();
                    if (MandateMode == 'E') {
                        jquery_1_11_3_min_p('input:radio[name="rdoMandate"]').filter('[value="E"]').prop('checked', true);
                    }
                    else if (MandateMode == 'N') {
                        jquery_1_11_3_min_p('input:radio[name="rdoMandate"]').filter('[value="N"]').prop('checked', true);
                    }
                    else if (MandateMode == 'F') {
                        jquery_1_11_3_min_p('input:radio[name="rdoMandate"]').filter('[value="F"]').prop('checked', true);
                    }
                }

                jquery_1_11_3_min_p('input:radio[name="rdoMandate"]').attr('disabled', true);
                jquery_1_11_3_min_p('#ContentPlaceHolder1_lblBankValidationAdminCount').html(jsonData[i].BankValidationAdminCount);
                jquery_1_11_3_min_p('#ContentPlaceHolder1_lblBankValidationUserCount').html(jsonData[i].BankValidationUserCount);
                jquery_1_11_3_min_p('#ContentPlaceHolder1_lblAcValidationAdminCount').html(jsonData[i].AcValidationAdminCount);
                jquery_1_11_3_min_p('#ContentPlaceHolder1_lblAcValidationUserCount').html(jsonData[i].AcValidationUserCount);


                if (jsonData[i].xmlpath != '') {

                    jquery_1_11_3_min_p("#btnEditDisable").attr('disabled', true);
                    jquery_1_11_3_min_p("#btnFirstVal").attr('disabled', true);
                    jquery_1_11_3_min_p("#btnSecVal").attr('disabled', true);

                    //             jquery_1_11_3_min_p("#ContentPlaceHolder1_AResponse").attr('href', '../MandateFile/SignedXml/'+jsonData[i].MandateId+'/'+jsonData[i].xmlpath+'');

                    jquery_1_11_3_min_p("#ContentPlaceHolder1_AResponse").attr('href', '..' + jsonData[i].xmlpath + '');
                    //  jquery_1_11_3_min_p("#ARequset").attr('href', '../MandateXml/'+jsonData[i].MandateId+'/Request.xml');
                    jquery_1_11_3_min_p("#ContentPlaceHolder1_AResponse").attr('download', '' + jsonData[i].Refrence1 + '.xml');
                    //  jquery_1_11_3_min_p("#ARequset").attr('download', 'Request.xml');
                    //             jquery_1_11_3_min_p("#ARequset").css('display', 'block');
                    jquery_1_11_3_min_p("#ContentPlaceHolder1_AResponse").css('display', 'none');
                } else {
                    //             jquery_1_11_3_min_p("#ARequset").css('display', 'none');
                    jquery_1_11_3_min_p("#ContentPlaceHolder1_AResponse").css('display', 'none');



                    //              if(jsonData[i].IsPrint=='YES')
                    //            {
                    jquery_1_11_3_min_p("#btnScanHalf").css('display', 'none');
                    // jquery_1_11_3_min_p("#btnScan").css('display', 'block');
                    // jquery_1_11_3_min_p("#btnMandatePrint").css('display', 'block');
                    if (jquery_1_11_3_min_p('#ContentPlaceHolder1_lblOverMandate').html().toUpperCase() == "TRUE") {
                        jquery_1_11_3_min_p("#btnOldOverPrintMandate").css('display', 'block');
                        jquery_1_11_3_min_p("#btnBlankMandateprint").css('display', 'block');
                    } else {
                        jquery_1_11_3_min_p("#btnOldOverPrintMandate").css('display', 'none');
                        jquery_1_11_3_min_p("#btnBlankMandateprint").css('display', 'none');
                    }
                    //               }else{
                    //               jquery_1_11_3_min_p("#btnMandatePrint").css('display', 'none');
                    //                 jquery_1_11_3_min_p("#btnBlankMandateprint").css('display', 'none');
                    //               }

                    if (jsonData[i].IsScan == 'YES') {
                        jquery_1_11_3_min_p("#btnScanPrint").css('display', 'block');
                        jquery_1_11_3_min_p("#imgscanImage").attr('src', jsonData[i].jpgpath + "?" + new Date().getTime());

                    } else {
                        jquery_1_11_3_min_p("#btnScanPrint").css('display', 'none');

                    }
                }
                if (jsonData[i].IsFirstValidation == 1) {
                    if (jquery_1_11_3_min_p('#ContentPlaceHolder1_txtentityaccountvalidationflag').val() == "0") {
                        jquery_1_11_3_min_p("#btnFirstVal").css('display', 'block');
                        jquery_1_11_3_min_p("#btnFirstVal").attr('disabled', true);
                        jquery_1_11_3_min_p("#btnSecVal").css('display', 'block');
                        jquery_1_11_3_min_p("#btnSecVal").attr('disabled', true);
                        if (jquery_1_11_3_min_p('#ContentPlaceHolder1_txtentitymandateemandate').val() == "1") {
                            if (Mandateetype == true) {
                                jquery_1_11_3_min_p("#ContentPlaceHolder1_btnEemandate").css('display', 'block');
                            }
                        } else {
                            jquery_1_11_3_min_p("#ContentPlaceHolder1_btnEemandate").css('display', 'none');
                        }

                        if (jquery_1_11_3_min_p('#ContentPlaceHolder1_txtentitymandatephysical').val() == "1") {
                            if (Mandatetype == true) {
                                jquery_1_11_3_min_p("#btnPhysicalMandate").css('display', 'block');
                                jquery_1_11_3_min_p("#btnMandatePrint").css('display', 'block');//Avinash:
                            }
                        } else {
                            jquery_1_11_3_min_p("#btnPhysicalMandate").css('display', 'none');
                            jquery_1_11_3_min_p("#btnMandatePrint").css('display', 'none');//Avinash:
                        }


                    } else if (jquery_1_11_3_min_p('#ContentPlaceHolder1_txtentityaccountvalidationflag').val() == "1") {
                        jquery_1_11_3_min_p("#btnFirstVal").css('display', 'block');
                        jquery_1_11_3_min_p("#btnFirstVal").attr('disabled', true);
                        jquery_1_11_3_min_p("#btnSecVal").css('display', 'block');
                        jquery_1_11_3_min_p("#btnSecVal").attr('disabled', false);
                    }

                } else {
                    //         if(jquery_1_11_3_min_p('#ContentPlaceHolder1_lblIsValidationCountEnable').html()==1)
                    //                  {
                    //                     jquery_1_11_3_min_p("#btnSecVal").css('display', 'block');
                    //              jquery_1_11_3_min_p("#btnSecVal").attr('disabled', false);
                    //                  }else{
                    //                   
                    //                  }
                    jquery_1_11_3_min_p("#btnFirstVal").css('display', 'block');
                    jquery_1_11_3_min_p("#btnFirstVal").attr('disabled', false);
                }

                if (jsonData[i].IsSecondValidation == 1) {

                    jquery_1_11_3_min_p("#btnSecVal").css('display', 'block');
                    //              if(jquery_1_11_3_min_p('#ContentPlaceHolder1_lblIsValidationCountEnable').html()==1)
                    //                  {
                    //             jquery_1_11_3_min_p("#btnSecVal").attr('disabled', false);

                    //             }else{
                    //                 if (jquery_1_11_3_min_p('input:radio[name=rdoMandatetype]:checked').val() == 'P') {
                    //                 jquery_1_11_3_min_p("#btnSecVal").attr('disabled', true);
                    //                 }

                    //                  else  if (jquery_1_11_3_min_p('input:radio[name=rdoMandatetype]:checked').val() == 'E') {
                    //                 jquery_1_11_3_min_p("#btnSecVal").attr('disabled', true);
                    //                 }
                    jquery_1_11_3_min_p("#btnSecVal").attr('disabled', true);
                    //             }

                    if (jsonData[i].IsSecondValidation == 0) {
                        if (jquery_1_11_3_min_p('#ContentPlaceHolder1_txtentityaccountvalidationflag').val() == "0") {
                            if (jquery_1_11_3_min_p('#ContentPlaceHolder1_txtentitymandateemandate').val() == "1") {
                                if (Mandateetype == true) {
                                    jquery_1_11_3_min_p("#ContentPlaceHolder1_btnEemandate").css('display', 'block');
                                }
                            } else {
                                jquery_1_11_3_min_p("#ContentPlaceHolder1_btnEemandate").css('display', 'none');
                            }

                            if (jquery_1_11_3_min_p('#ContentPlaceHolder1_txtentitymandatephysical').val() == "1") {
                                if (Mandatetype == true) {
                                    jquery_1_11_3_min_p("#btnPhysicalMandate").css('display', 'block');
                                    jquery_1_11_3_min_p("#btnMandatePrint").css('display', 'block');//Avinash:
                                }
                            } else {
                                jquery_1_11_3_min_p("#btnPhysicalMandate").css('display', 'none');
                                jquery_1_11_3_min_p("#btnMandatePrint").css('display', 'none');//Avinash:
                            }


                        } else if (jquery_1_11_3_min_p('#ContentPlaceHolder1_txtentityaccountvalidationflag').val() == "1") {
                            jquery_1_11_3_min_p("#ContentPlaceHolder1_btnEemandate").css('display', 'none');
                            jquery_1_11_3_min_p("#btnPhysicalMandate").css('display', 'none');
                        }

                    }

                    if (jsonData[i].IsNachLive == 1) {
                        if (jquery_1_11_3_min_p('#ContentPlaceHolder1_lblIsPhysicalMandate').html().toUpperCase() == "TRUE") {
                            if (jquery_1_11_3_min_p('#ContentPlaceHolder1_txtentitymandatephysical').val() == true) {
                                jquery_1_11_3_min_p("#btnPhysicalMandate").css('display', 'block');
                                jquery_1_11_3_min_p("#btnPhysicalMandate").attr('disabled', false);
                            } else {
                                jquery_1_11_3_min_p("#btnPhysicalMandate").css('display', 'none');
                                jquery_1_11_3_min_p("#btnPhysicalMandate").attr('disabled', true);
                            }


                        } else {
                            jquery_1_11_3_min_p("#btnPhysicalMandate").css('display', 'none');
                            jquery_1_11_3_min_p("#ContentPlaceHolder1_btnEemandate").css('display', 'none');

                        }
                        if (jquery_1_11_3_min_p('#ContentPlaceHolder1_lblIsEMandate').html().toUpperCase() == "TRUE") {
                            if (jquery_1_11_3_min_p('#ContentPlaceHolder1_txtentitymandateemandate').val() == "1") {
                                jquery_1_11_3_min_p("#ContentPlaceHolder1_btnEemandate").css('display', 'block');
                                jquery_1_11_3_min_p("#ContentPlaceHolder1_btnEemandate").attr('disabled', false);
                            } else {
                                jquery_1_11_3_min_p("#ContentPlaceHolder1_btnEemandate").css('display', 'none');
                                jquery_1_11_3_min_p("#ContentPlaceHolder1_btnEemandate").attr('disabled', true);
                            }


                        } else {
                            jquery_1_11_3_min_p("#btnPhysicalMandate").css('display', 'none');
                            jquery_1_11_3_min_p("#ContentPlaceHolder1_btnEemandate").css('display', 'none');

                        }



                    } else {
                        if (jquery_1_11_3_min_p('#ContentPlaceHolder1_txtentityaccountvalidationflag').val() == "0") {
                            if (jquery_1_11_3_min_p('#ContentPlaceHolder1_txtentitymandateemandate').val() == "1") {
                                if (Mandateetype == true) {
                                    jquery_1_11_3_min_p("#ContentPlaceHolder1_btnEemandate").css('display', 'block');
                                }
                            } else {
                                jquery_1_11_3_min_p("#ContentPlaceHolder1_btnEemandate").css('display', 'none');
                            }

                            if (jquery_1_11_3_min_p('#ContentPlaceHolder1_txtentitymandatephysical').val() == "1") {
                                if (Mandatetype == true) {
                                    jquery_1_11_3_min_p("#btnPhysicalMandate").css('display', 'block');
                                    jquery_1_11_3_min_p("#btnMandatePrint").css('display', 'block');//Avinash:

                                }
                            } else {
                                jquery_1_11_3_min_p("#btnPhysicalMandate").css('display', 'none');
                                jquery_1_11_3_min_p("#btnMandatePrint").css('display', 'none');//Avinash:
                            }
                        } else {
                            jquery_1_11_3_min_p("#btnPhysicalMandate").css('display', 'none');
                            jquery_1_11_3_min_p("#ContentPlaceHolder1_btnEemandate").css('display', 'none');
                        }

                    }
                }
                if (jquery_1_11_3_min_p('#ContentPlaceHolder1_lblIsMandateEdit').text().toUpperCase() == "FALSE") {
                    //                  if(jquery_1_11_3_min_p('#ContentPlaceHolder1_lblIsValidationCountEnable').html()==1)
                    //                  {
                    //                    jquery_1_11_3_min_p("#btnFirstVal").attr('disabled', false);
                    //                      jquery_1_11_3_min_p("#btnSecVal").attr('disabled', false);
                    //                  }else{
                    jquery_1_11_3_min_p("#btnFirstVal").attr('disabled', true);
                    jquery_1_11_3_min_p("#btnSecVal").attr('disabled', true);
                    //                   if (jquery_1_11_3_min_p('input:radio[name=rdoMandatetype]:checked').val() == 'P') {
                    //                 jquery_1_11_3_min_p("#btnSecVal").attr('disabled', true);
                    //                 }

                    //                 else  if (jquery_1_11_3_min_p('input:radio[name=rdoMandatetype]:checked').val() == 'E') {
                    //                 jquery_1_11_3_min_p("#btnSecVal").attr('disabled', true);
                    //                 }
                    //                  }
                }

                jquery_1_11_3_min_p('#txtAcNo').val(jsonData[i].AcNo);
                jquery_1_11_3_min_p('#txtCust1').val(jsonData[i].Customer1);
                jquery_1_11_3_min_p("#txtCust2").attr('disabled', false);
                jquery_1_11_3_min_p('#txtCust2').val(jsonData[i].Customer2);
                if (jquery_1_11_3_min_p('#txtCust2').val() == '') {
                    jquery_1_11_3_min_p("#txtCust3").attr('disabled', true);
                } else {
                    jquery_1_11_3_min_p("#txtCust3").attr('disabled', false);
                }

                jquery_1_11_3_min_p('#txtCust3').val(jsonData[i].Customer3);



                jquery_1_11_3_min_p('#txtIFSC').val(jsonData[i].IFSC);
                jquery_1_11_3_min_p('#txtMICR').val(jsonData[i].MICR);

                //            if(jsonData[i].IFSC==""){
                //               jquery_1_11_3_min_p('#txtIFSC').attr('disabled',true);
                //            }

                //              if(jsonData[i].MICR==""){
                //               jquery_1_11_3_min_p('#txtMICR').attr('disabled',true);
                //            }\\\

                if (jsonData[i].xmlpath != '') {

                    jquery_1_11_3_min_p("#ContentPlaceHolder1_btnEemandate").attr('disabled', true);
                    jquery_1_11_3_min_p("#btnPhysicalMandate").css('display', 'none');
                    jquery_1_11_3_min_p("#ContentPlaceHolder1_btnEemandate").css('display', 'none');
                    jquery_1_11_3_min_p("#btnEditDisable").attr('disabled', true);
                    jquery_1_11_3_min_p("#btnFirstVal").attr('disabled', true);
                    //if (jquery_1_11_3_min_p('input:radio[name=rdoMandatetype]:checked').val() == 'P') {
                    //                 jquery_1_11_3_min_p("#btnSecVal").attr('disabled', true);
                    //                 }

                    //else  if (jquery_1_11_3_min_p('input:radio[name=rdoMandatetype]:checked').val() == 'E') {
                    //                 jquery_1_11_3_min_p("#btnSecVal").attr('disabled', true);
                    //                 }
                    jquery_1_11_3_min_p("#btnSecVal").attr('disabled', true);
                }
                if (jsonData[i].enach == 1) {
                    jquery_1_11_3_min_p("#btnScan").css('display', 'none');
                    jquery_1_11_3_min_p("#btnScanHalf").css('display', 'none');

                    jquery_1_11_3_min_p("#btnPhysicalMandate").css('display', 'none');
                } else {

                    jquery_1_11_3_min_p("#btnPhysicalMandate").css('display', 'block');
                }


                if (jsonData[i].isphysical == 1) {
                    // jquery_1_11_3_min_p("#btnScan").css('display', 'block');
                    jquery_1_11_3_min_p("#btnScanHalf").css('display', 'none');
                    jquery_1_11_3_min_p("#ContentPlaceHolder1_btnEemandate").css('display', 'none');
                } else {
                    jquery_1_11_3_min_p("#btnScan").css('display', 'none');
                    jquery_1_11_3_min_p("#btnScanHalf").css('display', 'none');

                    if (jquery_1_11_3_min_p('#ContentPlaceHolder1_lblIsEMandate').html().toUpperCase() == "TRUE") {

                        if (jsonData[i].IsSecondValidation == 1) {
                            if (jquery_1_11_3_min_p('#ContentPlaceHolder1_txtentitymandateemandate').val() == "1") {
                                jquery_1_11_3_min_p("#ContentPlaceHolder1_btnEemandate").css('display', 'block');
                            } else {
                                jquery_1_11_3_min_p("#ContentPlaceHolder1_btnEemandate").css('display', 'none');
                            }
                        } else {
                            if (jquery_1_11_3_min_p('#ContentPlaceHolder1_txtentityaccountvalidationflag').val() == "0") {
                                if (jquery_1_11_3_min_p('#ContentPlaceHolder1_txtentitymandateemandate').val() == "1") {
                                    jquery_1_11_3_min_p("#ContentPlaceHolder1_btnEemandate").css('display', 'block');
                                } else {
                                    jquery_1_11_3_min_p("#ContentPlaceHolder1_btnEemandate").css('display', 'none');
                                }
                            } else {
                                if (jquery_1_11_3_min_p('#ContentPlaceHolder1_txtentitymandateemandate').val() == "1") {
                                    jquery_1_11_3_min_p("#ContentPlaceHolder1_btnEemandate").css('display', 'block');
                                } else {
                                    jquery_1_11_3_min_p("#ContentPlaceHolder1_btnEemandate").css('display', 'none');
                                }
                            }
                        }
                    }

                }

                jquery_1_11_3_min_p('#txtRefrence1').val(jsonData[i].Refrence1);
                jquery_1_11_3_min_p("#txtRefrence2").attr('disabled', false);
                jquery_1_11_3_min_p('#txtRefrence2').val(jsonData[i].Refrence2);

                jquery_1_11_3_min_p('#txtAmountRupees').val(jsonData[i].AmountRupees);

                kendo_all_min_js("#txtBankName").data("kendoDropDownList").value(jsonData[i].BankName);
                kendo_all_min_js("#txtSponsorCode").data("kendoDropDownList").text(jsonData[i].SponsorbankCode);
                kendo_all_min_js("#ddlCategory").data("kendoDropDownList").value(jsonData[i].CategoryCode);

                jquery_1_11_3_min_p("#txtutilityCode").val(jsonData[i].UtilityCode);

                jquery_1_11_3_min_p('#txtAmount').val(jsonData[i].Amount);

                jquery_1_11_3_min_p('#txtperiodfrom').val(jsonData[i].DateOnMandate);

                jquery_1_11_3_min_p('#txtFrom').val(jsonData[i].FromDate);

                jquery_1_11_3_min_p('#txtEmailId').val(jsonData[i].EmailId);

                jquery_1_11_3_min_p('#txtPhNumber').val(jsonData[i].PhoneNumber);

                jquery_1_11_3_min_p('#txtTo').val(jsonData[i].Todate);



                jquery_1_11_3_min_p('#txtAcNo').attr('disabled', true);
                jquery_1_11_3_min_p('#txtCust1').attr('disabled', true);
                jquery_1_11_3_min_p("#txtCust2").attr('disabled', true);
                jquery_1_11_3_min_p('#txtCust2').attr('disabled', true);
                if (jquery_1_11_3_min_p('#txtCust2').val() == '') {
                    jquery_1_11_3_min_p("#txtCust3").attr('disabled', true);
                } else {
                    jquery_1_11_3_min_p("#txtCust3").attr('disabled', true);
                }

                jquery_1_11_3_min_p('#txtCust3').attr('disabled', true);
                jquery_1_11_3_min_p('#txtIFSC').attr('disabled', true);
                jquery_1_11_3_min_p('#txtMICR').attr('disabled', true);

                //            if(jsonData[i].IFSC==""){
                //               jquery_1_11_3_min_p('#txtIFSC').attr('disabled',true);
                //            }

                //              if(jsonData[i].MICR==""){
                //               jquery_1_11_3_min_p('#txtMICR').attr('disabled',true);
                //            }


                jquery_1_11_3_min_p('#txtRefrence1').attr('disabled', true);

                jquery_1_11_3_min_p('#txtRefrence2').attr('disabled', true);

                jquery_1_11_3_min_p('#txtAmountRupees').attr('disabled', true);

                kendo_all_min_js("#txtBankName").data("kendoDropDownList").enable(false);
                kendo_all_min_js("#txtSponsorCode").data("kendoDropDownList").enable(false);
                kendo_all_min_js("#ddlCategory").data("kendoDropDownList").enable(false);

                //               kendo_all_min_js("#txtutilityCode").attr(false);

                jquery_1_11_3_min_p('#txtAmount').attr('disabled', true);

                jquery_1_11_3_min_p('#txtperiodfrom').attr('disabled', true);

                jquery_1_11_3_min_p('#txtFrom').attr('disabled', true);

                jquery_1_11_3_min_p('#txtEmailId').attr('disabled', true);

                jquery_1_11_3_min_p('#txtPhNumber').attr('disabled', true);

                jquery_1_11_3_min_p('#txtTo').attr('disabled', true);
                if (GetParameterValuesName(jquery_1_11_3_min_p('#lblmandateId').text()) == "MandateId") {
                    jquery_1_11_3_min_p("#ContentPlaceHolder1_btnEemandate").attr('disabled', true);
                    //         if(jquery_1_11_3_min_p('#ContentPlaceHolder1_lblIsValidationCountEnable').html()==1)
                    //                  {
                    //                   jquery_1_11_3_min_p("#btnSecVal").attr('disabled', false);
                    //                  }else{
                    jquery_1_11_3_min_p("#btnSecVal").attr('disabled', true);
                    //                  if (jquery_1_11_3_min_p('input:radio[name=rdoMandatetype]:checked').val() == 'P') {
                    //                 jquery_1_11_3_min_p("#btnSecVal").attr('disabled', true);
                    //                 }

                    //else  if (jquery_1_11_3_min_p('input:radio[name=rdoMandatetype]:checked').val() == 'E') {
                    //                 jquery_1_11_3_min_p("#btnSecVal").attr('disabled', true);
                    //                 }
                    //}
                    jquery_1_11_3_min_p("#btnPhysicalMandate").attr('disabled', false);

                }
                if (GetParameterValuesName(jquery_1_11_3_min_p('#lblmandateId').text()) == "IdC") {
                    //        if(jquery_1_11_3_min_p('#ContentPlaceHolder1_lblIsValidationCountEnable').html()==1)
                    //                  {
                    jquery_1_11_3_min_p("#btnSecVal").attr('disabled', false);
                    //                  }else{
                    //  jquery_1_11_3_min_p("#btnSecVal").attr('disabled', true);
                    //                 if (jquery_1_11_3_min_p('input:radio[name=rdoMandatetype]:checked').val() == 'P') {
                    //                 jquery_1_11_3_min_p("#btnSecVal").attr('disabled', true);
                    //                 }

                    //else  if (jquery_1_11_3_min_p('input:radio[name=rdoMandatetype]:checked').val() == 'E') {
                    //                 jquery_1_11_3_min_p("#btnSecVal").attr('disabled', true);
                    //                 }

                    //}
                    jquery_1_11_3_min_p("#btnPhysicalMandate").attr('disabled', false);
                    jquery_1_11_3_min_p("#ContentPlaceHolder1_btnEemandate").attr('disabled', false);
                }

                jquery_1_11_3_min_p("#chkUntil").addClass('divDisable');
                if (jquery_1_11_3_min_p('#txtTo').val() == '') {
                    jquery_1_11_3_min_p("#chkUntil").prop("checked", true);

                    jquery_1_11_3_min_p("#txtTo").addClass('divDisable');

                } else {
                    jquery_1_11_3_min_p("#chkUntil").prop("checked", false);

                    jquery_1_11_3_min_p("#txtTo").removeClass('divDisable');
                }
                if (jquery_1_11_3_min_p('#ContentPlaceHolder1_lblIsValidationCountEnable').html() == 1) {
                    if (jquery_1_11_3_min_p('#ContentPlaceHolder1_lblUserType').html() == 'u') {
                        if (parseInt(jsonData[i].BankValidationUserCount) >= parseInt(jquery_1_11_3_min_p('#ContentPlaceHolder1_lblFinalBankValidationUserCount').html()) + 2 || parseInt(jsonData[i].AcValidationUserCount) >= parseInt(jquery_1_11_3_min_p('#ContentPlaceHolder1_lblFinalAcValidationUserCount').html()) + 2) {
                            jquery_1_11_3_min_p("#btnScanHalf").attr('disabled', true);
                            jquery_1_11_3_min_p("#btnScan").attr('disabled', true);
                            jquery_1_11_3_min_p("#btnMandatePrint").attr('disabled', true);
                            jquery_1_11_3_min_p("#btnOldOverPrintMandate").attr('disabled', true);
                            jquery_1_11_3_min_p("#btnBlankMandateprint").attr('disabled', true);
                            jquery_1_11_3_min_p("#btnScanPrint").attr('disabled', true);
                            jquery_1_11_3_min_p("#ContentPlaceHolder1_btnEemandate").attr('disabled', true);
                            jquery_1_11_3_min_p("#btnPhysicalMandate").attr('disabled', true);
                            jquery_1_11_3_min_p("#btnEditDisable").attr('disabled', true);

                            jquery_1_11_3_min_p("#btnSecVal").attr('disabled', true);

                            //            if (jquery_1_11_3_min_p('input:radio[name=rdoMandatetype]:checked').val() == 'P') {
                            //                 jquery_1_11_3_min_p("#btnSecVal").attr('disabled', true);
                            //                 }

                            //else  if (jquery_1_11_3_min_p('input:radio[name=rdoMandatetype]:checked').val() == 'E') {
                            //                 jquery_1_11_3_min_p("#btnSecVal").attr('disabled', true);
                            //                 }
                            jquery_1_11_3_min_p("#btnFirstVal").attr('disabled', true);
                        }
                    } else if (jquery_1_11_3_min_p('#ContentPlaceHolder1_lblUserType').html() == 'a' || jquery_1_11_3_min_p('#ContentPlaceHolder1_lblUserType').html() == 'E') {
                        if (parseInt(jsonData[i].BankValidationAdminCount) >= parseInt(jquery_1_11_3_min_p('#ContentPlaceHolder1_lblFinalBankValidationAdminCount').html()) + 2 || parseInt(jsonData[i].AcValidationAdminCount) >= parseInt(jquery_1_11_3_min_p('#ContentPlaceHolder1_lblFinalAcValidationAdminCount').html()) + 2) {
                            if (jsonData[i].IsFinalReject == 1) {
                                // jquery_1_11_3_min_p("#btnCancel").css('display', 'block');
                                // jquery_1_11_3_min_p("#btnCancel").attr('disabled', false);
                                jquery_1_11_3_min_p("#btnScanHalf").attr('disabled', true);
                                jquery_1_11_3_min_p("#btnScan").attr('disabled', true);
                                jquery_1_11_3_min_p("#btnMandatePrint").attr('disabled', true);
                                jquery_1_11_3_min_p("#btnOldOverPrintMandate").attr('disabled', true);
                                jquery_1_11_3_min_p("#btnBlankMandateprint").attr('disabled', true);
                                jquery_1_11_3_min_p("#btnScanPrint").attr('disabled', true);
                                jquery_1_11_3_min_p("#ContentPlaceHolder1_btnEemandate").attr('disabled', true);
                                jquery_1_11_3_min_p("#btnPhysicalMandate").attr('disabled', true);

                                jquery_1_11_3_min_p("#btnEditDisable").attr('disabled', true);
                                jquery_1_11_3_min_p("#btnSecVal").attr('disabled', true);
                                //            if (jquery_1_11_3_min_p('input:radio[name=rdoMandatetype]:checked').val() == 'P') {
                                //                 jquery_1_11_3_min_p("#btnSecVal").attr('disabled', true);
                                //                 }

                                //else  if (jquery_1_11_3_min_p('input:radio[name=rdoMandatetype]:checked').val() == 'E') {
                                //                 jquery_1_11_3_min_p("#btnSecVal").attr('disabled', true);
                                //                 }
                                jquery_1_11_3_min_p("#btnFirstVal").attr('disabled', true);
                            }
                        }
                    }

                }

                var Type = jsonData[i].DebitType;
                if (Type == 'f') {
                    jquery_1_11_3_min_p('input:radio[name="rdoNomDebit"]').filter('[value="f"]').prop('checked', true);
                } else if (Type == 'm') {
                    jquery_1_11_3_min_p('input:radio[name="rdoNomDebit"]').filter('[value="m"]').prop('checked', true);
                }
                //           jquery_1_11_3_min_p('input:radio[name="rdoNomDebit"]').attr('disabled', true);

                var Type = jsonData[i].FrequencyType;
                if (Type == 'm') {
                    jquery_1_11_3_min_p('input:radio[name="rdoNomFrequency"]').filter('[value="m"]').prop('checked', true);
                } else if (Type == 'q') {
                    jquery_1_11_3_min_p('input:radio[name="rdoNomFrequency"]').filter('[value="q"]').prop('checked', true);
                } else if (Type == 'h') {
                    jquery_1_11_3_min_p('input:radio[name="rdoNomFrequency"]').filter('[value="h"]').prop('checked', true);
                } else if (Type == 'y') {
                    jquery_1_11_3_min_p('input:radio[name="rdoNomFrequency"]').filter('[value="y"]').prop('checked', true);
                } else if (Type == 'a') {
                    jquery_1_11_3_min_p('input:radio[name="rdoNomFrequency"]').filter('[value="a"]').prop('checked', true);
                }
                //            jquery_1_11_3_min_p('input:radio[name="rdoNomFrequency"]').attr('disabled', true);

                var jsonData = eval(result.d.Table);
                if (jsonData[i].iscancel == 0) {
                    if (jsonData[i].enach == 0 && jsonData[i].isphysical == 0) {
                        // jquery_1_11_3_min_p("#btnCancel").css('display', 'block');

                    }
                } else {
                    // jquery_1_11_3_min_p("#btnCancel").css('display', 'none');
                }

                if (jsonData[i].IsSecondValidation == 0) {
                    if (jquery_1_11_3_min_p('#ContentPlaceHolder1_txtentityaccountvalidationflag').val() == "0") {
                        if (jquery_1_11_3_min_p('#ContentPlaceHolder1_txtentitymandateemandate').val() == "1") {
                            if (Mandateetype == true) {
                                jquery_1_11_3_min_p("#ContentPlaceHolder1_btnEemandate").css('display', 'block');
                            }
                        } else {
                            jquery_1_11_3_min_p("#ContentPlaceHolder1_btnEemandate").css('display', 'none');
                        }

                        if (jquery_1_11_3_min_p('#ContentPlaceHolder1_txtentitymandatephysical').val() == "1") {
                            if (Mandatetype == true) {
                                jquery_1_11_3_min_p("#btnPhysicalMandate").css('display', 'block');
                            }
                        } else {
                            jquery_1_11_3_min_p("#btnPhysicalMandate").css('display', 'none');
                        }
                    } else {
                        jquery_1_11_3_min_p("#ContentPlaceHolder1_btnEemandate").css('display', 'none');
                        jquery_1_11_3_min_p("#btnPhysicalMandate").css('display', 'none');
                    }

                }

                //              if (jquery_1_11_3_min_p('input:radio[name=rdoMandatetype]:checked').val() == 'P') {
                //                   if(jsonData[i].IsSecondValidation==0)
                //                { 
                //                jquery_1_11_3_min_p("#ContentPlaceHolder1_btnEemandate").css('display', 'none');
                //                  jquery_1_11_3_min_p("#btnPhysicalMandate").css('display', 'none');

                //                }

                //                 }

                //              else  if (jquery_1_11_3_min_p('input:radio[name=rdoMandatetype]:checked').val() == 'E') {
                //                 jquery_1_11_3_min_p("#btnPhysicalMandate").css('display', 'none');
                //                 }



                if (jsonData[i].iscancel == 1) {


                    jquery_1_11_3_min_p("#btnEditDisable").attr('disabled', true);
                    jquery_1_11_3_min_p("#btnScanHalf").attr('disabled', true);
                    jquery_1_11_3_min_p("#btnScan").attr('disabled', true);
                    jquery_1_11_3_min_p("#btnMandatePrint").attr('disabled', true);
                    jquery_1_11_3_min_p("#btnOldOverPrintMandate").attr('disabled', true);
                    jquery_1_11_3_min_p("#btnBlankMandateprint").attr('disabled', true);
                    jquery_1_11_3_min_p("#btnScanPrint").attr('disabled', true);
                    jquery_1_11_3_min_p("#ContentPlaceHolder1_btnEemandate").attr('disabled', true);
                    jquery_1_11_3_min_p("#btnPhysicalMandate").attr('disabled', true);

                    jquery_1_11_3_min_p("#btnEditDisable").attr('disabled', true);
                    jquery_1_11_3_min_p("#btnSecVal").attr('disabled', true);
                    //          if (jquery_1_11_3_min_p('input:radio[name=rdoMandatetype]:checked').val() == 'P') {
                    //                 jquery_1_11_3_min_p("#btnSecVal").attr('disabled', true);
                    //                 }

                    //else  if (jquery_1_11_3_min_p('input:radio[name=rdoMandatetype]:checked').val() == 'E') {
                    //                 jquery_1_11_3_min_p("#btnSecVal").attr('disabled', true);
                    //                 }
                    jquery_1_11_3_min_p("#btnFirstVal").attr('disabled', true);
                }

                var Type = jsonData[i].ToDebit;
                if (Type == 'sb') {
                    jquery_1_11_3_min_p('input:radio[name="rdoNomGender"]').filter('[value="sb"]').prop('checked', true);
                } else if (Type == 'ca') {
                    jquery_1_11_3_min_p('input:radio[name="rdoNomGender"]').filter('[value="ca"]').prop('checked', true);
                } else if (Type == 'cc') {
                    jquery_1_11_3_min_p('input:radio[name="rdoNomGender"]').filter('[value="cc"]').prop('checked', true);
                } else if (Type == 're') {
                    jquery_1_11_3_min_p('input:radio[name="rdoNomGender"]').filter('[value="re"]').prop('checked', true);
                } else if (Type == 'rd') {
                    jquery_1_11_3_min_p('input:radio[name="rdoNomGender"]').filter('[value="rd"]').prop('checked', true);
                } else if (Type == 'ot') {
                    jquery_1_11_3_min_p('input:radio[name="rdoNomGender"]').filter('[value="ot"]').prop('checked', true);
                }
                //                jquery_1_11_3_min_p('input:radio[name="rdoNomGender"]').attr('disabled', true);
                jquery_1_11_3_min_p("#debitto").addClass('divDisable');
                jquery_1_11_3_min_p("#frequency").addClass('divDisable');
                jquery_1_11_3_min_p("#debittype").addClass('divDisable');


                //  jquery_1_11_3_min_p("#btnCancel").css('display', 'block');
                //  jquery_1_11_3_min_p("#btnCancel").attr('disabled', false);
                var i = 0;
                var jsonData = eval(result.d.Table);
                if (jsonData[i].IsSendToBank == "1") {
                    jquery_1_11_3_min_p("#btnEditDisable").attr('disabled', true);
                    jquery_1_11_3_min_p("#ContentPlaceHolder1_btnEemandate").attr('disabled', true);
                    //jquery_1_11_3_min_p("#btnCancel").attr('disabled', true);
                    jquery_1_11_3_min_p("#btnMandatePrint").attr('disabled', true);
                    jquery_1_11_3_min_p("#btnBlankMandateprint").attr('disabled', true);
                    jquery_1_11_3_min_p("#btnOldOverPrintMandate").attr('disabled', true);
                    jquery_1_11_3_min_p("#btnPhysicalMandate").attr('disabled', true);
                    jquery_1_11_3_min_p("#btnScan").attr('disabled', true);
                    jquery_1_11_3_min_p("#btnScanPrint").css('display', 'block');

                }

                var i = 0;
                var jsonData = eval(result.d.Table);
                if (jsonData[i].AcceptRefNo != "0" && jsonData[i].MandateStatus != "0") {
                    jquery_1_11_3_min_p("#btnEditDisable").attr('disabled', true);
                    jquery_1_11_3_min_p("#ContentPlaceHolder1_btnEemandate").attr('disabled', true);
                    //   jquery_1_11_3_min_p("#btnCancel").attr('disabled', true);
                    jquery_1_11_3_min_p("#btnFirstVal").attr('disabled', true);
                    jquery_1_11_3_min_p("#btnSecVal").attr('disabled', true);
                    jquery_1_11_3_min_p("#btnMandatePrint").attr('disabled', true);
                    jquery_1_11_3_min_p("#btnBlankMandateprint").attr('disabled', true);
                    jquery_1_11_3_min_p("#btnOldOverPrintMandate").attr('disabled', true);
                    jquery_1_11_3_min_p("#btnPhysicalMandate").attr('disabled', true);
                    jquery_1_11_3_min_p("#btnScan").attr('disabled', true);
                    jquery_1_11_3_min_p("#btnScanPrint").css('display', 'block');

                }
                if (Mandatetype == false && Mandateetype == false) {
                    if (jquery_1_11_3_min_p('#ContentPlaceHolder1_txtentitymandatephysical').val() == "true") {
                        jquery_1_11_3_min_p("#btnPhysicalMandate").css('display', 'block');
                    }
                    if (jquery_1_11_3_min_p('#ContentPlaceHolder1_txtentitymandateemandate').val() == "true") {
                        jquery_1_11_3_min_p("#ContentPlaceHolder1_btnEemandate").css('display', 'block');
                    }



                }

                var jsonData = eval(result.d.Table);

                if (jsonData[0].status == "Submitted to bank") {
                    // jquery_1_11_3_min_p("#btnCancel").css('display', 'none');
                    jquery_1_11_3_min_p("#btnSecVal").css('display', 'none');
                    jquery_1_11_3_min_p("#btnFirstVal").css('display', 'none');
                    jquery_1_11_3_min_p("#btnSave").css('display', 'none');
                    jquery_1_11_3_min_p("#btnEditDisable").css('display', 'none');
                    jquery_1_11_3_min_p("#btnPhysicalMandate").css('display', 'none');
                    // jquery_1_11_3_min_p("#btnScanPrint").css('display', 'none');
                    jquery_1_11_3_min_p("#btnMandatePrint").css('display', 'none');
                    jquery_1_11_3_min_p("#btnScan").css('display', 'none');
                    jquery_1_11_3_min_p("#btnScanPrint").css('display', 'block');
                }
                if (jsonData[0].status == "Saved") {
                    jquery_1_11_3_min_p("#btnPhysicalMandate").css('display', 'none');
                    jquery_1_11_3_min_p("#ContentPlaceHolder1_btnEemandate").css('display', 'none');
                }
                BindGrid(result.d.Table1)//
                if (IsShow == true) {
                    jquery_1_11_3_min_p("#pnl2").css('display', 'block');

                    var i = 0;
                    var jsonData = eval(result.d.Table2);

                    jQuery.each(jsonData, function (rec) {
                        if (jsonData[i].type.trim() == 'Cash') {
                            jquery_1_11_3_min_p('#lblCashAmount').text(jsonData[i].amount);
                        }
                        if (jsonData[i].type.trim() == 'Cheque') {
                            jquery_1_11_3_min_p('#lblChequeAmount').text(jsonData[i].amount);
                        }
                        if (jsonData[i].type.trim() == 'DD') {
                            jquery_1_11_3_min_p('#lblDDAmount').text(jsonData[i].amount);
                        }
                        if (jsonData[i].type.trim() == 'Dr') {
                            jquery_1_11_3_min_p('#lblDrAmount').text(jsonData[i].amount);
                        }
                        if (jsonData[i].type.trim() == 'Cr') {
                            jquery_1_11_3_min_p('#lblCrAmount').text(jsonData[i].amount);
                        }
                        if (jsonData[i].type.trim() == 'NB') {
                            jquery_1_11_3_min_p('#lblNBrAmount').text(jsonData[i].amount);
                        }
                        i++;
                    });


                    var i = 0;
                    var jsonData = eval(result.d.Table3);
                    jquery_1_11_3_min_p('#lblTotal').val(jsonData[i].amount);
                    jquery_1_11_3_min_p('#lblTenderAmount').text(jsonData[i].amount);
                    jquery_1_11_3_min_p('#lblBalance').text('0');




                }
            },
            error: function (result) {

            }
        });
    }

    jquery_1_11_3_min_p(".overlay").css('visibility', 'hidden');
    jquery_1_11_3_min_p("#preloader_1").css('display', 'none');
}




function Reset() {
    jquery_1_11_3_min_p('#LiRegistrationFund').css('display', 'none');
    // jquery_1_11_3_min_p("#btnCancel").css('display', 'none');
    jquery_1_11_3_min_p('#ContentPlaceHolder1_lblBankValidationAdminCount').html('');
    jquery_1_11_3_min_p('#ContentPlaceHolder1_lblBankValidationUserCount').html('');
    jquery_1_11_3_min_p('#ContentPlaceHolder1_lblAcValidationAdminCount').html('');
    jquery_1_11_3_min_p('#ContentPlaceHolder1_lblAcValidationUserCount').html('');
    jquery_1_11_3_min_p('input:radio[name="rdoMandate"]').filter('[value="None"]').prop('checked', true);

    jquery_1_11_3_min_p("#btnScanHalf").attr('disabled', false);
    jquery_1_11_3_min_p("#btnScan").attr('disabled', false);
    jquery_1_11_3_min_p("#btnMandatePrint").attr('disabled', false);
    jquery_1_11_3_min_p("#btnOldOverPrintMandate").attr('disabled', false);
    jquery_1_11_3_min_p("#btnBlankMandateprint").attr('disabled', false);
    jquery_1_11_3_min_p("#btnScanPrint").attr('disabled', false);
    jquery_1_11_3_min_p("#ContentPlaceHolder1_btnEemandate").attr('disabled', false);
    jquery_1_11_3_min_p("#btnPhysicalMandate").attr('disabled', false);
    jquery_1_11_3_min_p("#btnEditDisable").attr('disabled', false);
    jquery_1_11_3_min_p("#btnSecVal").attr('disabled', false);
    jquery_1_11_3_min_p('#ContentPlaceHolder1_lblAdminCount').html(0);
    jquery_1_11_3_min_p('#ContentPlaceHolder1_lblUserCount').html(0);
    jquery_1_11_3_min_p("#btnSave")["0"].value = 'Save';
    jquery_1_11_3_min_p("#btnSave").css('display', 'block');
    jquery_1_11_3_min_p("#btnEditDisable").css('display', 'none');
    jquery_1_11_3_min_p('#txtAcNo').attr('disabled', false);
    jquery_1_11_3_min_p('#txtCust1').attr('disabled', false);
    jquery_1_11_3_min_p("#txtCust2").attr('disabled', false);
    jquery_1_11_3_min_p('#txtCust2').attr('disabled', false);
    if (jquery_1_11_3_min_p('#txtCust2').val() == '') {
        jquery_1_11_3_min_p("#txtCust3").attr('disabled', true);
    } else {
        jquery_1_11_3_min_p("#txtCust3").attr('disabled', false);
    }

    jquery_1_11_3_min_p('#txtCust3').attr('disabled', false);
    jquery_1_11_3_min_p('#ContentPlaceHolder1_txtEmandatestatus').val(0);
    jquery_1_11_3_min_p('#ContentPlaceHolder1_txtcheckissecval').val('')

    jquery_1_11_3_min_p('#txtIFSC').attr('disabled', false);
    jquery_1_11_3_min_p('#txtMICR').attr('disabled', false);

    //            if(jsonData[i].IFSC==""){
    //               jquery_1_11_3_min_p('#txtIFSC').attr('disabled',true);
    //            }

    //              if(jsonData[i].MICR==""){
    //               jquery_1_11_3_min_p('#txtMICR').attr('disabled',true);
    //            }


    jquery_1_11_3_min_p('#txtRefrence1').attr('disabled', false);

    jquery_1_11_3_min_p('#txtRefrence2').attr('disabled', false);

    jquery_1_11_3_min_p('#txtAmountRupees').attr('disabled', false);

    kendo_all_min_js("#txtBankName").data("kendoDropDownList").enable(true);
    kendo_all_min_js("#txtSponsorCode").data("kendoDropDownList").enable(true);
    kendo_all_min_js("#ddlCategory").data("kendoDropDownList").enable(true);

    //               kendo_all_min_js("#txtutilityCode").attr(true);



    jquery_1_11_3_min_p('#txtperiodfrom').attr('disabled', false);

    jquery_1_11_3_min_p('#txtFrom').attr('disabled', false);

    jquery_1_11_3_min_p('#txtEmailId').attr('disabled', false);

    jquery_1_11_3_min_p('#txtPhNumber').attr('disabled', false);

    jquery_1_11_3_min_p('#txtTo').attr('disabled', false);

    if (jquery_1_11_3_min_p('#txtTo').val() == '') {
        jquery_1_11_3_min_p("#chkUntil").prop("checked", true);
        jquery_1_11_3_min_p("#chkUntil").removeClass('divDisable');
        jquery_1_11_3_min_p("#txtTo").addClass('divDisable');

    } else {
        jquery_1_11_3_min_p("#chkUntil").prop("checked", false);

        jquery_1_11_3_min_p("#txtTo").removeClass('divDisable');
    }

    jquery_1_11_3_min_p("#debitto").removeClass('divDisable');
    jquery_1_11_3_min_p("#frequency").removeClass('divDisable');
    jquery_1_11_3_min_p("#debittype").removeClass('divDisable');
    //            jquery_1_11_3_min_p('input:radio[name="rdoNomFrequency"]').attr('disabled', false);
    //             jquery_1_11_3_min_p('input:radio[name="rdoNomGender"]').attr('disabled', false);
    jquery_1_11_3_min_p("#btnSecVal").css('display', 'none');
    jquery_1_11_3_min_p("#btnFirstVal").css('display', 'none');
    AllResultData = [];
    jquery_1_11_3_min_p("#txtIFSC").attr('disabled', false);
    jquery_1_11_3_min_p("#txtMICR").attr('disabled', false);
    BindAllDataPage();

    jquery_1_11_3_min_p("#txtIFSC").attr('disabled', false);
    jquery_1_11_3_min_p("#txtMICR").attr('disabled', false)
    kendo_all_min_js("#grd1").empty();
    jquery_1_11_3_min_p("#btnScanPrint").css('display', 'none');
    jquery_1_11_3_min_p("#btnMandatePrint").css('display', 'none');
    jquery_1_11_3_min_p("#btnOldOverPrintMandate").css('display', 'none');
    jquery_1_11_3_min_p("#btnBlankMandateprint").css('display', 'none');
    jquery_1_11_3_min_p('#lblmandateId').text('');

    jquery_1_11_3_min_p('#txtAcNo').val('');
    kendo_all_min_js("#txtBankName").data("kendoDropDownList").value('0');

    jquery_1_11_3_min_p('#txtIFSC').val('');
    jquery_1_11_3_min_p('#txtMICR').val('');
    jquery_1_11_3_min_p('#txtAmount').val('');

    jquery_1_11_3_min_p('#txtAmountRupees').val('');
    jquery_1_11_3_min_p('#txtRefrence1').val('');
    jquery_1_11_3_min_p('#txtRefrence2').val('');
    jquery_1_11_3_min_p("#txtRefrence2").attr('disabled', true);
    jquery_1_11_3_min_p('#txtPhNumber').val('');
    jquery_1_11_3_min_p('#txtEmailId').val('');

    jquery_1_11_3_min_p('#txtTo').val('');

    jquery_1_11_3_min_p('#txtCust1').val('');
    jquery_1_11_3_min_p('#txtCust2').val('');
    jquery_1_11_3_min_p("#txtCust2").attr('disabled', true);
    jquery_1_11_3_min_p('#txtCust3').val('');
    jquery_1_11_3_min_p("#txtCust3").attr('disabled', true);
    // jquery_1_11_3_min_p("#chkUntil").prop('checked') = false;


}




//        function CheckData(thisid){

////         var date = $(this).datepicker('getDate');

//        var date =  jquery_1_11_3_min_p('#txtperiodfrom').val();
//        var TxtVal= new Date(25-10-2017);
//        var today = new Date();

//        var  PreDate=new Date(today.getFullYear(), today.getMonth(), today.getDate()-90);
//        if(PreDate>TxtVal)
//        {
//        alert(1);
////             Do somthing here..
//        }

//        else{

//        alert(0);
//        }
//        }




//  function Demo()
//  {
//  alert(1);
//  }sss



function blockSpecialChar(e) {
    RemoveClass();
    var k;
    document.all ? k = e.keyCode : k = e.which;
    return ((k > 64 && k < 91) || (k > 96 && k < 123) || k == 8 || k == 32 || (k >= 48 && k <= 57));
}


function inibalance() {

    jquery_1_11_3_min_p('#lblBalance').text(jquery_1_11_3_min_p('#lblTotal').val());
}


function CheckRefrence() {
    jquery_1_11_3_min_p('#DivRefrenceDetail div').remove();
    var mandateId = jquery_1_11_3_min_p('#lblmandateId').text();
    var EntityId = jquery_1_11_3_min_p('#ContentPlaceHolder1_lblEntityId').text();
    var Ref = jquery_1_11_3_min_p('#txtRefrence1').val();


    var flag = 0;

    jquery_1_11_3_min_p.ajax({
        type: "POST",
        contentType: "application/json; charset=utf-8",
        url: "../WebServices/BankForm.asmx/CheckRefrence",

        data: "{'Ref':'" + Ref + "','EntityId':'" + EntityId + "','mandateId':'" + mandateId + "'}",
        dataType: "json",
        success: function (result) {
            var i = 0;
            var jsonData = eval(result.d.Table);


            if (jsonData[i].available == 0) {


                if (jquery_1_11_3_min_p('#ContentPlaceHolder1_lblIsRefrenceCheck').text().toUpperCase() == "TRUE") {
                    jquery_1_11_3_min_p('#txtRefrence1').val('');
                    jquery_1_11_3_min_p('#txtRefrence1').attr('placeholder', 'Refrence1 already exists');
                    jquery_1_11_3_min_p('#txtRefrence1').addClass('validate');
                    //                jquery_1_11_3_min_p('#lblData').text('This reference no. already exists');
                    //                admin();

                } else {
                    if (jquery_1_11_3_min_p('#ContentPlaceHolder1_lblIsRefrenceEdit').text().toUpperCase() == "FALSE") {
                        jquery_1_11_3_min_p('#lblData').text('This reference no. already exists contact to Admin');
                        admin();
                    } else {
                        var i = 0;
                        var jsonData = eval(result.d.Table1);
                        jQuery.each(jsonData, function (rec) {
                            jquery_1_11_3_min_p('#DivRefrenceDetail').append("<div onclick='AddClas(this);' class='refDetail " + jsonData[i].rownumber + "' id='" + jsonData[i].MandateId + "'><div class='col-md-12 col-sm-12 col-xs-12'>  <div class='form-group'>        <div class='col-md-6 col-sm-6 col-xs-12 no-padding'>            <label class='' style='font-size:14px!important'>                Reference No:</label>   <label class='' style='font-weight: bold !important;font-size:14px!important'>" + jsonData[i].Refrence1 + "</label>      </div>        <div class='col-md-6 col-sm-6 col-xs-12 no-padding-left'>            <label class='' style='font-size:14px!important'>Mandate ID:</label>   <label class='' style='font-weight: bold !important;font-size:14px!important'>" + jsonData[i].FreshManteId + "</label> </div>                  </div>   </div><div class='col-md-6 col-sm-6 col-xs-12'>    <div class='form-group'>        <div class='col-sm-5 col-md-5 col-xs-5 no-padding'>            <label class='col-sm-12 col-md-12 col-xs-12 control-label  no-padding'>  Account No.:</label>        </div>        <div class='col-sm-7 col-md-7 col-xs-7 no-padding'>         <label class='col-sm-12 col-md-12 col-xs-12 control-label  no-padding' style='font-weight: normal !important;'>" + jsonData[i].AcNo + "</label>        </div>    </div>    <div class='form-group'>        <div class='col-sm-5 col-md-5 col-xs-5 no-padding'>            <label class='col-sm-12 col-md-12 col-xs-12 control-label  no-padding'>                Customer Name:</label>        </div>        <div class='col-sm-7 col-md-7 col-xs-7 no-padding'>         <label class='col-sm-12 col-md-12 col-xs-12 control-label  no-padding' style='font-weight: normal !important;'>" + jsonData[i].Customer1 + "</label>        </div>    </div>    <div class='form-group'>        <div class='col-sm-5 col-md-5 col-xs-5 no-padding'>            <label class='col-sm-12 col-md-12 col-xs-12 control-label  no-padding'>               Created On:</label>        </div>        <div class='col-sm-7 col-md-7 col-xs-7 no-padding'>         <label class='col-sm-12 col-md-12 col-xs-12 control-label  no-padding' style='font-weight: normal !important;'>" + jsonData[i].datetim + "</label>        </div>    </div>    </div>     <div class='col-md-6 col-sm-6 col-xs-12'>    <div class='form-group'>        <div class='col-sm-4 col-md-4 col-xs-5 no-padding'>            <label class='col-sm-12 col-md-12 col-xs-12 control-label  no-padding'>                IFSC/MICR:</label>        </div>        <div class='col-sm-8 col-md-8 col-xs-7 no-padding'>         <label class='col-sm-12 col-md-12 col-xs-12 control-label  no-padding' style='font-weight: normal !important;'>" + jsonData[i].Code + "</label>        </div>    </div>    <div class='form-group'>        <div class='col-sm-4 col-md-4 col-xs-5 no-padding'>            <label class='col-sm-12 col-md-12 col-xs-12 control-label  no-padding'>               BankName:</label>        </div>        <div class='col-sm-8 col-md-8 col-xs-7 no-padding'>         <label class='col-sm-12 col-md-12 col-xs-12 control-label  no-padding' style='font-weight: normal !important;'>" + jsonData[i].BankName + "</label>        </div>    </div>   <div class='form-group'>        <div class='col-sm-4 col-md-4 col-xs-5 no-padding'>            <label class='col-sm-12 col-md-12 col-xs-12 control-label  no-padding'>                Created By:</label>        </div>        <div class='col-sm-8 col-md-8 col-xs-7 no-padding'>         <label class='col-sm-12 col-md-12 col-xs-12 control-label  no-padding' style='font-weight: normal !important;'>" + jsonData[i].UserName + "</label>        </div>    </div>   </div></div>");
                            i++;
                        });
                        RefrenceNo();
                        //                    jquery_1_11_3_min_p('#txtRefrence1').val('');
                        //                   jquery_1_11_3_min_p('#txtRefrence1').attr('placeholder','Refrence1 already exists');
                        //                   jquery_1_11_3_min_p('#txtRefrence1').addClass('validate');

                    }
                }
            } else {

                SaveData();
            }

        },
        error: function (result) {

        }
    });


}

function SaveData() {

    jquery_1_11_3_min_p("#btnSave").css('display', 'none');
    jquery_1_11_3_min_p(".overlay").css('visibility', 'visible');
    jquery_1_11_3_min_p("#preloader_1").css('display', 'block');

    if (IsShow == true) {
        jquery_1_11_3_min_p('#lblTotal').val(jquery_1_11_3_min_p('#txtAmountRupees').val());
        jquery_1_11_3_min_p('#lblBalance').text(jquery_1_11_3_min_p('#txtAmountRupees').val());
        jquery_1_11_3_min_p("#lblTotal").attr('disabled', true);
        jquery_1_11_3_min_p('#pnl2').css('display', 'block');
    } else {
        jquery_1_11_3_min_p("#btnBack").attr('disabled', false);
    }

    var mandateId = jquery_1_11_3_min_p('#lblmandateId').text();
    var MandateMode = jquery_1_11_3_min_p('input:radio[name=rdoMandate]:checked').val();
    var EntityId = jquery_1_11_3_min_p('#ContentPlaceHolder1_lblEntityId').text();
    var UserId = jquery_1_11_3_min_p('#ContentPlaceHolder1_lblUserid').text();
    var Frequency = jquery_1_11_3_min_p('input:radio[name=rdoNomFrequency]:checked').val();
    var DebitType = jquery_1_11_3_min_p('input:radio[name=rdoNomDebit]:checked').val();
    var ToDebit = jquery_1_11_3_min_p('input:radio[name=rdoNomGender]:checked').val();
    var CategoryCode = kendo_all_min_js("#ddlCategory").data("kendoDropDownList").value();
    jquery_1_11_3_min_p.ajax({
        type: "POST",
        contentType: "application/json; charset=utf-8",
        url: "../WebServices/BankForm.asmx/InsertData",
        data: "{'AmountWords':'" + jquery_1_11_3_min_p('#txtAmount').val() + "','MandateMode':'" + MandateMode + "','UtilityCode':'" + jquery_1_11_3_min_p("#txtutilityCode").val() + "','SponsorCode':'" + kendo_all_min_js("#txtSponsorCode").data("kendoDropDownList").text() + "','DateOnMandate':'" + jquery_1_11_3_min_p('#txtperiodfrom').val() + "','Customer1':'" + jquery_1_11_3_min_p('#txtCust1').val() + "','Customer2':'" + jquery_1_11_3_min_p('#txtCust2').val() + "','Customer3':'" + jquery_1_11_3_min_p('#txtCust3').val() + "','mandateId':'" + mandateId + "','DebitType':'" + DebitType + "','Frequency':'" + Frequency + "','UserId':'" + UserId + "','EntityId':'" + EntityId + "','ToDebit':'" + ToDebit + "','AcNo':'" + jquery_1_11_3_min_p('#txtAcNo').val() + "','BankName':'" + kendo_all_min_js("#txtBankName").data("kendoDropDownList").text() + "','IFSC':'" + jquery_1_11_3_min_p('#txtIFSC').val() + "','MICR':'" + jquery_1_11_3_min_p('#txtMICR').val() + "','AmountRupees':'" + jquery_1_11_3_min_p('#txtAmountRupees').val() + "','Refrence1':'" + jquery_1_11_3_min_p('#txtRefrence1').val() + "','Refrence2':'" + jquery_1_11_3_min_p('#txtRefrence2').val() + "','PhNumber':'" + jquery_1_11_3_min_p('#txtPhNumber').val() + "','EmailId':'" + jquery_1_11_3_min_p('#txtEmailId').val() + "','From':'" + jquery_1_11_3_min_p('#txtFrom').val() + "','To':'" + jquery_1_11_3_min_p('#txtTo').val() + "','CategoryCode':'" + CategoryCode + "'}",
        dataType: "json",
        success: function (result) {

            jquery_1_11_3_min_p('#ContentPlaceHolder1_txtEmandatestatus').val(0);
            jquery_1_11_3_min_p('#ContentPlaceHolder1_lblmandatemsg').text('');
            jquery_1_11_3_min_p("#LiRegistrationFund").css('display', 'none');
            jquery_1_11_3_min_p("#btnSecVal").attr('disabled', true);
            jquery_1_11_3_min_p("#btnSecVal").css('display', 'block');
            // jquery_1_11_3_min_p("#btnMandatePrint").css('display', 'block');//Commented:Avinash
            if (jquery_1_11_3_min_p('#ContentPlaceHolder1_lblOverMandate').html().toUpperCase() == "TRUE") {
                jquery_1_11_3_min_p("#btnOldOverPrintMandate").css('display', 'block');
                jquery_1_11_3_min_p("#btnBlankMandateprint").css('display', 'block');
            } else {
                jquery_1_11_3_min_p("#btnOldOverPrintMandate").css('display', 'none');
                jquery_1_11_3_min_p("#btnBlankMandateprint").css('display', 'none');
            }
            //         jquery_1_11_3_min_p("#btnScan").css('display', 'block');
            var i = 0;
            var jsonData4 = eval(result.d.Table4);
            jquery_1_11_3_min_p('#ContentPlaceHolder1_lblMandateShowid').text(jsonData4[i].MandateFreshId);
            jquery_1_11_3_min_p('#lblmandateId').text(jsonData4[i].mandateid);
            jquery_1_11_3_min_p('#lblActivityId').text(jsonData4[i].ActivityId);
            jquery_1_11_3_min_p('#ContentPlaceHolder1_lblmandatecheckdata').val(jsonData4[i].mandateid);
            Subitted();
            GetLogoOrQR(jsonData4[i].mandateid);
            //   alert(jquery_1_11_3_min_p('#ContentPlaceHolder1_lblmandatecheck').html());
            jquery_1_11_3_min_p('#btnFirstVal').css('display', 'block');
            jquery_1_11_3_min_p('#btnEditDisable').css('display', 'block');
            jquery_1_11_3_min_p('#btnFirstVal').attr('disabled', false);
            jquery_1_11_3_min_p(".overlay").css('visibility', 'hidden');
            jquery_1_11_3_min_p("#preloader_1").css('display', 'none');
            jquery_1_11_3_min_p('#txtAcNo').attr('disabled', true);
            jquery_1_11_3_min_p('#txtRefrence1').attr('disabled', true);
            jquery_1_11_3_min_p('#txtRefrence2').attr('disabled', true);
            jquery_1_11_3_min_p('#txtAmountRupees').attr('disabled', true);
            kendo_all_min_js("#txtBankName").data("kendoDropDownList").enable(false);
            kendo_all_min_js("#txtSponsorCode").data("kendoDropDownList").enable(false);
            kendo_all_min_js("#ddlCategory").data("kendoDropDownList").enable(false);

            //               kendo_all_min_js("#txtutilityCode").attr(false);

            jquery_1_11_3_min_p('#txtAmount').attr('disabled', true);

            jquery_1_11_3_min_p('#txtperiodfrom').attr('disabled', true);
            jquery_1_11_3_min_p('#txtFrom').attr('disabled', true);
            jquery_1_11_3_min_p('#txtEmailId').attr('disabled', true);
            jquery_1_11_3_min_p('#txtPhNumber').attr('disabled', true);
            jquery_1_11_3_min_p('#rdphysical').attr('disabled', true);
            jquery_1_11_3_min_p('#rdEmandate').attr('disabled', true);
            jquery_1_11_3_min_p('input:radio[name="rdoMandate"]').attr('disabled', true);
            jquery_1_11_3_min_p('#txtTo').attr('disabled', true);
            jquery_1_11_3_min_p("#txtIFSC").attr('disabled', true);
            jquery_1_11_3_min_p('#txtMICR').attr('disabled', true);
            jquery_1_11_3_min_p("#txtCust2").attr('disabled', true);
            jquery_1_11_3_min_p("#txtCust1").attr('disabled', true);
            jquery_1_11_3_min_p("#txtCust3").attr('disabled', true);
            jquery_1_11_3_min_p("#chkUntil").addClass('divDisable');
            if (jquery_1_11_3_min_p('#txtTo').val() == '') {
                jquery_1_11_3_min_p("#chkUntil").prop("checked", true);

                jquery_1_11_3_min_p("#txtTo").addClass('divDisable');

            } else {
                jquery_1_11_3_min_p("#chkUntil").prop("checked", false);

                jquery_1_11_3_min_p("#txtTo").removeClass('divDisable');
            }
            //         jquery_1_11_3_min_p('input:radio[name="rdoNomFrequency"]').attr('disabled', true);
            //         jquery_1_11_3_min_p('input:radio[name="rdoNomGender"]').attr('disabled', true);
            //             jquery_1_11_3_min_p('input:radio[name="rdoMandate"]').attr('disabled', true);
            jquery_1_11_3_min_p("#debitto").addClass('divDisable');
            jquery_1_11_3_min_p("#frequency").addClass('divDisable');
            jquery_1_11_3_min_p("#debittype").addClass('divDisable');
            var i = 0;
            var jsonData7 = eval(result.d.Table7);
            jquery_1_11_3_min_p('#ContentPlaceHolder1_txtphysical').val(jsonData7[i].IsPhysical);
            jquery_1_11_3_min_p('#ContentPlaceHolder1_txtemandate').val(jsonData7[i].Enach);
            CheckLogoOrQR();



        },
        error: function (result) {

        }

    });
}


function BindAllDataPage() {
    var dataCountry = []; var dataCategory = [];
    var UserId = jquery_1_11_3_min_p('#ContentPlaceHolder1_lblUserid').html();
    var EntityId = jquery_1_11_3_min_p('#ContentPlaceHolder1_lblEntityId').text();
    jquery_1_11_3_min_p.ajax({
        type: "POST",
        contentType: "application/json; charset=utf-8",
        url: "../WebServices/BankForm.asmx/BindDetails",
        data: "{'EntityId':'" + EntityId + "','UserId':'" + UserId + "'}",
        dataType: "json",
        async: false,
        success: function (result) {
            var i = 0;
            var jsonData = eval(result.d);
            dataCountry.push({
                text: "Select",
                value: "0"
            });
            jQuery.each(jsonData.Table2, function (rec) {
                dataCountry.push({
                    value: jsonData.Table2[i].name,
                    text: jsonData.Table2[i].name
                });
                i++;
            });
            kendo_all_min_js("#txtBankName").kendoDropDownList({
                filter: "contains",
                dataTextField: "text",
                dataValueField: "value",
                dataSource: dataCountry
            });


            kendo_all_min_js("#txtBankName").data("kendoDropDownList").enable(true);
            var i = 0;
            var dataBankCode = [];
            var jsonData = eval(result.d);

            jQuery.each(jsonData.Table3, function (rec) {
                dataBankCode.push({
                    SponsorBankcode: jsonData.Table3[i].name,
                    utilityCode: jsonData.Table3[i].utilityCode
                });

                i++;

            });
            kendo_all_min_js("#txtSponsorCode").kendoDropDownList({
                filter: "contains",
                dataTextField: "SponsorBankcode",
                dataValueField: "utilityCode",
                dataSource: dataBankCode,
                change: ValueAssign
            });
            jquery_1_11_3_min_p("#txtutilityCode").val(jsonData.Table3[0].utilityCode);


            var i = 0;
            if (jsonData.Table11.length > 1) {
                dataCategory.push({ text: "Select", value: "0" });
                jQuery.each(jsonData.Table11, function (rec) {
                    dataCategory.push({
                        value: jsonData.Table11[i].CategoryCode, text: jsonData.Table11[i].CategoryName
                    });

                    i++;

                });


                kendo_all_min_js("#ddlCategory").kendoDropDownList({
                    filter: "contains",
                    dataTextField: "text",
                    dataValueField: "value",
                    dataSource: dataCategory
                });
                kendo_all_min_js("#ddlCategory").data("kendoDropDownList").enable(true);
            }
            else {
                dataCategory.push({
                    text: jsonData.Table11[0].CategoryName, value: jsonData.Table11[0].CategoryCode

                });


                kendo_all_min_js("#ddlCategory").kendoDropDownList({
                    filter: "contains",
                    dataTextField: "text",
                    dataValueField: "value",
                    dataSource: dataCategory
                });
                kendo_all_min_js("#ddlCategory").data("kendoDropDownList").enable(false);
            }

            //             kendo_all_min_js("#ddlCategory").kendoDropDownList({
            //                filter: "contains",
            //                dataTextField: "text",
            //                dataValueField: "value",
            //                dataSource: dataCategory
            //            });
            //             kendo_all_min_js("#ddlCategory").data("kendoDropDownList").enable(true);

            //      var i = 0;
            //               var data = [];
            //            var jsonData = eval(result.d);
            //         
            //            jQuery.each(jsonData.Table4, function (rec) {
            //                data.push({ UtilityCodeId: jsonData.Table4[i].UtilityCodeId, UtilityCode: jsonData.Table4[i].UtilityCode });

            //                i++;

            //            });
            //             kendo_all_min_js("#txtutilityCode").kendoDropDownList({
            //        filter: "contains",
            //        dataTextField: "UtilityCode",
            //        dataValueField: "UtilityCodeId",
            //        dataSource: data
            //    });



            var i = 0;

            var jsonData = eval(result.d.Table);

            jquery_1_11_3_min_p('#txtSponsorCode').val(jsonData[i].SponsorBankCode);
            if (jsonData[i].ModeOfPayment == 'Y') {
                IsShow = true;
                jquery_1_11_3_min_p("#pnl2").css('display', 'block');
                jquery_1_11_3_min_p("#lblTotal").attr('disabled', true);
            } else {
                IsShow = false;
            }

            if (jsonData[i].IsShowMandateMode == 1) {
                jquery_1_11_3_min_p("#DivModeType").css('display', 'block');
            } else {
                jquery_1_11_3_min_p("#DivModeType").css('display', 'none');
            }


            if (jsonData[i].IsRefrenceNumeric == 1) {
                jquery_1_11_3_min_p("#txtRefrence1").keypress(function (e) {

                    if (e.which != 8 && e.which != 0 && (e.which < 48 || e.which > 57)) {

                        return false;
                    }
                });
            }


            jquery_1_11_3_min_p('#txtFrom').val(jsonData[i].FromDate);//jquery_1_11_3_min_p('#txtFrom').val(jsonData[i].Date);
            jquery_1_11_3_min_p('#txtperiodfrom').val(jsonData[i].Date);
            jquery_1_11_3_min_p('#txtEntityName').val(jsonData[i].Name);
            jquery_1_11_3_min_p("#txtEntityName").attr('disabled', true);




            var Type = jsonData[i].DebitType;
            if (Type == 'f') {
                jquery_1_11_3_min_p('input:radio[name="rdoNomDebit"]').filter('[value="f"]').prop('checked', true);
            } else if (Type == 'm') {
                jquery_1_11_3_min_p('input:radio[name="rdoNomDebit"]').filter('[value="m"]').prop('checked', true);
            }


            var Type = jsonData[i].FrequencyType;
            if (Type == 'm') {
                jquery_1_11_3_min_p('input:radio[name="rdoNomFrequency"]').filter('[value="m"]').prop('checked', true);
            } else if (Type == 'q') {
                jquery_1_11_3_min_p('input:radio[name="rdoNomFrequency"]').filter('[value="q"]').prop('checked', true);
            } else if (Type == 'h') {
                jquery_1_11_3_min_p('input:radio[name="rdoNomFrequency"]').filter('[value="h"]').prop('checked', true);
            } else if (Type == 'y') {
                jquery_1_11_3_min_p('input:radio[name="rdoNomFrequency"]').filter('[value="y"]').prop('checked', true);
            } else if (Type == 'a') {
                jquery_1_11_3_min_p('input:radio[name="rdoNomFrequency"]').filter('[value="a"]').prop('checked', true);
            }



            var Type = jsonData[i].ToDebit;
            if (Type == 'sb') {
                jquery_1_11_3_min_p('input:radio[name="rdoNomGender"]').filter('[value="sb"]').prop('checked', true);
            } else if (Type == 'ca') {
                jquery_1_11_3_min_p('input:radio[name="rdoNomGender"]').filter('[value="ca"]').prop('checked', true);
            } else if (Type == 'cc') {
                jquery_1_11_3_min_p('input:radio[name="rdoNomGender"]').filter('[value="cc"]').prop('checked', true);
            } else if (Type == 're') {
                jquery_1_11_3_min_p('input:radio[name="rdoNomGender"]').filter('[value="re"]').prop('checked', true);
            } else if (Type == 'rd') {
                jquery_1_11_3_min_p('input:radio[name="rdoNomGender"]').filter('[value="rd"]').prop('checked', true);
            } else if (Type == 'ot') {
                jquery_1_11_3_min_p('input:radio[name="rdoNomGender"]').filter('[value="ot"]').prop('checked', true);
            }

            if (jsonData[i].PeriodType == 'u') {
                jquery_1_11_3_min_p("#chkUntil").prop("checked", true);

                jquery_1_11_3_min_p("#txtTo").addClass('divDisable');

            } else {
                jquery_1_11_3_min_p("#chkUntil").prop("checked", false);

                jquery_1_11_3_min_p("#txtTo").removeClass('divDisable');
            }
            var i = 0;

            var jsonData = eval(result.d.Table1);
            jquery_1_11_3_min_p("#imgLogo").attr('src', jsonData[i].ImagePath);

            var i = 0;
            var jsonData = eval(result.d.Table6);

            var ValidationCountEnable = '';

            if (jsonData[i].IsValidationCountEnable == false) {
                ValidationCountEnable = 0;
            } else {
                ValidationCountEnable = 1;
            }

            jquery_1_11_3_min_p('#ContentPlaceHolder1_lblIsValidationCountEnable').html(ValidationCountEnable);
            jquery_1_11_3_min_p('#ContentPlaceHolder1_lblFinalBankValidationAdminCount').html(jsonData[i].BankValidationAdminCount);
            jquery_1_11_3_min_p('#ContentPlaceHolder1_lblFinalBankValidationUserCount').html(jsonData[i].BankValidationUserCount);
            jquery_1_11_3_min_p('#ContentPlaceHolder1_lblFinalAcValidationAdminCount').html(jsonData[i].AcValidationAdminCount);
            jquery_1_11_3_min_p('#ContentPlaceHolder1_lblFinalAcValidationUserCount').html(jsonData[i].AcValidationUserCount);



            var i = 0;
            var jsonData = eval(result.d.Table5);


            jQuery.each(jsonData, function (rec) {
                if (jsonData[i].PaymentMode == 'Cash') {
                    jquery_1_11_3_min_p('#DivCash').css('display', 'block');
                    jquery_1_11_3_min_p('#divca').css('display', 'block');
                }
                if (jsonData[i].PaymentMode == 'Cheque') {
                    jquery_1_11_3_min_p('#DivChequee').css('display', 'block');
                    jquery_1_11_3_min_p('#divcq').css('display', 'block');
                }
                if (jsonData[i].PaymentMode == 'DD') {
                    jquery_1_11_3_min_p('#DivDDD').css('display', 'block');
                    jquery_1_11_3_min_p('#divdd').css('display', 'block');
                }
                if (jsonData[i].PaymentMode == 'E') {
                    jquery_1_11_3_min_p('#DivElectronic').css('display', 'block');
                    jquery_1_11_3_min_p('#divcad').css('display', 'block');
                }
                i++;
            });
        },
        error: function (result) {
        }
    })
}


function GetParameterValues(param) {
    var urlparam = '';
    var isfirst = true;
    var splitTwoString = window.location.href.slice(window.location.href.indexOf('?') + 1).split('&');
    if (splitTwoString.length != 3) {
        var url = splitTwoString[1].split('=');
        for (var i = 1; i < url.length; i++) {
            if (isfirst == true) {
                var urlparam = urlparam + url[i];
                isfirst = false;
            } else {
                var urlparam = urlparam + '=' + url[i];
            }
        }

    } else {
        var url = splitTwoString[0].split('=');
        for (var i = 1; i < url.length; i++) {
            if (isfirst == true) {
                var urlparam = urlparam + url[i];
                isfirst = false;
            } else {
                var urlparam = urlparam + '=' + url[i];
            }
        }
    }
    return urlparam;
}


function GetFirstValue() {
    var urlparam = '';
    var isfirst = true;
    var splitTwoString = window.location.href.slice(window.location.href.indexOf('?') + 1).split('&');
    if (splitTwoString.length > 1) {
        var url = splitTwoString[0].split('=');
        for (var i = 1; i < url.length; i++) {
            if (isfirst == true) {
                var urlparam = urlparam + url[i];
                isfirst = false;
            } else {
                var urlparam = urlparam + '=' + url[i];
            }
        }
    } else {
        var url = window.location.href.slice(window.location.href.indexOf('?') + 1).split('=');
        for (var i = 1; i < url.length; i++) {
            if (isfirst == true) {
                var urlparam = urlparam + url[i];
                isfirst = false;
            } else {
                var urlparam = urlparam + '=' + url[i];
            }
        }
    }
    urlparam = urlparam.split("%20").join(" ");
    return urlparam;
}

function GetParameterValuesName(param) {
    var urlparam = '';
    var isfirst = true;
    var url = window.location.href.slice(window.location.href.indexOf('?') + 1).split('=');
    for (var i = 1; i < url.length; i++) {
        if (isfirst == true) {
            var urlparam = urlparam + url[i];
            isfirst = false;
        } else {
            var urlparam = urlparam + '=' + url[i];
        }
    }
    return url[0];
}


function RefrenceNo() {
    jquery_1_12_1("#divreference").dialog({
        resizable: false,
        dialogClass: "DivSaveSucc1",
        height: "auto",
        width: jquery_1_12_1(window).width() > 600 ? '60%' : '300',
        modal: true
    });
}

function AddClas(Data) {
    var data = [];
    data = Data.className.split(' ');
    jquery_1_11_3_min_p('.refDetail').removeClass('highlight');
    jquery_1_11_3_min_p('.' + data[1]).addClass('highlight');
}



function Subitted() {
    jquery_1_12_1("#DivSaveSucc").dialog({
        resizable: false,
        dialogClass: "DivSaveSucc1",
        height: "auto",
        width: jquery_1_12_1(window).width() > 600 ? '28%' : '300',
        modal: true
        //        buttons: {
        //            "Ok": function () {

        //              
        //                jquery_1_12_1(this).dialog("close");

        //            }

        //        }
    });
}

function DivTrans() {
    jquery_1_12_1("#DivTrans").dialog({
        resizable: false,
        dialogClass: "DivSaveSucc1",
        height: "auto",
        width: jquery_1_12_1(window).width() > 600 ? '28%' : '300',
        modal: true
    });
}
var a = ['', 'One ', 'Two ', 'Three ', 'Four ', 'Five ', 'Six ', 'Seven ', 'Eight ', 'Nine ', 'Ten ', 'Eleven ', 'Twelve ', 'Thirteen ', 'Fourteen ', 'Fifteen ', 'Sixteen ', 'Seventeen ', 'Eighteen ', 'Nineteen '];
var b = ['', '', 'Twenty', 'Thirty', 'Forty', 'Fifty', 'Sixty', 'Seventy', 'Eighty', 'Ninety'];

function inWords(num) {
    if ((num = num.toString()).length > 9) return 'overflow';
    n = ('000000000' + num).substr(-9).match(/^(\d{2})(\d{2})(\d{2})(\d{1})(\d{2})$/);
    if (!n) return;
    var str = '';
    str += (n[1] != 0) ? (a[Number(n[1])] || b[n[1][0]] + ' ' + a[n[1][1]]) + 'Crore ' : '';
    str += (n[2] != 0) ? (a[Number(n[2])] || b[n[2][0]] + ' ' + a[n[2][1]]) + 'Lakh ' : '';
    str += (n[3] != 0) ? (a[Number(n[3])] || b[n[3][0]] + ' ' + a[n[3][1]]) + 'Thousand ' : '';
    str += (n[4] != 0) ? (a[Number(n[4])] || b[n[4][0]] + ' ' + a[n[4][1]]) + 'Hundred ' : '';
    str += (n[5] != 0) ? ((str != '') ? '' : '') + (a[Number(n[5])] || b[n[5][0]] + ' ' + a[n[5][1]]) : '';
    return str + 'Only ';
}

function CheckRefNo() {
    var Refrence = jquery_1_11_3_min_p('#txtRefrence1').val();
    var Arr = [];
    Arr = Refrence.split('-');
    if (Arr.length == 2) {
        if (Arr[0].length == 10) {
            var IsVar = Refrence.substring(0, 5);
            var IsNumber = Refrence.substring(5, 10);

            if (isLetter(IsVar)) { } else {
                jquery_1_11_3_min_p('#txtRefrence1').addClass('validate');
                jquery_1_11_3_min_p('#txtRefrence1').val('');
                jquery_1_11_3_min_p('#txtRefrence1').attr("placeholder", "Invalid Refrence No !!!");
            }

            if (!isNaN(IsNumber)) { } else {
                jquery_1_11_3_min_p('#txtRefrence1').addClass('validate');
                jquery_1_11_3_min_p('#txtRefrence1').val('');
                jquery_1_11_3_min_p('#txtRefrence1').attr("placeholder", "Invalid Refrence No !!!");
            }
        } else {
            jquery_1_11_3_min_p('#txtRefrence1').addClass('validate');
            jquery_1_11_3_min_p('#txtRefrence1').val('');
            jquery_1_11_3_min_p('#txtRefrence1').attr("placeholder", "Invalid Refrence No !!!");
        }
        if (Arr[1].length == 9) {
            if (!isNaN(Arr[1])) { } else {
                jquery_1_11_3_min_p('#txtRefrence1').addClass('validate');
                jquery_1_11_3_min_p('#txtRefrence1').val('');
                jquery_1_11_3_min_p('#txtRefrence1').attr("placeholder", "Invalid Refrence No !!!");
            }
        } else {
            jquery_1_11_3_min_p('#txtRefrence1').addClass('validate');
            jquery_1_11_3_min_p('#txtRefrence1').val('');
            jquery_1_11_3_min_p('#txtRefrence1').attr("placeholder", "Invalid Refrence No !!!");
        }
    } else {
        jquery_1_11_3_min_p('#txtRefrence1').addClass('validate');
        jquery_1_11_3_min_p('#txtRefrence1').val('');
        jquery_1_11_3_min_p('#txtRefrence1').attr("placeholder", "Invalid Refrence No !!!");
    }
}


function isLetter(s) {
    return s.match("^[a-zA-Z\(\)]+$");
}

function CallBtnEMandateNo() {
    if (jquery_1_11_3_min_p('input:radio[name=radio1]:checked').val() == 'YN') {
        jquery_1_12_1("#confirmbankformpopup").dialog("close");
        jquery_1_12_1("#ContentPlaceHolder1_btnEemandate").css("display", "block");
        jquery_1_11_3_min_p("#ContentPlaceHolder1_btnEemandate").attr('disabled', false);
    } else if (jquery_1_11_3_min_p('input:radio[name=radio1]:checked').val() == 'YE') {
        //  jquery_1_11_3_min_p("#preloader_1").css('display', 'block');
        // jquery_1_11_3_min_p('#BtnYes').trigger("click");
        jquery_1_11_3_min_p("#preloader_consent").css('display', 'block');
        jquery_1_11_3_min_p("#overlay_consent").css('visibility', 'visible');
        jquery_1_11_3_min_p(".TestMandate").trigger("click");
    }


}

function CallBtnEMandate() {
    jquery_1_11_3_min_p("#Div23").css('display', 'block');
    jquery_1_11_3_min_p("#Div24").css('display', 'block');
    jquery_1_11_3_min_p("#btnPhysicalMandate").css('display', 'none');
    jquery_1_11_3_min_p('#ContentPlaceHolder1_lblmandatemsg').text('');
    if (jquery_1_11_3_min_p('#ContentPlaceHolder1_txtentityaccountvalidationflag').val() == "0") {
        jquery_1_11_3_min_p('#ContentPlaceHolder1_txtEmandatestatus').val(1);
        CheckEmandate();
        jquery_1_11_3_min_p("#btnFirstVal").click();
    } else if (jquery_1_11_3_min_p('#ContentPlaceHolder1_txtentityaccountvalidationflag').val() == "1") {
        jquery_1_11_3_min_p.ajax({
            type: "POST",
            contentType: "application/json; charset=utf-8",
            url: "../WebServices/BankForm.asmx/UpdateEmandate",
            data: "{'mandateId':'" + jquery_1_11_3_min_p('#lblmandateId').text() + "'}",
            dataType: "json",
            async: false,
            success: function (result) {
                var jsonData = eval(result.d.Table1);
                jquery_1_11_3_min_p('#ContentPlaceHolder1_txtEmandatestatus').val(1);
                CheckEmandate();
                jquery_1_11_3_min_p("#btnFirstVal").click();

            }
        })
    }


}




function CallBtnPhysical() {
    if (jquery_1_11_3_min_p('#ContentPlaceHolder1_btnEemandate').css('display') == 'none') {
        jquery_1_11_3_min_p("#ContentPlaceHolder1_btnEemandate").css('display', 'none');
        var UserId = jquery_1_11_3_min_p('#ContentPlaceHolder1_lblUserid').html();
        jquery_1_11_3_min_p.ajax({
            type: "POST",
            contentType: "application/json; charset=utf-8",
            url: "../WebServices/BankForm.asmx/UpdatePhysical",
            data: "{'mandateId':'" + jquery_1_11_3_min_p('#lblmandateId').text() + "','ISSendEmailCustomer':'" + jquery_1_11_3_min_p('#ContentPlaceHolder1_lblISSendEmailCustomer').text() + "','UserId':'" + UserId + "'}",
            dataType: "json",
            async: false,
            success: function (result) {


                //             jquery_1_11_3_min_p("#ARequset").css('display', 'none');
                jquery_1_11_3_min_p("#ContentPlaceHolder1_AResponse").css('display', 'none');




                jquery_1_11_3_min_p("#btnScanHalf").css('display', 'none');
                jquery_1_11_3_min_p("#btnScan").css('display', 'block');
                jquery_1_11_3_min_p("#btnMandatePrint").css('display', 'block'); //Traverse
                if (jquery_1_11_3_min_p('#ContentPlaceHolder1_lblOverMandate').html().toUpperCase() == "TRUE") {
                    jquery_1_11_3_min_p("#btnOldOverPrintMandate").css('display', 'block');
                    jquery_1_11_3_min_p("#btnBlankMandateprint").css('display', 'block');
                } else {
                    jquery_1_11_3_min_p("#btnOldOverPrintMandate").css('display', 'none');
                    jquery_1_11_3_min_p("#btnBlankMandateprint").css('display', 'none');
                }


                // jquery_1_11_3_min_p('#singdoutri').dialog(show);
                // window.open("../CreatePdf.aspx?id=" + jquery_1_11_3_min_p('#lblmandateId').text() + "", '_blank');//

                CheckQRAndLogo();
            },
            error: function (result) {
                alert("Error");
            }
        })
    } else {
        DIVPhysical();
    }


}


function ChkCancel() {
    jquery_1_12_1("#DivCancel").dialog({
        resizable: false,
        height: "auto",
        width: jquery_1_12_1(window).width() > 600 ? '40%' : '300',

        dialogClass: "DivSaveSucc1",
        modal: true
    });
}


function CancelMandate() {
    var mandateId = jquery_1_11_3_min_p('#lblmandateId').text();
    var UserId = jquery_1_11_3_min_p('#ContentPlaceHolder1_lblUserid').html();
    jquery_1_11_3_min_p.ajax({
        type: "POST",
        contentType: "application/json; charset=utf-8",
        url: "../WebServices/BankForm.asmx/UpdateIsCancel",
        data: "{'mandateId':'" + mandateId + "','UserId':'" + UserId + "'}",
        dataType: "json",
        success: function (data) {
            jquery_1_11_3_min_p("#btnFirstVal").css("display", "none");//Avinash:
            jquery_1_11_3_min_p("#btnSave").css("display", "none");//Avinash:
            jquery_1_11_3_min_p("#btnSecVal").css("display", "none");//Avinash:
            jquery_1_11_3_min_p("#btnEditDisable").css("display", "none");//Avinash:

            jquery_1_11_3_min_p("#btnScanHalf").attr('disabled', true);
            jquery_1_11_3_min_p("#btnScan").attr('disabled', true);
            jquery_1_11_3_min_p("#btnMandatePrint").attr('disabled', true);
            jquery_1_11_3_min_p("#btnOldOverPrintMandate").attr('disabled', true);
            jquery_1_11_3_min_p("#btnBlankMandateprint").attr('disabled', true);
            jquery_1_11_3_min_p("#btnScanPrint").attr('disabled', true);
            jquery_1_11_3_min_p("#ContentPlaceHolder1_btnEemandate").attr('disabled', true);
            jquery_1_11_3_min_p("#btnPhysicalMandate").attr('disabled', true);
            jquery_1_11_3_min_p("#btnEditDisable").attr('disabled', true);
            jquery_1_11_3_min_p("#btnSecVal").attr('disabled', true);
            jquery_1_11_3_min_p("#btnFirstVal").attr('disabled', true);
            jquery_1_12_1("#DivCancel").dialog("close");
            jquery_1_11_3_min_p('#lblData').text('Mandate Cancel Successfully.');
            admin();
        }
    });


}




//function CallDirectBtnEMandate()
//{
// jquery_1_12_1("#DIVEMandate").dialog("close");
//var Returnvlue=false;

// jquery_1_11_3_min_p.ajax({
//        type: "POST",
//        contentType: "application/json; charset=utf-8",
//        url: "../WebServices/BankForm.asmx/UpdateEmandate",
//        data: "{'mandateId':'" + jquery_1_11_3_min_p('#lblmandateId').text() + "'}",
//        dataType: "json",
//        async: false,
//        success: function (result) {
//        var ISDIVSHOW=false;

//          if(result.d.Table[0].AmountRupees <= result.d.Table1[0].MaximumENach)
//        { 
//        
//             jquery_1_11_3_min_p("#imgAounttick").css('display', 'block');
//                 jquery_1_11_3_min_p("#imgAmountCross").css('display', 'none');
//         }else{
//          jquery_1_11_3_min_p("#imgAounttick").css('display', 'none');
//                 jquery_1_11_3_min_p("#imgAmountCross").css('display', 'block');
//         ISDIVSHOW=true;
////        jquery_1_11_3_min_p('#lblData').text('You cannot Proceed for E-sign because your amount is greater than ' +result.d.Table1[0].MaximumENach);
////                admin();
//        }
//         
//       if(result.d.Table[0].Customer2.trim() == '')
//        { 
//           jquery_1_11_3_min_p("#imgtickjoint").css('display', 'block');
//                 jquery_1_11_3_min_p("#imgcrossjoint").css('display', 'none');
//         }else{
////        jquery_1_11_3_min_p('#lblData').text('You cannot Proceed for E-sign for joint account');
////                admin();
// jquery_1_11_3_min_p("#imgtickjoint").css('display', 'none');
//                 jquery_1_11_3_min_p("#imgcrossjoint").css('display', 'block');
//   ISDIVSHOW=true;
//        }


//          if(result.d.Table[0].result == "1")
//        {
//        jquery_1_11_3_min_p("#blbtoDate").css('display', 'none');
//                jquery_1_11_3_min_p("#imgTodatetick").css('display', 'block');
//                 jquery_1_11_3_min_p("#ingtodatecross").css('display', 'none');
//            }else{
//               ISDIVSHOW=true;
//                jquery_1_11_3_min_p("#blbtoDate").css('display', 'block');
//                jquery_1_11_3_min_p("#imgTodatetick").css('display', 'none');
//                 jquery_1_11_3_min_p("#ingtodatecross").css('display', 'block');
//        }

//        if(ISDIVSHOW==true)
//        {
//        
//        MsgDiv();
//        }else{
//         Returnvlue=true;
//           jquery_1_11_3_min_p(".overlay").css('visibility', 'visible');
//      jquery_1_11_3_min_p("#preloader_1").css('display', 'block');
//         
//        }
//         },
//        error: function (result) {
//           
//        }
//    })



//    return Returnvlue;
//}




function CallDirectBtnPhysical() {

    jquery_1_12_1("#DIVPhysical").dialog("close");
    jquery_1_11_3_min_p("#ContentPlaceHolder1_btnEemandate").css('display', 'none');
    var UserId = jquery_1_11_3_min_p('#ContentPlaceHolder1_lblUserid').html();
    jquery_1_11_3_min_p.ajax({
        type: "POST",
        contentType: "application/json; charset=utf-8",
        url: "../WebServices/BankForm.asmx/UpdatePhysical",
        data: "{'mandateId':'" + jquery_1_11_3_min_p('#lblmandateId').text() + "','ISSendEmailCustomer':'" + jquery_1_11_3_min_p('#ContentPlaceHolder1_lblISSendEmailCustomer').text() + "','UserId':'" + UserId + "'}",
        dataType: "json",
        async: false,
        success: function (result) {


            //             jquery_1_11_3_min_p("#ARequset").css('display', 'none');
            jquery_1_11_3_min_p("#ContentPlaceHolder1_AResponse").css('display', 'none');




            jquery_1_11_3_min_p("#btnScanHalf").css('display', 'none');
            jquery_1_11_3_min_p("#btnScan").css('display', 'block');
            jquery_1_11_3_min_p("#btnMandatePrint").css('display', 'block');//traverse
            if (jquery_1_11_3_min_p('#ContentPlaceHolder1_lblOverMandate').html().toUpperCase() == "TRUE") {
                jquery_1_11_3_min_p("#btnOldOverPrintMandate").css('display', 'block');
                jquery_1_11_3_min_p("#btnBlankMandateprint").css('display', 'block');
            } else {
                jquery_1_11_3_min_p("#btnOldOverPrintMandate").css('display', 'none');
                jquery_1_11_3_min_p("#btnBlankMandateprint").css('display', 'none');
            }

            window.open("../CreatePdf.aspx?id=" + jquery_1_11_3_min_p('#lblmandateId').text() + "", '_blank');//
        },
        error: function (result) {
            alert("Error");
        }
    })



}


function GetLogoOrQR(mandateId) {
    // var mandateId=jquery_1_11_3_min_p('#ContentPlaceHolder1_lblMandateId').text();

    jquery_1_11_3_min_p.ajax({
        type: "POST",
        contentType: "application/json; charset=utf-8",
        url: "../WebServices/BankForm.asmx/GetQrLogo",
        data: "{'MandateId':'" + mandateId + "'}",
        dataType: "json",
        success: function (result) {
            var jsonData = eval(result.d.Table);

            var qrimagepath = jsonData[0].QRCodeImagePath;

            if (qrimagepath != "") {
                // jquery_1_11_3_min_p("#ContentPlaceHolder1_imgLogo").attr('src','/MandateQrcode/default.png');
                jquery_1_11_3_min_p("#ContentPlaceHolder1_imgLogo").attr('src', qrimagepath);


            } else {
                jquery_1_11_3_min_p("#ContentPlaceHolder1_imgLogo").attr('src', '/MandateQrcode/default.png');
            }

        },
        error: function (result) {

        }
    });

}




function CheckLogoOrQR() {
    var EntityId = jquery_1_11_3_min_p('#ContentPlaceHolder1_lblEntityId').text();
    var mandateId = jquery_1_11_3_min_p('#ContentPlaceHolder1_lblMandateId').text();

    jquery_1_11_3_min_p.ajax({
        type: "POST",
        contentType: "application/json; charset=utf-8",
        url: "../WebServices/BankForm.asmx/CheckQrLogo",
        data: "{'EntityId':'" + EntityId + "'}",
        dataType: "json",
        success: function (result) {
            var i = 0;

            var jsonData = eval(result.d.Table);
            if (jsonData[i].PRINTQR == true) {
                jquery_1_11_3_min_p("#ContentPlaceHolder1_imgLogo").attr('src', '/MandateQrcode/default.png');
            } else {
                //jquery_1_11_3_min_p("#ContentPlaceHolder1_imgLogo").attr('src', '/PdfLogoImage/logo.png');
                jquery_1_11_3_min_p("#ContentPlaceHolder1_imgLogo").attr('src', jsonData[i].ImagePath);
            }


            //             jquery_1_11_3_min_p('#txtTo').removeClass('validate');
            //             jquery_1_11_3_min_p('#txtTo').val( jquery_1_11_3_min_p('#txtTo2').val());

            jquery_1_11_3_min_p('#lblData').text('Date Updated Successfully.');
            jquery_1_12_1("#DateMandatoryESign").dialog("close");
            admin();
            jquery_1_11_3_min_p("#chkUntil").prop("checked", false);
        },
        error: function (result) {

        }
    });

}


function Updatemandatemode() {
    var physical = 0;
    var emandate = 0;
    if (jquery_1_11_3_min_p('input:radio[name="notacvalrbnetbanking"]').filter('[value="P"]').is(":checked") || jquery_1_11_3_min_p('input:radio[name="notacvalrbnetbanking"]').filter('[value="E"]').is(":checked")) {
        if (jquery_1_11_3_min_p('input:radio[name="notacvalrbnetbanking"]').filter('[value="P"]').is(":checked")) {
            physical = 1;
        }
        if (jquery_1_11_3_min_p('input:radio[name="notacvalrbnetbanking"]').filter('[value="E"]').is(":checked")) {
            emandate = 1;
        }
    } else {
        jquery_1_11_3_min_p('#ContentPlaceHolder1_lblmandatemsg').text('Please Select Mandate Mode');
    }
    // added by garima 07-02-2020
    if (physical != "0" || emandate != "0") {
        if (emandate == "1") {
            if (validateEmailAndPhone()) {

                jquery_1_11_3_min_p('#lblemailwarn').text("");


            }
            else {
                jquery_1_11_3_min_p('#lblemailwarn').text();
                return;
            }
        }
        // end
        var mandateId = jquery_1_11_3_min_p('#lblmandateId').text();
        jquery_1_11_3_min_p.ajax({
            type: "POST",
            contentType: "application/json; charset=utf-8",
            url: "../WebServices/BankForm.asmx/UpdateMandateMode",
            data: "{'MandateId':'" + mandateId + "','Isphysical':'" + physical + "','IsEmandate':'" + emandate + "'}",
            dataType: "json",
            async: false,
            success: function (result) {
                Isfirstvalidation();
                var i = 0;
                var jsonData = eval(result.d.Table);
                if (jsonData[i].IsPhysical == true) {
                    //jquery_1_11_3_min_p("#btnPhysicalMandate").css('display', 'block'); // commented by garima 07-02-2020
                    jquery_1_11_3_min_p("#btnSecVal").css('display', 'block');
                    jquery_1_11_3_min_p("#btnSecVal").attr('disabled', true);
                    jquery_1_11_3_min_p("#btnFirstVal").css('display', 'block');
                    jquery_1_11_3_min_p("#btnFirstVal").attr('disabled', true);
                    jquery_1_11_3_min_p("#btnMandatePrint").css('display', 'block');//Avinash
                    jquery_1_11_3_min_p("#btnScan").css('display', 'block');//Avinash

                }

                if (jsonData[i].enach == true) {
                    jquery_1_11_3_min_p("#ContentPlaceHolder1_btnEemandate").css('display', 'block');
                    jquery_1_11_3_min_p("#btnSecVal").css('display', 'block');
                    jquery_1_11_3_min_p("#btnSecVal").attr('disabled', true);
                    jquery_1_11_3_min_p("#btnFirstVal").css('display', 'block');
                    jquery_1_11_3_min_p("#btnFirstVal").attr('disabled', true);
                    jquery_1_11_3_min_p("#btnMandatePrint").css('display', 'none');//Avinash
                    jquery_1_11_3_min_p("#btnScan").css('display', 'none');//Avinash
                }

                jquery_1_11_3_min_p("#notacvalrdphysical").prop("checked", false);
                jquery_1_11_3_min_p("#notacvalrdemandate").prop("checked", false);
                jquery_1_12_1('#UnSuccess').dialog("close");
            }
        })
    } else {
        jquery_1_11_3_min_p('#ContentPlaceHolder1_lblmandatemsg').text('Please Select Mandate Mode');
    }


}



function ValueAssign() {

    jquery_1_11_3_min_p("#txtutilityCode").val(kendo_all_min_js("#txtSponsorCode").data("kendoDropDownList").value());
}

function OpenFundPopUp() {
    //  jquery_1_11_3_min_p.ajax({
    //        type: "POST",
    //        contentType: "application/json; charset=utf-8",
    //        url: "../WebServices/BankForm.asmx/GetBankAmount",
    //        data: "{'mandateId':'" + jquery_1_11_3_min_p('#lblmandateId').text() + "'}",
    //        dataType: "json",
    //        async: false,
    //        success: function (result) {

    //            var i = 0;
    //            var jsonData = eval(result.d.Table);
    //              jquery_1_11_3_min_p('#lblAmount').text(jsonData[i].amount)

    //            jquery_1_11_3_min_p('#lblBankName').text(jquery_1_11_3_min_p('#txtBankName').val());

    //            if(jquery_1_11_3_min_p('#txtIFSC').val().trim()=='')
    //            {
    //             jquery_1_11_3_min_p('#lblIFSCPopUp').text(jquery_1_11_3_min_p('#txtMICR').val());
    //            }else{
    //             jquery_1_11_3_min_p('#lblIFSCPopUp').text(jquery_1_11_3_min_p('#txtIFSC').val());
    //            }
    //           
    //            jquery_1_11_3_min_p('#lblAccount').text(jquery_1_11_3_min_p('#txtAcNo').val());
    //            jquery_1_11_3_min_p('#lblCustomerName').text(jquery_1_11_3_min_p('#txtCust1').val());

    //        }
    //        });
    jquery_1_11_3_min_p("#ContentPlaceHolder1_IframeCallFinalTransfer").attr("src", "../Payment/FinalTransfer.aspx?id=" + jquery_1_11_3_min_p('#lblmandateId').text() + "");


    jquery_1_11_3_min_p('#Loaderrr').css('display', 'block');
    jquery_1_11_3_min_p("#ContentPlaceHolder1_IframeCallFinalTransfer").css('display', 'none');

    Fund();
}

//function CheckLogoOrQR(){
// var EntityId = jquery_1_11_3_min_p('#ContentPlaceHolder1_lblEntityId').text();

//  jquery_1_11_3_min_p.ajax({
//            type: "POST",
//            contentType: "application/json; charset=utf-8",
//            url: "../WebServices/BankForm.asmx/UpdateToDate",
//            data: "{'mandateId':'" + mandateId + "','UserId':'" + UserId + "','ToDate':'" + ToDate + "'}",
//            dataType: "json",
//            success: function (data) {
//            
//             jquery_1_11_3_min_p('#txtTo').removeClass('validate');
//             jquery_1_11_3_min_p('#txtTo').val( jquery_1_11_3_min_p('#txtTo2').val());
//             
//               jquery_1_11_3_min_p('#lblData').text('Date Updated Successfully.');
//                jquery_1_12_1("#DateMandatoryESign").dialog("close");
//                admin();
//                  jquery_1_11_3_min_p("#chkUntil").prop("checked", false);
//            }
//            });
//            }
//}

function ChecKmandate() {
    var flag = true;
    var mandateId = jquery_1_11_3_min_p('#lblmandateId').text();
    jquery_1_11_3_min_p.ajax({
        type: "POST",
        contentType: "application/json; charset=utf-8",
        url: "../WebServices/BankForm.asmx/ChecKmandate",
        data: "{'mandateId':'" + mandateId + "'}",
        dataType: "json",
        async: false,
        success: function (data) {
            var jsondata = data.d;
            if (jsondata.Table.length == 0) {
                flag = true;
            } else {
                if (jsondata.Table[0].JPGPath != "" && jsondata.Table[0].TIPPath) {
                    flag = false;
                    editpopmandate();
                }
            }
        }
    });

    return flag;
}

function RemoveImage() {
    var mandateId = jquery_1_11_3_min_p('#lblmandateId').text();
    jquery_1_11_3_min_p.ajax({
        type: "POST",
        contentType: "application/json; charset=utf-8",
        url: "../WebServices/BankForm.asmx/RemoveImage",
        data: "{'mandateId':'" + mandateId + "'}",
        dataType: "json",
        async: false,
        success: function (data) {
            var jsondata = data.d;

        }
    });


}

function UpdateEmailAndPhone() {
    var flag = true;
    var MobileNo = 0;
    var EmailId = "";
    var MandateId = jquery_1_11_3_min_p('#lblmandateId').text();
    if (jquery_1_11_3_min_p('#txtmobileemandate').val() == "") {
        MobileNo = jquery_1_11_3_min_p('#lblmobile').text();
    }
    else {
        MobileNo = jquery_1_11_3_min_p('#txtmobileemandate').val();
    }
    if (jquery_1_11_3_min_p('#txtemailemandate').val() == "") {
        EmailId = jquery_1_11_3_min_p('#lblemail').text();
    }
    else {
        EmailId = jquery_1_11_3_min_p('#txtemailemandate').val();
    }
    var EmandateType = "";
    if (jquery_1_11_3_min_p('#rbnetbanking').is(':checked')) {
        EmandateType = "N";
    }
    else {
        EmandateType = "D";
    }
    jquery_1_11_3_min_p.ajax({
        type: "POST",
        contentType: "application/json; charset=utf-8",
        url: "../WebServices/BankForm.asmx/UpdateEmailAndPhone",
        data: "{'MandateId':'" + MandateId + "','MobileNo':'" + MobileNo + "','EmailId':'" + EmailId + "','EmandateType':'" + EmandateType + "'}",
        dataType: "json",
        async: false,
        success: function (data) {
            var jsondata = data.d;

        }
    });
}



function CheckQRAndLogo() {
    var EntityId = jquery_1_11_3_min_p('#ContentPlaceHolder1_lblEntityId').text();
    var mandateId = jquery_1_11_3_min_p('#ContentPlaceHolder1_lblMandateId').text();

    jquery_1_11_3_min_p.ajax({
        type: "POST",
        contentType: "application/json; charset=utf-8",
        url: "../WebServices/BankForm.asmx/CheckQrLogo",
        data: "{'EntityId':'" + EntityId + "'}",
        dataType: "json",
        success: function (result) {
            var i = 0;
            var type = 0;
            var jsonData = eval(result.d.Table);
            if (jsonData[i].PRINTQR == true && jsonData[i].PRINTLOGO == true) {
                dvqrlogopopup();

            }
            else if (jsonData[i].PRINTQR == true) {
                type = 1;
                window.open("../CreatePdf.aspx?id=" + jquery_1_11_3_min_p('#lblmandateId').text() + "&type=" + type + "", '_blank');
            }
            else {
                type = 2;
                window.open("../CreatePdf.aspx?id=" + jquery_1_11_3_min_p('#lblmandateId').text() + "&type=" + type + "", '_blank');
            }


        },
        error: function (result) {

        }
    });

}

function editmobile() {
    var mobileno = jquery_1_11_3_min_p('#lblmobile').text().trim();
    jquery_1_11_3_min_p('#lblmobile').css("display", "none");
    jquery_1_11_3_min_p('#txtmobileemandate').val(mobileno);
    jquery_1_11_3_min_p('#txtmobileemandate').css("display", "block");
}

function editemail() {
    var emailid = jquery_1_11_3_min_p('#lblemail').text().trim();
    jquery_1_11_3_min_p('#lblemail').css("display", "none");
    jquery_1_11_3_min_p('#txtemailemandate').val(emailid);
    jquery_1_11_3_min_p('#txtemailemandate').css("display", "block");
}


// added by garima 07-02-2020
function checkMandateType(jsonData) {
    var physical = jsonData[0].IsPhysical;
    var enach = jsonData[0].Enach;
    if (physical != 0) {
        jquery_1_12_1("#btnPhysicalMandate").css("display", "none");
        jquery_1_11_3_min_p("#Divmandatemode").css('display', 'block');
        jquery_1_11_3_min_p("#notacvalrdphysical").css('display', 'block');
        jquery_1_11_3_min_p("#emandatecheck").css('display', 'none');
        jquery_1_11_3_min_p("#notacvalrdphysical").prop("checked", true);
        jquery_1_11_3_min_p("#debitnetbank").css('display', 'none');
        jquery_1_11_3_min_p("#netbanking").css('display', 'none');
        jquery_1_11_3_min_p("#netbankingshow").css('display', 'none');
        jquery_1_11_3_min_p("#debitbankingshow").css('display', 'none');
        jquery_1_12_1("#ContentPlaceHolder1_btnEemandate").css("display", "none");
    }
    else if (enach != 0) {
        jquery_1_12_1("#ContentPlaceHolder1_btnEemandate").css("display", "block");
        jquery_1_11_3_min_p("#Divmandatemode").css('display', 'block');
        jquery_1_11_3_min_p("#physicalcheck").css('display', 'none');
        jquery_1_11_3_min_p("#notacvalrdemandate").css('display', 'block');
        jquery_1_11_3_min_p("#notacvalrdemandate").prop("checked", true);
        if (jsonData[0].EMandatetype == "N") {

            jquery_1_11_3_min_p("#rbnetbanking").prop("checked", true);
            jquery_1_11_3_min_p('#ContentPlaceHolder1_txtEmandatestatus').val(1);

            CheckEmandate();
            jquery_1_12_1("#ContentPlaceHolder1_btnEemandate").css("display", "block");
        }
        else if (jsonData[0].EMandatetype == "D") {
            jquery_1_11_3_min_p("#rbdebitcard").prop("checked", true);
            jquery_1_11_3_min_p('#ContentPlaceHolder1_txtEmandatestatus').val(1);
            CheckEmandate();
            jquery_1_12_1("#ContentPlaceHolder1_btnEemandate").css("display", "block");
        }
        else {
            jquery_1_11_3_min_p("#rbdebitcard").prop("checked", false);
            jquery_1_11_3_min_p("#rbnetbanking").prop("checked", false);
        }
        jquery_1_11_3_min_p("#debitnetbank").css('display', 'block');
        jquery_1_11_3_min_p("#netbanking").css('display', 'block');
        jquery_1_11_3_min_p("#netbankingshow").css('display', 'block');
        jquery_1_11_3_min_p("#debitbankingshow").css('display', 'block');
    }
}

