import { data } from "../data/data" 
import Link from 'next/link';


export default function StudentList() {
  return (
    <div className="flex flex-col justify-center items-center w-[100%]">
      <div className="flex flex-row justify-center items-start w-[90%] flex-wrap">
        {
          data.map((student, index) =>  
            <Link className="flex flex-col justify-center items-center mx-7 my-6" key={index} href= {`students/${student.name}`}>
              <img className="w-[30vh] h-[30vh] object-cover rounded-xl" src={student.pfp} alt="" />
              <p className="text-xl mt-5">{student.name}</p>
            </Link>
          )
        }
      </div>
    </div>
  )
}
