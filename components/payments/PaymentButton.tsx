import md5 from 'crypto-js/md5';

export default function PaymentButton() {
    const merchantSecret = 'NDE5MTY2NzI4OTEzNDc3OTkwMzg0OTAyNDQ0NDI2ODQ1MzY3OTU='; // Leave as is
    const merchantId = '1230993';
    let orderId = 'order12345';
    let amount = 1000;
    let hashedSecret = md5(merchantSecret).toString().toUpperCase();
    let amountFormated = parseFloat(amount).toLocaleString('en-us', { minimumFractionDigits: 2 }).replaceAll(',', '');
    let currency = 'LKR';
    let hash = md5(merchantId + orderId + amountFormated + currency + hashedSecret).toString().toUpperCase();

    console.log("Generated Hash: " + hash);

    return (
        <div>
            <form method="post" action="https://sandbox.payhere.lk/pay/checkout">
                <input type="hidden" name="merchant_id" value="1230993" />
                <input type="hidden" name="return_url" value="http://localhost/return" />
                <input type="hidden" name="cancel_url" value="http://localhost/return" />
                <input type="hidden" name="notify_url" value="http://localhost/return" />

                <input type="text" name="order_id" value={orderId} />
                <input type="text" name="items" value="Drawing Pad" />
                <input type="text" name="currency" value="LKR" />
                <input type="text" name="amount" value={amount} />
                <input type="text" name="first_name" value="Sahan" />
                <input type="text" name="last_name" value="Lakshitha" />
                <input type="text" name="email" value="money123@gmail.com" />
                <input type="text" name="phone" value="0768318057" />
                <input type="text" name="address" value="Nuwara, Colombo Road" />
                <input type="text" name="city" value="Deniyaya" />
                <input type="hidden" name="country" value="Sri Lanka" />
                <input type="hidden" name="hash" value={hash} />
                <input type="submit" value="Buy Now" className='text-white bg-blue-600 px-4 py-2 rounded' />
            </form>
        </div>
    )
}