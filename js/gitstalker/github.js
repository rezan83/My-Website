class Github{
    constructor(){
        this.user_id = 'c41c0d6ad7697c08e05f';
        this.user_secret = 'eb7816f6fb43256fa064d2716ce19ea62454096e';
    }
    //
      async get(name) {
        const data = await fetch(`https://api.github.com/users/${name}?client_id=${this.user_id}&client_secret=${this.user_secret}`)
        const profile = await data.json();
        return profile
    }
}
