import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NxWelcome } from './nx-welcome';
import { Textbox } from '@dragarwal-doodles/textbox'; // <-- Add this line

@Component({
  imports: [NxWelcome, RouterModule, Textbox],
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  protected title = 'dragarwal-doodles';
}
