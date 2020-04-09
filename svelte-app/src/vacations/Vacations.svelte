<script>
  import { onMount } from 'svelte';
  import { ListHeader, Modal } from '../components';
  import VacationList from './VacationList.svelte';
  import VacationDetail from './VacationDetail.svelte';
  import {
    state,
    getVacationsAction,
    deleteVacationAction,
    addVacationAction,
    updateVacationAction
  } from '../store';

  const { vacations } = state;

  let selected = undefined;
  let routePath = '/vacations';
  let title = 'Vacations';
  let vacationToDelete = null;
  let message = '';
  let showModal = false;

  onMount(async () => await getVacations());

  function enableAddMode() {
    selected = {};
  }

  function askToDelete({ detail: vacation }) {
    vacationToDelete = vacation;
    showModal = true;
    if (vacationToDelete.name) {
      message = `Would you like to delete ${vacationToDelete.name}?`;
    }
  }

  function clear() {
    selected = null;
  }

  function closeModal() {
    showModal = false;
  }

  async function deleteVacation() {
    closeModal();
    if (vacationToDelete) {
      console.log(`You said you want to delete ${vacationToDelete.name}`);
      await deleteVacationAction(vacationToDelete);
    }
    clear();
  }

  async function getVacations() {
    await getVacationsAction();
  }

  async function save({ detail: vacation }) {
    console.log('vacation changed', vacation);
    if (vacation.id) {
      await updateVacationAction(vacation);
    } else {
      await addVacationAction(vacation);
    }
  }

  function select({ detail: vacation }) {
    selected = vacation;
    console.log(`selected ${vacation.name}`);
  }
</script>

<div class="content-container">
  <ListHeader
    {title}
    {routePath}
    on:add={enableAddMode}
    on:refresh={getVacations} />
  <div class="columns is-multiline is-variable">
    {#if vacations}
      <div class="column is-8">
        {#if !selected}
          <VacationList
            vacations={$vacations}
            on:deleted={askToDelete}
            on:selected={select} />
        {:else}
          <VacationDetail
            vacation={selected}
            on:unselect={clear}
            on:save={save} />
        {/if}
      </div>
    {/if}
  </div>

  <Modal
    {message}
    isOpen={showModal}
    on:handleNo={closeModal}
    on:handleYes={deleteVacation} />
</div>
