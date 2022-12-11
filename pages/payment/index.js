import {useCallback, useEffect, useState} from "react";
import Link from "next/link";

const Payment = (props) => {

    const [token, setToken] = useState();

    const fetchData = useCallback(async () => {
        const firstResponse = await fetch("https://accept.paymob.com/api/auth/tokens", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                api_key: 'ZXlKaGJHY2lPaUpJVXpVeE1pSXNJblI1Y0NJNklrcFhWQ0o5LmV5SmpiR0Z6Y3lJNklrMWxjbU5vWVc1MElpd2libUZ0WlNJNklqRTJOekExTnpJNE9EY3VOalUxTURjeElpd2ljSEp2Wm1sc1pWOXdheUk2TmpRM01EUXhmUS5SMVpOVktmaTFsbU5JalNHdzVYcm04M1dUc2NNLXpraVV6VVBpNzloWVpfNjBqaXBtTWJ2a0ctNkFENUlkaHZITk12UEJjTzdVUm9YazNqZGRaT1JqZw=='
            })
        });
        const firstJson = await firstResponse.json();

        console.log(firstJson.token)
        const authToken = firstJson.token;

        const secondResponse = await fetch("https://accept.paymob.com/api/ecommerce/orders", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                "auth_token": authToken,
                "delivery_needed": "false",
                "amount_cents": "100",
                "currency": "EGP",
                "items": [
                    {
                        "name": "Itqan subscription",
                        "amount_cents": "100",
                        "description": "اشتراك في معهد اتقان لتعلم البرمجة",
                        "quantity": "1"
                    },
                ],
            })
        });

        const secondJson = await secondResponse.json();

        const orderId = secondJson.id;

        const thirdResponse = await fetch("https://accept.paymob.com/api/acceptance/payment_keys", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                "auth_token": authToken,
                "amount_cents": "100",
                "expiration": 3600,
                "order_id": orderId,
                "billing_data": {
                    "apartment": "NA",
                    "email": "claudette09@exa.com",
                    "floor": "NA",
                    "first_name": "Clifford",
                    "street": "Ethan Land",
                    "building": "NA",
                    "phone_number": "+2(0)1019867911",
                    "shipping_method": "NA",
                    "postal_code": "NA",
                    "city": "NA",
                    "country": "NA",
                    "last_name": "Nicolas",
                    "state": "NA"
                },
                "currency": "EGP",
                "integration_id": 3160207
            })
        });

        const thirdJson = await thirdResponse.json();

        const payment_key_token = thirdJson.token;
        setToken(payment_key_token);
    }, [token]);

    useEffect(() => {
        fetchData().catch(console.error)
    }, [fetchData]);

    return <div>
        <Link width={1000} height={700}
              href={`https://accept.paymob.com/api/acceptance/iframes/708308?payment_token=${token}`}>
            hasd
        </Link>
    </div>
};

export default Payment;