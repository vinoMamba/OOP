export interface Cash {
    acceptCash(money: number): number
}

export type  CashType = 'normal' | 'eightfold'

export type CashMap = { [key in CashType]: Cash }
