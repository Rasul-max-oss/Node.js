var express = require("express");
// Вызываем функцию Router(), чтобы создать новый объект маршрутизации. Основной уже располагается в app.js
var router = express.Router();
module.exports = router;
router.get("/listTeacher", function (req, res) {
	var teachers = [
		{
			id: 1,
			firstname: "Alex",
			lastname: "Pirkov",
			middlename: "Pirkovich",
			DateofBirth: 2000,
			Tel: +79946622343
		},
		{
			id: 2,
			firstname: "Steave",
			lastname: "Menkilov",
			middlename: "Nikolaevich",
			DateofBirth: 1999,
			Tel: +79949692343
		}
	];

	res.render("listTeacher", {
		teachers: teachers
	});
});

router.get("/teacher/:id", function (req, res) {
	var teachers = [
		{
			id: 1,
			firstname: "Alex",
			lastname: "Pirkov",
			middlename: "Pirkovich",
			DateofBirth: 2000,
			Tel: +79946622343
		},
		{
			id: 2,
			firstname: "Steave",
			lastname: "Menkilov",
			middlename: "Nikolaevich",
			DateofBirth: 1999,
			Tel: +79949692343
		}
	]; //  массив скопируйте из обработчика маршрута /listStudents

	// получение id студента из параметров запроса
	var teacher_id = req.params.id;

	// Поиск студента в массиве.
	// 1 способ - плохой способ (лучше закомментируйте его или удалите :)
	//var student = students[student_id - 1];
	// 2 способ
	var teacher = teachers.find(item => item.id == teacher_id);
	console.log(teacher_id, teacher);
	res.render("teacher", {
		teacher: teacher
	});

});

router.post("/teacher/:id", function (req, res) {
	// отображение данных в терминале которые были отправлены из формы
	console.log(req.body)
	//переход по адрексу 
	res.redirect("/listTeacher");
});