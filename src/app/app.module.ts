import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'; 
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchComponent } from './search/search.component';
import { SearchService } from './search.service';
import { SaveRecipeService } from './save-recipe.service';
import { RecipeComponent } from './recipe/recipe.component';
import { SaveRecipeComponent } from './save-recipe/save-recipe.component';
import { SearchFormComponent } from './search-form/search-form.component';
import { NavComponent } from './nav/nav.component';

const appRoutes: Routes = [
  {path: '', component: SearchFormComponent},
  {path: 'recipe/:id', component: RecipeComponent},
  {path: 'save-recipe', component: SaveRecipeComponent},
  {path: 'search/:searchTerm', component: SearchComponent},
];

@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    RecipeComponent,
    SaveRecipeComponent,
    SearchFormComponent,
    NavComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)

  ],

  providers: [SearchService],
  bootstrap: [AppComponent]
})
export class AppModule { }
