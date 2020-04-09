import React, { useEffect, useState } from 'react';
import { Route, Switch } from 'react-router-dom';

import { ListHeader, ModalYesNo } from '../components';
import VacationDetail from './VacationDetail';
import VacationList from './VacationList';
import useVacations from './useVacations';

const captains = console;

function Vacations({ history }) {
  const [vacationToDelete, setVacationToDelete] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const {
    addVacation,
    deleteVacation,
    getVacations,
    vacations,
    selectVacation,
    selectedVacation,
    updateVacation,
  } = useVacations();

  useEffect(() => {
    getVacations();
  }, [getVacations]);

  function addNewVacation() {
    selectVacation({});
    history.push('/vacations/0');
  }

  function handleCancelVacation() {
    history.push('/vacations');
    selectVacation(null);
    setVacationToDelete(null);
  }

  function handleDeleteVacation(vacation) {
    selectVacation(null);
    setVacationToDelete(vacation);
    setShowModal(true);
  }

  function handleSaveVacation(vacation) {
    if (selectedVacation && selectedVacation.name) {
      captains.log(vacation);
      updateVacation(vacation);
    } else {
      addVacation(vacation);
    }
    handleCancelVacation();
  }

  function handleCloseModal() {
    setShowModal(false);
  }

  function handleDeleteFromModal() {
    setShowModal(false);
    deleteVacation(vacationToDelete);
    handleCancelVacation();
  }

  function handleSelectVacation(selectedVacation) {
    selectVacation(selectedVacation);
    captains.log(`you selected ${selectedVacation.name}`);
  }

  function handleRefresh() {
    handleCancelVacation();
    getVacations();
  }

  return (
    <div className="content-container">
      <ListHeader
        title="Vacations"
        handleAdd={addNewVacation}
        handleRefresh={handleRefresh}
        routePath="/vacations"
      />
      <div className="columns is-multiline is-variable">
        <div className="column is-8">
          <Switch>
            <Route
              exact
              path="/vacations"
              component={() => (
                <VacationList
                  vacations={vacations}
                  selectedVacation={selectedVacation}
                  handleSelectVacation={handleSelectVacation}
                  handleDeleteVacation={handleDeleteVacation}
                />
              )}
            />
            <Route
              exact
              path="/vacations/:id"
              component={() => {
                return (
                  <VacationDetail
                    vacation={selectedVacation}
                    handleCancelVacation={handleCancelVacation}
                    handleSaveVacation={handleSaveVacation}
                  />
                );
              }}
            />
          </Switch>
        </div>
      </div>

      {showModal && (
        <ModalYesNo
          message={`Would you like to delete ${vacationToDelete.name}?`}
          onNo={handleCloseModal}
          onYes={handleDeleteFromModal}
        />
      )}
    </div>
  );
}

export default Vacations;
