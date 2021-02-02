import React from 'react'
import {useSelector, useDispatch} from 'react-redux';

export default function ShoppingCart() {

    const cart = useSelector((state) =>state.cart.filter(item =>{
        return item.qty > 0;
    }));
    
    const dispatch = useDispatch()
    console.log(cart)

    const totalQty  = useSelector(state => 
        state.cart.reduce((acc, cur)=>{
        return acc + cur.qty;
    }, 0));

    const Qtde = function(totalQty){
        if (totalQty<1){
            return "Seu carrinho está vazio, continue comprando!"
        }else{
            return totalQty
        }
    }

    const totalPrice = useSelector(state=>
        state.cart.reduce((acc, cur)=>{
        return acc + cur.price * cur.qty;
        },0));

    return (
        <div style={panelStyle}>
            <h2>Seu carrinho</h2>
            <button 
            onClick={()=> dispatch({type: "CLEAR_CART"})}
            >
                Esvaziar carrinho
            </button>
            <p>Quantidade de produtos: {Qtde(totalQty)}</p>

        <table>
            <tbody>
            {cart.map((item)=>(
            <tr key = {item.id}>
                <td style={{ width: '170px' }} >{item.name}</td>
                <td style={{ width: '90px' }} >R$ {item.price.toFixed(2) * item.qty}</td>
                <td style={{ width: '80px', textAlign: 'center' }} >
                    <div class="btn-group" role="group">
                        <button
                        type="button" class="btn"
                        onClick={()=> dispatch({type: "REMOVE_FROM_CART", id: item.id})}
                        >-</button>

                        <p class="lead">{item.qty}</p>
                        
                        
                        <button
                        type="button" class="btn"
                        onClick={()=> dispatch({type: "ADD_TO_CART", id: item.id})}
                        >+</button>
                    </div>
                </td>
            </tr>
            ))}
        </tbody></table>


        <h4>Preço total: R$ {totalPrice}</h4>

            
        </div>
    )
}
const panelStyle = {
    height: "100vh",
    width: "50vw",
    padding: '10px',
    background: "lightgray"
};
