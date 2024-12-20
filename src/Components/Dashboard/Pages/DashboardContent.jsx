import React from 'react'

const DashboardContent = () => {
  return (
    <div className="left-side">
          <div>
            <div className="flex p-3 flex-col">
              <h1 className="text-2xl font-bold">Welcome, admin.</h1>
              <p>Welcome admin, here is your business status</p>
            </div>
            <div className="business-status-container">
              <div className="flex justify-between">
                <div className="flex gap-1">
                  <img src="" alt="icon" />
                  <h1>Business Analytics</h1>
                </div>
              </div>
              <div className="status-cards-container">
                <div className="status-card">
                  <img src="" alt="icon" className="ml-auto" />
                  <p>Pending</p>
                  <h1 className="text-3xl">20</h1>
                </div>
                <div className="status-card">
                  <img src="" alt="icon" className="ml-auto" />
                  <p>Confirmed</p>
                  <h1 className="text-3xl">20</h1>
                </div>
                <div className="status-card">
                  <img src="" alt="icon" className="ml-auto" />
                  <p>Packaging</p>
                  <h1 className="text-3xl">20</h1>
                </div>
                <div className="status-card">
                  <img src="" alt="icon" className="ml-auto" />
                  <p>Out for delivery</p>
                  <h1 className="text-3xl">20</h1>
                </div>
              </div>
              <div className="status-summary-container">
                <div className="summary-card">
                  <div className="flex">
                    <img src="" alt="icon" />
                    <p>Delivered</p>
                  </div>
                  <h1 className="text-2xl">20</h1>
                </div>
                <div className="summary-card">
                  <div className="flex">
                    <img src="" alt="icon" />
                    <p>Canceled</p>
                  </div>
                  <h1 className="text-2xl">20</h1>
                </div>
                <div className="summary-card">
                  <div className="flex">
                    <img src="" alt="icon" />
                    <p>Returned</p>
                  </div>
                  <h1 className="text-2xl">20</h1>
                </div>
                <div className="summary-card">
                  <div className="flex">
                    <img src="" alt="icon" />
                    <p>Failed to Deliver</p>
                  </div>
                  <h1 className="text-2xl">20</h1>
                </div>
              </div>
            </div>
          </div>
        </div>
  )
}

export default DashboardContent