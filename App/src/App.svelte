<script>
  import About from "./lib/sections/About.svelte";
  import FeaturedProject from "./lib/sections/FeaturedProject.svelte";
  import Home from "./lib/sections/Home.svelte";

  import { gsap } from "gsap";
  import { ScrollTrigger } from "gsap/ScrollTrigger";
  import { onMount } from "svelte";
  import Contact from "./lib/sections/Contact.svelte";
  import AllProject from "./lib/sections/AllProject.svelte";

  onMount(() => {
    gsap.registerPlugin(ScrollTrigger);
    const pLength = gsap.utils.toArray(".panel").length;

    let mm = gsap.matchMedia();

    mm.add("(min-width: 1200px) and (min-height: 900px)", () => {
      gsap.utils.toArray(".panel").forEach((panel, i) => {
        ScrollTrigger.create({
          trigger: panel,
          start: "top top",
          pin: true,
          pinSpacing: false,
          //markers: true,
        });
      });
      ScrollTrigger.create({
        // start: 0,
        // end: "max",
        snap: 1 / (pLength - 1),
      });
    });

    // gsap.to(".home", {
    //   y: "-80%",
    //   scrollTrigger: {
    //     trigger: ".about",
    //     start: "top 40%",
    //     end: "top 10%",
    //     markers: true,
    //     pin: true,
    //     scrub: false,
    //   },
    // });
  });
</script>

<div class="panel home ">
  <Home />
</div>
<div class="panel about">
  <About />
</div>
<div class="panel featured">
  <FeaturedProject />
</div>
<div class="panel featured">
  <Contact />
</div>
<!-- <div class="panel allProject">
  <AllProject />
</div> -->
