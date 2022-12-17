<script>
  import logo from "../../assets/pixeline-logo.svg";
  import Link from "./Link.svelte";

  import { gsap } from "gsap";
  import { ScrollToPlugin } from "gsap/ScrollToPlugin";

  const HandleScrollContact = () => {
    gsap.registerPlugin(ScrollToPlugin);
    gsap.to(window, {
      duration: 3,
      scrollTo: "#contact",
      //   scrollTo: { y: 3000 },
      ease: "Expo.easeOut",
    });
  };
</script>

<header class="flex justify-between items-center ">
  <div class=" w-1/3">
    <img src={logo} alt="pixeline-logo" class="w-[3.6em]" />
  </div>
  <div class="w-1/3 text-center">
    <p>available for freelance work</p>
  </div>
  <div class="w-1/3 text-right">
    <!-- svelte-ignore a11y-click-events-have-key-events -->
    <!-- svelte-ignore a11y-missing-attribute -->
    <a on:click={HandleScrollContact}>
      <Link text="contact us" />
    </a>
  </div>
</header>
