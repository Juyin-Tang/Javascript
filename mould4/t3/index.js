"use strict";

document.addEventListener('DOMContentLoaded', function() {
            document.querySelector('form').addEventListener('submit', function(event) {
                event.preventDefault(); // Prevent the form from submitting the traditional way

                const query = document.getElementById('query').value;
                const url = `https://api.tvmaze.com/search/shows?q=${query}`;


                document.getElementById('results').innerHTML = '';

                fetch(url)
                    .then(response => response.json())
                    .then(data => {
                        data.forEach(tvShow => {
                            const article = document.createElement('article');
                            article.classList.add('card');

                            // Name
                            const name = document.createElement('h2');
                            name.textContent = tvShow.show.name;
                            article.appendChild(name);

                            // URL
                            const link = document.createElement('a');
                            link.href = tvShow.show.url;
                            link.textContent = 'Details';
                            link.target = '_blank';
                            article.appendChild(link);

                            const img = document.createElement('img');
                            img.src = tvShow.show.image?.medium || ''; // Optional chaining
                            img.alt = tvShow.show.name;
                            article.appendChild(img);

                            const summary = document.createElement('div');
                            summary.textContent = tvShow.show.summary;
                            article.appendChild(summary);

                            document.getElementById('results').appendChild(article);
                        });
                    })
                    .catch(error => {
                        console.error('Error fetching data:', error);
                    });
            });
        });