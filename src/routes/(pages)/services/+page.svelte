<script>
  import Seo from "$lib/Seo.svelte";
  import { Modal, Content, Trigger } from "sv-popup";
  import Contact from "$lib/Contact.svelte";

  const posts = [
    {
      id: 1,
      title:
        "Fachada Principal",
      image: "C33facFront1.png",
      body: "Fachada Frontal",
    },    
    {
      id: 2,
      title: "Fachada Posterior",
      image: "C33facPost.JPG",
      body: "Fachada Posterior",
    },
    {
      id: 3,
      title: "Sala",
      image: "C33living1.JPG",
      body: "Sala",
    },

    {
      id: 4,
      title: "Sala2",
      image: "C33living2.JPG",
      body: "Sala - Comedor - Bar",
    },
    {
      id: 5,
      title: "Corredor PA",
      image: "C33PAcorridor.JPG",
      body: "Corredor PA",
    },
    {
      id: 6,
      title: "Hall",
      image: "C33stairs1.JPG",
      body: "Hall Comedor - Sala",
    },
    {
      id: 7,
      title:
        "Gradas",
      image: "C33stairs2.JPG",
      body: "Gradas y Hall de Ingreso",
    },
    {
      id: 8,
      title: "Sala Estar PA",
      image: "C33studios1.JPG",
      body: "Estudio PA",
    },
    {
      id: 9,
      title: "Sala",
      image: "C33studios2.JPG",
      body: "Sala Doble Altura",
    },

  ];

</script>


<div class="container">
  <h3>Areas amplias con mucha luz natural</h3>
  <div class="grid">
    {#each posts as { id, title, image, body }}
      <div>
        <Modal big={true} button={false}>
          <Content>
            <h2>{title.substring(0, 20)}</h2>
            <img src={image} alt={title} width="1000" height="800"/>
            <!--<img src="http://localhost:5173/C33facFront1.png" alt={title} />-->
          </Content>
          <Trigger>
            <img src={image} alt={title} width="380" height="300"/>
            <p>{body.substring(0, 80)}</p>
          </Trigger>
        </Modal>
      </div>
    {/each}
  </div>

  <div class="contact">
    <h2> Contáctenos para una mejor información. </h2>
    <div>
      <Contact />
    </div>



    
  </div>  
  
</div>

<Seo
  title="Casa en Venta | Cumbaya"
  description="Diseño Minimalista con mucha iluminacion Natural"
  type="WebPage"
/>


<style>
  .grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 2em;
    padding: 2em 0;
    font-size: 1.5em;
    font-weight: 400;
  }
  .contact {
    grid-column: block;
    margin-left: auto;
    margin-right: auto;
    padding: 50px;
  }

  h3 {
    padding-top: 0.8em;
    padding-bottom: 0.1em;
    margin-bottom: 0.5em;
    font-size: 2em;
    font-weight: 400;
    border-bottom: 1px solid #ddd;
  }
  h2 {
    font-size: 1.5em;
    padding-bottom: 0.6em;
  }

</style>
