import StudentList from "@/components/StudentList"


export default function Home() {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center">
      <p className="text-2xl">Software Engineering Class of 2027 - First Year</p>
      <StudentList />
    </div>
  )
}
