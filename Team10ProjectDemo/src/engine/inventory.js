/*
 * File: inventory.js
 *
 * The template for a scene.
 * 
 */
"use strict";
import engine from "./index.js";

class Inventory {
    constructor(inventoryBackground) {
        this.kBg = inventoryBackground;
        this.items = [];
        this.itemIndex = 0;
        this.itemsCheck = [];
        this.itemPositionAddition = 0;
        this.columns = 4; // Max number of objects in inventory
        
        this.mCurrentItemObject = null;

        // Variables for the inventory background
        this.mInventoryBackground = new engine.TextureRenderable(this.kBg);
        this.x = 10;
        this.y = 10;
        this.w = 70;
        this.h = 70;

        // Object position in inventory
        this.objectX;
        this.objectY;
    }

    addItem(id) {
        if (this.items.length == this.columns) {
            return false;
        }
        this.items.push(id);
        this.itemsCheck.push(0);
        this.items[this.itemIndex].getXform().setPosition((this.x - (this.w / 2)) + 5 + this.itemPositionAddition, this.y);
        this.itemIndex++;
        this.itemPositionAddition = this.itemPositionAddition + (this.w / this.columns);
        return true;
    }

    removeItem(id) {
        for (let i = 0; i < this.items.length; i++) {
            if (this.items[i] == id) {
                this.items.splice(i, 1);
            }
            return;
        }
    }

    getItems() {
        return this.items;
    }

    getInventorySize() {
        return this.items.length;
    }

    getInventoryPositionX() {
        return this.x;
    }

    getInventoryPositionY() {
        return this.y;
    }
    
    getInventorySizeW() {
        return this.w;
    }

    getInventorySizeH() {
        return this.h;
    }

    setObjectPosition(x, y) {
        this.objectX = x;
        this.objectY = y;
    }

    setInventoryPosition(x, y) {
        this.x = x;
        this.y = y;
    }

    setInventorySize(w, h) {
        this.w = w;
        this.h = h;
    }

    draw(camera) {
        // draw background
        this.mInventoryBackground.getXform().setSize(this.w, this.h);
        this.mInventoryBackground.getXform().setPosition(this.x, this.y);
        this.mInventoryBackground.draw(camera);
    }

}

export default Inventory;