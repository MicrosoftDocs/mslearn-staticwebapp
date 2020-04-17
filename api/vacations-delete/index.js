const { vacationService } = require('../services');

module.exports = async function (context, req) {
  return await vacationService.deleteVacation(context);
};
