# Solar Energy Prediction Dataset

## Overview
This dataset contains 1000 rows of synthetic solar energy production data from 2010 to 2024. It is designed for training machine learning models to predict solar energy generation based on environmental and meteorological features.

## Dataset Features

### Input Features

1. **year** (Integer: 2010-2024)
   - The year of the measurement
   - Shows the temporal trend of solar installation growth

2. **elevation** (Float: meters)
   - Location elevation above sea level
   - Range: 0 to 2500 meters
   - Higher elevations generally receive more solar irradiance

3. **date** (String: YYYY-MM-DD)
   - The specific date of measurement
   - Used for seasonal pattern analysis

4. **temperature** (Float: Celsius)
   - Air temperature at the measurement location
   - Exhibits seasonal variation
   - Range: approximately -10°C to 40°C

5. **humidity** (Float: Percentage)
   - Relative humidity
   - Range: 20% to 95%
   - Generally inversely correlated with temperature

6. **solarIrradiance** (Float: W/m²)
   - Solar irradiance (solar power per unit area)
   - Primary driver of solar energy production
   - Affected by season, cloud cover, and elevation
   - Range: 50 to 1200 W/m²

7. **cloudCover** (Float: Percentage)
   - Cloud cover percentage
   - Range: 0% (clear sky) to 100% (completely overcast)
   - Inversely affects solar irradiance

8. **windSpeed** (Float: m/s)
   - Wind speed in meters per second
   - Range: 0 to 20 m/s
   - Can affect solar panel efficiency through cooling

### Target Variable

9. **solarEnergyGW** (Float: Gigawatts)
   - Total solar energy produced
   - This is the variable to predict
   - Calculated based on irradiance, installation capacity, and efficiency
   - Shows increasing trend over years due to growing solar installations
   - Range: 0.01 to ~0.3 GW

## Data Generation Method

The dataset was synthetically generated using realistic patterns and relationships:

- **Seasonal patterns**: Temperature and solar irradiance follow seasonal cycles
- **Geographic effects**: Elevation affects solar irradiance
- **Weather relationships**: Cloud cover reduces irradiance; humidity correlates with temperature
- **Temporal trends**: Solar capacity increases over the years (2010-2024)
- **Noise**: Random variation added to simulate real-world uncertainty

## Usage

### Viewing the Data
```bash
# View first few rows
head -n 20 public/data/solar_prediction_dataset.csv

# Count total rows
wc -l public/data/solar_prediction_dataset.csv
```

### Training a Model
A simple machine learning model is provided in `solar_prediction_model.py`:

```bash
python3 solar_prediction_model.py
```

The model uses Linear Regression to predict solar energy production based on the input features.

## File Structure

```
portfolio/
├── public/
│   └── data/
│       └── solar_prediction_dataset.csv    # The dataset
├── generate_solar_dataset.py               # Dataset generator script
├── solar_prediction_model.py               # ML model for prediction
└── SOLAR_DATASET_README.md                 # This file
```

## Dataset Statistics

- **Total Rows**: 1000
- **Time Period**: 2010-2024 (15 years)
- **Features**: 8 input features + 1 target variable
- **File Format**: CSV (Comma-Separated Values)
- **File Size**: ~80 KB

## Model Performance

The included Linear Regression model achieves:
- Training RMSE: ~0.06 GW
- Testing RMSE: ~0.06 GW
- R² Score: Variable (simple linear model)

## Applications

This dataset can be used for:
1. **Predictive Modeling**: Forecast solar energy production
2. **Feature Analysis**: Understand which factors most affect solar generation
3. **Trend Analysis**: Study solar energy growth from 2010-2024
4. **Educational Purposes**: Learn machine learning with realistic data

## Limitations

- Data is synthetically generated, not from real solar installations
- Simplified model of complex real-world relationships
- Does not account for all factors (e.g., panel degradation, maintenance, grid limitations)
- Geographic location is simplified to elevation only

## Future Improvements

Potential enhancements:
1. Add geographic coordinates (latitude/longitude)
2. Include panel specifications (area, efficiency rating)
3. Add time-of-day information
4. Include maintenance and downtime data
5. Add weather forecast accuracy metrics

## License

This dataset is part of the portfolio project and can be used freely for educational and research purposes.

## Contact

For questions or suggestions about this dataset, please contact the repository owner.
