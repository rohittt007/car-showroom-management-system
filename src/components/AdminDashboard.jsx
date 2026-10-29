import React, { useState, useMemo, useEffect } from 'react';
import './AdminDashboard.css';
import { FiHome, FiLogOut, FiUsers, FiTruck, FiEdit2, FiTrash2, FiPlus, FiDownload } from 'react-icons/fi';
import { API_ENDPOINTS, apiCall } from '../config/apiConfig';

const AdminDashboard = () => {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [loginSearchTerm, setLoginSearchTerm] = useState('');
  const [registrationSearchTerm, setRegistrationSearchTerm] = useState('');
  const [carSearchTerm, setCarSearchTerm] = useState('');
  const [showAddCarModal, setShowAddCarModal] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  
  // State for data
  const [loginData, setLoginData] = useState([]);
  const [registrationData, setRegistrationData] = useState([]);
  const [carData, setCarData] = useState([]);
  const [carStats, setCarStats] = useState({
    totalCars: 0,
    availableCars: 0,
    bookedCars: 0,
    soldCars: 0
  });

  const [newCar, setNewCar] = useState({
    carName: '',
    brand: '',
    price: '',
    availability: 'Available'
  });

  // Fetch Login Data
  const fetchLoginData = async () => {
    try {
      setLoading(true);
      const data = await apiCall(API_ENDPOINTS.GET_LOGIN_RECORDS);
      setLoginData(data);
      setError(null);
    } catch (err) {
      console.error('Error fetching login data:', err);
      setError('Failed to fetch login data');
      // Use mock data as fallback
      setLoginData([
        { id: 1, username: 'user1@email.com', loginTime: '2026-06-03 09:30 AM', status: 'Success' },
        { id: 2, username: 'user2@email.com', loginTime: '2026-06-03 10:15 AM', status: 'Success' },
      ]);
    } finally {
      setLoading(false);
    }
  };

  // Fetch Registration Data
  const fetchRegistrationData = async () => {
    try {
      setLoading(true);
      const data = await apiCall(API_ENDPOINTS.GET_ALL_USERS);
      const formattedData = data.map(user => ({
        id: user.id,
        name: user.name,
        email: user.email,
        phone: user.phone,
        registrationDate: user.registrationDate ? new Date(user.registrationDate).toLocaleDateString() : 'N/A'
      }));
      setRegistrationData(formattedData);
      setError(null);
    } catch (err) {
      console.error('Error fetching registration data:', err);
      setError('Failed to fetch registration data');
      // Use mock data as fallback
      setRegistrationData([
        { id: 1, name: 'John Doe', email: 'john@email.com', phone: '+91-9876543210', registrationDate: '2026-05-15' },
      ]);
    } finally {
      setLoading(false);
    }
  };

  // Fetch Car Data
  const fetchCarData = async () => {
    try {
      setLoading(true);
      const [carsData, statsData] = await Promise.all([
        apiCall(API_ENDPOINTS.GET_ALL_CARS),
        apiCall(API_ENDPOINTS.GET_CAR_STATS)
      ]);

      const formattedCars = carsData.map(car => ({
        id: car.id,
        carName: car.carName,
        brand: car.brand,
        price: car.price.toLocaleString('en-IN'),
        availability: car.availability
      }));

      setCarData(formattedCars);
      setCarStats({
        totalCars: statsData.totalCars || 0,
        availableCars: statsData.availableCars || 0,
        bookedCars: statsData.bookedCars || 0,
        soldCars: statsData.soldCars || 0
      });
      setError(null);
    } catch (err) {
      console.error('Error fetching car data:', err);
      setError('Failed to fetch car data');
      // Use mock data as fallback
      setCarData([
        { id: 1, carName: 'BMW M3', brand: 'BMW', price: '65,00,000', availability: 'Available' },
        { id: 2, carName: 'Hyundai Creta', brand: 'Hyundai', price: '12,00,000', availability: 'Available' },
      ]);
    } finally {
      setLoading(false);
    }
  };

  // Fetch dashboard data on mount
  useEffect(() => {
    fetchLoginData();
    fetchRegistrationData();
    fetchCarData();
  }, []);

  // Filter Data
  const filteredLoginData = useMemo(() => {
    return loginData.filter(item =>
      item.username.toLowerCase().includes(loginSearchTerm.toLowerCase())
    );
  }, [loginData, loginSearchTerm]);

  const filteredRegistrationData = useMemo(() => {
    return registrationData.filter(item =>
      item.name.toLowerCase().includes(registrationSearchTerm.toLowerCase()) ||
      item.email.toLowerCase().includes(registrationSearchTerm.toLowerCase())
    );
  }, [registrationData, registrationSearchTerm]);

  const filteredCarData = useMemo(() => {
    return carData.filter(item =>
      item.carName.toLowerCase().includes(carSearchTerm.toLowerCase()) ||
      item.brand.toLowerCase().includes(carSearchTerm.toLowerCase())
    );
  }, [carData, carSearchTerm]);

  // Handle Add Car
  const handleAddCar = async () => {
    if (!newCar.carName || !newCar.brand || !newCar.price) {
      alert('Please fill in all required fields');
      return;
    }

    try {
      setLoading(true);
      const response = await apiCall(API_ENDPOINTS.CREATE_CAR, {
        method: 'POST',
        body: JSON.stringify({
          carName: newCar.carName,
          brand: newCar.brand,
          price: parseFloat(newCar.price),
          availability: newCar.availability
        })
      });

      // Refresh car data
      await fetchCarData();
      setNewCar({ carName: '', brand: '', price: '', availability: 'Available' });
      setShowAddCarModal(false);
      alert('Car added successfully!');
    } catch (err) {
      console.error('Error adding car:', err);
      alert('Failed to add car. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  // Handle Delete Car
  const handleDeleteCar = async (id) => {
    if (window.confirm('Are you sure you want to delete this car?')) {
      try {
        setLoading(true);
        await apiCall(API_ENDPOINTS.DELETE_CAR(id), {
          method: 'DELETE'
        });
        await fetchCarData();
        alert('Car deleted successfully!');
      } catch (err) {
        console.error('Error deleting car:', err);
        alert('Failed to delete car. Please try again.');
      } finally {
        setLoading(false);
      }
    }
  };

  // Export to CSV
  const handleExportCSV = (data, filename) => {
    const csv = [
      Object.keys(data[0]).join(','),
      ...data.map(row => Object.values(row).join(','))
    ].join('\n');

    const blob = new Blob([csv], { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = filename;
    a.click();
  };

  return (
    <div className="admin-container">
      {/* Sidebar */}
      <aside className="sidebar">
        <h2>Admin Panel</h2>
        <ul>
          <li
            className={activeTab === 'dashboard' ? 'active' : ''}
            onClick={() => setActiveTab('dashboard')}
          >
            <FiHome /> Dashboard
          </li>
          <li
            className={activeTab === 'login' ? 'active' : ''}
            onClick={() => setActiveTab('login')}
          >
            <FiLogOut /> Login Data
          </li>
          <li
            className={activeTab === 'registration' ? 'active' : ''}
            onClick={() => setActiveTab('registration')}
          >
            <FiUsers /> Registration
          </li>
          <li
            className={activeTab === 'cars' ? 'active' : ''}
            onClick={() => setActiveTab('cars')}
          >
            <FiTruck /> Car Inventory
          </li>
        </ul>
      </aside>

      {/* Main Content */}
      <main className="content">
        {error && <div className="error-banner">{error}</div>}
        {loading && <div className="loading-spinner">Loading...</div>}

        {/* Dashboard Tab */}
        {activeTab === 'dashboard' && (
          <section className="dashboard-section">
            <h1>Dashboard Overview</h1>
            
            {/* Stats Cards */}
            <div className="stats-container">
              <div className="stat-card">
                <h3>Total Users</h3>
                <p className="stat-value">{registrationData.length}</p>
              </div>
              <div className="stat-card">
                <h3>Total Cars</h3>
                <p className="stat-value">{carStats.totalCars}</p>
              </div>
              <div className="stat-card">
                <h3>Total Sales</h3>
                <p className="stat-value">{carStats.soldCars}</p>
              </div>
              <div className="stat-card">
                <h3>Login Records</h3>
                <p className="stat-value">{loginData.length}</p>
              </div>
            </div>

            {/* Car Summary with Charts */}
            <div className="chart-container">
              <div className="chart-section">
                <h2>Car Availability Overview</h2>
                <div className="charts-wrapper">
                  {/* Bar Chart */}
                  <div className="chart-box">
                    <h3>Availability Distribution</h3>
                    <div className="bar-chart">
                      <div className="bar-item">
                        <div className="bar-label">Available</div>
                        <div className="bar-container">
                          <div
                            className="bar green"
                            style={{ height: `${(carStats.availableCars / (carStats.totalCars || 1)) * 100}px` }}
                          ></div>
                        </div>
                        <div className="bar-value">{carStats.availableCars}</div>
                      </div>
                      <div className="bar-item">
                        <div className="bar-label">Booked</div>
                        <div className="bar-container">
                          <div
                            className="bar yellow"
                            style={{ height: `${(carStats.bookedCars / (carStats.totalCars || 1)) * 100}px` }}
                          ></div>
                        </div>
                        <div className="bar-value">{carStats.bookedCars}</div>
                      </div>
                      <div className="bar-item">
                        <div className="bar-label">Sold</div>
                        <div className="bar-container">
                          <div
                            className="bar red"
                            style={{ height: `${(carStats.soldCars / (carStats.totalCars || 1)) * 100}px` }}
                          ></div>
                        </div>
                        <div className="bar-value">{carStats.soldCars}</div>
                      </div>
                    </div>
                  </div>

                  {/* Pie Chart */}
                  <div className="chart-box">
                    <h3>Sales Distribution</h3>
                    <div className="pie-chart">
                      <svg viewBox="0 0 100 100">
                        <circle
                          cx="50"
                          cy="50"
                          r="40"
                          fill="none"
                          stroke="#4CAF50"
                          strokeWidth="15"
                          strokeDasharray={`${(carStats.availableCars / (carStats.totalCars || 1)) * 251.2} 251.2`}
                          transform="rotate(-90 50 50)"
                        />
                        <circle
                          cx="50"
                          cy="50"
                          r="40"
                          fill="none"
                          stroke="#FFC107"
                          strokeWidth="15"
                          strokeDasharray={`${(carStats.bookedCars / (carStats.totalCars || 1)) * 251.2} 251.2`}
                          transform={`rotate(${((carStats.availableCars / (carStats.totalCars || 1)) * 360) - 90} 50 50)`}
                        />
                        <circle
                          cx="50"
                          cy="50"
                          r="40"
                          fill="none"
                          stroke="#FF5252"
                          strokeWidth="15"
                          strokeDasharray={`${(carStats.soldCars / (carStats.totalCars || 1)) * 251.2} 251.2`}
                          transform={`rotate(${(((carStats.availableCars + carStats.bookedCars) / (carStats.totalCars || 1)) * 360) - 90} 50 50)`}
                        />
                      </svg>
                      <div className="pie-legend">
                        <div><span className="dot green"></span> Available</div>
                        <div><span className="dot yellow"></span> Booked</div>
                        <div><span className="dot red"></span> Sold</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Car Summary Table */}
              <div className="summary-table-section">
                <h2>Car Inventory Summary</h2>
                <table className="summary-table">
                  <thead>
                    <tr>
                      <th>Car ID</th>
                      <th>Car Name/Model</th>
                      <th>Brand</th>
                      <th>Price</th>
                      <th>Availability Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    {carData.map(car => (
                      <tr key={car.id}>
                        <td>{car.id}</td>
                        <td>{car.carName}</td>
                        <td>{car.brand}</td>
                        <td>₹{car.price}</td>
                        <td>
                          <span className={`status-badge ${car.availability.toLowerCase()}`}>
                            {car.availability}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </section>
        )}

        {/* Login Data Tab */}
        {activeTab === 'login' && (
          <section className="data-section">
            <h1>User Login Records</h1>
            <div className="search-container">
              <input
                type="text"
                placeholder="Search by username/email..."
                value={loginSearchTerm}
                onChange={(e) => setLoginSearchTerm(e.target.value)}
                className="search-input"
              />
            </div>
            <table className="data-table">
              <thead>
                <tr>
                  <th>User ID</th>
                  <th>Username/Email</th>
                  <th>Login Date & Time</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                {filteredLoginData.length > 0 ? (
                  filteredLoginData.map(item => (
                    <tr key={item.id}>
                      <td>{item.id}</td>
                      <td>{item.username}</td>
                      <td>{item.loginTime}</td>
                      <td>
                        <span className={`status-badge ${item.status.toLowerCase()}`}>
                          {item.status}
                        </span>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr><td colSpan="4" style={{ textAlign: 'center', padding: '20px' }}>No login records found</td></tr>
                )}
              </tbody>
            </table>
          </section>
        )}

        {/* Registration Data Tab */}
        {activeTab === 'registration' && (
          <section className="data-section">
            <div className="section-header">
              <h1>Registered Users</h1>
              <button
                className="export-btn"
                onClick={() => handleExportCSV(filteredRegistrationData, 'registration_data.csv')}
              >
                <FiDownload /> Export CSV
              </button>
            </div>
            <div className="search-container">
              <input
                type="text"
                placeholder="Search by name or email..."
                value={registrationSearchTerm}
                onChange={(e) => setRegistrationSearchTerm(e.target.value)}
                className="search-input"
              />
            </div>
            <table className="data-table">
              <thead>
                <tr>
                  <th>User ID</th>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Phone Number</th>
                  <th>Registration Date</th>
                </tr>
              </thead>
              <tbody>
                {filteredRegistrationData.length > 0 ? (
                  filteredRegistrationData.map(item => (
                    <tr key={item.id}>
                      <td>{item.id}</td>
                      <td>{item.name}</td>
                      <td>{item.email}</td>
                      <td>{item.phone}</td>
                      <td>{item.registrationDate}</td>
                    </tr>
                  ))
                ) : (
                  <tr><td colSpan="5" style={{ textAlign: 'center', padding: '20px' }}>No registered users found</td></tr>
                )}
              </tbody>
            </table>
          </section>
        )}

        {/* Car Inventory Tab */}
        {activeTab === 'cars' && (
          <section className="data-section">
            <div className="section-header">
              <h1>Car Inventory Management</h1>
              <button
                className="add-btn"
                onClick={() => setShowAddCarModal(true)}
              >
                <FiPlus /> Add New Car
              </button>
            </div>
            <div className="search-container">
              <input
                type="text"
                placeholder="Search by car name or brand..."
                value={carSearchTerm}
                onChange={(e) => setCarSearchTerm(e.target.value)}
                className="search-input"
              />
            </div>
            <table className="data-table">
              <thead>
                <tr>
                  <th>Car ID</th>
                  <th>Car Name/Model</th>
                  <th>Brand</th>
                  <th>Price</th>
                  <th>Availability</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {filteredCarData.length > 0 ? (
                  filteredCarData.map(car => (
                    <tr key={car.id}>
                      <td>{car.id}</td>
                      <td>{car.carName}</td>
                      <td>{car.brand}</td>
                      <td>₹{car.price}</td>
                      <td>
                        <span className={`status-badge ${car.availability.toLowerCase()}`}>
                          {car.availability}
                        </span>
                      </td>
                      <td>
                        <button className="action-btn edit-btn"><FiEdit2 /></button>
                        <button
                          className="action-btn delete-btn"
                          onClick={() => handleDeleteCar(car.id)}
                        >
                          <FiTrash2 />
                        </button>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr><td colSpan="6" style={{ textAlign: 'center', padding: '20px' }}>No cars found</td></tr>
                )}
              </tbody>
            </table>

            {/* Add Car Modal */}
            {showAddCarModal && (
              <div className="modal-overlay">
                <div className="modal">
                  <h2>Add New Car</h2>
                  <form>
                    <input
                      type="text"
                      placeholder="Car Name/Model"
                      value={newCar.carName}
                      onChange={(e) => setNewCar({ ...newCar, carName: e.target.value })}
                      className="modal-input"
                    />
                    <input
                      type="text"
                      placeholder="Brand"
                      value={newCar.brand}
                      onChange={(e) => setNewCar({ ...newCar, brand: e.target.value })}
                      className="modal-input"
                    />
                    <input
                      type="text"
                      placeholder="Price"
                      value={newCar.price}
                      onChange={(e) => setNewCar({ ...newCar, price: e.target.value })}
                      className="modal-input"
                    />
                    <select
                      value={newCar.availability}
                      onChange={(e) => setNewCar({ ...newCar, availability: e.target.value })}
                      className="modal-input"
                    >
                      <option value="Available">Available</option>
                      <option value="Booked">Booked</option>
                      <option value="Sold">Sold</option>
                    </select>
                    <div className="modal-actions">
                      <button
                        type="button"
                        className="modal-btn cancel"
                        onClick={() => setShowAddCarModal(false)}
                      >
                        Cancel
                      </button>
                      <button
                        type="button"
                        className="modal-btn submit"
                        onClick={handleAddCar}
                        disabled={loading}
                      >
                        {loading ? 'Adding...' : 'Add Car'}
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            )}
          </section>
        )}
      </main>
    </div>
  );
};

export default AdminDashboard;