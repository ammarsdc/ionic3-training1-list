import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {DetailPage} from '../detail/detail'
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

persons = [
{
	name:"Najib Razak",
	email:"najib@malaysia.com",
	img_url:"https://pbs.twimg.com/profile_images/526212687101820929/wmAKmxjb.jpeg",
	state:"Pahang",
	homepage:"http://www.google.com"
},
{
	name:"Abdullah Badawi",
	email:"abdullah@malaysia.com",
	img_url:"assets/imgs/abdullah.jpg",
	state:"Pulau Pinang",
	homepage:"http://www.google.com"
},
{
	name:"Mahathir Mohamad",
	email:"mahathir@malaysia.com",
	img_url:"https://www.thefamouspeople.com/profiles/images/mahathir-mohamad-1.jpg",
	state:"Kedah",
	homepage:"http://www.google.com"
}


]
  constructor(public navCtrl: NavController) {

  }

  openPage(person){
  	this.navCtrl.push(DetailPage, 
  		{person:person})
  }

}
