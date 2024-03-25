import { useEffect } from "react";
import { useState } from "react";
import Job from "../Job/Job";



const FeaturedJobs = () => {

    const [jobs, setJobs] = useState([])
    // this is not the best way to load show all data
    const [dataLength, setDataLength] = useState(4)


    useEffect(() => {
        fetch('jobs.json')
            .then(res => res.json())
            .then(data => setJobs(data))
    }, [])

    return (
        <div>
            <div>
                <h2 className="text-center text-5xl">Featured Jobs {jobs.length}</h2>
                <p className="text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente non rem ex. Explicabo maxime autem, </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 my-16">
                {
                    jobs.slice(0, dataLength).map(job => <Job key={job.id} job={job}></Job>)
                }

            </div>
            <div className={`text-center mb-8 ${dataLength === jobs.length && 'hidden'}`}>
                <button 
                onClick={()=>setDataLength(jobs.length)}
                    className="btn ">Show all jobs</button>
            </div>
        </div>
    );
};

export default FeaturedJobs;