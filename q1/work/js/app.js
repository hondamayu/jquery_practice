//Q1-1
$(function () {
  //読み込みをしたときに文字の色が変化する
  $("#q1").css('color', 'gray');
});

//Q1-2
$(function () {
  //クリックした時にボタンの色が変化する
  $("#q2").on('click', function () {
    $(this).css('background', 'pink');
  });
});

//Q1-3
$(function () {
  //クリックした時に3秒かけてフェードアウトする
  $("#q3").on('click', function () {
    $(this).fadeOut(3000);
  });
});

//Q1-4
$(function () {
  //クリックした時にサイズが大きくなる
  $("#q4").on('click', function () {
    $(this).addClass('large');
  });
});

//Q1-5
$(function () {
  //クリックした時にテキストが挿入される
  $("#q5").on('click', function () {
    $(this).prepend('DOMの中の前');
    $(this).append('DOMの中の後');
    $(this).before('DOMの前');
    $(this).after('DOMの後');
  });
});

//Q1-6
$(function () {
  //クリックした時にボタンが移動する
  $("#q6").on('click', function () {
    $(this).animate({
      'margin-top': 100,
      'margin-left': 100
    },2000);
  });
});

//Q1-7
$(function () {
  //クリックした時にidのノードがコンソールに表示される
  $("#q7").on('click', function () {
    console.log(this);
  });
});

//Q1-8
$(function () {
  //ホバー時にボタンのサイズが変更される
  $("#q8").on( {
    'mouseenter': function() {
      $(this).addClass('large');
    },
    'mouseleave': function() {
      $(this).removeClass('large');
    }
  });
});

//Q1-9
$(function () {
  //クリックした時に配列アラートが表示される
  $("#q9 li").on('click', function () {
    var index = $(this).index();
    alert(index);
  });
});

//Q1-10
$(function () {
  //Q10をクリックした時Q11の文字サイズが変化する
  $("#q10 li").on('click', function () {
    var index = $(this).index();
    console.log($("#q11 li").eq(index));
    $("#q11 li").eq(index).addClass('large-text');
  });
});