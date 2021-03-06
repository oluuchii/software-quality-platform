

var data1 = [
    {
        period: {id: 1, name: "Period 1", start: "10.01.2018", end: "20.01.2018"},
        quality: [{label: "good", value: 10}, {label: "medium", value: 15}, {label: "bad", value: 75}],
        sprintGoal: [{value: 0, date: "10.01.2018"}, {value: 50, date: "20.01.2018"}],
        acceptedCode: [{value: 0, date: "10.01.2018"}, {value: 50, date: "20.01.2018"}],
        users: [{user: {"email": "Tamer.abdulghani@gmail.com", "password": null, "point": {"userId": 1, "value": 110}, "id": 1, "username": "Tamer"},
                uploadedFiles: 10, reviewedFiles: 8, points: 110,
                badges: ["Master Coder", "Master Reviewer", "Super Star", "Best Coder"]},
            {user:
                        {"email": "belarayhane@gmail.com", "password": null, "point": {"userId": 2, "value": 200}, "id": 2, "username": "Rayhane"},
                uploadedFiles: 12, reviewedFiles: 12, points: 200,
                badges: ["Master Coder", "Best Coder"]},
            {user: {"email": "oluuchii@gmail.com", "password": null, "point": {"userId": 3, "value": 233}, "id": 3, "username": "Oluchi"},
                uploadedFiles: 5, reviewedFiles: 2, points: 233,
                badges: ["Super Star", "Best Coder"]},
            {user: {"email": "phamkimphuong.hcm@gmail.com", "password": null, "point": {"userId": 4, "value": 245}, "id": 4, "username": "Phuong"},
                uploadedFiles: 1, reviewedFiles: 3, points: 245,
                badges: ["Master Coder", "Master Reviewer", "Super Star", "Best Coder"]},
            {user: {"email": "msryzhov@gmail.com", "password": null, "point": {"userId": 5, "value": 270}, "id": 5, "username": "Mikhail"},
                uploadedFiles: 10, reviewedFiles: 2, points: 270,
                badges: ["Master Coder", "Master Reviewer", "Super Star", "Best Coder"]},
            {user: {"email": "shujunhou99@gmail.com", "password": null, "point": {"userId": 6, "value": 360}, "id": 6, "username": "Shujun"},
                uploadedFiles: 17, reviewedFiles: 18, points: 360,
                badges: ["Master Coder", "Master Reviewer", "Super Star", "Best Coder"]},
            {user: {"email": "collective_review@gmail.com", "password": null, "point": null, "id": 7, "username": "Collective Reviewer"},
                uploadedFiles: 0, reviewedFiles: 30, points: null,
                badges: ["Master Reviewer"]},
        ]
    },
    {
        period: {id: 2, name: "Period 2", start: "21.01.2018", end: "10.02.2018"},
        quality: [{label: "good", value: 30}, {label: "medium", value: 25}, {label: "bad", value: 45}],
        sprintGoal: [{value: 0, date: "10.01.2018"}, {value: 50, date: "20.01.2018"}, {value: 60, date: "10.02.2018"}],
        acceptedCode: [{value: 0, date: "10.01.2018"}, {value: 50, date: "20.01.2018"}, {value: 55, date: "10.02.2018"}],
        users: [{user: {"email": "Tamer.abdulghani@gmail.com", "password": null, "point": {"userId": 1, "value": 200}, "id": 1, "username": "tamer"},
                uploadedFiles: 5, reviewedFiles: 7, points: 200,
                badges: ["Master Coder", "Master Reviewer", "Super Star"]},
            {user: {"email": "belarayhane@gmail.com", "password": null, "point": {"userId": 2, "value": 200}, "id": 2, "username": "rayhane"},
                uploadedFiles: 12, reviewedFiles: 12, points: 200,
                badges: ["Best Coder"]},
            {user: {"email": "oluuchii@gmail.com", "password": null, "point": {"userId": 3, "value": 333}, "id": 3, "username": "oluchi"},
                uploadedFiles: 6, reviewedFiles: 2, points: 333,
                badges: ["Super Star", "Best Coder"]},
            {user: {"email": "phamkimphuong.hcm@gmail.com", "password": null, "point": {"userId": 4, "value": 275}, "id": 4, "username": "phuong"},
                uploadedFiles: 8, reviewedFiles: 5, points: 275,
                badges: ["Master Reviewer", "Super Star", "Best Coder"]},
            {user: {"email": "msryzhov@gmail.com", "password": null, "point": {"userId": 5, "value": 280}, "id": 5, "username": "mikhail"},
                uploadedFiles: 10, reviewedFiles: 12, points: 280,
                badges: ["Master Coder", "Master Reviewer", "Super Star"]},
            {user: {"email": "shujunhou99@gmail.com", "password": null, "point": {"userId": 6, "value": 460}, "id": 6, "username": "shujun"},
                uploadedFiles: 3, reviewedFiles: 5, points: 460,
                badges: ["Master Coder", "Super Star", "Best Coder"]},
            {user: {"email": "collective_review@gmail.com", "password": null, "point": null, "id": 7, "username": "collective"},
                uploadedFiles: 1, reviewedFiles: 0, points: null,
                badges: []},
        ]
    },
    {
        period: {id: 3, name: "Period 3", start: "11.02.2018", end: "22.02.2018"},
        quality: [{label: "good", value: 50}, {label: "medium", value: 15}, {label: "bad", value: 35}],
        sprintGoal: [{value: 0, date: "10.01.2018"}, {value: 50, date: "20.01.2018"}, {value: 60, date: "10.02.2018"}, {value: 90, date: "22.02.2018"}],
        acceptedCode: [{value: 0, date: "10.01.2018"}, {value: 50, date: "20.01.2018"}, {value: 55, date: "10.02.2018"}, {value: 80, date: "22.02.2018"}],
        users: [{user: {"email": "Tamer.abdulghani@gmail.com", "password": null, "point": {"userId": 1, "value": 150}, "id": 1, "username": "tamer"},
                uploadedFiles: 20, reviewedFiles: 18, points: 150,
                badges: ["Master Coder", "Super Star", "Best Coder"]},
            {user: {"email": "belarayhane@gmail.com", "password": null, "point": {"userId": 2, "value": 250}, "id": 2, "username": "rayhane"},
                uploadedFiles: 12, reviewedFiles: 12, points: 250,
                badges: ["Master Coder", "Best Coder"]},
            {user: {"email": "oluuchii@gmail.com", "password": null, "point": {"userId": 3, "value": 283}, "id": 3, "username": "oluchi"},
                uploadedFiles: 15, reviewedFiles: 12, points: 283,
                badges: ["Super Star", "Best Coder"]},
            {user: {"email": "phamkimphuong.hcm@gmail.com", "password": null, "point": {"userId": 4, "value": 295}, "id": 4, "username": "phuong"},
                uploadedFiles: 11, reviewedFiles: 13, points: 295,
                badges: ["Master Reviewer", "Super Star", "Best Coder"]},
            {user: {"email": "msryzhov@gmail.com", "password": null, "point": {"userId": 5, "value": 320}, "id": 5, "username": "mikhail"},
                uploadedFiles: 20, reviewedFiles: 12, points: 320,
                badges: ["Master Coder", "Master Reviewer", "Super Star"]},
            {user: {"email": "shujunhou99@gmail.com", "password": null, "point": {"userId": 6, "value": 410}, "id": 6, "username": "shujun"},
                uploadedFiles: 27, reviewedFiles: 28, points: 410,
                badges: ["Master Coder", "Best Coder"]},
            {user: {"email": "collective_review@gmail.com", "password": null, "point": null, "id": 7, "username": "collective"},
                uploadedFiles: 0, reviewedFiles: 1, points: null,
                badges: []},
        ]
    }
];
