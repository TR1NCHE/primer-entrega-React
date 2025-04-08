import React, { useState } from 'react';
import { useCart } from '../../context/CartContext';
import { Link } from 'react-router-dom';
import Brief from '../brief/Brief';

const Checkout = () => {
    const { cart, removeItem, clearCart, getTotalPrice } = useCart();
    const [orderConfirmed, setOrderConfirmed] = useState(false);

    const handleConfirm = () => {
        setOrderConfirmed(true);
        clearCart();
    };

    if (cart.length === 0 && !orderConfirmed) {
        return (
            <div style={{ padding: '20px' }}>
                <h2>Tu carrito está vacío</h2>
                <Link to="/">Volver al catálogo</Link>
            </div>
        );
    }

    return (
        <div style={{ padding: '20px' }}>
            {!orderConfirmed ? (
                <>
                    <h2>Resumen de tu compra</h2>
                    {cart.map((item) => (
                        <div key={item.id} style={{ display: 'flex', alignItems: 'center', marginBottom: '15px', borderBottom: '1px solid #ccc', paddingBottom: '10px' }}>
                            <img src={item.image} alt={item.title} style={{ width: '80px', borderRadius: '5px', marginRight: '15px' }} />
                            <div style={{ flexGrow: 1 }}>
                                <h4>{item.title}</h4>
                                <p>Cantidad: {item.quantity}</p>
                                <p>Precio unitario: ${item.price}</p>
                                <p><strong>Subtotal:</strong> ${item.quantity * item.price}</p>
                            </div>
                            <button onClick={() => removeItem(item.id)}>Eliminar</button>
                        </div>
                    ))}

                    <h3>Total: ${getTotalPrice().toFixed(2)}</h3>

                    <div style={{ marginTop: '20px' }}>
                        <button onClick={clearCart} style={{ marginRight: '10px' }}>Vaciar carrito</button>
                        <button onClick={handleConfirm}>Confirmar compra</button>
                    </div>
                </>
            ) : (
                <Brief cart={cart} total={getTotalPrice()} />
            )}
        </div>
    );
};

export default Checkout;
