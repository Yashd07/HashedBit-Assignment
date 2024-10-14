const students = [
    {
        student1: {
            subject1: 44,
            subject2: 56,
            subject3: 87,
            subject4: 97,
            subject5: 37
        }
    },
    {
        student2: {
            subject1: 44,
            subject2: 56,
            subject3: 87,
            subject4: 97,
            subject5: 37
        }
    },
    {
        student3: {
            subject1: 44,
            subject2: 56,
            subject3: 87,
            subject4: 97,
            subject5: 37
        }
    }
];

//calculate average scores
const calculateAverages = (students) => {
    return students.map(student => {
        const studentName = Object.keys(student)[0];
        const scores = Object.values(student[studentName]); 
        
        const average = scores.reduce((sum, score) => sum + score, 0) / scores.length;
        
        return {
            [studentName]: { average: average }
        };
    });
};

// Get the result
const output = calculateAverages(students);
console.log(output);
