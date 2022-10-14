var express = require("express");
var router = express.Router();
module.exports = router;
router.get("/listCourses", function (req, res) {
	var courses = [
		{
			id: 1,
			name: 'Разработка на Java'
		},
		{
			id: 2,
			name: 'Разработка на NodeJs'
		},
		{
			id: 3,
			name: 'Разработка на C#'
		},
		{
			id: 4,
			name: 'Разработка на Python'
		}
	];
	res.render("listCourses", {
		courses: courses
	});
});
router.post("/course/:id", function (req, res) {
	// отображение данных в терминале, которые были отправлены из формы 
	console.log(req.body)
	// переход по адресу localhost:3000/listStudents
	res.redirect("/listCourses");
});





router.get("/course/:id", function (req, res) {

	var courses = [
		{
			id: 1,
			name: 'Разработка на Java'
		},
		{
			id: 2,
			name: 'Разработка на NodeJs'
		},
		{
			id: 3,
			name: 'Разработка на C#'
		},
		{
			id: 4,
			name: 'Разработка на Python'
		}
	];
	// получение id студента из параметров запроса
	var course_id = req.params.id;

	// Поиск студента в массиве.
	// 1 способ - плохой способ (лучше закомментируйте его или удалите :)
	// 2 способ
	var course = courses.find(item => item.id == course_id);

	res.render("course", {
		course: course
	});

});  