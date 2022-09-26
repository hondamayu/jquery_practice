$(function() {
  //アカウント作成のボタンをクリックすると
  $(".btn__submit").on('click', function() {
    //名字　入力された情報を取得し、コンソールに出力
    console.log("名字");
    var family__name = $('#family__name').val();
    console.log(family__name);
    //名前
    console.log("名前");
    var given__name = $('#given__name').val();
    console.log(given__name);
    //生年月日
    console.log("生年月日");
    var year = $(".year").val(),
        month = $(".month").val(),
        day = $(".day").val();
    console.log(year + "年" + month + "月" + day + "日");
    //性別
    console.log("性別");
    var gender = $(".gender__content:checked").val();
    console.log(gender);
    //職業
    console.log("職業");
    var work = $(".occupation option:checked").val();
    console.log(work);
    //アカウント名
    console.log("アカウント名");
    var account__name = $('#account__name').val();
    console.log(account__name);
    //メールアドレス
    console.log(" メールアドレス");
    var email = $('#email').val();
    console.log(email);
    //パスワード
    console.log("パスワード");
    var password = $('#password').val();
    console.log(password);
    //確認用パスワード
    console.log("確認用パスワード");
    var duplication__password = $('#duplication__password').val();
    console.log(duplication__password);
    //住所
    console.log("住所");
    var address = $('#address').val();
    console.log(address);
    //電話番号
    console.log("電話番号");
    var tel = $('#tel').val();
    console.log(tel);
    //購読情報
    console.log("購読情報");
    $(".subscription__checkbox:checked").each(function() {
      var subscription =$(this).val();
      console.log(subscription);
    });
  });
});