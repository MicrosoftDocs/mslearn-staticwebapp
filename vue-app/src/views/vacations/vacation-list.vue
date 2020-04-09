<script>
import ButtonFooter from '@/components/button-footer.vue';
import CardContent from '@/components/card-content.vue';

const captains = console;

export default {
  name: 'VacationList',
  props: {
    vacations: {
      type: Array,
      default: () => [],
    },
  },
  components: {
    CardContent,
    ButtonFooter,
  },
  methods: {
    deleteVacation(vacation) {
      this.$emit('deleted', vacation);
      captains.log(`You tried to delete ${vacation.name}`);
    },
    selectVacation(vacation) {
      captains.log(`You tried to select ${vacation.name}`);
      this.$emit('selected', vacation);
    },
  },
};
</script>

<template>
  <ul class="list">
    <li
      v-for="(vacation, index) in vacations"
      :key="vacation.id"
      role="presentation"
    >
      <div class="card">
        <CardContent
          :name="vacation.name"
          :description="vacation.description"
        />
        <footer class="card-footer">
          <ButtonFooter
            class="delete-item"
            iconClasses="fas fa-trash"
            @clicked="deleteVacation"
            label="Delete"
            :dataIndex="index"
            :dataId="vacation.id"
            :item="vacation"
          />
          <ButtonFooter
            class="edit-item"
            iconClasses="fas fa-edit"
            @clicked="selectVacation"
            label="Edit"
            :dataIndex="index"
            :dataId="vacation.id"
            :item="vacation"
          />
        </footer>
      </div>
    </li>
  </ul>
</template>
