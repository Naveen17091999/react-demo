const Cart=()=>{
    let x = 0;
    const handle=()=>{
        x+=1;
    }
    return(
        <div className="cart">
            Cart = {x}
            <button onClick={handle}>click</button>
        </div>
    )
}

export default Cart;