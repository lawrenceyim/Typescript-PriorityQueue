export function AreEqual<T>(actual: T, expected: T) {
    if (actual != expected) {
        throw new Error(`Expected value to be ${expected}. Actual value was ${actual}.`)
    }
}

export function IsTrue(bool: boolean) {
    if (bool == false) {
        throw new Error(`Expected value to be true.`)
    }
}

export function IsFalse(bool: boolean) {
    if (bool == true) {
        throw new Error(`Expected value to be false.`)
    }
}