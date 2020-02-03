class GitHub {
    constructor() {
        this.client_id = '143221073d8b1a5cc479';
        this.client_secret = '87adb3f4aa9088bfc10c6405a5b7728577bd6ed3';
        this.repos_Count = 5;
        this.repos_Sort = 'created: asc'
    }
    async getUser(user) {
        const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);

        const reposResponse = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repos_Count}&sort=${this.repos_Sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`);

        const profileData = await profileResponse.json();
        const repos = await reposResponse.json();
        return {
            profileData,
            repos
        }
    }
}