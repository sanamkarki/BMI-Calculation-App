import { LightningElement } from "lwc";

export default class BmiCalc extends LightningElement {
  heightElem;
  weightElem;
  bmiValue;
  bmiFixedValue;
  upperBoxElem;
  result;
  submitHandler(event) {
    console.log("this tis the event");
    event.preventDefault();
    this.heightElem = this.template.querySelector(".heightInput");
    console.log("height value", this.heightElem.value);
    // extract weight Input Value
    this.weightElem = this.template.querySelector(".weightInput");
    console.log("weight Input", this.weightElem.value);
    // calculate BMI
    this.bmiValue =
      this.weightElem.value / (this.heightElem.value * this.heightElem.value);
    this.bmiFixedValue = this.bmiValue.toFixed(2);
    console.log("bmi fixed:", this.bmiFixedValue);
    console.log("BMI IS:", this.bmiValue);

    if (this.bmiFixedValue < 18.5) {
      this.result = "Underweight";
    } else if (this.bmiFixedValue > 18.4 && this.bmiFixedValue < 24.9) {
      this.result = "Healthy Weight";
    } else if (this.bmiFixedValue > 24.8 && this.bmiFixedValue < 29.9) {
      this.result = "OverWeight";
    } else {
      this.result = "Obese";
    }
    console.log("The Weight Result:", this.result);
  }
  // working on resubmit button
  resubmitHandler() {
    this.heightElem = "";
    this.weightElem = "";
    this.bmiValue = "";
    this.bmiFixedValue = "";
  }
}
