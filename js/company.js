

//timeline js sticky
var $ = jQuery.noConflict();
window.onload = () => {
    if ($(".company-timeline-year").length) {
        $(".timeline-date .date").html(function (i, html) {
            var chars = $.trim(html).split("");
            return "<span>" + chars.join("</span><span>") + "</span>";
        });
    }
};

window.onscroll = (e) => {
    $(".company-timeline-block").each(function (event) {
        var $this = $(this);
        // console.log($this);
        var tar_off =
            $(".company-timeline-list").height() +
            parseInt($(".company-timeline-list").css("top")) -
            $(".company-timeline-year").height();
        var this_off = $(this).offset().top - tar_off;
        var win_scroll = $(window).scrollTop();

        // console.log('thisoff', this_off);
        // console.log('win_scroll', win_scroll);
        if (
            win_scroll > this_off &&
            win_scroll < this_off + $(".company-timeline-year").height()
        ) {

            $this.addClass("active").siblings().removeClass('active');
            var curr_index = $this.index();
            // console.log(curr_index);
            $(".timeline-date")
                .eq(curr_index)
                .addClass("animate")
                .siblings()
                .removeClass("animate");
        }


    });
};

$.ajax({
    url: "./js/hutanadat.json",
    method: 'GET',
    success: function (response) {
        // console.log(response.features);
        var a;
        for (a = 0; a < response.features.length; a++) {

            // console.log(response.features[a].properties.clip);
            var tahun = response.features[a].properties.tahun;
            var clip = response.features[a].properties.clip;
            var judul = response.features[a].properties.judul;
            console.log();
            // $(".company-timeline-wrapper").append(
            //     `
            //     <div class="company-timeline-list">
            //         <div class="company-timeline-year">
            //             <div class="timeline-date">
            //                 <div class="date">${tahun}</div>
            //                 <span class="circle"></span>
            //             </div>

            //         </div>
            //     </div>
            // `
            // )
        }
    }

})
{/* <div class="company-timeline-slider">
    <div class="company-timeline-block ">
        <div class="block-inner">
            <span class="circle"></span>
           <h4>${judul}</h4>
            <p>
                ${clip}
            </p>
        </div>
    </div> */}
{/* <div class="company-timeline-wrapper">
                        <div class="company-timeline-list">
                            <div class="company-timeline-year">
                                <span class="timeline-date">
                                    <div class="date">2009</div>
                                    <span class="circle"></span>
                                </span>
                                
                            </div>
                        </div>
                        <div class="company-timeline-slider">
                            <div class="company-timeline-block ">
                                <div class="block-inner">
                                    <!-- <span class="timeline-date">1859</span> -->
                                    <span class="circle"></span>
                                    <!-- <div class="image-block"><img
                                        src="https://i.picsum.photos/id/113/536/354.jpg?hmac=9k5_1urBRXvAPYzEuQ-ZCGDqfsKNdgBVAe1C-c82f24"
                                        alt=""></div> -->
                                    <!-- <h4>1859</h4> -->
                                    <h4>PT. Graha Inti Jaya VS Warga Desa Lamunti & Sei Ahas</h4>
                                    <p>
                                        Menuntut ganti rugi tanah adat yang telah diserobot perusahaan. November 2014, warga melakukan aksi di perusahaan dan dibubarkan paksa dan ditahan dengan tuntutan membawa senjata tajam
                                    </p>
                                </div>
                            </div>
                           
                    </div>
                    </div> */}