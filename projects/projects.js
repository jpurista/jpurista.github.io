$(document).ready(() => {
        const queryParams = new URLSearchParams(window.location.search);
        const queryValue = queryParams.get('query');
    
        if (!queryValue) {
            // Redirect to coding if there's no query
            window.location.href = updateQueryStringParameter(window.location.href, 'query', 'coding');
            return; // Stop execution as we're redirecting
        }
    
        const values = queryValue.split(',');
        console.log(values);
    
        $('#queryInput').val(queryValue);
    
        updateButtonStyles(queryValue);
        search(queryValue);
    
        $('#codingButton').click(() => {
            updateSearchAndURL('coding');
        });
    
        $('#designButton').click(() => {
            updateSearchAndURL('design');
        });
    
        $('#searchQuery').click(() => {
            updateSearchAndURL($('#queryInput').val() || 'coding');
        });
    
        $('#queryInput').on('keypress', function(e) {
            if (e.which === 13) {
                updateSearchAndURL($(this).val() || 'coding');
            }
        });
    
        function updateSearchAndURL(query) {
            query = query.trim() || 'coding'; // Default to 'coding' if query is empty
            const newUrl = updateQueryStringParameter(window.location.href, 'query', query);
            window.history.pushState({ path: newUrl }, '', newUrl);
            search(query);
        }
    
        function updateButtonStyles(query) {
            $('#codingButton').attr('class', 'btn btn-outline-primary');
            $('#designButton').attr('class', 'btn btn-outline-primary');
            
            if (query.toLowerCase().includes('coding')) {
                $('#codingButton').attr('class', 'btn btn-primary');
            } else if (query.toLowerCase().includes('design')) {
                $('#designButton').attr('class', 'btn btn-primary');
            }
        }
    
        function search(query) {
            var searchWords = query.split(/[\s,]+/);
            var numResults = 0;
    
            $('.project').each(function () {
                var keywords = $(this).attr('keywords');
                var isMatch = searchWords.some(word => 
                    keywords && keywords.toLowerCase().includes(word.toLowerCase())
                );
    
                if (isMatch) {
                    $(this).show();
                    numResults++;
                } else {
                    $(this).hide();
                }
            });
    
            var word = numResults === 1 ? "is" : "are";
            var quotedSearchWords = searchWords.map(word => `'${word.toLowerCase()}'`).join(', ');
    
            $('#searchResults p:first-child').text(`There ${word} ${numResults} results for ${quotedSearchWords}.`);
            $('#queryInput').val(query);
    
            updateButtonStyles(query);
        }
    
        function updateQueryStringParameter(uri, key, value) {
            var re = new RegExp("([?&])" + key + "=.*?(&|$)", "i");
            var separator = uri.indexOf('?') !== -1 ? "&" : "?";
            if (uri.match(re)) {
                return uri.replace(re, '$1' + key + "=" + value + '$2');
            }
            else {
                return uri + separator + key + "=" + value;
            }
        }
    });