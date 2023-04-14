const btn = document.querySelector('.btn')
const screenShot = document.querySelector('.img-preview')


console.log(btn)

const captureScreen = async()=>{
  try{
    const strem = await navigator.mediaDevices.getDisplayMedia({preferCurrentTab:true})
    const video = document.createElement("video")

    video.addEventListener("loadedmetadata",()=>{
      
      const canvas = document.createElement('canvas')
      const ctx = canvas.getContext("2d")
      // video.videoHeight = 
      canvas.width = video.videoWidth
      canvas.height = video.videoHeight

      video.play()
      
      ctx.drawImage(video,0,0,canvas.height,canvas.width)
      strem.getVideoTracks()[0].stop()
      screenShot.querySelector("img").src = canvas.toDataURL()
      screenShot.classList.add('show')
    })
    video.srcObject = strem;
      console.log(video.srcObject)
    console.log(video)
  }
  catch(err){
    console.log(err)
  }
}

btn.addEventListener(`click`,captureScreen)