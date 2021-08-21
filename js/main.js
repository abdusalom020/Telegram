$(function() {
  $("#btn-send").hide();

  $("#text-input").on('input', function() {
    if(!$("#text-input").val()) {
      $("#btn-send").hide();
      $("#btn-record").show();
    } else {
      $("#btn-send").show();
      $("#btn-record").hide();
    }
  })

  $("#btn-search").click(function() {
    $("#search-input").focus();
  })

  $("#searchs-stikers").hide();
  $("#stikers-show").show();


  $("#search-btn-open").click(function() {
    $("#searchs-stikers").show();
    $("#stikers-show").hide();
  });
  
  $("#search-btn-close").click(function() {
    $("#searchs-stikers").hide();
    $("#stikers-show").show();
  });
})

