import { Component } from "@angular/core";
import { JOURNEY_TEXTS } from "../../constants/constant";

@Component({
  selector: 'my-journey',
  templateUrl: './journey.component.html',
  styleUrls: ['./journey.component.scss']
})

export class JourneyComponent {
  journeyTexts:any = JOURNEY_TEXTS;
}