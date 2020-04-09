import React from 'react';
import { withRouter } from 'react-router';

import { ButtonFooter, CardContent } from '../components';

function VacationList({
  handleDeleteVacation,
  handleSelectVacation,
  vacations,
  history,
}) {
  function selectVacation(e) {
    const vacation = getSelectedVacation(e);
    handleSelectVacation(vacation);
    history.push(`/vacations/${vacation.id}`);
  }

  function deleteVacation(e) {
    const vacation = getSelectedVacation(e);
    handleDeleteVacation(vacation);
  }

  function getSelectedVacation(e) {
    const index = +e.currentTarget.dataset.index;
    return vacations[index];
  }

  return (
    <ul className="list">
      {vacations.map((vacation, index) => (
        <li key={vacation.id} role="presentation">
          <div className="card">
            <CardContent
              name={vacation.name}
              description={vacation.description}
            />
            <footer className="card-footer">
              <ButtonFooter
                className="delete-item"
                iconClasses="fas fa-trash"
                onClick={deleteVacation}
                label="Delete"
                dataIndex={index}
                dataId={vacation.id}
              />
              <ButtonFooter
                className="edit-item"
                iconClasses="fas fa-edit"
                onClick={selectVacation}
                label="Edit"
                dataIndex={index}
                dataId={vacation.id}
              />
            </footer>
          </div>
        </li>
      ))}
    </ul>
  );
}

export default withRouter(VacationList);
