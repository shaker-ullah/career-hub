import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useLoaderData, useParams } from "react-router-dom";
import { saveJobApplication } from '../../utility/localStorage';


const JobDetails = () => {
    const jobs = useLoaderData()
    // console.log(jobs)
    const { id } = useParams()
    // console.log(id)
    const idInt = parseInt(id)
    // console.log(idInt)
    const job = jobs.find(job => job.id === idInt)
    console.log(job)


    const handleTost = () => {
        saveJobApplication(id)
    toast('You have Applied Successfully')
}




    return (
        <div>
            <h3 className="text-center">Job Details {id}</h3>
            <div className="grid gap-4 grid-cols-4">
                <div className="md:col-span-3">
                    <h2 className="text-4xl">Details Coming Here</h2>
                </div>
                <div className="">
                    Side Things
                    <button onClick={handleTost} className="btn btn-primary w-full">Apply Now</button>
                </div>
                <ToastContainer />
            </div>
        </div>
    );
};

export default JobDetails;