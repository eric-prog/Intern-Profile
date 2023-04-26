import StudentList from "@/components/StudentList"


export default function Home() {
  return (
    <div>
      <p>Filter by program: </p>
      <button>Search</button>
      <StudentList />
    </div>
  )
}
