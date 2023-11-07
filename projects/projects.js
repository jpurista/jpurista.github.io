$(document).ready(() => {

        setTimeout(function () {
                $('#codingButton').click();
                console.log("this is the updated version");
        }, 1);

        $('#codingButton').click(() => {
                $('#queryInput').val('coding');
                search();
        });

        $('#designButton').click(() => {
                $('#queryInput').val('design');
                search();
        });

        $('#searchQuery').click(search);

        function search() {
                var searchWords = $('#queryInput').val().split(/[\s,]+/);
                var numResults = 0;

                $('#codingButton').attr('class', 'btn btn-outline-primary');
                $('#designButton').attr('class', 'btn btn-outline-primary');

                $('.project').each(function () {
                        var keywords = $(this).attr('keywords');
                        var isMatch = false;

                        for (var i = 0; i < searchWords.length; i++) {
                                if (keywords && keywords.includes(searchWords[i])) {
                                        isMatch = true;
                                        numResults++;
                                        break;
                                }
                        }

                        if (isMatch) {
                                $(this).show();
                        } else {
                                $(this).hide();
                        }
                });

                var word = numResults === 1 ? "is" : "are";
                var quotedSearchWords = searchWords.map(function (word) {
                        return "'" + word.toLowerCase() + "'";
                }).join(', ');

                $('#searchResults p:first-child').text('There ' + word + ' ' + numResults + ' results for ' + quotedSearchWords + '.');

                $('#queryInput').val('');
        }
});