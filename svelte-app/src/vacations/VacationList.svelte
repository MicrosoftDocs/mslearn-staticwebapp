<script>
  import { createEventDispatcher } from 'svelte';
  import { ButtonFooter, CardContent } from '../components';

  const dispatch = createEventDispatcher();
  export let vacations = [];

  function deleteVacation(vacation) {
    dispatch('deleted', vacation);
  }

  function selectVacation(vacation) {
    dispatch('selected', vacation);
  }

  const deleteOptions = {
    className: 'delete-item',
    label: 'Delete',
    iconClasses: 'fas fa-trash'
  };

  const editOptions = {
    className: 'edit-item',
    label: 'Edit',
    iconClasses: 'fas fa-edit'
  };
</script>

<ul class="list">
  {#each vacations as { id, name, description }, i (id)}
    <li role="presentation">
      <div class="card">
        <CardContent {name} {description} />
        <footer class="card-footer">
          <ButtonFooter
            {...deleteOptions}
            dataId={id}
            dataIndex={i}
            item={vacations[i]}
            on:clicked={deleteVacation(vacations[i])} />
          <ButtonFooter
            {...editOptions}
            dataId={id}
            dataIndex={i}
            item={vacations[i]}
            on:clicked={selectVacation(vacations[i])} />
        </footer>
      </div>
    </li>
  {/each}
</ul>
