import { useEffect } from "react";
import { useState } from "react";
import Job from "../Job/Job";



const FeaturedJobs = () => {

    const [jobs, setJobs] = useState([])
    useEffect(() => {
        fetch('jobs.json')
            .then(res => res.json())
        .then(data => setJobs(data))
    },[])

    return (
        <div>
            <div>
                <h2 className="text-center text-5xl">Featured Jobs { jobs.length}</h2>
                <p className="text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente non rem ex. Explicabo maxime autem, </p>
            </div> 
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 my-16">
                {
                    jobs.map(job => <Job key={job.id} job={job}></Job>)
                }
            </div>
        </div>
    );
};

export default FeaturedJobs;