<script>
import CardContent from '@/components/card-content.vue';

const captains = console;

export default {
  name: 'ProductList',
  props: {
    products: {
      type: Array,
      default: () => [],
    },
  },
  components: { CardContent },
  methods: {
    selectProduct(product) {
      captains.log(`You tried to select ${product.name}`);
      this.$emit('selected', product);
    },
  },
};
</script>

<template>
  <div>
    <div v-if="!products.length">Loading data ...</div>
    <ul class="list">
      <li v-for="product in products" :key="product.id" role="presentation">
        <div class="card">
          <CardContent
            :name="product.name"
            :description="product.description"
          />
        </div>
      </li>
    </ul>
  </div>
</template>
