class BankAccount {
    private myAmount: number = 0

    get getAmount(): number {
        return this.myAmount
    }

    set setAmount(amount: number) {
        this.myAmount = amount
    }
}

const myBankAccount = new BankAccount()

console.log(`my amount: ${myBankAccount.getAmount}`)

myBankAccount.setAmount = 1000000

console.log(`my amount: ${myBankAccount.getAmount}`)