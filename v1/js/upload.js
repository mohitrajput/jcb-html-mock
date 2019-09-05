(function($) {
    "use strict";

    // on ready function
    jQuery(document).ready(function($) {
        var $this = $(window);



        $(document).ready(function() {
            // Basic
            $('.dropify').dropify();

            // Translated
            $('.dropify-fr').dropify({
                messages: {
                    default: 'Glissez-déposez un fichier ici ou cliquez',
                    replace: 'Glissez-déposez un fichier ou cliquez pour remplacer',
                    remove: 'Supprimer',
                    error: 'Désolé, le fichier trop volumineux'
                }
            });

            // Used events
            var drEvent = $('#input-file-events').dropify();

            drEvent.on('click dropify.beforeClear', function(event, element) {
                return confirm("Do you really want to delete \"" + element.file.name + "\" ?");
            });

            drEvent.on('click dropify.afterClear', function(event, element) {
                alert('File deleted');
            });

            drEvent.on('click dropify.errors', function(event, element) {
                console.log('Has Errors');
            });

            var drDestroy = $('#input-file-to-destroy').dropify();
            drDestroy = drDestroy.data('dropify')
            $('#toggleDropify').on('click', function(e) {
                e.preventDefault();
                if (drDestroy.isDropified()) {
                    drDestroy.destroy();
                } else {
                    drDestroy.init();
                }
            })
        });



        //--------upload img file ----------//
        var fileTypes = ['pdf', 'docx', 'rtf', 'jpg', 'jpeg', 'png', 'txt']; //acceptable file types
        function readURL(input) {
            if (input.files && input.files[0]) {
                var extension = input.files[0].name.split('.').pop().toLowerCase(), //file extension from input file
                    isSuccess = fileTypes.indexOf(extension) > -1; //is extension in acceptable types

                if (isSuccess) { //yes
                    var reader = new FileReader();
                    reader.onload = function(e) {
                        if (extension == 'pdf') {
                            $(input).closest('.fileUpload').find(".icon").attr('src', 'https://image.flaticon.com/icons/svg/179/179483.svg');
                        } else if (extension == 'docx') {
                            $(input).closest('.fileUpload').find(".icon").attr('src', 'https://image.flaticon.com/icons/svg/281/281760.svg');
                        } else if (extension == 'rtf') {
                            $(input).closest('.fileUpload').find(".icon").attr('src', 'https://image.flaticon.com/icons/svg/136/136539.svg');
                        } else if (extension == 'png') {
                            $(input).closest('.fileUpload').find(".icon").attr('src', 'https://image.flaticon.com/icons/svg/136/136523.svg');
                        } else if (extension == 'jpg' || extension == 'jpeg') {
                            $(input).closest('.fileUpload').find(".icon").attr('src', 'https://image.flaticon.com/icons/svg/136/136524.svg');
                        } else if (extension == 'txt') {
                            $(input).closest('.fileUpload').find(".icon").attr('src', 'https://image.flaticon.com/icons/svg/136/136538.svg');
                        } else {
                            //console.log('here=>'+$(input).closest('.uploadDoc').length);
                            $(input).closest('.uploadDoc').find(".docErr").slideUp('slow');
                        }
                    }

                    reader.readAsDataURL(input.files[0]);
                } else {
                    //console.log('here=>'+$(input).closest('.uploadDoc').find(".docErr").length);
                    $(input).closest('.uploadDoc').find(".docErr").fadeIn();
                    setTimeout(function() {
                        $('.docErr').fadeOut('slow');
                    }, 9000);
                }
            }
        }
        $(document).ready(function() {

            $(document).on('change', '.up', function() {
                var id = $(this).attr('id'); /* gets the filepath and filename from the input */
                var profilePicValue = $(this).val();
                var fileNameStart = profilePicValue.lastIndexOf('\\'); /* finds the end of the filepath */
                profilePicValue = profilePicValue.substr(fileNameStart + 1).substring(0, 20); /* isolates the filename */
                //var profilePicLabelText = $(".upl"); /* finds the label text */
                if (profilePicValue != '') {
                    //console.log($(this).closest('.fileUpload').find('.upl').length);
                    $(this).closest('.fileUpload').find('.upl').html(profilePicValue); /* changes the label text */
                }
            });

            $(".btn-new").on('click', function() {
                $("#uploader").append('<div class="row uploadDoc"><div class="col-sm-3"><div class="fileUpload btn btn-orange">  <i class="fa fa-cloud-upload"></i><span class="upl" class="upload">Upload document</span><input type="file" class="upload up" class="up" onchange="readURL(this);" /></div></div><div class="col-sm-8"><input type="text" class="form-control" name="" placeholder="Note"></div><div class="col-sm-1"><a class="btn-check"><i class="fa fa-times"></i></a></div></div>');
            });

            $(document).on("click", "a.btn-check", function() {
                if ($(".uploadDoc").length > 1) {
                    $(this).closest(".uploadDoc").remove();
                } else {
                    alert("You have to upload at least one document.");
                }
            });
        });




        // ------ captcha js ------//
        var c = document.getElementById("canvas");
        var ctx = c.getContext("2d");

        //Default numbers displayed.
        var numb = [1, 2, 3, 4];

        //Grabs a number 1-10 randomly to display.
        function num() {
            numb[0] = Math.floor(Math.random() * 10);
            numb[1] = Math.floor(Math.random() * 10);
            numb[2] = Math.floor(Math.random() * 10);
            numb[3] = Math.floor(Math.random() * 10);
        };

        //The amount of space each number needs on the canvas.
        var sets = [80, 180, 280, 380];

        //sts = "side to side."  It's where the numbers are on the horizontal axis.
        function sts() {
            sets[0] = Math.random() * (80 - 10) + 10;
            sets[1] = Math.random() * (180 - 100) + 100;
            sets[2] = Math.random() * (280 - 200) + 200;
            sets[3] = Math.random() * (370 - 300) + 300;
        };

        //Default for where the numbers are on a vertical axis.
        var hei = [95, 95, 95, 95];

        function height() {
            hei[0] = Math.random() * (95 - 30) + 30;
            hei[1] = Math.random() * (95 - 30) + 30;
            hei[2] = Math.random() * (95 - 30) + 30;
            hei[3] = Math.random() * (95 - 30) + 30;
        };

        //The final step, calculates all number positions and displays them correctly.
        function captcha() {
            ctx.font = " italic 40px Arial";
            ctx.fillStyle = "#111";
            ctx.fillText(numb[0], sets[0], hei[0]);
            ctx.fillText(numb[1], sets[1], hei[1]);
            ctx.fillText(numb[2], sets[2], hei[2]);
            ctx.fillText(numb[3], sets[3], hei[3]);
        };

        //This is the function that's called on load and displays the numbers the first time.  This is also used for the refresh button.
        function resetCanvas() {
            num();
            height();
            sts();
            captcha();
            //design();
        };

        resetCanvas();

        //Gets rid of everything on the canvas.
        function clear() {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            $(".input").val("");
        };

        //Refresh button
        $(".refresh").click(function() {
            clear();
            resetCanvas();
        })


        //This checks if the numbers that were entered into the form are correct and displays the correct message.  If correct, the canvas is automatically refreshed.
        $(".submit2").click(function() {
            var numcheck = Number($(".input").serialize().replace("input=", ''));
            if (numcheck === (numb[0] * 1000) + (numb[1] * 100) + (numb[2] * 10) + (numb[3])) {
                $(".test").text("You are correct!");
                setTimeout(function() {
                    $(".test").text("");
                    clear();
                    resetCanvas();
                }, 2000);
            } else {
                $(".test").text("You are incorrect!");
                setTimeout(function() { $(".test").text("") }, 2000);
            };
        });


        // -------- multiple js ---------//

        var SampleJSONData2 = [{
            id: 17,
            title: ' 1 '
        }, {
            id: 11,
            title: ' 2 '
        }, {
            id: 21,
            title: ' 3 '
        }, {
            id: 31,
            title: ' 4 '
        }, {
            id: 41,
            title: ' 5 '
        }, {
            id: 51,
            title: ' 6 '
        }, {
            id: 52,
            title: ' 7 '
        }, {
            id: 53,
            title: ' 8 '
        }, {
            id: 54,
            title: ' 9 '
        }];
        var SampleJSONData = [{
            id: 0,
            title: 'Education'
        }, {
            id: 1,
            title: 'Education 2',
            subs: [{
                id: 10,
                title: 'Education  1'
            }, {
                id: 11,
                title: 'Education 2'
            }, {
                id: 12,
                title: 'Education 3'
            }]
        }, {
            id: 2,
            title: 'Education 3'
        }, {
            id: 3,
            title: 'Education 4'
        }, {
            id: 5,
            title: 'Education 5',
            subs: [{
                id: 101,
                title: 'Education  1'
            }, {
                id: 111,
                title: 'Education 2'
            }, {
                id: 121,
                title: 'Education 3'
            }]
        }];
        var comboTree1, comboTree2;

        jQuery(document).ready(function($) {

            comboTree1 = $('#justAnInputBox').comboTree({
                source: SampleJSONData,
                isMultiple: true
            });

            comboTree1 = $('#justAnInputBox1').comboTree({
                source: SampleJSONData,
                isMultiple: true
            });


            comboTree2 = $('#justAnotherInputBox').comboTree({
                source: SampleJSONData2,
                isMultiple: true
            });
        });


        //---- datepicker js ----------//
        $(function() {
            $(".datepicker").datepicker({
                format: 'dd/mm/yyyy',
                autoclose: true,
                todayHighlight: true
            })
        });


        //-------  tab slider js ------//
        $(".emp_tab_slider .nav-tabs a").click(function() {
            var position = $(this).parent().position();
            var width = $(this).parent().width();
            $(".slider").css({
                "left": +position.left,
                "width": width
            });
        });
        var actWidth = $(".emp_tab_slider .nav-tabs .active").width();
        var actPosition = $(".emp_tab_slider .nav-tabs .active").position();
        $(".slider").css({
            "left": +actPosition.left,
            "width": actWidth
        });

        //***------comment double hide show------***//
        $(document).ready(function() {
            $(".comment_hide").click(function() {
                $(".double_comment").show();
            });

        });

        //***------comment double hide show------***//
        $(document).ready(function() {
            $(".emp_btn_hide").click(function() {
                $(".double_comment").hide();
            });

        });

        $('.progressOne').on('inview', function(event, visible, visiblePartX, visiblePartY) {
            if (visible) {
                $.each($('div.progress-bar'), function() {
                    $(this).css('width', $(this).attr('aria-valuenow') + '%');
                });
                $(this).off('inview');
            }
        });




        $("#style-switcher .bottom a.settings").on('click', function(e) {
            e.preventDefault();
            var div = $("#style-switcher");
            if (div.css("right") === "-170px") {
                $("#style-switcher").animate({
                    right: "0px"
                });
            } else {
                $("#style-switcher").animate({
                    right: "-170px"
                });
            }
        });




    });
})();