<script>
  let firstName = "";
  let lastName = "";
  let email = "";
  let sendEmail = () => {
    console.log(firstName, lastName, email);
    emailSent = true;
  };
  let emailSent = false;
</script>

{#if emailSent === false}
  <div class="contact">
    <input bind:value={firstName} placeholder="First Name" />
    <input bind:value={lastName} placeholder="Last Name" />
    <input bind:value={email} placeholder="Email" />
    <button on:click={sendEmail}>Commit</button>
  </div>
{:else}
  <div>I will contact you soon!</div>
{/if}

<style>
  .contact {
    display: flex;
    gap: 10px;
    flex-direction: column;
  }
</style>
