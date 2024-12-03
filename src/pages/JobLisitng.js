import React, { useState } from 'react';

const JobListing = () => {
  const [selectedJob, setSelectedJob] = useState(null);
  const [showApplyModal, setShowApplyModal] = useState(false);

  const jobs = [
    { id: 1, title: 'Potato Corner', location: 'Vicas, CC', date: '18 Oct, 2024', bgColor: '#FBD38D' }, // Custom background color (orange)
    { id: 2, title: 'SM Store Caloocan', location: 'Complex, CC', date: '18 Oct, 2024', bgColor: '#68D391' }, // Custom background color (green)
    { id: 3, title: 'Alfamart', location: 'Vicas, CC', date: '18 Oct, 2024', bgColor: '#63B3ED' }, // Custom background color (blue)
    { id: 4, title: 'Kitchen Helper', location: 'Vicas, CC', date: '18 Oct, 2024', bgColor: '#F6E05E' }, // Custom background color (yellow)
    { id: 5, title: '7/11', location: 'Vicas, CC', date: '18 Oct, 2024', bgColor: '#9F7AEA' }, // Custom background color (purple)
    { id: 6, title: 'Cashier', location: 'Vicas, CC', date: '18 Oct, 2024', bgColor: '#F687B3' }, // Custom background color (pink)
  ];

  const openJobDetails = (job) => {
    setSelectedJob(job);
  };

  const closeJobDetails = () => {
    setSelectedJob(null);
  };

  const openApplyModal = () => {
    setShowApplyModal(true);
  };

  const closeApplyModal = () => {
    setShowApplyModal(false);
  };

  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      console.log('Uploaded file:', file);
    }
    closeApplyModal();
  };

  const handleModalBackgroundClick = (event) => {
    if (event.target.classList.contains('modal-background')) {
      closeJobDetails();
      closeApplyModal();
    }
  };

  return (
    <div className="p-8">
      <h1 className="text-center text-3xl font-bold mb-12">Job Vacancies</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {jobs.map((job) => (
          <div
            key={job.id}
            className="border rounded-lg shadow-md p-4 text-sm w-full aspect-square flex flex-col justify-between transition-transform transform hover:scale-105"
            style={{ backgroundColor: job.bgColor }} // Custom background color
          >
            <div>
              <p className="text-gray text-xs">{job.date}</p>
              <h2 className="text-lg font-semibold">{job.title}</h2>
              <p className="text-gray">{job.location}</p>
            </div>
            <button
              className="mt-4 bg-blue text-white py-2 px-6 rounded-lg text-lg hover:bg-blue-700 transition-colors duration-300"
              onClick={() => openJobDetails(job)}
            >
              View Details
            </button>
          </div>
        ))}
      </div>

      {}
      {selectedJob && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center modal-background"
          onClick={handleModalBackgroundClick}
        >
          <div className="bg-white p-6 md:p-10 rounded-lg shadow-lg w-11/12 sm:w-3/4 md:w-2/3 max-w-2xl mt-16">
            <h2 className="text-2xl sm:text-4xl font-bold mb-6 text-center">{selectedJob.title}</h2>
            <p className="text-gray mb-2 text-center">Location: {selectedJob.location}</p>
            <p className="text-gray mb-4 text-center">Date: {selectedJob.date}</p>
            <div className="flex justify-center space-x-6 mt-6">
              <button
                className="bg-green text-white py-3 px-8 rounded-lg hover:bg-green-700 transition-colors duration-300"
                onClick={openApplyModal}
              >
                Apply
              </button>
              <button
                className="bg-red text-white py-3 px-8 rounded-lg hover:bg-red-700 transition-colors duration-300"
                onClick={closeJobDetails}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      {}
      {showApplyModal && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center modal-background"
          onClick={handleModalBackgroundClick}
        >
          <div className="bg-white p-6 md:p-10 rounded-lg shadow-lg w-11/12 sm:w-3/4 md:w-2/3 max-w-2xl mt-16">
            <h2 className="text-xl sm:text-3xl font-bold mb-6 text-center">Apply for {selectedJob?.title}</h2>
            <p className="text-center text-gray mb-4">
              Upload your resume (PDF format only):
            </p>
            <input
              type="file"
              accept="application/pdf"
              onChange={handleFileUpload}
              className="block w-full border border-gray-300 rounded p-4 mb-6"
            />
            <div className="flex justify-center space-x-6">
              <button
                className="bg-blue text-white py-3 px-8 rounded-lg hover:bg-blue-700 transition-colors duration-300"
                onClick={closeApplyModal}
              >
                Cancel
              </button>
              <button
                className="bg-green text-white py-3 px-8 rounded-lg hover:bg-green-700 transition-colors duration-300"
                onClick={closeApplyModal}
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default JobListing;
