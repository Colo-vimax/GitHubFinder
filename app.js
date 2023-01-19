// Init GitHub
const github = new GitHub
// Init UI
const ui = new UI

// Search Input
const searchUser = document.getElementById('searchUser')

// Search input event Listener
searchUser.addEventListener('keyup', (e) => {
    // Get Input text
    const userText = e.target.value

    if (userText !== '') {
        // Make http call
        github.getUser(userText)
        // RETURN A PROMISE
           .then(data => {
             if (data.profile.message === 'Not Found') {
                // Show alert
                ui.showAlert('User not found', 'alert alert-danger')
                
             }else{
                // Show profile
                ui.showProfile(data.profile)
                ui.showRepos(data.repos)
             }
              
           })
    }else{
        // Clear profile
        ui.clearProfile()
    }
}) 