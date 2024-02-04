import Image from "next/image"
import Link from "next/link"

const Footer = () => {
  return (
    <footer className="bg-[#171717]">
      <div className="flex-center wrapper flex-between flex flex-col gap-4 p-5 text-center sm:flex-row">
   
          {/* <Image 
            src="/next.svg"
            alt="logo"
            width={128}
            height={38}
          /> */}
           <Link href="/" className="w-36">
          <div className="text-[20px] font-[600]"> CLOUDREDUX EVENT</div>
        </Link>
         

        <p>2023 Evently. All Rights reserved.</p>
      </div>
    </footer>
  )
}

export default Footer