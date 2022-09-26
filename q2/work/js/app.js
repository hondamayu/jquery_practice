$(function () {
  //OPENボタンをクリックしたらモーダルを表示する
  $('.modal_open_button').on('click', function () {
    $('.modal_win').fadeIn();
  });
  //閉じるボタンをクリックしたらモーダルを閉じる
  $('.c-modal_close').on('click', function () {
    $('.modal_win').fadeOut();
  });
});