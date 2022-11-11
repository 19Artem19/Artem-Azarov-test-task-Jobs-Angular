import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./job-board/job-board.module').then((m) => m.JobBoardModule),
  },
  {
    path: 'details/:id',
    loadChildren: () =>
      import('./job-details/job-details.module').then(
        (m) => m.JobDetailsModule
      ),
  },
  { path: '**', redirectTo: '/' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

