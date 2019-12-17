// this form will display the burger that has been eaten in the proper column

$(document).ready(function() {
  $(".devour-form").on("submit", function(event) {
    event.preventDefault();

    var burger_id = $(this)
      .children(".burger_id")
      .val();
    console.log(burger_id);
    $.ajax({
      method: "PUT",
      url: "/burgers/" + burger_id
    }).then(function(data) {
      location.reload();
    });
  });
});
