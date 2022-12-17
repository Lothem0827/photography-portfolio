<script>
  import About from "./lib/sections/About.svelte";
  import FeaturedProject from "./lib/sections/FeaturedProject.svelte";
  import Home from "./lib/sections/Home.svelte";

  import { gsap } from "gsap";
  import { ScrollTrigger } from "gsap/ScrollTrigger";
  import { onMount } from "svelte";
  import Contact from "./lib/sections/Contact.svelte";

  onMount(() => {
    gsap.registerPlugin(ScrollTrigger);
    const pLength = gsap.utils.toArray(".panel").length;
    gsap.utils.toArray(".panel").forEach((panel, i) => {
      ScrollTrigger.create({
        trigger: panel,
        start: "top top",
        pin: true,
        pinSpacing: false,
      });
    });

    ScrollTrigger.create({
      start: 0,
      end: "max",
      snap: 1 / (pLength - 1),
    });

    // gsap.to(".home", {
    //   scale: 0.75,
    //   scrollTrigger: {
    //     trigger: ".about",
    //     start: "top 40%",
    //     end: "+=2000",
    //     markers: true,
    //     pin: true,
    //     scrub: true,
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
