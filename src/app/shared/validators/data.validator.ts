import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root',
})

export class DataValidator {

    //   mobile validator
    public mobileValid(mobile: string): boolean {
        const pattern = /^\d+$/;
        const isNumber = pattern.test(mobile);
        return mobile.length == 11 && mobile.startsWith("09") && isNumber;
    }

    //   sheba number validator
    public shebaValid(sheba: string): boolean {
        return sheba.length > 10 && sheba.length <= 33;
    }

    //  card number validator
    public cardValid(cardNumber: string): boolean {
        return cardNumber.length == 19;
    }

    public birthDateValid(birthDate: string) {
        const pattern = /^[1-4]\d{3}\/((0[1-6]\/((3[0-1])|([1-2][0-9])|(0[1-9])))|((1[0-2]|(0[7-9]))\/(30|([1-2][0-9])|(0[1-9]))))$/;
        return pattern.test(birthDate);
    }

    //    national code number validator
    public nationalCodevalidate(nationalCode: string): boolean {

        const identicalDigits = [
            "0000000000", "1111111111",
            "2222222222", "3333333333",
            "4444444444", "5555555555",
            "6666666666", "7777777777",
            "8888888888", "9999999999"
        ];

        if (!nationalCode.trim().length) {
            return false;
        } else if (nationalCode.length != 10) {
            return false;
        } else if (identicalDigits.includes(nationalCode)) {
            return false;
        } else {
            let sum = 0;
            for (let i = 0; i < 9; i++) {
                sum += Number(nationalCode.charAt(i)) * (10 - i);
            }
            let lastDigit;
            let divideRemaining = sum % 11;
            if (divideRemaining < 2) {
                lastDigit = divideRemaining;
            } else {
                lastDigit = 11 - (divideRemaining);
            }
            return Number(nationalCode.charAt(9)) == lastDigit;
        }
    }
}
