(function () {
   // using to view data to sort
    fetch('https://api.github.com/users', {headers: {'Authorization': GITHUB_KEY}}).then(response => response.json()).then(data => {
        console.log(data)
    });
    //function takes username to view last commit
    function getLastCommitDate(user) {
        fetch('https://api.github.com/users/' + user + "/events", {headers: {'Authorization': GITHUB_KEY}}).then(response => response.json()).then(data => {
            let index = 0;
            if(data[index].type === "PushEvent"){
                console.log(`${user}'s last commit was : ${data[index].created_at.substring(0, 10)}`);
            }else{
                index++;
            }
        });
    }

getLastCommitDate('andrew-batshoun')

function wait(seconds) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (Math.random() > 0.1) {
                resolve('Awesome');
            } else {
                reject('Something went wrong!');
            }
        }, seconds);
    });
    }

    wait(1000).then(() => console.log('You\'ll see this after 1 second'));
    wait(3000).then(() => console.log('You\'ll see this after 3 seconds'));
})();

