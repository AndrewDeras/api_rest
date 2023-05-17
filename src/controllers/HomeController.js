class HomeController {
  index(req, res) {
    res.send('index');
  }
}

export default new HomeController();
