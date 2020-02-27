import {Routes} from '@angular/router'
import { CourseComponent } from './course/course.component'
import { WelcomeComponent } from './welcome/welcome.component'
import { PersonalComponent } from './personaldetails/personaldetails.component'

export const myRoute:Routes=[
    {path:'',component:WelcomeComponent},
    {path:'course',component:CourseComponent},
    {path:'personal',component:PersonalComponent}
]