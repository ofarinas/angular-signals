import {Component, ElementRef, output, ViewChild} from '@angular/core';

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [],
  templateUrl: './search.component.html',
  styleUrl: './search.component.css'
})
export class SearchComponent {
  searchChange = output<string>()

  @ViewChild('nameInput') nameInput: ElementRef | undefined;

  onSearchChange(searchValue: Event): void {
    if (!this.nameInput) return
    this.searchChange.emit(this.nameInput.nativeElement.value)
  }
}
