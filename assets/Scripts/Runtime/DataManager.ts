import {ItemStatusEnum, ItemTypeEnum} from "../Enum";
import Singleton from "../Base/Singleton";

interface IItem {
    status: ItemStatusEnum;
    type: ItemTypeEnum;
}

export default class DataManager extends Singleton{

    static get Instance(){
        return super.GetInstance<DataManager>();
    }

    private _items:Array<IItem> = [
        {type: ItemTypeEnum.Key,status:ItemStatusEnum.Scene},
        {type: ItemTypeEnum.Mail,status:ItemStatusEnum.Scene}
    ]



    get items(): Array<IItem> {
        return this._items;
    }

    set items(value: Array<IItem>) {
        this._items = value;

        // 增加触发渲染
    }
}


