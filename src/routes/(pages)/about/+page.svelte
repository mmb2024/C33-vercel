<script>
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

</main>