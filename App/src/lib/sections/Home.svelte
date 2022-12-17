<script>
  import arrowDown from "../../assets/arrow-small.svg";

  import Header from "../ui/Header.svelte";
  import Link from "../ui/Link.svelte";

  import { gsap } from "gsap";
  import { ScrollToPlugin } from "gsap/ScrollToPlugin";

  const HandleFeaturedScroll = () => {
    gsap.registerPlugin(ScrollToPlugin);
    gsap.to(window, {
      duration: 3,
      scrollTo: "#featured",
      //   scrollTo: { y: 3000 },
      ease: "Expo.easeOut",
    });
  };

  const heroImage =
    "https://images.unsplash.com/photo-1542513217-0b0eedf7005d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80";
</script>

<section
  id="home"
  class=" bg-smokedClaret text-diamondsTherapy font-inter uppercase flex flex-col justify-between min-h-[100vh] px-[1.6em] pt-[1em] pb-[2em] "
>
  <Header />

  <div class="flex flex-col ">
    <div class="flex justify-center">
      <div
        class="h-[44em] w-[87em]  flex justify-center select-none overflow-hidden "
      >
        <img
          class="w-full object-cover hover:scale-125 ease-out duration-300"
          src={heroImage}
          alt="hero"
        />
      </div>
    </div>
    <!-- bottom -->
    <div class="flex items-end -mt-[2.28em]">
      <div class=" w-1/3">
        <img src={arrowDown} alt="pixeline-logo" class="w-[20px] " />
      </div>
      <div class="flex flex-col items-center text-center">
        <h1 class="text-[5.7em] leading-[1em] font-Monument text-herbes z-10">
          branding & photography
        </h1>
        <p class="w-[43.6em]">
          specialize in creating stunning visuals that capture your unique style
          and brand personality, helping you to stand out in a crowded
          marketplace.
        </p>
      </div>
      <div class="w-1/3 text-right">
        <!-- svelte-ignore a11y-click-events-have-key-events -->
        <!-- svelte-ignore a11y-missing-attribute -->
        <a on:click={HandleFeaturedScroll}>
          <Link text="see all works" />
        </a>
      </div>
    </div>
  </div>
</section>
