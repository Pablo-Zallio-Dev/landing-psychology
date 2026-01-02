import iconUp from '../../assets/icons/icon-up.svg'
const BtnBack = () => {
  return (
    <div className=' hidden lg:block lg:bg-gray-100 p-2 rounded-md shadow-md fixed bottom-10 right-10  xl:bottom-20 xl:right-20  ' >
        <a href="#header" className=' flex flex-col justify-center items-center '>
            <img src={iconUp} alt="" className=" w-min " />
            <p className="text-xs text-gray-700 font-medium ">Subir</p>
        </a>
    </div>
  )
}

export default BtnBack