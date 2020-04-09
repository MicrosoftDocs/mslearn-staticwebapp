<script>
import ButtonFooter from '@/components/button-footer.vue';

export default {
  name: 'VacationDetail',
  props: {
    vacation: {
      type: Object,
      default() {},
    },
  },
  components: { ButtonFooter },
  data() {
    return {
      addMode: false,
      editingVacation: { ...this.vacation },
    };
  },
  watch: {
    vacation() {
      if (this.vacation && this.vacation.id) {
        this.editingVacation = { ...this.vacation };
        this.addMode = false;
      } else {
        this.editingVacation = { id: undefined, name: '', description: '' };
        this.addMode = true;
      }
    },
  },
  methods: {
    clear() {
      this.$emit('unselect');
    },
    saveVacation() {
      this.$emit('save', this.editingVacation);
      this.clear();
    },
  },
};
</script>

<template>
  <div class="card edit-detail">
    <header class="card-header">
      <p class="card-header-title">{{ editingVacation.name }}</p>
    </header>
    <div class="card-content">
      <div class="content">
        <div class="field" v-if="editingVacation.id">
          <label class="label" for="id">id</label>
          <input
            class="input"
            name="id"
            placeholder="e.g. VacationColleen"
            readonly
            type="text"
            v-model="editingVacation.id"
          />
        </div>
        <div class="field">
          <label class="label" for="name">name</label>
          <input
            class="input"
            name="name"
            placeholder="e.g. Colleen"
            type="text"
            v-model="editingVacation.name"
          />
        </div>
        <div class="field">
          <label class="label" for="description">description</label>
          <input
            class="input"
            name="description"
            placeholder="dance fight!"
            type="text"
            v-model="editingVacation.description"
          />
        </div>
      </div>
    </div>
    <footer class="card-footer">
      <ButtonFooter
        class="card-footer-item"
        label="Cancel"
        :className="'cancel-button'"
        :iconClasses="'fas fa-undo'"
        :item="editingVacation"
        @clicked="clear"
      ></ButtonFooter>
      <ButtonFooter
        class="card-footer-item"
        :className="'save-button'"
        :iconClasses="'fas fa-save'"
        :item="editingVacation"
        label="Save"
        @clicked="saveVacation"
      ></ButtonFooter>
    </footer>
  </div>
</template>
