<script>
  import arrowDown from "../../assets/arrow-small.svg";
  import Header from "../ui/Header.svelte";
  import Link from "../ui/Link.svelte";

  import { gsap } from "gsap";
  import { ScrollToPlugin } from "gsap/ScrollToPlugin";

  const HandleScrollTop = () => {
    gsap.registerPlugin(ScrollToPlugin);
    gsap.to(window, {
      duration: 3,
      scrollTo: 1,

      ease: "Expo.easeOut",
    });
  };

  const image =
    "https://images.unsplash.com/photo-1616837874254-8d5aaa63e273?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=856&q=80";
</script>

<section
  id="contact"
  class=" bg-smokedClaret text-diamondsTherapy font-inter uppercase flex flex-col justify-between min-h-[100vh] px-[1.6em] pt-[1em] pb-[2em]"
>
  <!-- <Header /> -->
  <div class="flex items-start">
    <div
      class="flex  items-end sm:justify-between xsm:flex-col xsm:items-start"
    >
      <h1
        class="font-Monument leading-[1em] text-cedar w-2/3 lg:w-4/5 text-[5.7em] lg:text-[4.6em] sm:text-[4.5em] sm:w-3/4 xxs:text-[8vw]"
      >
        we can accomplish amazing things together
      </h1>
      <p class=" w-1/5 sm:text-right xsm:text-start xsm:w-1/2 ">
        thank you for looking our collection and portfolio. i am excited at the
        possibility of working with you.
      </p>
    </div>

    <!-- svelte-ignore a11y-click-events-have-key-events -->
    <img
      src={arrowDown}
      alt="pixeline-logo"
      class="w-[20px] rotate-180 cursor-pointer"
      on:click={HandleScrollTop}
    />
  </div>

  <div class="flex justify-between ">
    <div class="w-2/3 " />
    <div class="w-1/3 xsm:order-first">
      <img class="object-cover  w-[17em] h-[17em] " src={image} alt="hero" />
    </div>
  </div>

  <div
    class="flex justify-between items-end xxs:flex-col xxs:items-start xxs:gap-4"
  >
    <div class="flex flex-col gap-2 lg:w-1/2 md:w-3/4  xxs:w-full">
      <div class="flex justify-between ">
        <p class="lg:hidden">email address</p>
        <p>pixeline.freelance@gmail.com</p>
      </div>
      <h1
        class="font-Monument text-[5.7em] lg:text-[4.6em]  leading-[1em] text-cedar xxs:text-[8vw]"
      >
        contact us
      </h1>
    </div>
    <div class="flex items-end justify-between">
      <p class=" w-1/3 lg:hidden xxs:w-full">
        follow us and stay up to date on our latest news and updates
      </p>
      <div
        class="md:text-[2em] text-[3em] leading-[1em] font-Monument text-right flex flex-col gap-1 xxs:text-left "
      >
        <h1>behance</h1>
        <h1>instagram</h1>
        <h1>linkedin</h1>
      </div>
    </div>
  </div>
</section>
