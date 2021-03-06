

$('.home').click(function (e) {
    e.preventDefault();
    $('.home_drop').fadeToggle();
});

$('.form').click(function (e) {
    e.preventDefault();
    $('.form_drop').fadeToggle();
});

window.onload = function () {
    var chartMonth = new CanvasJS.Chart("chart_month", {
        title: {
            // text: "Sales per month chart"
        },
        data: [
            {
                // Change type to "doughnut", "line", "splineArea", etc.
                type: "line",
                dataPoints: [
                    { label: "Jan", y: 10 },
                    { label: "Feb", y: 15 },
                    { label: "Mar", y: 25 },
                    { label: "Apr", y: 30 },
                    { label: "May", y: 28 },
                    { label: "Jun", y: 30 },
                    { label: "Jul", y: 25 },
                    { label: "Aug", y: 50 },
                    { label: "Sep", y: 10 },
                    { label: "Oct", y: 35 },
                    { label: "Nov", y: 24 },
                    { label: "Dec", y: 43 }
                ]
            }
        ]
    });
    chartMonth.render();

    var chartTopSell = new CanvasJS.Chart("chart_top_month", {
        title: {
            // text: "Olympic Medals of all Times (till 2012 Olympics)"
        },
        data: [
            {
                type: "bar",
                dataPoints: [
                    { y: 1236, label: "AT732" },
                    { y: 1170, label: "AK657" },
                    { y: 1079, label: "QT567" },
                    { y: 980, label: "TE512" },
                    { y: 950, label: "DD443" },
                    { y: 943, label: "AT611" }
                ]
            }
        ]
    });

    chartTopSell.render();

    var chartTopSell = new CanvasJS.Chart("chart_top_sell", {
        title: {
            // text: "Olympic Medals of all Times (till 2012 Olympics)"
        },
        data: [
            {
                type: "doughnut",
                dataPoints: [
                    { y: 1236, label: "AT732" },
                    { y: 1170, label: "AK657" },
                    { y: 1079, label: "QT567" },
                    { y: 980, label: "TE512" },
                    { y: 950, label: "DD443" },
                    { y: 943, label: "AT611" }
                ]
            }
        ]
    });

    chartTopSell.render();

    var chartTopSell = new CanvasJS.Chart("chart_top_buy", {
        title: {
            // text: "Olympic Medals of all Times (till 2012 Olympics)"
        },
        data: [
            {
                type: "line",
                dataPoints: [
                    { y: 1236, label: "AT732" },
                    { y: 1170, label: "AK657" },
                    { y: 1079, label: "QT567" },
                    { y: 980, label: "TE512" },
                    { y: 950, label: "DD443" },
                    { y: 943, label: "AT611" }
                ]
            }
        ]
    });

    chartTopSell.render();

    var chartTopSell = new CanvasJS.Chart("chart_top_rate", {
        title: {
            // text: "Olympic Medals of all Times (till 2012 Olympics)"
        },
        data: [
            {
                type: "bar",
                dataPoints: [
                    { y: 1236, label: "AT732" },
                    { y: 1170, label: "AK657" },
                    { y: 1079, label: "QT567" },
                    { y: 980, label: "TE512" },
                    { y: 950, label: "DD443" },
                    { y: 943, label: "AT611" }
                ]
            }
        ]
    });

    chartTopSell.render();
}
