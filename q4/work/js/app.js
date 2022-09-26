$(function () {
  //タブをクリックしたら
  $('.nav li').on('click', function () {
    //何番目のタブなのかを取得
    var index = $(this).index();
    //コンテンツの非表示　クラスの追加
    $('.description li').addClass('is-hidden');
    //指定されたコンテンツが表示される　クラスの削除
    $('.description li').eq(index).removeClass('is-hidden');
  });
});
