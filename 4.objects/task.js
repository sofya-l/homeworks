function Student(name, gender, age) {
	this.name = name;
	this.gender = gender;
	this.age = age;
	this.marks = [];
}

Student.prototype.setSubject = function(subjectName) {
	this.subject = subjectName;
}

Student.prototype.addMarks = function(...marks) {
	if (this.hasOwnProperty('marks') && marks.length != 0) {
		this.marks.push(...marks);
	}
}

Student.prototype.getAverage = function() {
	if (this.hasOwnProperty('marks')) {
		if (this.marks.length !== 0) {
			return this.marks.reduce((acc, mark) => acc + mark) / this.marks.length;
		} 
	}
	return 0;
}

Student.prototype.exclude = function(reason) {
	delete this.subject;
	delete this.marks;

	this.excluded = reason;
}

let student1 = new Student("Василиса", "женский", 19);
student1.setSubject("Algebra");
console.log(student1.getAverage()); // 0
student1.addMarks(4, 5, 4, 5, 5, 4, 5, 6, 7, 2);
console.log(student1.getAverage()); // 4.5
console.log(student1);
// {age: 19, gender: "женский", marks: [4, 5, 4, 5], name: "Василиса", subject: "Algebra"}

let student2 = new Student("Артём", "мужской", 25);
student2.setSubject("Geometry");
student2.exclude('плохая учёба');
student2.addMarks(4, 5, 4, 5, 6, 7, 2);
console.log(student2);
// {name: "Артём", gender: "мужской", age: 25, excluded: "плохая учёба"}

let student = new Student("Tony", "male", 37);
student.exclude("плохая успеваемость");
student.getAverage();