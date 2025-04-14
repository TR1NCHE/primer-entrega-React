import React, { useState } from 'react';
import { useCart } from '../../context/CartContext';
import { Link } from 'react-router-dom';
import Brief from '../brief/Brief';
import db from '../../firebase/firebaseConfig';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';

const Checkout = () => {
    const { cart, removeItem, clearCart, getTotalPrice } = useCart();

    const [orderConfirmed, setOrderConfirmed] = useState(false);
    const [orderId, setOrderId] = useState(null);
    const [loading, setLoading] = useState(false);


    const [finalCart, setFinalCart] = useState([]);
    const [finalTotal, setFinalTotal] = useState(0);

    const handleConfirm = async () => {
        setLoading(true);

        const order = {
            items: cart.map(item => ({
                id: item.id,
                title: item.title,
                price: item.price,
                quantity: item.quantity
            })),
            total: getTotalPrice(),
            date: serverTimestamp()
        };

        try {
            const docRef = await addDoc(collection(db, "orders"), order);
            setOrderId(docRef.id);


            setFinalCart(cart);
            setFinalTotal(getTotalPrice());

            setOrderConfirmed(true);
            clearCart();
        } catch (error) {
            console.error("Error al guardar la orden:", error);
            alert("Hubo un error al confirmar la compra.");
        } finally {
            setLoading(false);
        }
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
                        <div key={item.id} style={{
                            display: 'flex',
                            alignItems: 'center',
                            marginBottom: '15px',
                            borderBottom: '1px solid #ccc',
                            paddingBottom: '10px'
                        }}>
                            <img src={item.image} alt={item.title} style={{
                                width: '80px',
                                borderRadius: '5px',
                                marginRight: '15px'
                            }} />
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
                        <button onClick={handleConfirm} disabled={loading}>
                            {loading ? 'Procesando...' : 'Confirmar compra'}
                        </button>
                    </div>
                </>
            ) : (
                <Brief cart={finalCart} total={finalTotal} orderId={orderId} />
            )}
        </div>
    );
};

export default Checkout;
