$(window).scroll(function() {
    $(".ring").each(function(){//jQueryオブジェクトに対して繰り返し処理を行う//
        var i = $(this);
        setTimeout(function() {//このfunctionの処理を500ミリ秒(0.5秒)遅れさせる//
            $(i).is('[data-progress="90"]') && $(i).addClass("skills_circle-90").addClass("skills_circle-max"),
            //iはこの要素自体、isメソッドで要素が条件と合致すればtrueを返す。//
            //''で囲うのは、文字列だから。[]で囲うのは、<div class="skills_circle" data-progress="90">にある、属性セクレタだから。//
            //左がtrueであれば、addClassメソッドでこの要素に、class="skills_circle-90"とclass="skills_circle-max"のクラス名を追加する//
            //&& は論理 AND 演算子であり、左辺が真であれば右辺を実行します。以下同様//
            $(i).is('[data-progress="80"]') && $(i).addClass("skills_circle-80").addClass("skills_circle-max"),
            $(i).is('[data-progress="70"]') && $(i).addClass("skills_circle-70").addClass("skills_circle-max"),
            $(i).is('[data-progress="60"]') && $(i).addClass("skills_circle-60").addClass("skills_circle-max"),
            $(i).is('[data-progress="50"]') && $(i).addClass("skills_circle-50"),
            $(i).is('[data-progress="40"]') && $(i).addClass("skills_circle-40"),
            $(i).is('[data-progress="30"]') && $(i).addClass("skills_circle-30")
        },500)
    })
});

