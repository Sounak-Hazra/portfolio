"""
Simple test script to demonstrate Flask API functionality.
Run this after starting the Flask server.
"""

import json

def test_flask_api():
    """Test the Flask API endpoints using Python's http.client."""
    import http.client
    
    print("Testing Flask API endpoints...")
    print("-" * 50)
    
    # Test 1: Health check
    print("\n1. Testing health check endpoint (GET /)...")
    conn = http.client.HTTPConnection("localhost", 5000)
    conn.request("GET", "/")
    response = conn.getresponse()
    data = json.loads(response.read().decode())
    print(f"Status: {response.status}")
    print(f"Response: {json.dumps(data, indent=2)}")
    conn.close()
    
    # Test 2: Valid data submission
    print("\n2. Testing data submission with valid data (POST /api/submit)...")
    conn = http.client.HTTPConnection("localhost", 5000)
    valid_data = {
        "name": "John Doe",
        "email": "john@example.com",
        "age": 30,
        "phone": "+1234567890",
        "address": "123 Main St",
        "city": "New York",
        "country": "USA",
        "postal_code": "10001"
    }
    headers = {"Content-Type": "application/json"}
    conn.request("POST", "/api/submit", json.dumps(valid_data), headers)
    response = conn.getresponse()
    data = json.loads(response.read().decode())
    print(f"Status: {response.status}")
    print(f"Response: {json.dumps(data, indent=2)}")
    conn.close()
    
    # Test 3: Missing fields
    print("\n3. Testing data submission with missing fields...")
    conn = http.client.HTTPConnection("localhost", 5000)
    invalid_data = {
        "name": "John Doe",
        "email": "john@example.com"
    }
    conn.request("POST", "/api/submit", json.dumps(invalid_data), headers)
    response = conn.getresponse()
    data = json.loads(response.read().decode())
    print(f"Status: {response.status}")
    print(f"Response: {json.dumps(data, indent=2)}")
    conn.close()
    
    # Test 4: Null values
    print("\n4. Testing data submission with null value...")
    conn = http.client.HTTPConnection("localhost", 5000)
    null_data = {
        "name": None,
        "email": "john@example.com",
        "age": 30,
        "phone": "+1234567890",
        "address": "123 Main St",
        "city": "New York",
        "country": "USA",
        "postal_code": "10001"
    }
    conn.request("POST", "/api/submit", json.dumps(null_data), headers)
    response = conn.getresponse()
    data = json.loads(response.read().decode())
    print(f"Status: {response.status}")
    print(f"Response: {json.dumps(data, indent=2)}")
    conn.close()
    
    print("\n" + "-" * 50)
    print("All tests completed!")


if __name__ == "__main__":
    print("Make sure Flask server is running on http://localhost:5000")
    print("Start it with: python flask_app.py")
    print()
    
    try:
        test_flask_api()
    except ConnectionRefusedError:
        print("ERROR: Could not connect to Flask server.")
        print("Please start the server first with: python flask_app.py")
    except Exception as e:
        print(f"ERROR: {e}")
