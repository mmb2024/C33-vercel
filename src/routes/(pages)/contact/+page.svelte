<script>
  // @ts-nocheck
  import { enhance, applyAction } from "$app/forms";
  import Button from "$lib/Button.svelte";
  import Seo from "$lib/Seo.svelte";

  export let form;
</script>

<div class="container">

  <div class="col-md-10 h-100 d-flex justify-content-center align-items-center">
    <div class="col-md-9 rounded px-5 py-4 shadow bg-white text-left">
      {#if form?.success}
        <h4 class="success col-md-12">{form?.status || ""}</h4>
      {:else}
        <h2>Sus datos sólo se utilizarán para responder sus inquietudes.   Anuncio directo del propietario.</h2>
        <form  method="POST"
          use:enhance={() => {
            return async ({ result }) => {
              await applyAction(result);
            };
          }}
        >
          <div class="form-group">
            <label class="col-md-5 control-label" for="name">Nombre <span class="text-danger">*</span></label>
            <div class="col-md-8">
              <input
                id="name"
                name="name"
                type="text"
                placeholder="Digite su Nombre"
                class="form-control form-control-lg"
                value={form?.name || ""}
                class:error={form?.errors?.name}
              />
              {#if form?.errors?.name}
                <p class="red">{form?.errors?.name}</p>
              {/if}
            </div>
          </div>

          <div class="form-group">
            <label class="col-md-3 control-label" for="lastname">Apellido <span class="text-danger">*</span></label>
            <div class="col-md-8">
              <input
                id="lastname"
                name="lastname"
                type="text"
                placeholder="Digite su Apellido"
                class="form-control form-control-lg"
                value={form?.lastname || ""}
                class:error={form?.errors?.lastname}
              />
              {#if form?.errors?.lastname}
                <p class="red">{form?.errors?.lastname}</p>
              {/if}
            </div>
          </div>

          <div class="form-group">
            <label class="col-md-3 control-label" for="email">E-mail <span class="text-danger">*</span></label>
            <div class="col-md-8">
              <input
                id="email"
                name="email"
                type="text"
                placeholder="ex: suEmail@gmail.com"
                class="form-control form-control-lg"
                value={form?.email || ""}
                class:error={form?.errors?.email}
              />
              {#if form?.errors?.email}
                <p class="red">{form?.errors?.email}</p>
              {/if}
            </div>
          </div>

          <div class="form-group">
            <label class="col-md-3 control-label" for="message">Mensaje</label>
            <div class="col-md-8">
              <textarea
                class="form-control  form-control-lg"
                id="message"
                name="message"
                rows="4"
                placeholder="Por favor ingrese su requerimiento aqui...."
                value={form?.message || ""}
                class:error={form?.errors?.message}
              />
              {#if form?.errors?.message}
                <p class="red">{form?.errors?.message}</p>
              {/if}
            </div>
          </div>

          <div class="col-8 form-group text-center">
            <div class="btn btn-vue btn-lg col-4">
              <Button type="submit">Enviar</Button>
            </div>
          </div>
        </form>
      {/if}

    </div>
  </div>
</div>


<Seo
  title="Vercel | Cumbaya"
  description="Diseño"
  type="WebPage"
/>

<style>
  .container {
    width: 100%;
    padding: 2em 0;
  }
  h2 {
    font-weight: 500;
    font-size: 1.5em;
  }
  input,
  textarea {
    width: 100%;
    padding: 0.75em 1em;
    border-radius: 0.25em;
    border: 1px solid #999;
  }
  .form-group {
    margin-bottom: 1.5em;
  }
  label {
    display: block;
    padding-bottom: 0.5em;
  }
  .success {
    color: rgb(39, 21, 237);
  }
  .error {
    border: 1px solid red;
  }
  .red {
    color: red;
  }
</style>
