import { atom } from "recoil";

const userState = atom({
  key: 'UserList',
  default: {}
})

const equippedState = atom({
    key: 'EquippedItems',
    default: []
})

const itemsState = atom({
    key: 'ItemList',
    default: []
})

export {
    userState,
    equippedState,
    itemsState
}