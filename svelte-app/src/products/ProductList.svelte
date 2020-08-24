<script>
  import { CardContent } from '../components';

  export let products = [];
</script>

<div>
  {#if !products.length}
    <div>Loading data ...</div>
  {/if}
  <ul class="list">
    {#each products as { id, name, description }, i (id)}
      <li role="presentation">
        <div class="card">
          <CardContent {name} {description} />
        </div>
      </li>
    {/each}
  </ul>
</div>
