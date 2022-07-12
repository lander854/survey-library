import { Component, Input, OnInit } from "@angular/core";
import { AngularComponentFactory } from "survey-angular-ui";

@Component({
  selector: "sv-new-item",
  templateUrl: "./itemTemplateComponent.html"
})
export class AngularItemTemplateComponent implements OnInit {
  @Input() item: any;

  ngOnInit() {
    const item = this.item;
    item.iconName = "icon-defaultfile";
    item.hint = item.title + " - Description";
  }
}

AngularComponentFactory.Instance.registerComponent("new-item", AngularItemTemplateComponent);