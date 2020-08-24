<script>
  import { onMount } from 'svelte';
  import { ListHeader } from '../components';
  import ProductList from './ProductList.svelte';
  import { state, getProductsAction } from '../store';

  const { products } = state;

  let routePath = '/products';
  let title = 'Products';

  onMount(async () => await getProducts());

  async function getProducts() {
    await getProductsAction();
  }
</script>

<div class="content-container">
  <ListHeader {title} {routePath} on:refresh={getProducts} />
  <div class="columns is-multiline is-variable">
    {#if products}
      <div class="column is-8">
        <ProductList products={$products} />
      </div>
    {/if}
  </div>

</div>
