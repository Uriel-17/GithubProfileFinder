class Github {

  constructor() {
    this.client_id = 'd10ced10315f8291de7e';
    this.client_secret = '94d91529516ceb3e75d14f277b14ded8e3f3262f';
  }
  
  async get(user) {

    const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}?client_secret=${this.client_secret}`);

    const repoResponse = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`);

    const profile = await profileResponse.json();
    const repos = await repoResponse.json();

    return {
      profile,
      repos
    };

  }
}