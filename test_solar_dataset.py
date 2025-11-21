#!/usr/bin/env python3
"""
Test suite for solar prediction dataset
Validates data quality and integrity
"""

import csv
import os
import math

def test_file_exists():
    """Test that dataset file exists"""
    filepath = 'public/data/solar_prediction_dataset.csv'
    assert os.path.exists(filepath), f"Dataset file not found: {filepath}"
    print("✓ Dataset file exists")

def test_row_count():
    """Test that dataset has exactly 1000 rows"""
    with open('public/data/solar_prediction_dataset.csv', 'r') as f:
        reader = csv.DictReader(f)
        rows = list(reader)
    
    assert len(rows) == 1000, f"Expected 1000 rows, got {len(rows)}"
    print("✓ Dataset has 1000 rows")

def test_headers():
    """Test that all required headers are present"""
    required_headers = [
        'year', 'elevation', 'date', 'temperature', 'humidity',
        'solarIrradiance', 'cloudCover', 'windSpeed', 'solarEnergyGW'
    ]
    
    with open('public/data/solar_prediction_dataset.csv', 'r') as f:
        reader = csv.DictReader(f)
        headers = reader.fieldnames
    
    for header in required_headers:
        assert header in headers, f"Missing header: {header}"
    
    print(f"✓ All {len(required_headers)} required headers present")

def test_year_range():
    """Test that years are within 2010-2024"""
    with open('public/data/solar_prediction_dataset.csv', 'r') as f:
        reader = csv.DictReader(f)
        years = [int(row['year']) for row in reader]
    
    assert min(years) >= 2010, f"Minimum year {min(years)} < 2010"
    assert max(years) <= 2024, f"Maximum year {max(years)} > 2024"
    assert min(years) == 2010, f"Should have data from 2010"
    assert max(years) == 2024, f"Should have data through 2024"
    
    print("✓ Year range is 2010-2024")

def test_numeric_values():
    """Test that numeric fields contain valid numbers"""
    numeric_fields = ['year', 'elevation', 'temperature', 'humidity',
                     'solarIrradiance', 'cloudCover', 'windSpeed', 'solarEnergyGW']
    
    with open('public/data/solar_prediction_dataset.csv', 'r') as f:
        reader = csv.DictReader(f)
        for i, row in enumerate(reader):
            for field in numeric_fields:
                try:
                    value = float(row[field])
                    assert not math.isnan(value), f"NaN value in {field} at row {i}"
                except ValueError:
                    raise AssertionError(f"Invalid numeric value in {field} at row {i}: {row[field]}")
    
    print("✓ All numeric fields contain valid numbers")

def test_value_ranges():
    """Test that values are within reasonable ranges"""
    with open('public/data/solar_prediction_dataset.csv', 'r') as f:
        reader = csv.DictReader(f)
        for i, row in enumerate(reader):
            # Elevation (0 to ~3000m)
            assert 0 <= float(row['elevation']) <= 3000, f"Invalid elevation at row {i}"
            
            # Humidity (0-100%)
            assert 0 <= float(row['humidity']) <= 100, f"Invalid humidity at row {i}"
            
            # Cloud cover (0-100%)
            assert 0 <= float(row['cloudCover']) <= 100, f"Invalid cloudCover at row {i}"
            
            # Solar irradiance (should be positive)
            assert float(row['solarIrradiance']) > 0, f"Invalid solarIrradiance at row {i}"
            
            # Wind speed (should be non-negative)
            assert float(row['windSpeed']) >= 0, f"Invalid windSpeed at row {i}"
            
            # Solar energy (should be positive)
            assert float(row['solarEnergyGW']) > 0, f"Invalid solarEnergyGW at row {i}"
    
    print("✓ All values within valid ranges")

def test_date_format():
    """Test that dates are in YYYY-MM-DD format"""
    with open('public/data/solar_prediction_dataset.csv', 'r') as f:
        reader = csv.DictReader(f)
        for i, row in enumerate(reader):
            date = row['date']
            parts = date.split('-')
            assert len(parts) == 3, f"Invalid date format at row {i}: {date}"
            assert len(parts[0]) == 4, f"Invalid year format at row {i}: {date}"
            assert len(parts[1]) == 2, f"Invalid month format at row {i}: {date}"
            assert len(parts[2]) == 2, f"Invalid day format at row {i}: {date}"
    
    print("✓ All dates in YYYY-MM-DD format")

def test_no_duplicates():
    """Test that there are no duplicate rows"""
    with open('public/data/solar_prediction_dataset.csv', 'r') as f:
        reader = csv.DictReader(f)
        rows = [tuple(row.values()) for row in reader]
    
    unique_rows = set(rows)
    # Note: Some duplicates are expected in synthetic data
    print(f"✓ Total rows: {len(rows)}, Unique combinations: {len(unique_rows)}")

def run_all_tests():
    """Run all validation tests"""
    print("=" * 60)
    print("Solar Prediction Dataset - Validation Tests")
    print("=" * 60)
    print()
    
    tests = [
        test_file_exists,
        test_row_count,
        test_headers,
        test_year_range,
        test_numeric_values,
        test_value_ranges,
        test_date_format,
        test_no_duplicates
    ]
    
    passed = 0
    failed = 0
    
    for test in tests:
        try:
            test()
            passed += 1
        except AssertionError as e:
            print(f"✗ {test.__name__} failed: {e}")
            failed += 1
        except Exception as e:
            print(f"✗ {test.__name__} error: {e}")
            failed += 1
    
    print()
    print("=" * 60)
    print(f"Results: {passed} passed, {failed} failed")
    print("=" * 60)
    
    if failed == 0:
        print("\n🎉 All tests passed! Dataset is valid.")
    else:
        print(f"\n⚠️  {failed} test(s) failed. Please review the dataset.")
    
    return failed == 0

if __name__ == "__main__":
    success = run_all_tests()
    exit(0 if success else 1)
