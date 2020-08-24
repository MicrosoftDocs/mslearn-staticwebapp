<script>
  import { Link } from 'svelte-routing';
  import { createEventDispatcher } from 'svelte';

  const dispatch = createEventDispatcher();
  export let title = '';
  export let routePath = '';
</script>

<div class="content-title-group">
  <Link to={routePath}>
    <h2 class="title">{title}</h2>
  </Link>
  <button
    class="button refresh-button"
    on:click={() => dispatch('refresh')}
    aria-label="refresh">
    <i class="fas fa-sync" aria-hidden="true" />
  </button>
</div>
