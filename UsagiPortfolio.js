$(function() {
    $("#year").text((new Date).getFullYear());
    //$()はjQueryのセクレタ関数//
    //htmlのidがyearの部分に、今日の日付から年を取得し、テキストにしたものを設定//
    $(".works_link").hover(function() {
        $(this).css("transition","0.2s")
    });
    //htmlのclassがworks_linkの要素にホバー時、//
    //そのイベントが発生した要素($(this))のCSSプロパティのアニメーションが0.2秒で行われる//
    $(window).scroll(function() {//ウィンドウがスクロールされたときに実行されるイベントハンドラ
        $(".skills_circle").each(function(){//jQueryオブジェクトに対して繰り返し処理を行う//
            var i = $(this);
            t = $(this).offset().top;//この要素の上端がページトップの上端からどれだけ離れているか、距離をｔに格納//
            if($(window).scrollTop() > t - $(window).height() + 150)
            //$(window).scrollTop():ページ上端から現在のスクロール位置までの距離をピクセル単位で返すメソッド//
            //$(window).height():ページが表示されるブラウザウィンドウの高さ(スクロール無しで見せられる高さ)を取得し、ピクセル単位で返すメソッド//
            //つまりif文の条件は、現在のスクロール位置＞.skills_circleの位置からウィンドウの高さを引き、150pxを足した//
            //skillsのsectionが、スクロールで画面の真ん中くらいになると、アニメーションが行われる//
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

    $(".skills_circle").hover(//この要素の上にマウスが乗った時の処理は第一引数、マウスが離れた時の処理は第二引数//
        function(){
            $(this).find(".skill_per").fadeIn()
            //find()メソッドによってskills_circle要素内からskill_perの要素を検索し、fadeIn()メソッドでゆっくり透明から不透明に//
        }, 
        function() {
            $(this).find(".skill_per").fadeOut()
            //find()メソッドによってskills_circle要素内からskill_perの要素を検索し、fadeOut()メソッドでアニメーションを実行しながら非表示に//
        }
    );

    $('a[href^="#"]').click(function() {//<a>タグで、hrefの値の先頭に#を含む要素がクリックされた時に実行される処理//
        var section = $(this).attr("href");//attrメソッド
        i = $("#" == section || "" == section ? "html" : section);
        top_ = i.offset().top - 40;
        return $("body,html").animate({
            scrollTop: top_
        }, 400, "swing");
    });

    $(".wrapper").hide().fadeIn(1E3);
    var $allMsg = $(".top_title");
    var $wordList = $(".top_title").html().split("");
    $(".top_title").html("");

    $.each($wordList,function(idx,elem) {
        var newEL = $("<span/>").text(elem).css({
            opacity: 0
        });

        newEL.appendTo($allMsg);
        newEL.delay(idx * 100);
        newEL.animate({
            opacity: 1
        },1100)
    });

    function fadein_blocks(s) {
        $(window).scroll(function() {
            $(s).each(function(s) {
                var i = $(this).offset().top;
                $(window).scrollTop() > i - $(window).height() + 200 
                    && 
                $(this).delay(300 * s).queue(function() {
                    $(this).addClass("is-fadein")
                })
            })
        })
    }

    !function(s) {
        $(window).scroll(function() {
            $(s).each(function() {
                var s = $(this).offset().top;
                $(window).scrollTop() > s - $(window).height() + 200 && $(this).addClass("is-fadein")
            })
        })   
    }(".js-fadein");

    fadein_blocks(".service_block");
    fadein_blocks(".works_link")

});