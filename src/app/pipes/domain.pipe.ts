import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'domain',
})
export class DomainPipe implements PipeTransform {
    transform(url: string): string {
        try {
            return new URL(url).hostname;
        } catch {
            return url;
        }
    }
}
