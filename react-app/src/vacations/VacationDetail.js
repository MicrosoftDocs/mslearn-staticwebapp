import React, { useEffect, useState } from 'react';
import { withRouter } from 'react-router';

import { ButtonFooter, InputDetail } from '../components';

function VacationDetail({
  vacation: initVacation,
  handleCancelVacation,
  handleSaveVacation,
  history,
}) {
  const [vacation, setVacation] = useState(Object.assign({}, initVacation));

  useEffect(() => {
    if (!vacation) {
      history.push('/vacations'); // no vacation, bail out of Details
    }
  }, [vacation, history]);

  function handleSave() {
    const chgVacation = { ...vacation, id: vacation.id || null };
    handleSaveVacation(chgVacation);
  }

  function handleNameChange(e) {
    setVacation({ ...vacation, name: e.target.value });
  }

  function handleDescriptionChange(e) {
    setVacation({ ...vacation, description: e.target.value });
  }

  return (
    <div className="card edit-detail">
      <header className="card-header">
        <p className="card-header-title">
          {vacation.name}
          &nbsp;
        </p>
      </header>
      <div className="card-content">
        <div className="content">
          {vacation.id && (
            <InputDetail name="id" value={vacation.id} readOnly="true" />
          )}
          <InputDetail
            name="name"
            value={vacation.name}
            placeholder="e.g Colleen"
            onChange={handleNameChange}
          />
          <InputDetail
            name="description"
            value={vacation.description}
            placeholder="e.g dance fight!"
            onChange={handleDescriptionChange}
          />
        </div>
      </div>
      <footer className="card-footer ">
        <ButtonFooter
          className="cancel-button"
          iconClasses="fas fa-undo"
          onClick={handleCancelVacation}
          label="Cancel"
        />
        <ButtonFooter
          className="save-button"
          iconClasses="fas fa-save"
          onClick={handleSave}
          label="Save"
        />
      </footer>
    </div>
  );
}

export default withRouter(VacationDetail);
