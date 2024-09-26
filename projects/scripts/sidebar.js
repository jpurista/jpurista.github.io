$(document).ready(function() {
        function generateMenuItems() {
            const $menuList = $('#menu-items');
            $menuList.empty();
            
            $('.content-md h4').each(function(index) {
                const $heading = $(this);
                const headingText = $heading.text().trim();
                const headingId = $heading.attr('id') || `section-${index}`;
                $heading.attr('id', headingId);
                
                const $listItem = $('<li>');
                const $link = $('<a>').attr('href', `#${headingId}`).text(headingText).addClass('bd-links-link rounded');
                
                $listItem.append($link);
                $menuList.append($listItem);
            });
    
            addClickListeners();
            updateActiveMenuItem();
        }
    
        function addClickListeners() {
            $('.side-menu a').on('click', function() {
                $('.side-menu .bd-links-link').removeClass('active');
                $(this).addClass('active');
            });
        }
    
        function updateActiveMenuItem() {
            const currentHash = window.location.hash;
            if (currentHash) {
                $('.side-menu .bd-links-link').removeClass('active');
                $(`.side-menu .bd-links-link[href="${currentHash}"]`).addClass('active');
            }
        }
    
        setTimeout(generateMenuItems, 1000);
        $(window).on('hashchange', updateActiveMenuItem);
    });
    