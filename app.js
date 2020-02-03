//Init github class
const github = new GitHub;

//Init UI class
const ui = new UI;

// search input
const searchUser = document.getElementById('searchUser');

//search input event listener
searchUser.addEventListener('keyup', (e) => {
    // GET input text
    const userText = e.target.value;
    if (userText !== '') {
        // Make HTTP call
        github.getUser(userText)
            .then(data => {
                if (data.profileData.message === 'Not Found') {
                    // alert user not found
                    ui.showAlert('User Not Found','alert alert-danger' )
                } else {
                    //show profile
                    ui.showProfile(data.profileData);
                    ui.showRepos(data.repos);
                }
            })
    } else {
        //clear input profile
        ui.clearProfile()
    }
})
