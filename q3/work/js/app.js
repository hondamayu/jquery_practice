$(function () {
  //メニューボタンをクリックしたら
  $('.drawer_button').on('click', function () {
    //クローズボタンに切り替わる
    $(this).toggleClass("active");
    //メニューが表示される
    $('.drawer_nav_wrapper').toggleClass("open");
    //背景の表示・非表示
    $('.drawer_bg').toggle();
  });
});
