<script>
  import { onMount, createEventDispatcher } from 'svelte';
  import { ButtonFooter } from '../components';

  const dispatch = createEventDispatcher();
  export let vacation = {};
  let addMode = false;
  let editingVacation = { ...vacation };

  onMount(() => watchVacation());

  function clear() {
    dispatch('unselect');
  }

  function saveVacation() {
    dispatch('save', editingVacation);
    clear();
  }

  function watchVacation() {
    if (vacation && vacation.id) {
      editingVacation = { ...vacation };
      addMode = false;
    } else {
      editingVacation = { id: undefined, name: '', description: '' };
      addMode = true;
    }
  }

  const cancelOptions = {
    className: 'card-footer-item cancel-button',
    label: 'Cancel',
    iconClasses: 'fas fa-undo'
  };

  const saveOptions = {
    className: 'card-footer-item save-button',
    label: 'Save',
    iconClasses: 'fas fa-save'
  };
</script>

<div class="card edit-detail">
  <header class="card-header">
    <p class="card-header-title">{editingVacation.name}</p>
  </header>
  <div class="card-content">
    <div class="content">
      {#if editingVacation.id}
        <div class="field">
          <label class="label" for="id">id</label>
          <input
            class="input"
            name="id"
            placeholder="e.g. VacationColleen"
            readonly
            type="text"
            bind:value={editingVacation.id} />
        </div>
      {/if}
      <div class="field">
        <label class="label" for="name">name</label>
        <input
          class="input"
          name="name"
          placeholder="e.g. Colleen"
          type="text"
          bind:value={editingVacation.name} />
      </div>
      <div class="field">
        <label class="label" for="description">description</label>
        <input
          class="input"
          name="description"
          placeholder="dance fight!"
          type="text"
          bind:value={editingVacation.description} />
      </div>
    </div>
  </div>

  <footer class="card-footer">
    <ButtonFooter
      {...cancelOptions}
      item={editingVacation}
      on:clicked={clear} />
    <ButtonFooter
      {...saveOptions}
      item={editingVacation}
      on:clicked={saveVacation} />
  </footer>
</div>
