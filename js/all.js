$(document).ready(function() {
  //- // 用來判斷可以不可以 submit
  submitted = false;
  function emailCheck(){
    if ( submitted === false ) {
      alert("檢查一下 Email 是否錯誤");
      return false
              } else {
                return true
              }
  }
  //- // 用來判斷可以不可以 如果 Email 符合格式，就會幫對應的 icon 加 active 也會把判斷的東東改成 true
  $(window).load(function() {
    $('#subscribe-form').bind("change paste keyup", ".email-input", function(){
      if ($('.email-input').val().search( /^[\w\-\+\.]+@[\w-]+(\.[\w-]+)+$/ ) != -1) {
        submitted = true
        $(".email-input-group i").removeClass('active');
        $(".email-input-group .fa-check-circle").addClass('active');
      } else {
        submitted = false
        $(".email-input-group i").removeClass('active');
        $(".email-input-group .fa-exclamation-circle").addClass('active');
      }
    })
  })

  //- // 原本填寫成功會跳到 google，但我把他宇智波轉到這個 iframe 並藏起來，然後清空剛輸入的 Email 客製化自己的感謝訊息
$("#hidden_iframe").load(function() {
    $('.email-input').val("");
    $('#subscribe-success').fadeIn(300);
  })

  //- // 感謝訊息就是隨便點都會消失，你也可以放個假按鈕
  $('#subscribe-success').click( function() {
    $(this).fadeOut(300)
  })
})
