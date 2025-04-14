const Brief = ({ cart, total, orderId }) => {
    const now = new Date();
    const fecha = now.toLocaleDateString();
    const hora = now.toLocaleTimeString();

    return (
        <div style={{ padding: '20px', border: '1px solid #ddd', marginTop: '30px', borderRadius: '8px' }}>
            <h2>Resumen de Compra</h2>
            <p><strong>Fecha:</strong> {fecha}</p>
            <p><strong>Hora:</strong> {hora}</p>
            <p><strong>ID de operación:</strong> {orderId}</p>

            <hr />

            {cart.map((item) => (
                <div key={item.id} style={{ marginBottom: '10px' }}>
                    <p><strong>{item.title}</strong> x {item.quantity}</p>
                    <p>Subtotal: ${(item.price * item.quantity).toFixed(2)}</p>
                </div>
            ))}

            <hr />
            <h3>Total pagado: ${total.toFixed(2)}</h3>
            <p style={{ marginTop: '20px', fontWeight: 'bold', color: 'green' }}>¡Gracias por tu compra! 🛒</p>
        </div>
    );
};
export default Brief;