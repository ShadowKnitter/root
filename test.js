$(document).ready(function () {

    $("#searchBtn").on("click", function () {
        var search = $("#searchBar")[0].value;
        console.log(search);
        // $.getJSON('https://serpapi.com/search.json?engine=google_shopping_light&q=' + search + '&api_key=bb2f5d955df05dabbf7e142e6cb7cd716b36450aa4ed3c5c73014bb23a84f1ca', function (data) {
        //     console.log('Data received:', data);
        // })
        //     .fail(function (jqXHR, textStatus, errorThrown) {
        //         console.error('Request failed:', textStatus, errorThrown);
        //     });

        const { getJson } = require("serpapi");

        getJson({
            engine: "google_shopping_light",
            q: "macbook",
            api_key: "bb2f5d955df05dabbf7e142e6cb7cd716b36450aa4ed3c5c73014bb23a84f1ca"
        }, (json) => {
            console.log(json["shopping_results"]);
        });
    });
});
