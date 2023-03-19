export async function getVideos() {
  try {
    const response = await fetch(process.env.REACT_APP_VIDEO_SERVICE_API_URL, {mode:'cors'});
    const data = await response.json();
    if (data.hasOwnProperty('_embedded')) {
      return data._embedded.videoDTOList;
    }
  } catch (e) {
    console.log(e)
  }
  return [];  
}

export async function uploadVideo(formData) {
  try {
    const response = await fetch(process.env.REACT_APP_VIDEO_SERVICE_API_URL, {
      method: 'POST',
      headers: {
        'Accept': 'application/json'
      },
      body: formData,
      mode: 'cors'
    });
    
    if (!response.ok) {
      console.log(response.statusText);
    }
  } catch (e) {
    console.log(e)
  }
}

export async function deleteVideo(id) {
  try {
    const response = await fetch(process.env.REACT_APP_VIDEO_SERVICE_API_URL + id, {
      method: 'DELETE',
      mode:'cors'
    });

    if (!response.ok) {
      console.log(response.statusText);
    }
  } catch (e) {
    console.log(e)
  }
}