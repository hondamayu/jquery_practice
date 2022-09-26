$(function() {
  //ホバーした時に
  $(".dropdwn li").hover(function() {
    //dropdwn_menuが表示される
    $(".dropdwn_menu:not(:animated)",this).slideDown();
    //ホバーが外れたら
  }, function() {
    //dropdwn_menuがスライドアップされる
    $(".dropdwn_menu",this).slideUp();
  });
});