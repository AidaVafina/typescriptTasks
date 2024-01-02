// This enables module augmentation mode.
import 'date-wizard';

declare module 'date-wizard' {
    interface DateDetails {
        year: number;
        month: number;
        date: number;
        hours: number;
        minutes: number;
        seconds: number;
    }

    function pad(level: number): string;

    export function dateDetails(date: Date): DateDetails;
    export function utcDateDetails(date: Date): DateDetails;
}