 const addShopCard = (payload) =>({
    type: "ADD_SHOP_CARD",
    payload,
});

const popShopCart = (payload) =>({
    type: "POP_SHOP_CARD",
    payload,
});

const clearShopCard = (payload) =>({
    type: "CLEAR_SHOP_CARD",
    payload,
});

const editShopCard = (payload) =>({
    type: "EDIT_SHOP_CARD",
    payload,
});



export {addShopCard, popShopCart, clearShopCard, editShopCard};