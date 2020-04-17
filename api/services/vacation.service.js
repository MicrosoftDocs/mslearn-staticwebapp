const data = require('./vacation-data');

async function getVacations({ req, res }) {
  try {
    const vacations = data.getVacations();
    res.status(200).json(vacations);
  } catch (error) {
    res.status(500).send(error);
  }
}

async function postVacation({ req, res }) {
  const vacation = {
    id: undefined,
    name: req.body.name,
    description: req.body.description,
  };

  try {
    const newVacation = data.addVacation(vacation);
    res.status(201).json(newVacation);
  } catch (error) {
    res.status(500).send(error);
  }
}

async function putVacation({ req, res }) {
  const vacation = {
    id: req.params.id,
    name: req.body.name,
    description: req.body.description,
  };

  try {
    const updatedVacation = data.updateVacation(vacation);
    res.status(200).json(updatedVacation);
  } catch (error) {
    res.status(500).send(error);
  }
}

async function deleteVacation({ req, res }) {
  const { id } = req.params;

  try {
    data.deleteVacation(id);
    res.status(200).json({});
  } catch (error) {
    res.status(500).send(error);
  }
}

module.exports = { getVacations, postVacation, putVacation, deleteVacation };
