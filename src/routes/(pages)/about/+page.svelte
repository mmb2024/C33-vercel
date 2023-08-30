<script>
  import Seo from "$lib/Seo.svelte";
  import Contact from "$lib/Contact.svelte";
</script>

<div class="container grid">
  <div class="C33body">
    <h3>About Us</h3>
    <p> Venta directa del propietario. Por favor no intermediarios...</p>

    <div class="contactus">
      <Contact />
    </div>
  </div>
</div>

<style>
  .grid {
    display: grid;
    grid-template-columns:  repeat(12, 1fr);
    gap: 2em;
  }
  .C33body {
    grid-column: span 12;
    width: 100%;
  }
  .contactus {
    margin-left: auto;
    margin-right: auto;
    padding: 40px 40px 40px 40px;
  }

  h3 {
    padding-top: 0.5em;
    padding-bottom: 0.5em;
    margin-bottom: 0.5em;
    font-size: 2em;
    font-weight: 500;
    border-bottom: 1px solid #ddd;
  }
  p {
    padding-top: 0.5em;
    padding-bottom: 0.5em;
    margin-bottom: 0.5em;
    font-size: 1.5em;
    font-weight: 500;
  }
</style>

<Seo
  title="Casa en Venta | Cumbaya"
  description="Diseño Minimalista con mucha iluminacion Natural"
  type="WebPage"
/>
