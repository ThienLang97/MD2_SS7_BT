import React, { useState } from 'react'
// import './Spending.css'
import './BT2.css';

export default function Spending() {
    const [totalMoney, setTotalMoney] = useState(12000000000)
    const [cartItems, setCartItems] = useState([]);
    const [products, setProducts] = useState([
        {
            id: 1,
            title: "Cola",
            price: 6000,
            count: 0,
            image:
                "https://ayb.akinoncdn.com/products/2019/01/18/3544/5aa1ee14-1c83-4213-a62b-773c4785e187_size780x780_quality60_cropCenter.jpg",
        },
        {
            id: 3,
            title: "Sprite",
            price: 5600,
            count: 0,
            image: "https://images.ofix.com/product-image/s99509_2.jpg",
        },
        {
            id: 4,
            title: "Ayran",
            price: 80000,
            count: 0,
            image:
                "https://konyamevlana.com/florya/wp-content/uploads/2020/12/sutas-ayran-285ml.jpg",
        },
        {
            id: 5,
            title: "Salgam",
            price: 400000,
            count: 0,
            image: "http://esenlik.com.tr//images/prod/5704.jpg",
        }

    ]);
    const [counts, setCounts] = useState(Array(products.length).fill(0));
    //
    const increaseCount = (index, price) => {
        const newCounts = [...counts];
        newCounts[index] += 1;
        setCounts(newCounts);
        setTotalMoney(totalMoney - price);
        //
        const newCartItem = {
            image: products[index].image,
            product: products[index],
            price: products[index].price,
            quantity: newCounts[index]
        };
        const existingItemIndex = cartItems.findIndex(item => item.product.id === newCartItem.product.id);

        if (existingItemIndex !== -1) {
            const updatedCartItems = [...cartItems];
            updatedCartItems[existingItemIndex].quantity = newCartItem.quantity;
            setCartItems(updatedCartItems);
        } else {
            setCartItems([...cartItems, newCartItem]);
        }

    };
    console.log(cartItems, "123123");

    const decreaseCount = (index, price) => {
        let zzz
        const updatedCartItems1 = cartItems.map((item) => {
            zzz = item.quantity
            if (item.quantity > 0) {
                return {
                    ...item,
                    quantity: item.quantity - 1,
                };

            }
            return item;

        });
        const newCounts = [...counts];
        newCounts[index] -= 1;
        setCounts(newCounts);
        setCartItems(updatedCartItems1);
        setTotalMoney(totalMoney + price);

    };
    const clearCart = (index) => {
        setCartItems([]);
        const newCounts = [...counts];
        newCounts[index] = 0;
        setCounts(newCounts);
    }
    return (
        <>
        <div className='body'>
            <div className='header' style={{ position: 'sticky', top: 0 }}>
                <h2>To Spend <span>{totalMoney}$ </span> You have a lot of money</h2>
            </div>
            <div className='productsList'>
                {products.map((product, index) => (
                    <div className='product' key={product.id}>
                        <img src={product.image} alt={product.title} />
                        <p>Tiền: {product.price}</p>
                        <button onClick={() => increaseCount(index, product.price)}>Thêm</button>
                        <p>Số lượng: {counts[index]}</p>
                        <button onClick={() => decreaseCount(index, product.price)}>Bỏ</button>
                    </div>
                ))}
            </div>
            <div className='cart'>
                <h3>Giỏ hàng</h3>
                <table>
                    <thead>
                        <tr>
                            <th>Tên sản phẩm</th>
                            <th>Số lượng</th>
                            <th>Giá</th>
                            <th>Tổng</th>
                        </tr>
                    </thead>
                    <tbody>
                        {cartItems.map((item, index) => (
                            <tr key={index}>
                                <td>
                                    <img src={item.image} alt={item.product.title} />
                                    <p>{item.product.title}</p>
                                </td>
                                <td>{item.quantity}</td>
                                <td>{item.price}</td>
                                <td>{item.quantity * item.price}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                <button onClick={clearCart}>Xóa hết mặt hàng</button>
            </div>
            </div>
        </>
    )
}
