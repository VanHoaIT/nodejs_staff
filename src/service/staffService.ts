import { Staff, staffList } from '../model/staffModel';

export const getStaffList = (): Staff[] => {
	return staffList;
};

export const getTotalSalary = (): number => {
	let sum = 0;
	for (let i = 0; i < staffList.length; i++) {
		sum += staffList[i].salary;
	}
	return sum;
};
