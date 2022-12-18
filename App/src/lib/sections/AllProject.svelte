<script>
  import arrowDown from "../../assets/arrow-small.svg";
  import Link from "../ui/Link.svelte";
  import Header from "../ui/Header.svelte";

  const image1 =
    "https://images.unsplash.com/photo-1616837874254-8d5aaa63e273?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=856&q=80";
  const image2 =
    "https://images.unsplash.com/photo-1618352319577-e146e2d95e98?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80";
</script>

<section
  id="featured"
  class=" bg-tan text-cedar font-inter uppercase flex flex-col justify-between min-h-[100vh] "
>
  <!-- <Header /> -->
  <!-- px-[1.6em] pt-[1em] pb-[2em] -->
  <div class="flex flex-col">
    <div class="bg-dark px-[1.6em] pt-[1em] pb-[1em]">
      <h1 class="font-Monument text-[5em] leading-[1em] text-herbes">
        featured project
      </h1>
    </div>
    <div class="flex ">
      <div class="flex justify-center w-1/2">
        <div
          class="h-[36em] w-[87em]  flex justify-center select-none overflow-hidden"
        >
          <img
            class="w-full object-cover hover:scale-125 ease-out duration-300 "
            src={image1}
            alt="hero"
          />
        </div>
      </div>
      <div class="flex justify-center w-1/2 overflow-hidden">
        <div class="h-[36em] w-[87em]  flex justify-center select-none	">
          <img
            class="w-full object-cover hover:scale-125 ease-out duration-300 "
            src={image2}
            alt="hero"
          />
        </div>
      </div>
    </div>
  </div>

  <div class="flex justify-between 	px-[1.6em]">
    <div class="flex justify-between  gap-[10em] w-1/2 ">
      <p class="w-1/2 font-semibold	">
        Faces of Fashion is an annual event that brings together the brightest
        names in the fashion industry. From designers and models to stylists and
        industry insiders
      </p>
      <div class="flex justify-between w-1/3 ">
        <div class=" font-semibold	">role</div>
        <div class=" text-right w-1/3 font-semibold	">
          photography branding art direction
        </div>
      </div>
    </div>
    <h1 class="text-[3em] leading-[1em] font-Monument w-1/4 text-right">
      view full case study
    </h1>
  </div>

  <div class="flex justify-between items-end px-[1.6em] pb-[1.6em]">
    <h1 class="text-[5.7em] leading-[1em] font-Monument text-herbes  w-3/5">
      faces of fashion 2022 collection
    </h1>

    <div class="flex gap-[1.6em] items-center font-semibold">
      <Link text="next project" />
      <img src={arrowDown} alt="pixeline-logo" class="w-[20px] -rotate-90	" />
    </div>
  </div>
</section>
