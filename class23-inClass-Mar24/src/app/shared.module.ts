import { NgModule } from "@angular/core";
import { HeaderComponent } from "./header/header.component";
import { AppComponent } from "./app.component";
import { FormsModule } from "@angular/forms";

@NgModule({
  declarations: [HeaderComponent],
  bootstrap: [AppComponent],
  imports: [FormsModule],
  exports: [HeaderComponent]

})

export class SharedModule {}
