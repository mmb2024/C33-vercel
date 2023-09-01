<script>
  // @ts-nocheck
  import Table from '../../../lib/Table.svelte'
  export let data
</script>

<main
  class="relative flex flex-col items-center justify-center min-h-screen py-10"
>
  <h1
    class="pt-4 pb-8 bg-gradient-to-br dark:from-white from-black via-[#707070] to-[#ffffff] bg-clip-text text-center text-4xl font-medium tracking-tight text-transparent md:text-7xl"
  >
    Postgres on Vercel
  </h1>
  <Table users={data?.users} duration={data?.duration} />
  <div
    class="w-full max-w-lg mt-6 font-light text-center text-gray-600 dark:text-gray-300"
  >
  </div>
</main>

<style>
  
:root {
  --foreground-rgb: 0, 0, 0;
  --background-start-rgb: 214, 219, 220;
  --background-end-rgb: 255, 255, 255;
}

@media (prefers-color-scheme: dark) {
  :root {
    --foreground-rgb: 255, 255, 255;
    --background-start-rgb: 0, 0, 0;
    --background-end-rgb: 0, 0, 0;
  }
}


</style>
