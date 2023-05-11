import bull from "./components/storyBull.png"
import expolreBtn from "./components/exploreBtn.png"

const Story = () => {
  return (
    <section className=" md:m-16 flex md:flex-row flex-col justify-between md:items-end mb-64">
      <div className="md:w-2/5 text-left md:px-16 m-12 mb-0">
        <h2 className="w-full uppercase  font-bold my-2 text-6xl font-Oswald">
          The Story
        </h2>
        <h3 className="w-full  text-3xl font-normal font-Oswald mb-12">
          Bulls are RACING!
        </h3>
        <p className="2xl:text-lg  md:block hidden">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type Lorem
          Ipsum is simply dummy text of the printing and typesetting industry.
          Lorem Ipsum has been the industry's standard dummy text ever since the
          1500s, when an unknown printer took a galley of type Lorem Ipsum is
          simply dummy text of the printing and typesetting industry. Lorem
          Ipsum has been the industry's standard dummy text ever since the
          1500s, when an unknown printer took a galley of type Lorem Ipsum is
          simply dummy text of the printing and typesetting industry. Lorem
          Ipsum has been the industry's standard dummy text ever printer took a
          galley of type Lorem Ipsum is simply dummy text of the printing and
          typesetting industry.
        </p>
        <img
          className=" md:block hidden cursor-pointer mt-4"
          src={expolreBtn}
          alt=""
        />
      </div>
      <img className="w-3/6 ml-auto " src={bull} alt="" />
    </section>
  )
}

export default Story
