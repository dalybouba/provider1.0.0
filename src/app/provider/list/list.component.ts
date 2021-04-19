import { Component, OnInit } from '@angular/core';
import { Provider } from 'src/app/shared/model/provider.model';
import { ProviderService } from 'src/app/shared/service/provider.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  data : Provider;
  constructor(
    private providerService: ProviderService
  ) { }

  ngOnInit(): void {
    this.providerService.getProvider().subscribe(
      res => {
        console.log('test', res)
        this.data = res['providers'];
      }
    )

  }

}
