// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()


function makeGrid(rows, cols) {
    $('table').children().remove();
    for (var i = 0; i < rows; i++) {
        $('table').append("<tr></tr>");
        for (var j = 0; j < cols; j++)
            $('table').children().last().append("<td class = 'pixleGrid'></td>");
    }
};


$("input[type='submit']").click(function(test) {
    makeGrid($("input[id='inputHeight']").val(), $("input[id='inputWeight']").val());
    alert($("input[id='inputHeight']").val());
    test.preventDefault();
});

$("#pixel_canvas").on("click", "td", function() {
    $(this).css("background-color", $("input[id='colorPicker']").val());
});