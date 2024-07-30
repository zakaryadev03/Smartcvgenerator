import { useState } from "react"

function PhotoInput() {
  const [profileImg, setProfileImg] = useState();
  return (
    <div className="z-10 flex justify-center">
      <label htmlFor="profilePhoto" className="border-2 z-10 relative w-[150px] h-[150px] -mt-20 rounded-full  overflow-hidden  cursor-pointer group">
        <p className="opacity-0 text-center max-w-20 group-hover:opacity-100 absolute z-20 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">add your profile img</p>
        <div className="group-hover:bg-[#ffffffaa] h-full w-full rounded-full absolute transition-all duration-300 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"></div>
        <img src={profileImg || "/face.png" /* place holder img */} className="object-cover border-2 border-black rounded-full  z-0" />
      </label>
      <input hidden id="profilePhoto" type="file" accept=".png,.jpeg,.jpg" onChange={async (e) => { console.log(e.target.files[0]); setProfileImg(URL.createObjectURL(e.target.files[0])) }} />
    </div>
  )
}
export default PhotoInput