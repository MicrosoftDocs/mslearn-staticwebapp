<script>
import { mapActions, mapGetters } from 'vuex';
import ListHeader from '@/components/list-header.vue';
import Modal from '@/components/modal.vue';
import VacationDetail from './vacation-detail.vue';
import VacationList from './vacation-list.vue';

const captains = console;

export default {
  name: 'Vacations',
  data() {
    return {
      vacationToDelete: null,
      message: '',
      routePath: '/vacations',
      selected: null,
      showModal: false,
      title: 'Vacations',
    };
  },
  components: {
    ListHeader,
    VacationList,
    VacationDetail,
    Modal,
  },
  created() {
    this.getVacationsAction();
  },
  computed: {
    ...mapGetters('vacations', { vacations: 'vacations' }),
  },
  methods: {
    ...mapActions('vacations', [
      'getVacationsAction',
      'deleteVacationAction',
      'addVacationAction',
      'updateVacationAction',
    ]),
    askToDelete(vacation) {
      this.vacationToDelete = vacation;
      this.showModal = true;
      if (this.vacationToDelete.name) {
        this.message = `Would you like to delete ${this.vacationToDelete.name}?`;
        captains.log(this.message);
      }
    },
    clear() {
      this.selected = null;
    },
    closeModal() {
      this.showModal = false;
    },
    deleteVacation() {
      this.closeModal();
      if (this.vacationToDelete) {
        captains.log(
          `You said you want to delete ${this.vacationToDelete.name}`
        );
        this.deleteVacationAction(this.vacationToDelete);
      }
      this.clear();
    },
    enableAddMode() {
      this.selected = {};
    },
    getVacations() {
      this.getVacationsAction();
      this.clear();
    },
    save(vacation) {
      captains.log('vacation changed', vacation);
      if (vacation.id) {
        this.updateVacationAction(vacation);
      } else {
        this.addVacationAction(vacation);
      }
    },
    select(vacation) {
      this.selected = vacation;
    },
  },
};
</script>

<template>
  <div class="content-container">
    <ListHeader
      :title="title"
      @refresh="getVacations"
      @add="enableAddMode"
      :routePath="routePath"
    ></ListHeader>
    <div class="columns is-multiline is-variable">
      <div class="column is-8" v-if="vacations">
        <VacationList
          v-if="!selected"
          :vacations="vacations"
          @selected="select($event)"
          @deleted="askToDelete($event)"
        ></VacationList>
        <VacationDetail
          v-if="selected"
          :vacation="selected"
          @unselect="clear"
          @save="save"
        ></VacationDetail>
      </div>
    </div>

    <Modal
      class="modal-vacation"
      :message="message"
      :isOpen="showModal"
      @handleNo="closeModal"
      @handleYes="deleteVacation"
    ></Modal>
  </div>
</template>
