<script>
  export let text;
</script>

<span class="link link-underline link-underline-black py-1 cursor-pointer">
  {text}
</span>

<style>
  :root {
    --diamond-therapy: #d9cac1;
  }
  .link-underline {
    border-bottom-width: 0;
    background-image: linear-gradient(transparent, transparent),
      linear-gradient(var(--diamond-therapy), var(--diamond-therapy));

    background-size: 0 2px;
    background-position: 0 100%;
    background-repeat: no-repeat;
    transition: background-size 0.5s ease-in-out;
  }

  .link-underline:hover {
    background-size: 100% 2px;
    background-position: 0 100%;
  }
</style>
