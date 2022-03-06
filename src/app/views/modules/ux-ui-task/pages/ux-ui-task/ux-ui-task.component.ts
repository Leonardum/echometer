import { Component, OnInit } from '@angular/core';
import { FormGroup, FormArray, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-ux-ui-task',
  templateUrl: './ux-ui-task.component.html',
  styleUrls: ['./ux-ui-task.component.scss']
})
export class UxUiTaskComponent implements OnInit {

  public edit: any = {
    index: -1,
    fieldName: '',
  };

  public form: FormGroup = new FormGroup({
    tasks: new FormArray([]),
  });

  get tasksFormArray(): FormArray {
    return this.form.get('tasks') as FormArray;
  }

  constructor() { }

  ngOnInit(): void { }

  public editField(fieldName: string, index: number): void {
    this.edit.index = index;
    this.edit.fieldName = fieldName;
  }

  public stopEdit(): void {
    this.edit.index = -1;
    this.edit.fieldName = '';
  }

  public resetFormGroup(): void {
    this.tasksFormArray.at(this.edit.index).patchValue({
      title: '',
      description: '',
      saved: false,
      archived: false,
    });

    this.stopEdit();
  }

  public saveTask(): void {
    this.tasksFormArray.at(this.edit.index).get('saved')?.setValue(true);
    this.stopEdit();
  }

  public archiveTask(index: number): void {
    this.tasksFormArray.at(index).get('archived')?.setValue(true);
  }

  public unArchiveTask(index: number): void {
    this.tasksFormArray.at(index).get('archived')?.setValue(false);
  }

  public addTaskFormControl(task: any = null) {
    (this.form.get('tasks') as FormArray).push(new FormGroup({
      title: new FormControl('', [ Validators.required ]),
      description: new FormControl('', [ Validators.required ]),
      saved: new FormControl(false),
      archived: new FormControl(false),
    }));
  }

}
