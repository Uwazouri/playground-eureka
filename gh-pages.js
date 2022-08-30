var ghpages = require('gh-pages');

ghpages.publish(
    'public', // path to public directory
    {
        branch: 'gh-pages',
        repo: 'https://github.com/uwazouri/playground-eureka.git', // Update to point to your repository  
        user: {
            name: 'No Name', // update to use your name
            email: 'No Email address' // Update to use your email
        }
    },
    () => {
        console.log('Deploy Complete!')
    }
)