import { Button, Checkbox, Input } from "antd";
import { Raleway } from "next/font/google";
import Image from "next/legacy/image";

const raleway = Raleway({ subsets: ["latin"] });

export default function signup() {
  return (
    // Main Body
    <main
      style={raleway.style}
      className="flex items-center mb-10 p-10 lg:pt-10 flex-col"
    >
      {/* Logo */}
      <h6 className="mt-3 text-center lg:mt-1">
        <Image src={"/logo.png"} alt="" width={150} height={50} />
      </h6>
      <h4 className="mt-2 text-xl font-bold text-[#343434]">
        Create an account{" "}
      </h4>
      {/* FORM Section */}
      <section className="w-full  mt-5 flex flex-col shadow-lg p-4 lg:w-[35%] border border-slate-100">
        <div className="p-2">
          <label htmlFor="fullname" className="text-sm text-[#353535]">
            Fullname
          </label>
          <Input className="h-8" name="fullname" />
        </div>
        <div className="p-2 mt-3">
          <label htmlFor="email" className="text-sm text-[#353535]">
            Email address
          </label>
          <Input className="h-8" name="email" />
        </div>
        <div className="p-2 mt-3">
          <label htmlFor="password" className="text-sm text-[#353535]">
            Password
          </label>
          <Input className="h-8" name="password" label="Fullname" />
        </div>
        <div className="flex justify-between  p-2 mt-3">
          <Button
            className="w-48 h-10 lg:h-7 text-[#ABA5A5]"
            style={raleway.style}
          >
            {" "}
            I am a Student
          </Button>
          <Button
            className="w-48 h-10 lg:h-7 text-[#ABA5A5]"
            style={raleway.style}
          >
            I am a LandLord
          </Button>
        </div>
        <Checkbox className="p-2 text-[#353535] mt-3" style={raleway.style}>
          I agree to all Terms and Conditions
        </Checkbox>
        <Button
          type="primary"
          className="mt-4 h-10 bg-[#0042EC] border-none text-sm ml-2 text-white"
          style={raleway.style}
        >
          Sign Up
        </Button>
      </section>

      <h6 className="mt-5 text-sm">
        {" "}
        Already have an account? <span className="text-[#0042EC]">Sign In</span>
      </h6>
    </main>
  );
}
