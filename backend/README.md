# CSMS Backend - Car Showroom Management System (SQLite Version)

## Setup Instructions

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn package manager
- **No MySQL required! Uses SQLite**

### Installation Steps

1. **Navigate to Backend Directory**
   ```bash
   cd backend
   ```

2. **Install Dependencies**
   ```bash
   npm install
   ```

3. **Create Environment File (.env)**
   The `.env` file is already created with:
   ```
   DB_TYPE=sqlite
   NODE_ENV=development
   ```

4. **Start Backend Server**
   
   Development mode (with auto-reload):
   ```bash
   npm run dev
   ```
   
   Production mode:
   ```bash
   npm start
   ```

   **Expected Output:**
   ```
   ✅ SQLite Database Connected Successfully!
   ✅ Database tables initialized with sample data!
   🚀 Server running on http://localhost:5000
   ```

### Database Structure

The SQLite database (`csms.db`) is automatically created in the backend folder with these tables:

#### Users Table
- `user_id` (INTEGER, Primary Key)
- `name` (TEXT)
- `email` (TEXT, Unique)
- `phone` (TEXT)
- `password` (TEXT)
- `registration_date` (DATETIME)
- `status` (TEXT)

#### Login Records Table
- `login_id` (INTEGER, Primary Key)
- `user_id` (INTEGER, Foreign Key)
- `username` (TEXT)
- `login_time` (DATETIME)
- `status` (TEXT)

#### Cars Table
- `car_id` (INTEGER, Primary Key)
- `car_name` (TEXT)
- `brand` (TEXT)
- `model` (TEXT)
- `price` (REAL)
- `availability` (TEXT)
- `description` (TEXT)
- `image_url` (TEXT)
- `created_date` (DATETIME)
- `updated_date` (DATETIME)

#### Orders Table
- `order_id` (INTEGER, Primary Key)
- `user_id` (INTEGER, Foreign Key)
- `car_id` (INTEGER, Foreign Key)
- `order_date` (DATETIME)
- `status` (TEXT)
- `total_price` (REAL)

### API Endpoints

#### Car Routes (`/api/cars`)
- `GET /api/cars` - Get all cars
- `POST /api/cars` - Create new car
- `GET /api/cars/:id` - Get car by ID
- `PUT /api/cars/:id` - Update car
- `DELETE /api/cars/:id` - Delete car
- `GET /api/cars/stats/summary` - Get car statistics
- `GET /api/search/cars/:term` - Search cars
- `GET /api/availability/:status` - Get cars by availability

#### User Routes (`/api/users`)
- `GET /api/users` - Get all users
- `POST /api/users` - Register new user
- `GET /api/users/:id` - Get user by ID
- `PUT /api/users/:id` - Update user
- `DELETE /api/users/:id` - Delete user
- `GET /api/users/search/:term` - Search users

#### Login Routes (`/api/login-records`)
- `GET /api/login-records` - Get all login records
- `POST /api/login-records` - Create login record
- `GET /api/login-records/search/:term` - Search login records

### Advantages of SQLite

✅ **No Server Required** - Database is a single file  
✅ **Zero Configuration** - Works out of the box  
✅ **Lightweight** - Perfect for development and small deployments  
✅ **Portable** - Easy to backup and move (just copy csms.db file)  
✅ **Fast** - Excellent performance for CRUD operations  

### Troubleshooting

**Issue: "Cannot find module 'sqlite3'"**
```bash
npm install sqlite3
```

**Issue: Database file not found**
- The `csms.db` file is automatically created on first run
- Check if `csms.db` exists in the backend folder

**Issue: Port 5000 already in use**
```bash
# Kill process using port 5000
lsof -i :5000
kill -9 <PID>
```

**Issue: Need to reset database**
- Simply delete `csms.db` file
- Restart the server to recreate with sample data

### Useful Commands

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Start production server
npm start

# Check npm version
npm -v

# Check node version
node -v
```

### File Structure

```
backend/
├── server.js              # Main Express server
├── db.js                  # SQLite connection & initialization
├── .env                   # Environment variables
├── .gitignore             # Git ignore file
├── csms.db               # SQLite database (auto-created)
├── package.json          # Dependencies
├── routes/
│   ├── carRoutes.js      # Car API endpoints
│   ├── userRoutes.js     # User API endpoints
│   └── loginRoutes.js    # Login API endpoints
├── README.md             # This file
└── test_api.sh           # API testing script
```

### Backup & Export

**Backup Database:**
```bash
cp csms.db csms_backup_$(date +%Y%m%d_%H%M%S).db
```

**Export to CSV:**
```bash
# Using sqlite3 command line
sqlite3 csms.db ".mode csv" ".output cars.csv" "SELECT * FROM cars;"
```

### Contact & Support

For issues or questions:
1. Check backend console for error messages
2. Ensure Node.js is installed properly
3. Verify `.env` file exists
4. Check if port 5000 is available

---

**Version**: 1.0.0 (SQLite)  
**Date**: June 3, 2026  
**Status**: ✅ Production Ready

