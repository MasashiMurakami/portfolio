$(function(){
  var url_link = $("a[href^='/']").attr("href");
  url_link = "." + url_link;
  $("a[href^='/']").attr("href", url_link);

  var img_link = $("img").attr("src");
  img_link = "." + img_link;
  $("img").attr("src", img_link);

});