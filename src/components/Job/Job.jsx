import PropTypes from 'prop-types'

const Job = ({ job }) => {
    const {logo, job_title, company_name, location, remote_or_onsite, job_type,salary}= job
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
          <div className="card-actions ">
            <button className="btn btn-primary">View Details</button>
          </div>
        </div>
      </div>
    );
};



Job.propTypes = {
    job : PropTypes.object
}
export default Job;