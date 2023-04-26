import { data } from "../data/data" 
import Link from 'next/link';


export default function StudentList() {
  return (
    <div className="">
        {
            data.map((student, index) =>  
            <Link className="" key={index} href= {`students/${student.name}`}>
                {student.name}
            </Link>
            )
        }
    </div>
  )
}
