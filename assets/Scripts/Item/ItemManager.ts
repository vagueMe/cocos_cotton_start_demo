import {_decorator, Component, Node, SpriteFrame} from 'cc';
import {ItemStatusEnum, ItemTypeEnum} from '../Enum';
import DataManager from "../Runtime/DataManager";

const {ccclass, property} = _decorator;

@ccclass('ItemManager')
export class ItemManager extends Component {

    label = "物品";
    type: ItemTypeEnum;
    @property(SpriteFrame)
    sceneSf: SpriteFrame = null;
    @property(SpriteFrame)
    inventorySf: SpriteFrame = null;

    start() {
        this.node.on(Node.EventType.TOUCH_END, this.touchEnd, this);
    }

    onDestroy(){
        this.node.on(Node.EventType.TOUCH_END, this.touchEnd);
    }

    touchEnd() {
        const iItem = DataManager.Instance.items.find(i => i.type === this.type);
        if (!iItem) {
            return;
        }

        if (iItem.status === ItemStatusEnum.Scene) {
            iItem.status = ItemStatusEnum.Inventory;
            DataManager.Instance.items = [...DataManager.Instance.items];
        }
    }
}


