var express = require("express");
// Вызываем функцию Router(), чтобы создать новый объект маршрутизации. Основной уже располагается в app.js
var router = express.Router();

// Указание, что модуль является экспортируемым (теперь его можно подключать в другие модули)
module.exports = router;


router.get("/listStudents", function (req, res) {
	var students = [
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

	res.render("listStudents", {
		students: students
	});
});
router.get("/student/:id", function (req, res) {
	var students = [
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
	var student_id = req.params.id;

	// Поиск студента в массиве.
	// 1 способ - плохой способ (лучше закомментируйте его или удалите :)
	//var student = students[student_id - 1];
	// 2 способ
	var student = students.find(item => item.id == student_id);

	res.render("student", {
		student: student
	});

});

router.post("/student/:id", function (req, res) {
	// отображение данных в терминале которые были отправлены из формы
	console.log(req.body)
	//переход по адрексу 
	res.redirect("/listStudents");
});