"""
Simple Flask API with a single route for processing user data.
"""

from flask import Flask, request, jsonify

app = Flask(__name__)


def process_user_data(name, email, age, phone, address, city, country, postal_code):
    """
    Process user data - currently an empty placeholder function.
    
    Args:
        name (str): User's name
        email (str): User's email address
        age (int): User's age
        phone (str): User's phone number
        address (str): User's street address
        city (str): User's city
        country (str): User's country
        postal_code (str): User's postal code
    
    Returns:
        dict: Processed result (currently just returns the input data)
    """
    # Placeholder function - can be extended with actual processing logic
    return {
        'name': name,
        'email': email,
        'age': age,
        'phone': phone,
        'address': address,
        'city': city,
        'country': country,
        'postal_code': postal_code
    }


@app.route('/api/submit', methods=['POST'])
def submit_data():
    """
    Single API endpoint that accepts user data via POST request.
    
    Expected JSON body:
    {
        "name": "string",
        "email": "string",
        "age": integer,
        "phone": "string",
        "address": "string",
        "city": "string",
        "country": "string",
        "postal_code": "string"
    }
    
    Returns:
        JSON response with processed data or error message
    """
    try:
        # Get JSON data from request body
        data = request.get_json()
        
        # Validate that all required fields are present
        required_fields = ['name', 'email', 'age', 'phone', 'address', 'city', 'country', 'postal_code']
        missing_fields = [field for field in required_fields if field not in data]
        
        if missing_fields:
            return jsonify({
                'error': 'Missing required fields',
                'missing_fields': missing_fields
            }), 400
        
        # Extract fields from request
        name = data.get('name')
        email = data.get('email')
        age = data.get('age')
        phone = data.get('phone')
        address = data.get('address')
        city = data.get('city')
        country = data.get('country')
        postal_code = data.get('postal_code')
        
        # Call processing function
        result = process_user_data(name, email, age, phone, address, city, country, postal_code)
        
        # Return success response
        return jsonify({
            'status': 'success',
            'message': 'Data processed successfully',
            'data': result
        }), 200
        
    except Exception as e:
        return jsonify({
            'error': 'An error occurred',
            'message': str(e)
        }), 500


@app.route('/', methods=['GET'])
def health_check():
    """Simple health check endpoint."""
    return jsonify({
        'status': 'running',
        'message': 'Flask API is running'
    }), 200


if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0', port=5000)
