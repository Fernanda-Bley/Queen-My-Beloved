d3.csv("Queen-data/queen_top_20.csv", function(data) {
    // Sort the data by daily streams in descending order
    data.sort(function(a, b) {
        return a.daily_streams - b.daily_streams;
    });

    // Extract the columns from the data
    let titles = data.map(function(d) { return d.title; });
    let dailyStreams = data.map(function(d) { return +d.daily_streams; });

    let plotData = [
        {
            x: dailyStreams,
            y: titles,
            type: 'bar',
            orientation: 'h',
            text: titles,
            textposition: 'outside',
            marker: {
                color: dailyStreams.map((d, i) => i >= 17 && i <= 20 ? 'yellow' : 'black'),
                hovertemplate: '( %{x:.2f}M, %{y} )<extra></extra>',
                font: {
                    family: 'Arial',
                    size: 14,
                    weight: 'bold' // Make text labels bold
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
        // Get the title of the clicked bar
        let title = data.points[0].y;

        if (title == "Another One Bites The Dust "){
            let audio = new Audio("music/another.mp3");
            audio.play();
        }

        if (title == "Bohemian Rhapsody "){
            let audio = new Audio("music/bohemian.mp3");
            audio.play();
        }

        if (title == "Don't Stop Me Now "){
            let audio = new Audio("music/donot.mp3");
            audio.play();
        }

    });
});

