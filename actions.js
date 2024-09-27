d3.csv("Queen-data/queen_top_20.csv", function(data) {
    // Sort the data by daily streams in descending order
    data.sort(function(a, b) {
        return a.daily_streams - b.daily_streams;
    });

    // Extract the columns from the data
    let titles = data.map(function(d) { return d.title; });
    let streams = data.map(function(d) { return +d.streams; });
    let dailyStreams = data.map(function(d) { return +d.daily_streams; });

    console.log("Titles:");
    console.log(titles);
    console.log("Streams:");
    console.log(streams);
    console.log("Daily Streams:");
    console.log(dailyStreams);

    let plotData = [
        {
            x: dailyStreams,
            y: titles,
            type: 'bar',
            orientation: 'h',
            text: titles,
            textposition: 'auto',
            marker: {
                color: dailyStreams.map((d, i) => i > 17 && i <= 20 ? 'yellow' : 'black'),
                textfont: {
                    size: 14 // Increase the text size to 14 pixels
                }
            }
        }
    ];

    let layout = {
        title: "Top 20 Queen Songs (Daily Listens) in 2023",
        yaxis: {
            showticklabels: false,
            zeroline: false,
            showgrid: false
        },
    };

    Plotly.newPlot('PlotSpace', plotData, layout);

    document.getElementById('PlotSpace').on('plotly_click', function(data) {
        // Get the index of the clicked bar
        let index = data.points[0].pointIndex;
    
        // Play the corresponding music file
        let audio = new Audio(`music/${index}.mp3`);
        audio.play();
    });
});

