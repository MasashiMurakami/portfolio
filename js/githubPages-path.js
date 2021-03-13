$(function(){
  var url_link = $("a[href^='/']").attr("href");
  url_link = "." + url_link;
  $("a[href^='/']").attr("href", url_link);

  var img_link = $("img").attr("src");
  img_link = "." + img_link;
  $("img").attr("src", img_link);

  var css__link = $(".head__mycss").attr("href");
  css__link = "." + css__link;
  $(".head__mycss link").attr("href", css__link);
});