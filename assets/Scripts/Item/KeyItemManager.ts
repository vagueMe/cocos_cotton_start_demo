import { _decorator } from 'cc';
import { ItemStatusEnum, ItemTypeEnum } from '../Enum';
import { ItemManager } from './ItemManager';
const { ccclass, property } = _decorator;

@ccclass('KeyItemManager')
export class KeyItemManager extends ItemManager {
    status = ItemStatusEnum.Scene;
    type = ItemTypeEnum.Key;

}


