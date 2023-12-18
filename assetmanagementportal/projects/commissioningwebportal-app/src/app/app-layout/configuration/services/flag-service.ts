import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";

@Injectable({ providedIn: 'root' })
export class flagService {
    flagSubject$ = new BehaviorSubject("NO FLAG")
    flag$: Observable<string> = this.flagSubject$.asObservable();
    updateNumero(newFlag: string) {
      this.flagSubject$.next(newFlag)
    }
  }