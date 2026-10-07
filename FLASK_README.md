# Flask API Documentation

This is a simple Flask API with a single endpoint for processing user data.

## Installation

1. Install Python dependencies:
```bash
pip install -r requirements.txt
```

## Running the Application

Start the Flask server:
```bash
python flask_app.py
```

The server will run on `http://localhost:5000`

## API Endpoints

### Health Check
- **URL**: `/`
- **Method**: `GET`
- **Response**: 
  ```json
  {
    "status": "running",
    "message": "Flask API is running"
  }
  ```

### Submit User Data
- **URL**: `/api/submit`
- **Method**: `POST`
- **Content-Type**: `application/json`
- **Request Body**:
  ```json
  {
    "name": "John Doe",
    "email": "john@example.com",
    "age": 30,
    "phone": "+1234567890",
    "address": "123 Main St",
    "city": "New York",
    "country": "USA",
    "postal_code": "10001"
  }
  ```
- **Success Response** (200):
  ```json
  {
    "status": "success",
    "message": "Data processed successfully",
    "data": {
      "name": "John Doe",
      "email": "john@example.com",
      "age": 30,
      "phone": "+1234567890",
      "address": "123 Main St",
      "city": "New York",
      "country": "USA",
      "postal_code": "10001"
    }
  }
  ```
- **Error Response** (400):
  ```json
  {
    "error": "Missing required fields",
    "missing_fields": ["name", "email"]
  }
  ```

## Testing the API

Using curl:
```bash
curl -X POST http://localhost:5000/api/submit \
  -H "Content-Type: application/json" \
  -d '{
    "name": "John Doe",
    "email": "john@example.com",
    "age": 30,
    "phone": "+1234567890",
    "address": "123 Main St",
    "city": "New York",
    "country": "USA",
    "postal_code": "10001"
  }'
```

Using Python:
```python
import requests

data = {
    "name": "John Doe",
    "email": "john@example.com",
    "age": 30,
    "phone": "+1234567890",
    "address": "123 Main St",
    "city": "New York",
    "country": "USA",
    "postal_code": "10001"
}

response = requests.post('http://localhost:5000/api/submit', json=data)
print(response.json())
```

## Project Structure

```
.
├── flask_app.py          # Main Flask application
├── requirements.txt      # Python dependencies
└── FLASK_README.md      # This file
```

## Scalability Considerations

The current implementation is simple and straightforward, but it's designed with scalability in mind:

1. **Function Separation**: The `process_user_data()` function is separated from the route handler, making it easy to add complex business logic later.

2. **Error Handling**: Basic error handling is in place, which can be extended with custom error handlers.

3. **Validation**: Field validation is implemented and can be enhanced with libraries like marshmallow or pydantic.

4. **Environment Configuration**: Can be easily extended with environment variables for different deployment configurations.

5. **Database Integration**: The processing function can be extended to save data to a database (e.g., PostgreSQL, MongoDB).

6. **API Versioning**: The route uses `/api/submit` pattern, making it easy to add versioning like `/api/v1/submit`.
