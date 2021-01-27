import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Param } from '@planout-store/api-interfaces';

@Component({
  selector: 'planout-store-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent {

  public buyCtaColor = this.formBuilder.group({
    isEnabled: [true, [Validators.required]],
    variants: ['primary, accent, warn', [Validators.required]]
  });
  public buyCtaText = this.formBuilder.group({
    isEnabled: [true, [Validators.required]],
    variants: ['BUY NOW, GET IT NOW, ADD TO CART', [Validators.required]]
  });
  public detailCtaColor = this.formBuilder.group({
    isEnabled: [true, [Validators.required]],
    variants: ['primary, accent, warn', [Validators.required]]
  });
  public detailCtaText = this.formBuilder.group({
    isEnabled: [true, [Validators.required]],
    variants: ['VIEW, EXPLORE, DETAILS', [Validators.required]]
  });
  public isReviewsPrioritized = this.formBuilder.group({
    isEnabled: [true, [Validators.required]]
  });
  public productHeroImage = this.formBuilder.group({
    isEnabled: [true, [Validators.required]],
    variants: ['left, bottom, right', [Validators.required]]
  });
  public productThumbnailImage = this.formBuilder.group({
    isEnabled: [true, [Validators.required]],
    variants: ['left, bottom, right', [Validators.required]]
  });

  public constructor(private formBuilder: FormBuilder, private httpClient: HttpClient) { }

  public saveConfig(): void {

    const param: Param[] = [];

    if (this.buyCtaColor.value.isEnabled) param.push({
      param: 'buyCtaColor',
      choices: this.buyCtaColor.value.variants.split(',').map((i: string): string => i.toLowerCase().trim()).map(
        (c: string) => { return { choice: c, weight: 1 }; }
      )
    });

    if (this.buyCtaText.value.isEnabled) param.push({
      param: 'buyCtaText',
      choices: this.buyCtaText.value.variants.split(',').map((i: string): string => i.toUpperCase().trim()).map(
        (c: string) => { return { choice: c, weight: 1 }; }
      )
    });

    if (this.detailCtaColor.value.isEnabled) param.push({
      param: 'detailCtaColor',
      choices: this.detailCtaColor.value.variants.split(',').map((i: string): string => i.toLowerCase().trim()).map(
        (c: string) => { return { choice: c, weight: 1 }; }
      )
    });

    if (this.detailCtaText.value.isEnabled) param.push({
      param: 'detailCtaText',
      choices: this.detailCtaText.value.variants.split(',').map((i: string): string => i.toUpperCase().trim()).map(
        (c: string) => { return { choice: c, weight: 1 }; }
      )
    })

    if (this.isReviewsPrioritized.value.isEnabled) param.push({
      param: 'isReviewsPrioritized',
      choices: [true, false].map(
        (c: boolean | string) => { return { choice: c, weight: 1 }; }
      )
    });

    if (this.productHeroImage.value.isEnabled) param.push({
      param: 'productHeroImage',
      choices: this.productHeroImage.value.variants.split(',').map((i: string): string => i.toLowerCase().trim()).map(
        (c: string) => { return { choice: c, weight: 1 }; }
      )
    });

    if (this.productThumbnailImage.value.isEnabled) param.push({
      param: 'productThumbnailImage',
      choices: this.productThumbnailImage.value.variants.split(',').map((i: string): string => i.toLowerCase().trim()).map(
        (c: string) => { return { choice: c, weight: 1 }; }
      )
    });

    this.httpClient.post('http://localhost:3333/api/configuration/', param).subscribe(() => { alert('Saved.'); });

  }

}
