<script>
  import Seo from "$lib/Seo.svelte";

  export let data;

  const { post } = data;
</script>

<div class="container">
  <h1>{post.title}</h1>
  <p>{post.body}</p>
</div>

<Seo
  title="Casa en Venta | Cumbaya"
  description="Diseño Minimalista con mucha iluminacion Natural"
  type="WebPage"
/>
