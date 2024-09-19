import React,{useState} from 'react'
import './BMICalculator.css'

function BMICalculator() {
    const [weight, setWeight] = useState('')
    const [height, setHeight] = useState('');
    const [bmi, setBMI] = useState('');

    const calculateBMI = () => {
        const weightKg = parseFloat(weight);
        const heightM = parseFloat(height) / 100; // converting height from cm to meters

        if (weightKg > 0 && heightM > 0) {
            const bmiValue = weightKg / (heightM * heightM);
            setBMI(bmiValue.toFixed(1)); // rounding BMI to one decimal place
        } else {
            setBMI('');
        }
    };

    const clearInputs = () => {
        setWeight('');
        setHeight('');
        setBMI('');
    };

    return (
        <div className="d-flex justify-content-center align-items-center vh-100">
            <div className="calculator-container border shadow p-5 rounded">
                <h2 className="text-center mb-4">BMI Calculator</h2>
                <input
                    type="number"
                    value={weight}
                    onChange={(e) => setWeight(e.target.value)}
                    className="form-control my-3"
                    placeholder="Enter Weight (in kg)"
                />
                <input
                    type="number"
                    value={height}
                    onChange={(e) => setHeight(e.target.value)}
                    className="form-control mb-3"
                    placeholder="Enter Height (in cm)"
                />
                <div className="d-flex justify-content-between">
                    <button onClick={calculateBMI} className="btn btn-primary mb-3">
                        Calculate BMI
                    </button>
                    <button onClick={clearInputs} className="btn btn-secondary mb-3">
                        Clear
                    </button>
                </div>
                {bmi !== '' && (
                    <div className="text-center result-container mt-4">
                        <h3>Your BMI: <span className="bmi-value">{bmi}</span></h3>
                        <p className="mb-0">
                            <span className="bmi-interpretation">
                                {bmi < 18.5 && ' Underweight'}
                                {bmi >= 18.5 && bmi < 24.9 && ' Normal weight'}
                                {bmi >= 24.9 && bmi < 29.9 && ' Overweight'}
                                {bmi >= 29.9 && ' Obesity'}
                            </span>
                        </p>
                    </div>
                )}
            </div>
        </div>
    );
}


export default BMICalculator
