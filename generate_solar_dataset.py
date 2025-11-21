#!/usr/bin/env python3
"""
Generate a synthetic solar prediction dataset with realistic data patterns.
Dataset includes features for predicting solar energy production.
"""

import csv
import random
from datetime import datetime, timedelta
import math

def generate_solar_dataset(num_rows=1000):
    """
    Generate solar prediction dataset with the following features:
    - year: Year from 2010 to 2024
    - elevation: Location elevation in meters (affects solar irradiance)
    - date: Date in YYYY-MM-DD format
    - temperature: Temperature in Celsius
    - humidity: Relative humidity percentage
    - solarIrradiance: Solar irradiance in W/m²
    - cloudCover: Cloud cover percentage
    - windSpeed: Wind speed in m/s
    - solarEnergyGW: Target variable - Solar energy produced in GW
    """
    
    # Output file
    output_file = 'public/data/solar_prediction_dataset.csv'
    
    # Define headers
    headers = [
        'year', 'elevation', 'date', 'temperature', 'humidity', 
        'solarIrradiance', 'cloudCover', 'windSpeed', 'solarEnergyGW'
    ]
    
    # Open CSV file for writing
    with open(output_file, 'w', newline='') as csvfile:
        writer = csv.DictWriter(csvfile, fieldnames=headers)
        writer.writeheader()
        
        # Generate data rows
        for i in range(num_rows):
            # Random year between 2010 and 2024
            year = random.randint(2010, 2024)
            
            # Random day of the year
            start_date = datetime(year, 1, 1)
            random_days = random.randint(0, 364)
            date = start_date + timedelta(days=random_days)
            date_str = date.strftime('%Y-%m-%d')
            
            # Elevation (meters) - typical solar installations
            elevation = round(random.uniform(0, 2500), 2)
            
            # Month for seasonal patterns
            month = date.month
            
            # Temperature (Celsius) with seasonal variation
            base_temp = 15 + 15 * math.sin(2 * math.pi * (month - 3) / 12)
            temperature = round(base_temp + random.uniform(-5, 5), 2)
            
            # Humidity (%) - inversely related to temperature
            base_humidity = 65 - 0.5 * (temperature - 15)
            humidity = round(max(20, min(95, base_humidity + random.uniform(-10, 10))), 2)
            
            # Cloud cover (%) - inversely affects solar irradiance
            cloudCover = round(random.uniform(0, 100), 2)
            
            # Solar irradiance (W/m²) - affected by season, cloud cover, and elevation
            # Higher in summer, reduced by clouds, slightly increased by elevation
            seasonal_factor = 0.7 + 0.3 * math.sin(2 * math.pi * (month - 3) / 12)
            cloud_factor = 1 - (cloudCover / 100) * 0.7
            elevation_factor = 1 + (elevation / 10000)
            base_irradiance = 1000 * seasonal_factor * cloud_factor * elevation_factor
            solarIrradiance = round(max(50, base_irradiance + random.uniform(-100, 100)), 2)
            
            # Wind speed (m/s)
            windSpeed = round(random.uniform(0, 20), 2)
            
            # Solar energy production (GW)
            # Primarily depends on irradiance, with minor effects from other factors
            # Base calculation: irradiance * efficiency * installation capacity
            # Assuming increasing installation capacity over years
            year_factor = 1 + (year - 2010) * 0.15  # 15% increase per year
            efficiency = 0.18  # 18% solar panel efficiency
            installation_capacity = 0.001  # Base capacity factor
            
            # Calculate solar energy
            base_energy = (solarIrradiance / 1000) * efficiency * installation_capacity * year_factor
            
            # Add some noise and ensure positive values
            solarEnergyGW = round(max(0.01, base_energy + random.uniform(-0.2, 0.2)), 4)
            
            # Write row
            row = {
                'year': year,
                'elevation': elevation,
                'date': date_str,
                'temperature': temperature,
                'humidity': humidity,
                'solarIrradiance': solarIrradiance,
                'cloudCover': cloudCover,
                'windSpeed': windSpeed,
                'solarEnergyGW': solarEnergyGW
            }
            writer.writerow(row)
    
    print(f"Successfully generated {num_rows} rows of solar prediction data")
    print(f"Dataset saved to: {output_file}")
    print("\nFeatures:")
    print("- year: Year from 2010 to 2024")
    print("- elevation: Location elevation in meters")
    print("- date: Date in YYYY-MM-DD format")
    print("- temperature: Temperature in Celsius")
    print("- humidity: Relative humidity percentage (0-100)")
    print("- solarIrradiance: Solar irradiance in W/m²")
    print("- cloudCover: Cloud cover percentage (0-100)")
    print("- windSpeed: Wind speed in m/s")
    print("- solarEnergyGW: Solar energy produced in GigaWatts (target variable)")

if __name__ == "__main__":
    generate_solar_dataset(1000)
