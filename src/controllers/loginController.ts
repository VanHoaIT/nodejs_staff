class loginController {
	login(req, res) {
		res.render('login');
	}
	loginStaff(req, res) {
		res.render('loginStaff');
	}
}

module.exports = new loginController();
