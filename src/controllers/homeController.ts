class homeController {
	home(req, res) {
		res.render('home');
	}
	about(req, res) {
		res.render('about');
	}
}

module.exports = new homeController();
