"use strict";

document.addEventListener('DOMContentLoaded', function() {
            document.querySelector('form').addEventListener('submit', function(event) {
                event.preventDefault();

                const query = document.getElementById('query').value;
                const url = `https://api.tvmaze.com/search/shows?q=${query}`;

                fetch(url)
                    .then(response => response.json())
                    .then(data => {
                        console.log(data);
                    })
                    .catch(error => {
                        console.error('Error fetching data:', error);
                    });
            });
        });