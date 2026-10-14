vegaEmbed("#vis1", "charts/chart1.json")
    .then(function (result) {
        console.log("Map loaded successfully");
    })
    .catch(function (error) {
        console.error(error);
    });

vegaEmbed("#map1", "js/map1.json")
    .then(function (result) {
        console.log("Map loaded successfully");
    })
    .catch(function (error) {
        console.error(error);
    });

vegaEmbed("#vis2", "charts/chart2.json")
    .then(function (result) {
        console.log("Map loaded successfully");
    })
    .catch(function (error) {
        console.error(error);
    });

vegaEmbed("#map2", "js/map2.json")
    .then(function (result) {
        console.log("Map loaded successfully");
    })
    .catch(function (error) {
        console.error(error);
    });

vegaEmbed("#map3", "js/map3.json", {
    actions: true
}).catch(console.error);

vegaEmbed("#vis3", "charts/chart3.json", {
    actions: true
}).catch(console.error);

vegaEmbed("#vis4", "charts/chart4.json", {
    actions: true
}).catch(console.error);

vegaEmbed("#vis5", "charts/chart5.json", {
    actions: true
}).catch(console.error);