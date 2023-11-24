import { Component } from '@angular/core';
import { StoreService } from 'src/app/Services/store.service';
import { AppLanguageType } from 'src/shared/AppEnums';
import { CreateFirstTitleDto, FirstTitleClient, GetTitleFirstDto, Language } from 'src/shared/api/service-proxies';
import {MatDialog, MatDialogModule,  MAT_DIALOG_DATA,} from '@angular/material/dialog';
import { Title1FormComponent } from 'src/app/Components/title1-form/title1-form.component';
import { ConfirmAlertComponent } from 'src/app/Components/confirm-alert/confirm-alert.component';
@Component({
  selector: 'app-titles2',
  templateUrl: './titles2.component.html',
  styleUrls: ['./titles2.component.scss']
})
export class Titles2Component {
  firstTitles : GetTitleFirstDto[] = [];
  _languageType = Language;
  _appLanguageType = AppLanguageType.getName;
  
  constructor(private store : StoreService,
    private f: FirstTitleClient,
    private dialog: MatDialog){

  }
  ngOnInit(){
    this.store.Titles1$.subscribe((res)=>{
      this.firstTitles = res;
     });
  }
  openAddTitleDialog(id?:number) {
    let title = 'إضافة لقب 1';
    if(id!)
    title = 'تعديل لقب 1';
    const dialogRef = this.dialog.open(Title1FormComponent,{
      disableClose: true,
      width:'50%',
      data :{
        title:title,
        id : id
      }
    });
    dialogRef.afterClosed().subscribe(result => {
      if(result != null && result.event == true){
        this.store.loadFirstTile();
      }
    });
  }
  alertDelete(id:number){
    const dialogRef = this.dialog.open(ConfirmAlertComponent,{
      width:'30%'
    });
    dialogRef.afterClosed().subscribe(result => {
      if(result != null && result.event == true){
       this.f.deleteOne(id).subscribe((res=>{
        this.store.loadFirstTile();
}))
      }
    });
  }
}
