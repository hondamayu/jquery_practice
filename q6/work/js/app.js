$(function() {
  //セレクト選択(変更)されると
  $(".select-box").on('change', function() {
    //それぞれ代入
    var select = $(this).val(),
        list = $(".food-list li");
    //listに対して繰り返し処理
    $.each(list, function(index, a) {
      //"全て"が選択されたら
      if (select === "all") {
        //全てのlistを表示
        list.show();
      }
      //listのデータを取得し、代入
      var type = $(a).data("category-type");
      //value値とdata値が一致していれば
      if (select === type) {
        //表示
        $(a).show();
      } else {
        //一致していない場合は非表示
        $(a).hide();
      }
    });    
  });
});