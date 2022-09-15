$(document).ready(function(){
    $('input[type="radio"]').click(function(){
        var inputValue = $(this).attr("value");
        var targetBox = $("." + inputValue);
        $(".box").not(targetBox).hide();
        $(targetBox).show();
    });
});

document.addEventListener("click", function (e) {
    if(e.target.classList.contains("gallery-item")) {
        const src = e.target.getAttribute("src");
        document.querySelector(".modal-img").src = src;
        const myModal = new bootstrap.Modal(document.getElementById('gallery-modal'))
        myModal.show();
    }
})

$(document).ready(function() {
    $("input[name$='projects']").click(function() {
        var test = $(this).val();

        $("div.desc").hide();
        $("#Project" + test).show();
    });
});

$(document).ready(function () {
    $(".content .radio_content").hide();
    $(".content .radio_content:first-child").show();
    $(".radio_wrap").click(function () {
      var current_radio = $(this).attr("data-radio");
      $(".content .radio_content").hide();
      $("." + current_radio).show();
    });
  });

  

