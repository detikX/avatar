$('[data-toggle="tooltip"]').tooltip()

/*Highcharts.chart('container', {
    chart: {
        type: 'bar'
    },
    title: {
        text: 'Historic Forest Population by Region',
        align: 'left'
    },
    subtitle: {
        text: 'Source: <a ' +
            'href="https://en.wikipedia.org/wiki/List_of_continents_and_continental_subregions_by_population"' +
            'target="_blank">Wikipedia.org</a>',
        align: 'left'
    },
    xAxis: {
        categories: ['Africa', 'America', 'Asia', 'Europe'],
        title: {
            text: null
        },
        gridLineWidth: 1,
        lineWidth: 0
    },
    yAxis: {
        min: 0,
        title: {
            text: 'Population (millions)',
            align: 'high'
        },
        labels: {
            overflow: 'justify'
        },
        gridLineWidth: 0
    },
    tooltip: {
        valueSuffix: ' millions'
    },
    plotOptions: {
        bar: {
            borderRadius: '50%',
            dataLabels: {
                enabled: true
            },
            groupPadding: 0.1
        }
    },
    legend: {
        layout: 'vertical',
        align: 'right',
        verticalAlign: 'top',
        x: -40,
        y: 80,
        floating: true,
        borderWidth: 1,
        backgroundColor:
            Highcharts.defaultOptions.legend.backgroundColor || '#FFFFFF',
        shadow: true
    },
    credits: {
        enabled: false
    },
    series: [{
        name: 'Year 1990',
        data: [631, 727, 3202, 721]
    }, {
        name: 'Year 2000',
        data: [814, 841, 3714, 726]
    }, {
        name: 'Year 2018',
        data: [1276, 1007, 4561, 746]
    }]
});*/
// var s = document.createElement("script");
// s = ""
// $(".btn-peta").click(function () {
//     var datapeta = $(this).attr('data');
//     // alert(datapeta)

//     var s = document.createElement("script");
//     s.type = "text/javascript";
//     s.src = `js/${datapeta}.js`;
//     // Use any selector
//     $("body").append(s);

// })

$(".yearx").click(function () {
    var nilaix = $(this).attr("data");
    var tahunnya = $(this).html()
    // alert(nilaix)
    $.ajax({
        url: 'js/' + nilaix + '.json',
        method: 'GET',
        success: function (response) {
            console.log(response);
            var investasi = $("#tanahkita .form-value");
            investasi.html(response.investasi);
            $(".tahunx").html(tahunnya)
            var a;
            $("#cek-data .row").html("")
            $("#tanahkita table tbody").html("")
            for (a = 0; a < response.features.length; a++) {
                // console.log(response.features[a].properties.judul);

                // bd = belum ditangani
                //ps = proses hukum

                var luas = response.features[a].properties.luas;
                var parsInt = parseInt(luas);
                var luasVal = parsInt.toLocaleString('id')
                // console.log(luasVal);
                var judul = response.features[a].properties.judul;
                var kabupaten = response.features[a].properties.nm_kabupaten;
                var propinsi = response.features[a].properties.nm_propinsi
                var data_konflik = response.features[a].properties.status_konflik_proses;
                var konflik = response.features[a].properties.status_konflik_proses == null || "" ? "-" : data_konflik;
                //     $("#cek-data .row").append(`
                //     <div class="col-md-6">
                //     <div class="cardx">
                //         <div class="left-side">
                //             <h3 class="judulx">${judul}</h3>
                //         </div>
                //         <div class="right-side">
                //             <div class="clearfix">
                //                 <div class="float-left">
                //                     <div class="d-block" data-toggle="tooltip" data-placement="top" title="Luas">
                //                         <div class="iconx">
                //                             <img src="img/wide.png" alt="">
                //                         </div>
                //                         <div class="value">
                //                             <span class="luas">${luasVal}</span>
                //                             ha
                //                         </div>
                //                     </div>
                //                     <div class="d-block">
                //                         <div class="iconx">
                //                             <img src="img/notes.png" alt="">
                //                         </div>
                //                         <div class="value">
                //                             <span class="status">${konflik}</span>
                //                         </div>
                //                     </div>
                //                 </div>
                //                 <div class="float-right">
                //                     <div class="d-block">
                //                         <div class="iconx">
                //                             <img src="img/map.png" alt="">
                //                         </div>
                //                         <div class="value">
                //                             <div class="provinsi ">${propinsi}</div>
                //                         </div>
                //                     </div>
                //                     <div class="d-block">
                //                         <div class="iconx">
                //                             <img src="img/pin.png" alt="">
                //                         </div>
                //                         <div class="value">
                //                             <div class="kabupaten ">${kabupaten}</div>
                //                         </div>
                //                     </div>
                //                 </div>
                //             </div>
                //         </div>
                //     </div>
                // </div>
                //     `)

                $("#tanahkita table tbody").append(`
                
                  <tr>
                  <td>${a + 1}</td>
                    <td>${response.features[a].properties.judul}</td>
                    <td>${luasVal} ha</td>
                    <td>${response.features[a].properties.nm_kabupaten}</td>

                    <td>${response.features[a].properties.nm_propinsi}</td>
                    <td>${response.features[a].properties.nama_sektor}</td>

                    <td>${konflik}</td>
                    </tr>  
                `)
            }



        }
    })
})

