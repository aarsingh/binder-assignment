import { Component, inject, OnDestroy, OnInit } from '@angular/core';
import { Course } from 'src/app/Models/course';
import { CourseService } from 'src/app/Services/course.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-course-detail',
  templateUrl: './course-detail.component.html',
  styleUrls: ['./course-detail.component.css']
})
export class CourseDetailComponent implements OnInit, OnDestroy{
  selectedCourse: Course;
  courseId: number;

  courseService: CourseService = inject(CourseService);
  activeRoute: ActivatedRoute = inject(ActivatedRoute);
  paramMapObs;

  courseDiscount = '';
  courseDiscountPrice = 0;

  ngOnInit(){
    // this.courseId = this.activeRoute.snapshot.params['id'];
    //this.courseId = +this.activeRoute.snapshot.paramMap.get('id');
    // this.activeRoute.params.subscribe((data) => {
    //   this.courseId = +data['id'];
    //   this.selectedCourse = this.courseService.courses.find(course => course.id === this.courseId);
    // })

    this.paramMapObs = this.activeRoute.paramMap.subscribe((data) => {
      this.courseId = +data.get('id');
      this.selectedCourse = this.courseService.courses.find(course => course.id === this.courseId);
    })

    this.getDiscount();
    
  }

  getDiscount() {
    // return this.selectedCourse.reduce((total, course) => {
      let price = (this.selectedCourse.discountPercentage / 100 ) * this.selectedCourse.actualPrice;
       this.courseDiscountPrice = this.selectedCourse.actualPrice - price;
       console.log(this.selectedCourse)
      //  return total + discountedPrice;
    // }, 0);
  }

  ngOnDestroy(){
    this.paramMapObs.unsubscribe();
  }
}
