import { observable, action } from 'mobx'
import { Item } from './ItemStore'

class Inventory {
  @observable inventory = []

  getItemFromInventory = (name) => this.inventory.find(i => i.name === name)

  @action addItem = (name, price = 0, quantity = 1) => {
    const itemInInventory = this.getItemFromInventory(name)
    if (itemInInventory) {
      itemInInventory.quantity++
    } else {
      this.inventory.push(new Item(name, price, quantity))
    }
  }

  @action buyItem = (name) => {
    const itemInInventory = this.getItemFromInventory(name)
    if (itemInInventory.quantity === 1) {
      this.inventory.splice(this.inventory.indexOf(itemInInventory), 1)
    } else {
      itemInInventory.quantity--
    }
  }

  @action changePrice = (name, price) => {
    this.getItemFromInventory(name).price = price
  }
}

export const inventory = new Inventory()