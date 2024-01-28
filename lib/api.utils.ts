export type ResponseData = {
    type: string,
    status: number,
    message: string,
    length?: number,
    data: any,
}

export function convertBigIntsToNumbers(obj: any): any {

    const result: any = {};

    for (const key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key)) {
            result[key] = typeof obj[key] === 'bigint' ? Number(obj[key]) : obj[key];
        }
    }

    return result;
}

export function getRandomColor() {
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
};