module.exports = app => {
  app.get('/__coverage__', (req, res) => {
    res.json({
      coverage: global.__coverage__
    })
  })
}
