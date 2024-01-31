//$(".ring").each(function(){//jQueryオブジェクトに対して繰り返し処理を行う//
$(function() {
    var i = $(".ring");
    setTimeout(function() {//このfunctionの処理を500ミリ秒(0.5秒)遅れさせる//
        $(i).is('[data-progress="90"]') && $(i).addClass("ring-90").addClass("ring-max");
        //addClassメソッドでクラスが作られる順番は左からだが、

        //iはこの要素自体、isメソッドで要素が条件と合致すればtrueを返す。//
        //''で囲うのは、文字列だから。[]で囲うのは、<div class="skills_circle" data-progress="90">にある、属性セクレタだから。//
        //左がtrueであれば、addClassメソッドでこの要素に、class="skills_circle-90"とclass="skills_circle-max"のクラス名を追加する//
        //&& は論理 AND 演算子であり、左辺が真であれば右辺を実行します。
    },500);
});
//});

