var Gradebook = require('gradebook');
exports.index = function(req, res) {
	var gradebook = new Gradebook(req.query.username, req.query.password);
	gradebook.startSession(function(err) {
		if (!err) {
			gradebook.getDefault(function(err, default_data) {
				if (!err) {
					gradebook.getGrades(function(err, grade_data) {
						if (!err) {
							gradebook.getAssignments(grade_data, function(err, grades_assignments_data) {
								if (!err) {
									console.log(grades_assignments_data);
									res.end(JSON.stringify({
										"default": default_data,
										"courses": grades_assignments_data,
									}));
								} else res.end(JSON.stringify({
									"default": default_data,
									"courses": grade_data,
									"error": "page not found"
								}));
							});
						} else res.end(JSON.stringify({
							"default": default_data,
							"error": "page not found"
						}));
					});
				} else res.end(JSON.stringify({
					"error": "page not found"
				}));
			});
		} else res.end(JSON.stringify({
			"error": "username or password is incorrect"
		}));
	});
};
