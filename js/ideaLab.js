// テキストのフェードイン
document.addEventListener("DOMContentLoaded", function () {
    const textElement = document.querySelector(".fade-in");

    // ページが読み込まれた後、一定の遅延を持ってテキストをフェードインさせる
    setTimeout(function () {
        textElement.style.opacity = "1";
        textElement.style.transform = "translateY(0)";
    }, 500); // 500ミリ秒（0.5秒）の遅延

});

// スライドショー
$('.slider').slick({
    autoplay: true,//自動で動く
    infinite: true,//スライドをループさせる
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,//1回のスクロールで1枚の写真を移動して見せる
    prevArrow: '<div class="slick-prev"></div>',//矢印部分PreviewのHTMLを変更
    nextArrow: '<div class="slick-next"></div>',//矢印部分NextのHTMLを変更
    centerMode: true,//要素を中央ぞろえにする
    variableWidth: true,//幅の違う画像の高さを揃えて表示
    dots: true,//下部ドットナビゲーションの表示
});