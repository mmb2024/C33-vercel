<script>
    import Button from "$lib/Button.svelte";
    import Contact from "$lib/Contact.svelte";

</script>


<div class="contact">
  <h3>Contáctenos</h3>
  <p>Sus datos solo seran usados solo para responder sus requerimientos</p>

  <div class="action">
        <a class="secondary" href="/contact"  >
          <Button class="secondary" id="a-button" size="medium" 
          >Solicite más Información</Button>
          </a>
  </div>
</div>


<style>
  .contact {
    display: block;
    margin-left: auto;
    margin-right: auto;
    padding: 1em;
    width: 50%;
    background-color: rgba(240, 242, 245, 0.808);

  }
  .action {
    margin-left: auto;
    margin-right: auto;
    width: 60%;
    font-size: 1.2em;
  }

  h3 {
    padding-top: 0.5em;
    margin-bottom: 0.5em;
    font-size: 1.8em;
    font-weight: 400;
    border-bottom: 1px solid #ddd;
    color: #f19576;

  }

  p {
    line-height: 1.3em;
    font-size: 1.4em;
    font-weight: 400;
  }

  a {
    text-decoration: none;
    color: var(--primary-color);
    color: #0a84ff;
  }
  a:hover {
    text-decoration: underline;
  }


</style>
