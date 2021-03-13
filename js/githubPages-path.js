$(function(){
  $("head link[href^='/']").each(function() {
    var obj = $(this);
    var css__link = $("head link[href^='/']").attr("href");
    obj.attr("href", "." + css__link);
  });

  $("a[href^='/']").each(function() {
    var obj = $(this);
    var url_link = $("a[href^='/']").attr("href");
    obj.attr("href", "." + url_link);
  });

  $("img").each(function() {
    var obj = $(this);
    var img_link = $("img").attr("src");
    $(obj).attr("src", "." + img_link);
  });
});