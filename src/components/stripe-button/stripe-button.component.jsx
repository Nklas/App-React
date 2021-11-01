import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({price}) => {
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_51JpS9DLW5KHCoPq6QvrWewKPyd2HgrR5NeRnmKto9NmbUPOAnR9803vnoJ7LnDCsQhzU9AcEqg2USb4UU5J9iS0k00Qr3SUxmQ';

    const onToken = token => {
        console.log(token);
        alert('Payment Successful');
    };

    return (
        <StripeCheckout
            label='Pay Now'
            name='CRWN Clothing Ltd.'
            billingAddress
            shippingAdress
            image='https://stripe.com/img/documentation/checkout/marketplace.png'
            description={`Your total is $${price}`}
            amount={priceForStripe}
            panelLabel='Pay Now'
            token={onToken}
            stripeKey={publishableKey}
        />
    )
};

export default StripeCheckoutButton;