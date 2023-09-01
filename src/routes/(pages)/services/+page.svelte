<script>
  import Seo from "$lib/Seo.svelte";
  import { Modal, Content, Trigger } from "sv-popup";
  import Contact from "$lib/Contact.svelte";

  const posts = [
    {
      id: 1,
      title:
        "title1",
      image: "company-logo.png",
      body: "body title1",
    },    
    {
      id: 2,
      title: "title2",
      image: "company-logo.png",
      body: "body title2",
    },

  ];

</script>


<div class="container">
  <h3>Service</h3>
 
</div>

<Seo
title="Vercel | Cumbaya"
description="Diseño"
type="WebPage"
/>


<style>

  h3 {
    padding-top: 0.8em;
    padding-bottom: 0.1em;
    margin-bottom: 0.5em;
    font-size: 2em;
    font-weight: 400;
    border-bottom: 1px solid #ddd;
  }

</style>
