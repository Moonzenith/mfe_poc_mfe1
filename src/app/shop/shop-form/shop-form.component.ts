import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-shop-form',
  templateUrl: './shop-form.component.html',
  styleUrls: ['./shop-form.component.css']
})

export class ShopFormComponent {

  @Input() title: string;
  @Input() form: any = {};
  disableShopInfo: any;

  constructor() {
    this.title = 'Shop Form Preview';

    window.addEventListener('addOriginData', (originEventData: any) => {
      this.title = originEventData.detail.title ? originEventData.detail.title : this.title;
      this.disableShopInfo = originEventData.detail.disableShopInfo
      this.form = originEventData.detail.form ? originEventData.detail.form : {};
    })

    window.dispatchEvent(new CustomEvent('ready', {
      detail: {
        component: 'shop-form',
      }
    }))
  }

  submit(event: Event) {
    event.preventDefault()
    console.log('Inside submit event!')
  }
}
