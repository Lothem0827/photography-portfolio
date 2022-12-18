<script>
  import arrowDown from "../../assets/arrow-small.svg";
  import Header from "../ui/Header.svelte";
  import Link from "../ui/Link.svelte";

  const image =
    "https://images.unsplash.com/photo-1616837874254-8d5aaa63e273?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=856&q=80";
</script>

<section
  class=" bg-cedar text-diamondsTherapy font-inter uppercase flex flex-col justify-between min-h-[100vh] px-[1.6em] pt-[1em] pb-[2em]"
>
  <!-- <Header /> -->

  <div class="flex justify-between items-end flex-wrap md:justify-end">
    <h1
      class="xxs:text-[8vw] font-Monument text-[9em] lg:text-[6.8em] md:text-[5em] sm:text-[4.5em] leading-[1em] text-herbes xsm:text-[4em] "
    >
      contemporary designer
    </h1>
    <p class="text-right w-1/4 lg:w-1/2 md:w-2/5">
      contemporary designs that are tailored to the needs of modern businesses
    </p>
  </div>
  <div>
    <h1
      class="xxs:text-[8vw] font-Monument text-[9em] lg:text-[6.8em] sm:text-[4.5em] xsm:text-[4em] leading-[1em] text-tan text-right"
    >
      for modern business
    </h1>
  </div>
  <div class="flex justify-between items-end ">
    <div
      class="flex justify-between items-end gap-[10em] xxs:flex-col xxs:items-start"
    >
      <div>
        <img
          class="object-cover  w-[17em] h-[17em] mb-4"
          src={image}
          alt="hero"
        />
        <p class="w-[20em]">
          photographer with half a decade of experience in photography, art
          direction, and branding.
        </p>
      </div>
      <div class="underline">know me more</div>
    </div>
    <Link text="see all works" />
  </div>
</section>
