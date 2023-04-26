import { StudentModel } from "../../models/StudentModel"
import { data } from "../../data/data"


export default function Student({ studentInfo }: { studentInfo: StudentModel }){ 
    return( 
        <div className="h-full w-full flex flex-col items-center justify-center">
            <p>{studentInfo.name}</p>
            <img src={studentInfo.pfp} alt="" />
            <iframe className="w-[80%] h-[100vh] border-solid border-2 border-black-500" src={studentInfo.resume}></iframe>
        </div>
    )
}


export async function getStaticPaths() {
    const names = data.map((student) => student.name);
    
    const paths = names.map((name) => ({
        params: { student: name.toString() },
    }));
    
    return {
        paths,
        fallback: false,
    };
};


export const getStaticProps = async (context: any) => { 
    const studentInfo = data.find((student) =>  student.name == context.params.student);

    return {
        props: {
            studentInfo,
        },
    };
};