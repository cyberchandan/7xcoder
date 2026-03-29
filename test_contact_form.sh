#!/bin/bash

# Contact Form Frontend-to-Backend Communication Test Suite
# This script tests the contact form API integration

set -e

echo "=========================================="
echo "Contact Form Integration Test Suite"
echo "=========================================="
echo ""

# Colors for output
GREEN='\033[0;32m'
RED='\033[0;31m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# Configuration
BACKEND_URL="https://visiomatix.onrender.com/api/contact"
LOCAL_URL="http://localhost:5000/api/contact"

echo "Testing Backend Deployment Status..."
echo "Target: $BACKEND_URL"
echo ""

# Test 1: Valid submission
test_valid_submission() {
    echo -e "${YELLOW}[TEST 1] Valid Contact Form Submission${NC}"
    response=$(curl -s -X POST "$BACKEND_URL" \
      -H "Content-Type: application/json" \
      -d '{
        "name": "Test User",
        "email": "test@example.com",
        "businessName": "Test Business",
        "mobile": "9999999999",
        "service": "web-development",
        "message": "This is a test message from the automated test script"
      }')
    
    echo "Response:"
    echo "$response" | jq . 2>/dev/null || echo "$response"
    
    if echo "$response" | grep -q '"success":true'; then
        echo -e "${GREEN}✓ PASS: Email sent successfully${NC}"
        return 0
    else
        echo -e "${RED}✗ FAIL: Expected success response${NC}"
        return 1
    fi
    echo ""
}

# Test 2: Missing message field
test_missing_message() {
    echo -e "${YELLOW}[TEST 2] Missing Required Field (message)${NC}"
    response=$(curl -s -X POST "$BACKEND_URL" \
      -H "Content-Type: application/json" \
      -d '{
        "name": "Test User",
        "email": "test@example.com"
      }')
    
    echo "Response:"
    echo "$response" | jq . 2>/dev/null || echo "$response"
    
    if echo "$response" | grep -q '"success":false'; then
        echo -e "${GREEN}✓ PASS: Correctly rejected missing field${NC}"
        return 0
    else
        echo -e "${RED}✗ FAIL: Should reject missing message${NC}"
        return 1
    fi
    echo ""
}

# Test 3: Invalid email
test_invalid_email() {
    echo -e "${YELLOW}[TEST 3] Invalid Email Format${NC}"
    response=$(curl -s -X POST "$BACKEND_URL" \
      -H "Content-Type: application/json" \
      -d '{
        "name": "Test User",
        "email": "not-an-email",
        "message": "Test message"
      }')
    
    echo "Response:"
    echo "$response" | jq . 2>/dev/null || echo "$response"
    
    if echo "$response" | grep -q '"success":false'; then
        echo -e "${GREEN}✓ PASS: Correctly rejected invalid email${NC}"
        return 0
    else
        echo -e "${RED}✗ FAIL: Should reject invalid email${NC}"
        return 1
    fi
    echo ""
}

# Test 4: Invalid phone number
test_invalid_phone() {
    echo -e "${YELLOW}[TEST 4] Invalid Phone Number (less than 10 digits)${NC}"
    response=$(curl -s -X POST "$BACKEND_URL" \
      -H "Content-Type: application/json" \
      -d '{
        "name": "Test User",
        "email": "test@example.com",
        "mobile": "123",
        "message": "Test message"
      }')
    
    echo "Response:"
    echo "$response" | jq . 2>/dev/null || echo "$response"
    
    if echo "$response" | grep -q '"success":false'; then
        echo -e "${GREEN}✓ PASS: Correctly rejected invalid phone${NC}"
        return 0
    else
        echo -e "${RED}✗ FAIL: Should reject invalid phone${NC}"
        return 1
    fi
    echo ""
}

# Calculate HTTP status
get_http_status() {
    curl -s -o /dev/null -w "%{http_code}" -X POST "$1" \
      -H "Content-Type: application/json" \
      -d '{"name":"Test","email":"test@test.com","message":"test"}'
}

echo "Checking API endpoint availability..."
status=$(get_http_status "$BACKEND_URL")
echo "HTTP Status Code: $status"
echo ""

if [ "$status" = "404" ]; then
    echo -e "${RED}✗ API endpoint not found (404)${NC}"
    echo -e "${YELLOW}Action Required:${NC} Backend needs to be redeployed on Render"
    echo ""
    echo "To redeploy:"
    echo "1. Commit the changes to git:"
    echo "   git add ."
    echo "   git commit -m 'Add contact form with Resend integration'"
    echo ""
    echo "2. Push to main branch:"
    echo "   git push origin main"
    echo ""
    echo "3. Render should auto-deploy. If not, manually trigger deployment in Render dashboard"
    echo ""
    exit 1
elif [ "$status" = "200" ] || [ "$status" = "400" ] || [ "$status" = "500" ]; then
    echo -e "${GREEN}✓ API endpoint is ready${NC}"
    echo "Running test suite..."
    echo ""
    
    # Run tests
    test_valid_submission || true
    test_missing_message || true
    test_invalid_email || true
    test_invalid_phone || true
else
    echo -e "${RED}✗ Unexpected status code: $status${NC}"
    exit 1
fi

echo ""
echo "=========================================="
echo "Test Summary"
echo "=========================================="
echo ""
echo "Frontend Contact Form Configuration:"
echo "  - Endpoint: $BACKEND_URL"
echo "  - Method: POST"
echo "  - Content-Type: application/json"
echo ""
echo "Form Fields Being Sent:"
echo "  - name (required)"
echo "  - email (required)"
echo "  - businessName (optional)"
echo "  - mobile (optional, but 10 digits if provided)"
echo "  - service (optional)"
echo "  - message (required)"
echo ""
echo "Expected Email Recipient: info@visiomatix.in"
