// using d3 for convenience
var main = d3.select("#test-scroll");
var scrolly = main.select("#scrolly");
var figure = scrolly.select("figure");
var article = scrolly.select("article");
var step = article.selectAll(".step");

// var datastep = step.attr("data-step")

// initialize the scrollama
var scroller = scrollama();

// generic window resize listener event
function handleResize() {
    // 1. update height of step elements
    var stepH = Math.floor(window.innerHeight * 0.75);
    step.style("height", stepH + "px");

    var figureHeight = window.innerHeight / 1;
    var figureMarginTop = (window.innerHeight - figureHeight) / 1;

    figure
        .style("height", figureHeight + "px")
        .style("top", figureMarginTop + "px");

    // 3. tell scrollama to update new element dimensions
    scroller.resize();
}

// scrollama event handlers
function handleStepEnter(response) {
    // console.log(response);
    // response = { element, direction, index }
    var datanya = response.index + 1;

    // add color to current step only
    step.classed("is-active", function (d, i) {
        return i === response.index;
    });
    // update graphic based on step
    // console.log(datastep)
    figure.attr('class', 'dedi-' + datanya + '')
    figure.select("p").text(datanya);
}


function init() {

    // 1. force a resize on load to ensure proper dimensions are sent to scrollama
    handleResize();

    // 2. setup the scroller passing options
    // 		this will also initialize trigger observations
    // 3. bind scrollama event handlers (this can be chained like below)
    scroller
        .setup({
            step: "#scrolly article .step",
            // offset: 0.33,
            offset: 0.70,
            debug: false
        })
        .onStepEnter(handleStepEnter);
}

// kick things off
init();