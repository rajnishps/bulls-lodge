import arrows from "./arrows.png"
const NFTContainerRight = ({ img, phase, percent, description }) => {
  return (
    <div className="flex justify-between items-center my-16 ">
      <div className="w-3/6 flex justify-between border border-[#FF0099] border-b-0 border-l-0		2xl:p-16  p-8">
        <div className="w-3/5 ">
          <p className=" font-Montserrat text-6xl font-black text-[#79FFFE] pb-8">
            {percent}
          </p>
          <p className="font-Montserrat text-md leading-6">{description}</p>
        </div>
        <div className="w-1/5 text-[#ffffff40] font-black text-center font-Montserrat text-3xl">
          <p>PHASE</p>
          <p className="text-6xl">{phase}</p>
          <img src={arrows} alt="" />
        </div>
      </div>
      <div className=" p-2">
        <img className="" src={img} alt="" />
      </div>
    </div>
  )
}

export default NFTContainerRight
