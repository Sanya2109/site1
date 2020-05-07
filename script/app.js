$(function() {

  console.log("rabotaet");

  let sidebar = $("#sidebar");

  $("#check").on("click", function(event) {
    event.preventDefault();

    sidebar.toggleClass("show");
  });







});
