document.addEventListener('DOMContentLoaded', function() {
    var months = document.querySelectorAll('.month');
    var articleImg = document.getElementById('articleImg')

    function toTitleCase(str) {
        return str.replace(
            /\w\S*/g,
            function(txt) {
            return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
            }
        );
    }

    months.forEach(function(month) {
        month.addEventListener('click', function() {
            //get id of month when clicked

            var my_id = month.getAttribute('id').toString();
            month.focus();
            articleImg.src = "img/calendararticles/" + toTitleCase(my_id) + ".png";
        });
    });
});