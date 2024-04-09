const router = require("express").Router();
const creatureService = require("../services/creatureService.js");
router.get("/all", (req, res) => {
  res.render("post/all-posts");
});

router.get("/create", (req, res) => {
  res.render("post/create");
});


router.post("/create", async (req, res) => {
  const { name, species, skinColor, eyeColor, image, description } = req.body;
  const payload = { name, species, skinColor, eyeColor, image, description };
  console.log({ payload });
  await creatureService.create(payload);
  res.redirect("/posts/all");
});

router.get("/profile", (req, res) => {
  res.render("post/profile");
});

module.exports = router;
