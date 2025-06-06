
import { useCart } from '../hooks/useCart';
import QrScanner from '../components/pos/QrScanner';
import BillReceipt from '../components/pos/BillReceipt';

export default function POS() {
    const { cart, addItem } = useCart();

    const handleScan = (data) => {
        if (data) addItem(data); // Moved logic to useCart hook
    };

    return (
        <div className="pos-container">
            <QrScanner onScan={handleScan} />
            <BillReceipt cart={cart} />
        </div>
    );
}