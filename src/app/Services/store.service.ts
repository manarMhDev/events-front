import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { FirstTitleClient, GetTitleFirstDto, PagintationRequest } from 'src/shared/api/service-proxies';

@Injectable({
  providedIn: 'root'
})
export class StoreService {
private subjectTitles1 = new BehaviorSubject<GetTitleFirstDto[]>([]);
Titles1$ : Observable<GetTitleFirstDto[]> = this.subjectTitles1.asObservable();

pagination  = new PagintationRequest();

  constructor(private firstTitleService : FirstTitleClient,
    private http: HttpClient) {
    this.pagination.init({
      pageNumber : 1,
      pageSize: 1
  });
   }
  loadFirstTile(){
      this.firstTitleService.getAll(1,10).subscribe((res)=>{
          this.subjectTitles1.next(res.data.data);
        });
       // const url = 'https://localhost:7268/first-title/get-all';
 
        // let queryParams = new HttpParams();
        // queryParams = queryParams.append("pageNumber",1);
        // queryParams = queryParams.append("pageSize",1);
        // queryParams = queryParams.append("pageNumber",1);
     
        //  this.http.get(url,{params:queryParams}).subscribe(()=>{});
  }
}
