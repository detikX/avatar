gsap.registerPlugin(ScrollTrigger);


var targetsHeight = document.querySelectorAll(".height");




setTimeout(() => {
    targetsHeight.forEach((target, index) => {

        const pinSpacing = index === targetsHeight.length - 1 ? "true" : false;
        const end =
            index === targetsHeight.length - 1
                ? `+=${target.offsetHeight}px`
                : `+=${targetsHeight[index + 1].offsetHeight}px`;
        const opacityFirst = index === 0 ? 1 : 0;
        const opacitySecond = index === targetsHeight.length - 1 ? 1 : 0;
        // console.log(targetsHeight, 'end');
        const tl = gsap
            .timeline({
                defaults: { duration: 1 },
                scrollTrigger: {
                    trigger: target,
                    pin: true,
                    scrub: true,
                    endTrigger: '.lasts',
                    start: "center center",
                    // start: () => innerHeight / 2 + 'center',
                    // end,
                    end: () => innerHeight / 2 + ' bottom',
                    markers: false,
                    // height: 50,
                    toggleActions: "restart none reverse reset",
                    pinSpacing,
                },
            })
            .from(target, { opacity: opacityFirst, duration: 0.2 }, 0)
            .to(target, { opacity: opacitySecond, duration: 0.2 }, 0.8);
        // console.log(tl);
    });

}, 100);

