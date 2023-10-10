$(document).ready(() => {

        setTimeout(function () {
                $('#codingButton').click();
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

                

                if (searchWords.length == 1 && searchWords[0].toLowerCase() == 'design') {
                        $('.coding').hide();
                        $('#codingButton').attr('class', 'btn btn-outline-primary');

                        $('.design').show();
                        $('#designButton').attr('class', 'btn btn-primary');
                        $('#queryInput').val('');

                        numResults = $('.design').length;
                }

                else if (searchWords.length == 1 && searchWords[0].toLowerCase() == 'coding') {
                        $('.coding').show();
                        $('#codingButton').attr('class', 'btn btn-primary');

                        $('.design').hide();
                        $('#designButton').attr('class', 'btn btn-outline-primary');
                        $('#queryInput').val('');

                        numResults = $('.coding').length;
                }
         else {
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
        }

        var word = numResults === 1 ? "is" : "are";
        var quotedSearchWords = searchWords.map(function (word) {
                return "'" + word.toLowerCase() + "'";
        }).join(', ');

        $('#searchResults p:first-child').text('There ' + word + ' ' + numResults + ' results for ' + quotedSearchWords + '.');

        $('#queryInput').val('');
}
});