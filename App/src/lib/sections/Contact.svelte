<script>
  import arrowDown from "../../assets/arrow-small.svg";
  import Header from "../ui/Header.svelte";
  import Link from "../ui/Link.svelte";

  import { gsap } from "gsap";
  import { ScrollToPlugin } from "gsap/ScrollToPlugin";

  //gsap.registerPlugin(ScrollToPlugin);
  //   const scroll = () => {
  //     gsap.to(window, {
  //       duration: 1,
  //       scrollTo: { y: "#section" + (index + 1), offsetY: 70 },
  //     });
  //   };

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
    <div class="flex  items-end">
      <h1 class="font-Monument text-[5.7em] leading-[1em] text-cedar w-2/3">
        we can accomplish amazing things together
      </h1>
      <p class=" w-1/5">
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

  <div class="flex justify-between">
    <div class="w-2/3 " />
    <div class="w-1/3">
      <img class="object-cover  w-[17em] h-[17em] " src={image} alt="hero" />
      >
    </div>
  </div>

  <div class="flex justify-between items-end ">
    <div class="flex flex-col gap-2">
      <div class="flex justify-between ">
        <p>email address</p>
        <p>pixeline.freelance@gmail.com</p>
      </div>
      <h1 class="font-Monument text-[5.7em] leading-[1em] text-cedar ">
        contact us
      </h1>
    </div>
    <div class="flex items-end justify-between">
      <p class=" w-1/3">
        follow us and stay up to date on our latest news and updates
      </p>
      <div
        class="text-[3em] leading-[1em] font-Monument text-right flex flex-col gap-1"
      >
        <h1>behance</h1>
        <h1>instagram</h1>
        <h1>linkedin</h1>
      </div>
    </div>
  </div>
</section>
