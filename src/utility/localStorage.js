const getStoredJobApplication = () => {
    const storedJobApplication = localStorage.getItem('job-application')
    if (saveJobApplication) {
        return JSON.parse(storedJobApplication)
    }
    else {
        return [];
    }
}


const saveJobApplication = (id) => {
    const storedJobApplications = getStoredJobApplication();
    const exists = storedJobApplications.find(jobId => jobId === id)
    console.log(exists)
    if (!exists) {
        storedJobApplications.push(id)
        localStorage.setItem('job-application',JSON.stringify(storedJobApplications))
    }
}


export{getStoredJobApplication,saveJobApplication}