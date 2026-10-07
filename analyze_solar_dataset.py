#!/usr/bin/env python3
"""
Analyze and display statistics for the solar prediction dataset
"""

import csv

def analyze_dataset(filename):
    """Analyze the solar prediction dataset"""
    
    print("Solar Prediction Dataset Analysis")
    print("=" * 60)
    
    # Read data
    data = []
    with open(filename, 'r') as csvfile:
        reader = csv.DictReader(csvfile)
        headers = reader.fieldnames
        for row in reader:
            data.append(row)
    
    print(f"\n📊 Basic Information:")
    print(f"   Total Rows: {len(data)}")
    print(f"   Features: {len(headers)}")
    print(f"   Feature Names: {', '.join(headers)}")
    
    # Calculate statistics for each numeric feature
    print(f"\n📈 Feature Statistics:")
    
    numeric_features = ['year', 'elevation', 'temperature', 'humidity', 
                       'solarIrradiance', 'cloudCover', 'windSpeed', 'solarEnergyGW']
    
    for feature in numeric_features:
        values = [float(row[feature]) for row in data]
        
        # Calculate stats
        min_val = min(values)
        max_val = max(values)
        mean_val = sum(values) / len(values)
        sorted_vals = sorted(values)
        median_val = sorted_vals[len(values) // 2]
        
        print(f"\n   {feature}:")
        print(f"      Min: {min_val:.2f}")
        print(f"      Max: {max_val:.2f}")
        print(f"      Mean: {mean_val:.2f}")
        print(f"      Median: {median_val:.2f}")
    
    # Year distribution
    print(f"\n📅 Year Distribution:")
    year_counts = {}
    for row in data:
        year = row['year']
        year_counts[year] = year_counts.get(year, 0) + 1
    
    for year in sorted(year_counts.keys()):
        bar = '█' * (year_counts[year] // 5)
        print(f"   {year}: {year_counts[year]:3d} {bar}")
    
    # Energy production by year (average)
    print(f"\n⚡ Average Solar Energy by Year (GW):")
    year_energy = {}
    year_count = {}
    for row in data:
        year = row['year']
        energy = float(row['solarEnergyGW'])
        year_energy[year] = year_energy.get(year, 0) + energy
        year_count[year] = year_count.get(year, 0) + 1
    
    for year in sorted(year_energy.keys()):
        avg_energy = year_energy[year] / year_count[year]
        bar = '▓' * int(avg_energy * 100)
        print(f"   {year}: {avg_energy:.4f} {bar}")
    
    print("\n" + "=" * 60)
    print("Analysis complete!")

if __name__ == "__main__":
    analyze_dataset('public/data/solar_prediction_dataset.csv')
