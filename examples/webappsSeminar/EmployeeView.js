Ext.define('MyApp.view.employee.EmployeeView',{
	extend: 'Ext.grid.Grid',
	xtype: 'employeeview',
	cls: 'employeeview',
	controller: 'employeeviewcontroller',
	viewModel: {type: 'employeeviewmodel'},

	title: 'Employees',
	store: {type: 'employees'},
	sample: {
		"emp_no":"4",
		"first_name":"Bruce",
		"last_name":"Young",
		"phone_ext":"233",
		"hire_date":"12/29/2007",
		"dept_no":"621",
		"job_code":"Eng",
		"job_grade":"2",
		"job_country":"USA",
		"salary":"97500",
		"full_name":"Young, Bruce"
	},
	columns: [
		{text: 'ID', dataIndex: 'emp_no'},
		{text: 'First',dataIndex: 'first_name'},
		{text: 'Last',dataIndex: 'last_name'},
		{text: 'Extension',dataIndex: 'phone_ext'},
		{text: 'Hire',dataIndex: 'hire_date'},
		{text: 'Dept',dataIndex: 'dept_no'},
		{text: 'Code',dataIndex: 'job_code'},
		{text: 'Grade',dataIndex: 'job_grade'},
		{text: 'Country',dataIndex: 'job_country'},
		{text: 'Salary',dataIndex: 'salary'},
		{text: 'Full Name',dataIndex: 'full_name'},
	]
});
