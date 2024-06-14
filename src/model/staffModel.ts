export interface Staff {
	id: number;
	name: string;
	position: string;
	salary: number;
}

export const staffList: Staff[] = [
	{ id: 1, name: 'Nguyen A', position: 'intern', salary: 800 },
	{ id: 2, name: 'Nguyen B', position: 'intern', salary: 1800 },
	{ id: 3, name: 'Nguyen C', position: 'staff', salary: 5800 }
];

