class HomeController {
  index(req, res) {
    res.json({
      isOk: true,
    });
  }
}

export default new HomeController();
