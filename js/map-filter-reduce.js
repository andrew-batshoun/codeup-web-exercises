const users = [
    {
        id: 1,
        name: 'ryan',
        email: 'ryan@codeup.com',
        languages: ['clojure', 'javascript'],
        yearsOfExperience: 5
    },
    {
        id: 2,
        name: 'luis',
        email: 'luis@codeup.com',
        languages: ['java', 'scala', 'php'],
        yearsOfExperience: 6
    },
    {
        id: 3,
        name: 'zach',
        email: 'zach@codeup.com',
        languages: ['javascript', 'bash'],
        yearsOfExperience: 7
    },
    {
        id: 4,
        name: 'fernando',
        email: 'fernando@codeup.com',
        languages: ['java', 'php', 'sql'],
        yearsOfExperience: 8
    },
    {
        id: 5,
        name: 'justin',
        email: 'justin@codeup.com',
        languages: ['html', 'css', 'javascript', 'php'],
        yearsOfExperience: 9
    }
];
//Use .filter to create an array of user objects where each user object has
// at least 3 languages in the languages array.
let threeLanguages = users.filter(data => data.languages.length >= 3);
console.log(threeLanguages);

//Use .map to create an array of strings where each element is a user's emai
// address
let userEmails = users.map(data => data.email);
console.log(userEmails);

// Use .reduce to get the total years of experience from the list of users.
// Once you get the total of years you can use the result to calculate the
// average.
let totalYears = users.reduce((total, person) =>{
    return total + person.yearsOfExperience;
}, 0)


let averageYears = totalYears / users.length;
console.log(averageYears);

// Use .reduce to get the longest email from the list of users.
let longestEmail = users.reduce((longestEmail, currentEmail) => {
    if (longestEmail.email.length > currentEmail.email.length ) {
        return longestEmail;
    } else{
        return currentEmail;
    }

})
console.log(longestEmail)

// Use .reduce to get the list of user's names in a single string. Example: Your
// instructors are: ryan, luis, zach, fernando, justin.

let allUsers = users.reduce( (previousValue, currentValue) => {
    if(!previousValue.includes(currentValue.name)){
        previousValue.push(currentValue.name)
    }
        return previousValue;
    }, []);

console.log(`Your insructors are: ${allUsers}. `);

//let instructor = users.reduce((finalstring, user, index) => {
// if(index === users.length -1){
//     return `${finalstring} ${user.name}.`
// } else {
//     return `${finalString} ${user.name},`
// }
// }, "Your instructors are:")


// Bonus
// Use .reduce to get the unique list of languages from the list of users.

let allLanguages = users.reduce( (previousValue, currentValue) => {
    let inArray = previousValue.concat(currentValue.languages);
    let noduplicates = inArray.reduce((previous, current) => {
        if(!previous.includes(current)){
            previous.push(current)
        }
        return previous
    }, [])
    return noduplicates;
}, []);
console.log(allLanguages)

// let uniqueLangs = users.reduce((langList, user) => {
//     for(let lang of user.languages){
//         if (!langList.inlcudes(lang)){
//             langList.push(lang);
//         }
//     }
//     return langList;
// }, [])
