class VideoServiceAPi {
    baseUrl = 'http://localhost:8080/';

    async getVideos() {
        try {
            const response = await fetch(this.baseUrl, {mode:'cors'});
            const data = await response.json();
            if (data.hasOwnProperty('_embedded')) {
              return data._embedded.videoDTOList;
            }
          }
        catch (e) {
          console.log(e)
        }
        return [];
    }
}

export default VideoServiceAPi;