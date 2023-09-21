function n(param) {
    const obj = {
        r: param,
        e(func, ...extraParams) {
            this.r = func(this.r, ...extraParams)
            return this
        }
    }
    return obj
}



// Example usage
function addInterest(principal, rate) {
    return principal * (1 + rate)
}

const PRINCIPAL_VALUE = 5000

const totalsum = n(PRINCIPAL_VALUE).e(addInterest, 0.03).e(addInterest, 0.04).e(addInterest, 0.07).r
// totalsum = 5730.92x