import { _decorator } from 'cc';
import { ItemStatusEnum, ItemTypeEnum } from '../Enum';
import { ItemManager } from './ItemManager';
const { ccclass, property } = _decorator;

@ccclass('KeyItemManager')
export class KeyItemManager extends ItemManager {
    label = "信箱钥匙";
    type = ItemTypeEnum.Key;

}


