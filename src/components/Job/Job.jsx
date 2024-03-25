import PropTypes from 'prop-types'
import { CiDollar } from "react-icons/ci";
import { CiLocationOn } from "react-icons/ci";
import { Link } from 'react-router-dom';
const Job = ({ job }) => {
    const {logo, job_title, company_name, location, remote_or_onsite,id, job_type,salary}= job
    return (
        <div className="card card-compact w-96 bg-base-100 shadow-xl">
        <figure><img src={logo} /></figure>
        <div className="card-body">
                <h2 className="card-title">{ job_title}</h2>
                <p>{company_name}</p>
                <div className='flex space-x-8'>
                    <button className='btn btn-outline'>{remote_or_onsite}</button>
                    <button className='btn btn-outline'>{ job_type}</button>
          </div>
          <div className='my-2 flex'>
            <h2 className='flex mr-8'><CiLocationOn className='text-2xl' /> {location}</h2>
            <h2 className='flex mr-2'><CiDollar className='text-2xl' />{ salary}</h2>
          </div>

          <div className="card-actions ">
            <Link to={`/job/${id}`}>
            <button className="btn btn-primary">View Details</button>
            </Link>
          </div>
        </div>
      </div>
    );
};



Job.propTypes = {
    job : PropTypes.object
}
export default Job;