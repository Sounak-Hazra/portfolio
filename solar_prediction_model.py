#!/usr/bin/env python3
"""
Solar Energy Prediction Model
This script trains a machine learning model to predict solar energy production
based on weather and environmental features.
"""

import csv
import random
from datetime import datetime

# Simple Linear Regression implementation
class LinearRegression:
    def __init__(self):
        self.weights = None
        self.bias = None
    
    def fit(self, X, y, learning_rate=0.01, epochs=1000):
        """Train the model using gradient descent"""
        n_samples, n_features = len(X), len(X[0])
        
        # Initialize weights and bias
        self.weights = [0.0] * n_features
        self.bias = 0.0
        
        # Gradient descent
        for epoch in range(epochs):
            # Forward pass
            predictions = [self.predict_single(x) for x in X]
            
            # Calculate gradients
            dw = [0.0] * n_features
            db = 0.0
            
            for i in range(n_samples):
                error = predictions[i] - y[i]
                db += error
                for j in range(n_features):
                    dw[j] += error * X[i][j]
            
            # Update weights and bias
            for j in range(n_features):
                self.weights[j] -= learning_rate * dw[j] / n_samples
            self.bias -= learning_rate * db / n_samples
            
            # Print progress every 200 epochs
            if (epoch + 1) % 200 == 0:
                mse = sum((predictions[i] - y[i]) ** 2 for i in range(n_samples)) / n_samples
                print(f"Epoch {epoch + 1}/{epochs}, MSE: {mse:.6f}")
    
    def predict_single(self, x):
        """Predict for a single sample"""
        result = self.bias
        for i in range(len(x)):
            result += self.weights[i] * x[i]
        return result
    
    def predict(self, X):
        """Predict for multiple samples"""
        return [self.predict_single(x) for x in X]

def load_data(filename):
    """Load and prepare data from CSV file"""
    X = []
    y = []
    
    with open(filename, 'r') as csvfile:
        reader = csv.DictReader(csvfile)
        for row in reader:
            # Extract features
            features = [
                float(row['year']),
                float(row['elevation']),
                float(row['temperature']),
                float(row['humidity']),
                float(row['solarIrradiance']),
                float(row['cloudCover']),
                float(row['windSpeed'])
            ]
            X.append(features)
            
            # Extract target
            y.append(float(row['solarEnergyGW']))
    
    return X, y

def normalize_features(X):
    """Normalize features to similar scales"""
    n_features = len(X[0])
    means = []
    stds = []
    
    # Calculate mean and std for each feature
    for j in range(n_features):
        values = [x[j] for x in X]
        mean = sum(values) / len(values)
        variance = sum((v - mean) ** 2 for v in values) / len(values)
        std = variance ** 0.5
        means.append(mean)
        stds.append(std if std > 0 else 1.0)
    
    # Normalize
    X_normalized = []
    for x in X:
        x_norm = [(x[j] - means[j]) / stds[j] for j in range(n_features)]
        X_normalized.append(x_norm)
    
    return X_normalized, means, stds

def train_test_split(X, y, test_size=0.2):
    """Split data into training and testing sets"""
    n_samples = len(X)
    indices = list(range(n_samples))
    random.shuffle(indices)
    
    split_idx = int(n_samples * (1 - test_size))
    
    train_indices = indices[:split_idx]
    test_indices = indices[split_idx:]
    
    X_train = [X[i] for i in train_indices]
    X_test = [X[i] for i in test_indices]
    y_train = [y[i] for i in train_indices]
    y_test = [y[i] for i in test_indices]
    
    return X_train, X_test, y_train, y_test

def evaluate_model(y_true, y_pred):
    """Calculate evaluation metrics"""
    n = len(y_true)
    
    # Mean Squared Error
    mse = sum((y_true[i] - y_pred[i]) ** 2 for i in range(n)) / n
    
    # Root Mean Squared Error
    rmse = mse ** 0.5
    
    # Mean Absolute Error
    mae = sum(abs(y_true[i] - y_pred[i]) for i in range(n)) / n
    
    # R-squared
    y_mean = sum(y_true) / n
    ss_tot = sum((y - y_mean) ** 2 for y in y_true)
    ss_res = sum((y_true[i] - y_pred[i]) ** 2 for i in range(n))
    r2 = 1 - (ss_res / ss_tot) if ss_tot > 0 else 0
    
    return {
        'MSE': mse,
        'RMSE': rmse,
        'MAE': mae,
        'R2': r2
    }

def main():
    print("Solar Energy Prediction Model")
    print("=" * 50)
    
    # Load data
    print("\n1. Loading data...")
    X, y = load_data('public/data/solar_prediction_dataset.csv')
    print(f"   Loaded {len(X)} samples")
    
    # Normalize features
    print("\n2. Normalizing features...")
    X_normalized, means, stds = normalize_features(X)
    
    # Split data
    print("\n3. Splitting data (80% train, 20% test)...")
    X_train, X_test, y_train, y_test = train_test_split(X_normalized, y, test_size=0.2)
    print(f"   Training samples: {len(X_train)}")
    print(f"   Testing samples: {len(X_test)}")
    
    # Train model
    print("\n4. Training Linear Regression model...")
    model = LinearRegression()
    model.fit(X_train, y_train, learning_rate=0.1, epochs=1000)
    
    # Make predictions
    print("\n5. Making predictions...")
    train_pred = model.predict(X_train)
    test_pred = model.predict(X_test)
    
    # Evaluate
    print("\n6. Model Evaluation:")
    print("\n   Training Set:")
    train_metrics = evaluate_model(y_train, train_pred)
    for metric, value in train_metrics.items():
        print(f"   {metric}: {value:.6f}")
    
    print("\n   Testing Set:")
    test_metrics = evaluate_model(y_test, test_pred)
    for metric, value in test_metrics.items():
        print(f"   {metric}: {value:.6f}")
    
    # Show sample predictions
    print("\n7. Sample Predictions (first 5 test samples):")
    print("   Actual vs Predicted (GW):")
    for i in range(min(5, len(y_test))):
        print(f"   {y_test[i]:.4f} vs {test_pred[i]:.4f}")
    
    print("\n" + "=" * 50)
    print("Model training complete!")
    print("\nFeature Importance (weights):")
    feature_names = ['year', 'elevation', 'temperature', 'humidity', 
                     'solarIrradiance', 'cloudCover', 'windSpeed']
    for i, name in enumerate(feature_names):
        print(f"   {name}: {model.weights[i]:.6f}")
    print(f"   bias: {model.bias:.6f}")

if __name__ == "__main__":
    # Set random seed for reproducibility
    random.seed(42)
    main()
