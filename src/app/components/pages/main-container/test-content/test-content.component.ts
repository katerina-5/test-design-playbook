import { Component, Input, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-test-content',
  templateUrl: './test-content.component.html',
  styleUrls: ['./test-content.component.css']
})
export class TestContentComponent {

  @Input() currentModel: any;

  @Output() onSaveGoodComment = new EventEmitter();

  @Output() onSaveBadComment = new EventEmitter();

  @Output() onChoose = new EventEmitter();

  //for button "Continue" (Input from main-cont)
  @Input() countCheckedElements: number;

  @Output() onSend = new EventEmitter();

  moveToNextPage() {
    this.onSend.emit();
  }

  @Output() onNextImg = new EventEmitter();
  @Output() onPrevImg = new EventEmitter();

  isPictureOpened = false;

  saveCommentGood(e) {
    this.currentModel.good_comment = e.target.value;
    this.onSaveGoodComment.emit(this.currentModel); 
  }

  saveCommentBad(e) {
    this.currentModel.bad_comment = e.target.value;
    this.onSaveBadComment.emit(this.currentModel); 
  }

  //delete
  chooseImage(e) {
    console.log(e.checked);
    this.currentModel.mark = e.checked;
    this.onChoose.emit(this.currentModel);
    console.log('IMAGE CHOOSEN');
  }

  changeScreenMode() {
    this.isPictureOpened = !this.isPictureOpened
  }

  openPrevImage() {
    this.onPrevImg.emit();
  }

  openNextImage() {
    this.onNextImg.emit();
  }

}