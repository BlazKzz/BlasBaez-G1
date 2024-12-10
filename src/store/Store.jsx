import { create } from 'zustand';
import { subscribeWithSelector } from 'zustand/middleware';

const useStore = create(
    subscribeWithSelector((set, get) => ({
        cart: [],
        totalPrice: 0, 
        addToCart: (product) => set((state) => {
            const existingItem = state.cart.find((item) => item.id === product.id);
            let newCart;
            if (existingItem) {
                newCart = state.cart.map((item) =>
                    item.id === product.id
                        ? { ...item, quantity: item.quantity + 1 }
                        : item
                );
            } else {
                newCart = [...state.cart, { ...product, quantity: 1 }];
            }
            return { cart: newCart };
        }),
        removeFromCart: (id) => set((state) => ({
            cart: state.cart.filter((item) => item.id !== id),
        })),
        increaseQuantity: (id) => set((state) => ({
            cart: state.cart.map((item) =>
                item.id === id
                    ? { ...item, quantity: item.quantity + 1 }
                    : item
            ),
        })),
        decreaseQuantity: (id) => set((state) => ({
            cart: state.cart.map((item) =>
                item.id === id && item.quantity > 1
                    ? { ...item, quantity: item.quantity - 1 }
                    : item
            ),
        })),
    }))
);
useStore.subscribe(
    (state) => state.cart,
    (cart) => {
        const totalPrice = cart.reduce((total, item) => total + item.price * item.quantity, 0);
        useStore.setState({ totalPrice });
    }
);

export default useStore;
