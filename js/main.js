$(document).ready(function () {
  // 초기 상태에서 3번째 li의 path와 span에 on 클래스와 강조 색상을 설정합니다.
  $(".tab_ico>ul>li").eq(2).find("svg path").attr("stroke", "#004D40"); // 강조 색상
  $(".tab_ico>ul>li").eq(2).find("span").addClass("on");
  $(".tab_list > div").hide().eq(2).show();

  $(".tab_ico>ul>li").click(function () {
    // 모든 li의 path와 span에서 on 클래스와 stroke 색상을 초기화합니다.
    $(".tab_ico>ul>li svg path").attr("stroke", "#999999"); // 기본 색으로 초기화
    $(".tab_ico>ul>li span").removeClass("on");

    // 클릭한 li의 svg path와 span에 on 클래스와 새로운 stroke 색을 적용합니다.
    $(this).find("svg path").attr("stroke", "#004D40"); // 클릭된 항목에 강조 색상 적용
    $(this).find("span").addClass("on");

    // 클릭한 li의 인덱스에 해당하는 tab_list의 div를 표시하고 나머지는 숨김
    const index = $(this).index();
    $(".tab_list > div").fadeOut(200).eq(index).fadeIn(800);
  });

  //go-top버튼 클릭시 제일 위로 가도록 구동
  $(window).scroll(function () {

    if ($(this).scrollTop() > 500) {
      $(".go_top").addClass("on");
    }
    else {
      $(".go_top").removeClass("on");
    }

  });

  $(".go_top").click(function () {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
});