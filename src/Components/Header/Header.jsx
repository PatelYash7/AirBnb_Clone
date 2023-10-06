import React, { useState, useRef } from "react";
import logo from '../../Utils/logo/long-logo.png';
import SearchIcon from '@mui/icons-material/Search';
import LanguageIcon from '@mui/icons-material/Language';
import AccountCircleRoundedIcon from '@mui/icons-material/AccountCircleRounded';
import PositionedMenu from "./ProfileMenu";
import SimpleBottomNavigation from "./BottomNav";
import MobileSearchBar from "../MobileSearch/MobileSearchBar";
import { BottomNavigation } from "@mui/material";


export default function Header({onInputChange}) {
  const [showModal, setShowModal] = useState(false);
  const searchInput = useRef(null);
  
  const handleSubmit = (e) => {
    e.preventDefault();
    onInputChange(searchInput.current.value);
    setShowModal(false);
  }


return (
  <>
    <div className="mob:flex  flex py-5 px-12 justify-between items-center sticky bg-white top-0 border-b-[1px] border-grey z-50">
      {/* Logo */}
      <img src={logo} alt="logo" className="hidden tab:block h-[2rem] " />

      {/* Search Bar */}
      <div onClick={() => setShowModal(true)} className=" mini:flex mob:flex my-0 mx-auto  tab:flex item-center justify-center gap-2 py-[.3rem] px-3 border rounded-[2rem] shadow-1 hover:shadow-2 transition-all ">
        <p className=" pr-2 pt-[.3rem] font-semibold text-[1rem] item-center border-[grey] border-r-[1.5px] hover:cursor-pointer transition-all">Anywhere</p>
        <p className=" pr-2 pt-[.3rem] font-semibold text-[1rem] border-solid border-[grey] border-r-[1.5px] hover:cursor-pointer transition-all">Any week</p>
        <p className=" text-[1rem] pt-[.3rem] text-font-grey font-semibold justify-self-center hover:cursor-pointer transition-all ">Add guests</p>

        <button
          type="button"
          className=" p-[.25rem] flex items-center justify-center bg-theme rounded-[50%] text-white hover:cursor-pointer transition-all" ><SearchIcon className=" text-base" /></button>

      </div>
      {/* Profile Bar */}
      <div className="hidden tab:flex tab:justify-end  item-center justify-center">
        <div className=" hidden tab:flex py-2 px-2 hover:bg-light-grey font-semibold rounded-3xl transition-all hover:cursor-pointer">Airbnb your home</div>
        <div className="py-2 px-2 hover:bg-light-grey font-semibold rounded-3xl transition-all font-[.9rem]"><LanguageIcon /></div>
        {/* profile */}
        <div className="flex justify-between  items-start text-font-grey gap-1 py-2 px-1 rounded-[2rem] border-grey border-[1px]">
          <div className="hover:cursor-pointer"><PositionedMenu /></div>
          <div className="hover:cursor-pointer"><AccountCircleRoundedIcon /></div>
        </div>
      </div>
      <div className="block tab:hidden">
        {/* <MobileSearchBar/> */}
      
      </div>
    </div>
    <SimpleBottomNavigation />
    {/* Modal */}

    {showModal ? (
      <>
        <div className="flex justify-center items-center overflow-x-hidden overflow-y-auto fixed 
        inset-0 z-50 outline-none focus:outline-none">
          <div className="relative w-auto my-6 mx-auto max-w-3xl ">
            <form onSubmit={handleSubmit} className="border-0 rounded-lg shadow-lg relative flex 
            flex-col bg-white w-full outline-none focus:outline-none">
              <div className="relative p-6 flex-auto">
                <div className=" rounded px-8 pt-6 pb-8 w-full">
                  <label className="block text-black text-lg font-bold mb-1">
                    Enter the Location
                  </label>
                  <input ref={searchInput}  className="shadow appearance-none border border-theme 
                  rounded w-full py-2 px-1 text-black" />
                </div>
              </div>
              <div className="flex items-center justify-end p-6 
              border-t border-solid border-blueGray-200 rounded-b">
                <button
                  className="text-theme background-transparent font-bold uppercase px-6 py-2 text-sm 
                  outline-none focus:outline-none mr-1 mb-1"
                  type="button"
                  onClick={() => setShowModal(false)}
                >
                  Close
                </button>
                <button
                  className="text-white bg-theme active:bg-yellow-700 font-bold uppercase text-sm 
                  px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1"
                  type="submit"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </>
    ) : null}
  </>
)
}
