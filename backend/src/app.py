from flask import Flask, request, jsonify
from flask_cors import CORS
import sys
import os

# Add the src directory to Python path
sys.path.append(os.path.join(os.path.dirname(__file__), '..', 'src'))

from predict import get_prediction

app = Flask(__name__)
CORS(app)

@app.route('/predict', methods=['POST'])
def predict():
    try:
        # Get the base64 image from the request
        data = request.json
        if not data or 'image' not in data:
            return jsonify({'error': 'No image provided'}), 400

        base64_image = data['image']
        
        # Get prediction
        result = get_prediction(base64_image)
        
        if not result['success']:
            return jsonify({'error': result['error']}), 500
            
        return jsonify(result)

    except Exception as e:
        return jsonify({'error': str(e)}), 500

if __name__ == '__main__':
    app.run(debug=True, port=5000) 