#!/bin/bash
# API Testing Script for CSMS Backend
# Run these commands to test all API endpoints

BASE_URL="http://localhost:5000/api"

echo "=========================================="
echo "CSMS API Testing Script"
echo "=========================================="
echo ""

# Color codes for output
GREEN='\033[0;32m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Function to print test name
test_api() {
    echo -e "${BLUE}Testing: $1${NC}"
    echo "---"
}

# Function to print success
print_success() {
    echo -e "${GREEN}✓ Success${NC}"
    echo ""
}

# ================== CAR ENDPOINTS ==================
echo -e "${BLUE}CAR ENDPOINTS${NC}"
echo "=========================================="
echo ""

# Get all cars
test_api "Get All Cars"
curl -s -X GET "$BASE_URL/cars" | jq .
print_success

# Get car statistics
test_api "Get Car Statistics"
curl -s -X GET "$BASE_URL/cars/stats/summary" | jq .
print_success

# Create new car
test_api "Create New Car"
curl -s -X POST "$BASE_URL/cars" \
  -H "Content-Type: application/json" \
  -d '{
    "carName": "Tesla Model 3",
    "brand": "Tesla",
    "price": 4000000,
    "availability": "Available"
  }' | jq .
print_success

# Get car by ID
test_api "Get Car by ID (ID: 1)"
curl -s -X GET "$BASE_URL/cars/1" | jq .
print_success

# Search cars
test_api "Search Cars (Term: BMW)"
curl -s -X GET "$BASE_URL/search/cars/BMW" | jq .
print_success

# Get cars by availability
test_api "Get Available Cars"
curl -s -X GET "$BASE_URL/availability/Available" | jq .
print_success

# Update car
test_api "Update Car (ID: 1)"
curl -s -X PUT "$BASE_URL/cars/1" \
  -H "Content-Type: application/json" \
  -d '{
    "carName": "BMW M3 Updated",
    "brand": "BMW",
    "price": 7000000,
    "availability": "Available"
  }' | jq .
print_success

# Delete car
test_api "Delete Car (ID: 5 - Safe to delete)"
curl -s -X DELETE "$BASE_URL/cars/5" | jq .
print_success

echo ""
# ================== USER ENDPOINTS ==================
echo -e "${BLUE}USER ENDPOINTS${NC}"
echo "=========================================="
echo ""

# Get all users
test_api "Get All Users"
curl -s -X GET "$BASE_URL/users" | jq .
print_success

# Register new user
test_api "Register New User"
curl -s -X POST "$BASE_URL/users" \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Rajesh Kumar",
    "email": "rajesh@email.com",
    "phone": "+91-9876543210"
  }' | jq .
print_success

# Get user by ID
test_api "Get User by ID (ID: 1)"
curl -s -X GET "$BASE_URL/users/1" | jq .
print_success

# Search users
test_api "Search Users (Term: John)"
curl -s -X GET "$BASE_URL/users/search/John" | jq .
print_success

# Update user
test_api "Update User (ID: 1)"
curl -s -X PUT "$BASE_URL/users/1" \
  -H "Content-Type: application/json" \
  -d '{
    "name": "John Doe Updated",
    "email": "john.updated@email.com",
    "phone": "+91-9876543210"
  }' | jq .
print_success

echo ""
# ================== LOGIN ENDPOINTS ==================
echo -e "${BLUE}LOGIN ENDPOINTS${NC}"
echo "=========================================="
echo ""

# Get all login records
test_api "Get All Login Records"
curl -s -X GET "$BASE_URL/login-records" | jq .
print_success

# Add login record
test_api "Add Login Record"
curl -s -X POST "$BASE_URL/login-records" \
  -H "Content-Type: application/json" \
  -d '{
    "username": "user@email.com",
    "status": "Success"
  }' | jq .
print_success

# Search login records
test_api "Search Login Records (Term: user)"
curl -s -X GET "$BASE_URL/login-records/search/user" | jq .
print_success

echo ""
# ================== HEALTH CHECK ==================
echo -e "${BLUE}SERVER HEALTH CHECK${NC}"
echo "=========================================="
echo ""

test_api "Server Health Status"
curl -s -X GET "$BASE_URL/health" | jq .
print_success

echo "=========================================="
echo "All tests completed!"
echo "=========================================="
echo ""
echo "Note: Requires 'jq' for JSON formatting"
echo "Install jq: brew install jq (Mac) or apt-get install jq (Linux)"
echo ""
