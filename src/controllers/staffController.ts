import { getStaffList, getTotalSalary } from '../service/staffService';

class staffController {
	getStaff(req, res) {
		const staff = getStaffList();
		const totalSalary = getTotalSalary();
		res.render('staff', { staff, totalSalary });
	}
}

module.exports = new staffController();
