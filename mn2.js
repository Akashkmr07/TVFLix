function searchMovies() {
    var input, filter, movieGrid, movieItem, a, h2, i, txtValue, hasResults = false;
    input = document.querySelector('.search-box input');
    filter = input.value.toUpperCase();
    movieGrid = document.querySelectorAll('.movie-grid');


    movieGrid.forEach(function(grid) {
        movieItem = grid.querySelectorAll('.movie-item');
        var gridHasResults = false;


        for (i = 0; i < movieItem.length; i++) {
            a = movieItem[i].querySelector('a');
            h2 = a.querySelector('#nam');
            txtValue = h2.textContent || h2.innerText;

            // Show or hide the movie item 
            if (txtValue.toUpperCase().indexOf(filter) > -1) {
                movieItem[i].style.display = 'block';
                var video = a.querySelector('video');
                video.style.height = '390px';
                video.style.width = '700px';
                gridHasResults = true;
            } else {
                movieItem[i].style.display = 'none';
            }
        }

        // If the current grid has results show it so otherwise hide it
        if (gridHasResults) {
            grid.style.display = 'flex';
            hasResults = true; // Update the overall result status
        } else {
            grid.style.display = 'none';
        }
    });

    var hiClass = document.querySelector('.hi');
    if (hiClass) {
        hiClass.style.display = hasResults ? 'block' : 'none';
    }
}


document.querySelector('.search-box input').addEventListener('keyup', searchMovies);