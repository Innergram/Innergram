import { useState } from "react";

import { Loader2 } from "lucide-react";

import { Button } from "@/components/ui/button";
import uploadicon from "../assets/images/upload_logo2.png";

export default function Home() {
  const [file, setfile] = useState();

  const handlechange = (e: any) => {
    setfile(e.target.value);
    console.log(file);
  };

  return (
    <>
      <div className="px-10 py-10 bg-[#202020]">
        <div className="flex justify-center flex-col gap-5 items-center ">
          <h1 className="text-[60px] text-[#fb8734] font-marker tracking-wide">
            INNERGRAM
          </h1>
          <p className=" px-[380px] text-[20px] font-mono font-bold text-center">
            Dive into your Instagram insights effortlessly with our Open Source
            Analytics Tool!
          </p>
          <br></br>

          <div className=" w-[600px] h-[300px] p-28 bg-[#202020] border-dashed border-4 border-white text-center text-lg font-semibold hover:border-black">
            <label htmlFor="fileinput" className="block text-[18px] font-pacific">
              Click here to upload your file
            </label>
            <label htmlFor="fileinput" className="block my-[8px] ">
              <Button variant="outline" size="icon" className=" bg-[#202020] border-white border-[1px]">
                <img src={uploadicon} alt="Custom Icon" className="h-5 w-6" />
              </Button>
            </label>
            <input
              type="file"
              id="fileinput"
              style={{}}
              className="inset-0 opacity-0 cursor-pointer "
              onClick={(e) => e.stopPropagation()}
            ></input>
          </div>

          {/* <img src={uploadicon}></img> */}
          <br></br>
          <Button
            className=" bg-[#fb8734] p-[26px] font-mono text-xl "
            onChange={handlechange}
          >
            <Loader2 className="mr-2 h-6 w-6 animate-spin" />
            Let's Analyse
          </Button>
        </div>
      </div>
    </>
  );
}
