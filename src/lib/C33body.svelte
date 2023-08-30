<script>
  // @ts-nocheck
  import Button from "$lib/Button.svelte";
  import Contact from "./Contact.svelte";
  import { Modal, Content, Trigger } from "sv-popup"
</script>

<div class="container">
  <div class="C33body">
    <div class="title">
      <h3>Acabados de Lujo</h3>
    </div>
    <div class="features">
        <p> - Arquitectura Moderna/Minimalista</p>       
        <p> - 500 m2 de Construccion. 840 m2 de Terreno</p>
        <p> - 4 Dormitorios. 3 Baños Completos</p>
        <p> - Estar/Estudio en Segunda Planta</p>
        <p> - Master con Jacuzzi y Salita Estar</p>
        <p> - Sala Doble Altura</p>
        <p> - Porcelanatos Italianos</p>
        <p> - Griferia-Sanitarios Franz Viegener</p>
        <p> - BBQ, Area de Servicio. Bodega</p>
        <p> - Jardines Amplios</p>
        <p> - Garage 4 Autos</p>
        <p> - Areas Amplias - Grandes Ventanales</p>
        <p> - Mucha Iluminacion Natural</p>
        <p> - Urbanizacion Cerrada, Guardiania 24 Horas. </p>
        <p> - Canchas de Tenis, Futbol, Basket, Voley</p>
    </div>

    <div class="photo-main">
      <Modal big={true} button={false}>
        <Content>
          <img src="C33fromPark.jpg" 
                alt="C33fromPark.jpg" width="1200" height="800" />
        </Content>
        <Trigger>
          <img src="C33fromPark.jpg" 
                alt="C33fromPark.jpg" width="600" height="400" />
        </Trigger>
      </Modal>
    </div>
  </div>
  <div class="contactus">
    <Contact />
  </div>
</div>

<style>
  .container {
    display: grid;
    background-color: #fff;
    color: #282727;
  }

  .C33body {
    display: grid;
    grid-template-columns: 500px 500px;
    margin-left: 0px;
    grid-gap: 0px;
  }

  .title {
    grid-row: 1 / 2;
    grid-column: 1;
    background-color: rgba(255, 255, 255, 0.842);
    color: #ff3e00;
    margin-top: 20px;
    padding: 0px 0px 0px 10px;
  }

  .features {
    grid-row: 2;
    grid-column: 1;
    background-color: rgba(245, 245, 245, 0.842);
    margin-top: 0px;
    padding: 30px 15px 5px 20px;
  }
  .photo-main {
    grid-row: 2;
    grid-column: 2;
    margin: 40px 10px 0px 0px;
  }
  .contactus {
    width: 100%;
    margin: 0px 0px 30px 250px;
  }

  h3 {
    padding-bottom: 0.2em;
    margin-bottom: 0.8em;
    font-size: 2em;
    font-weight: 400;
    border-bottom: 1px solid #d3d1d1;
  }

  p {
    line-height: 1.5;
    margin-top: -0.5em;
    padding-top: -1.0em;
    padding-bottom: 0em;
    font-size: 1.4em;
    font-weight: 400;
  }

</style>
