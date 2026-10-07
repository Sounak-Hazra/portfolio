# Solar Energy Prediction Dataset - Quick Start Guide

## What's Included

This package provides a complete solar energy prediction dataset and tooling:

### 1. Dataset (1000 rows)
**Location**: `public/data/solar_prediction_dataset.csv`

Contains realistic solar energy data from 2010-2024 with features:
- `year` - Year (2010-2024)
- `elevation` - Location elevation in meters
- `date` - Measurement date (YYYY-MM-DD)
- `temperature` - Temperature in Celsius
- `humidity` - Relative humidity (%)
- `solarIrradiance` - Solar irradiance (W/m²)
- `cloudCover` - Cloud cover (%)
- `windSpeed` - Wind speed (m/s)
- `solarEnergyGW` - **TARGET**: Solar energy produced (GW)

### 2. Python Scripts

#### Generate Dataset
```bash
python3 generate_solar_dataset.py
```
Generates fresh dataset with 1000 rows of synthetic solar data.

#### Train Prediction Model
```bash
python3 solar_prediction_model.py
```
Trains a Linear Regression model to predict solar energy production.

Output includes:
- Model training progress
- Performance metrics (MSE, RMSE, MAE, R²)
- Feature importance weights
- Sample predictions

#### Analyze Dataset
```bash
python3 analyze_solar_dataset.py
```
Shows comprehensive statistics:
- Feature ranges and distributions
- Year distribution
- Average energy production by year
- Data quality checks

## Quick Example

```python
import csv

# Load the dataset
with open('public/data/solar_prediction_dataset.csv', 'r') as f:
    reader = csv.DictReader(f)
    data = list(reader)

# Print first row
print(data[0])
# Output: {'year': '2015', 'elevation': '879.32', 'date': '2015-10-07', ...}

# Get average solar energy
avg_energy = sum(float(row['solarEnergyGW']) for row in data) / len(data)
print(f"Average Solar Energy: {avg_energy:.4f} GW")
```

## Model Performance

The included Linear Regression model achieves:
- **RMSE**: ~0.06 GW (both training and testing)
- **Training set**: 800 samples
- **Testing set**: 200 samples

Most influential features:
1. Solar Irradiance (strongest predictor)
2. Cloud Cover (reduces production)
3. Year (increasing trend)
4. Elevation (higher = more irradiance)

## Use Cases

1. **Machine Learning Practice**
   - Train regression models
   - Feature engineering
   - Model evaluation

2. **Data Analysis**
   - Time series analysis
   - Correlation studies
   - Visualization projects

3. **Forecasting**
   - Predict future solar energy production
   - Analyze seasonal patterns
   - Optimize solar installations

## Dataset Quality

✅ **1000 rows** of data  
✅ **9 features** (8 inputs + 1 target)  
✅ **15 years** coverage (2010-2024)  
✅ **Realistic patterns** (seasonal, geographic, temporal)  
✅ **No missing values**  
✅ **CSV format** (widely compatible)

## Next Steps

1. Explore the dataset with `analyze_solar_dataset.py`
2. Train the model with `solar_prediction_model.py`
3. Experiment with different features
4. Try advanced ML models (Random Forest, Neural Networks)
5. Visualize the data and predictions

## Documentation

For detailed information, see:
- `SOLAR_DATASET_README.md` - Complete documentation
- Dataset: `public/data/solar_prediction_dataset.csv`
- Scripts: `*.py` files in root directory

## Requirements

- Python 3.x
- No external libraries needed (uses only standard library)

All scripts use vanilla Python with no dependencies!

---

**Created for**: Portfolio Project  
**Purpose**: Solar energy prediction modeling  
**Dataset Size**: 1000 rows × 9 columns  
**Time Period**: 2010-2024
