import React, { useState, useEffect } from 'react';

function Simulador () {
    
    const texto=() =>{
        return(
                <div class="text" > <p>Planifica tus viajes con confianza y ahorra en cada kilómetro. Nuestro Simulador 
                de Gasolina te ofrece el poder de conocer el costo exacto de tu viaje antes de salir !</p>
                </div>
            )
    }
        
    
    const [tankSize, setTankSize] = useState('');
    const [totalCost, setTotalCost] = useState(null);
    const fuelPrice = 14564; 

    const calculateTotalCost = () => {
        const size = parseFloat(tankSize);

        if (!isNaN(size)) {
        const cost = size * fuelPrice;
            setTotalCost(cost.toFixed(2));
        } else {
            setTotalCost(null);
        }
    };

    useEffect(() => {
        calculateTotalCost();
    }, []); 
        return (
            <div>
                <h1>CONVERSOR DE GASOLINA</h1>
                {texto()}
                <h2>Simulador Llenado de Tanque</h2>
                <label>
                    Tamaño del Tanque (en litros):
                    <input
                        type="number"
                        value={tankSize}
                        onChange={(e) => setTankSize(e.target.value)}
                    />
                </label>
                <br />
                    <p>Precio Actual de la Gasolina: ${fuelPrice.toFixed(2)} por Galón</p>
                    <button onClick={calculateTotalCost}>Calcular Costo Total</button>
                <br />
                {totalCost !== null && (
                    <div class="total">
                        <p>
                        El costo total para llenar el tanque es: ${totalCost}
                        </p>
                    </div>
                )}
        </div>
    );
};


export default Simulador;

