import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root',
})

export class DataNormalizer {

    public dateNormalize(input: string) {
        return input.slice(0, 4) + "/"  + input.slice(4, 6) + "/" + input.slice(0 + Math.abs(6));
    }

    // remove strings and spaces in sheba number
    public shebaMaskRemover(sheba: string): string {
        return sheba.replace("IR", "")
            .replace(" ", "");
    }

    // remove spaces and strings in amounts
    public amountMaskRemover(amount: string) {
        const str = amount.replace(" ", "")
            .replace(".", "")
            .replace(",", "")
            .replace("ریال", "");
        return str;
    }

    // remove spaces in card number
    public cardMaskRemover(card: string): string {
        return card.replace(" ", "");
    }

    // public static String LatinNumberNormalizer(String amount) {

    //     String text = amount.replace("۱", "1").replace("١", "1")
    //             .replace("۲", "2").replace("٢", "2")
    //             .replace("۳", "3").replace("٣", "3")
    //             .replace("۴", "4").replace("٤", "4")
    //             .replace("۵", "5").replace("٥", "5")
    //             .replace("۶", "6").replace("٦", "6")
    //             .replace("۷", "7").replace("٧", "7")
    //             .replace("۸", "8").replace("٨", "8")
    //             .replace("۹", "9").replace("٩", "9")
    //             .replace("۰", "0").replace("٠", "0");

    //     text = text.replace(",", "")
    //             .replace("/", "")
    //             .replace(".", "")
    //             .replace("،", "")
    //             .replace("؛", "")
    //             .replace(":", "")
    //             .replace("'", "")
    //             .replace("٬", "")
    //             .replace(" ", "");
    //     return text;
    // }

}
