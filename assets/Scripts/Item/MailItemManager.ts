import { _decorator, Component, Node } from 'cc';
import { ItemStatusEnum, ItemTypeEnum } from '../Enum';
import { ItemManager } from './ItemManager';
const { ccclass, property } = _decorator;

@ccclass('MailItemManager')
export class MailItemManager extends ItemManager {
    label="邮票";
    type=ItemTypeEnum.Mail;
}


