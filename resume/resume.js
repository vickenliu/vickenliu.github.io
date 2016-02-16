var bio={
	"mobile":"020 4018 5543",
	"email":"vicken.liu@gmail.com",
	"location":"Wellington-New Zealand",
	"skills":["HTML","CSS","JAVASCRIPT","ANGULAR.JS","RAILS"]
},
projects={
	"works":[{
		"name":"Tongle Health Consulting",
		"year":"2015",
		"link":"http://www.tlgay.com",
		"info":"Transfer an old style plain page to a modern, clean-designed website.Fully functinal, cross-browsers,and mobile friendly."
	},{
		"name":"Personal Portfolio V1",
		"year":"2015",
		"link":"http://www.vickenliu.com/V1",
		"info":"My first personal website,was playing around while I was studying,Try to demonstrate the skills."
	},{
		"name":"Personal Portfolio V2",
		"year":"2015",
		"link":"http://www.vickenliu.com",
		"info":"Try to squeeze all the information on a single page. Started from scratch,Try to impliment more new stuff within the code."
	},{
		"name":"Personal Portfolio Test",
		"year":"2015",
		"link":"http://www.vickenliu.com/test",
		"info":"impliment a new design,and put in new technique into use."
	}]
},
education={
	"records":[{
		"school":"China Three Gorges University",
		"years":"2005-2009",
		"major":"Electrical Engineering & Automation"
	},{
		"school":"Code School",
		"years":"2015",
		"major":"Front-end Development"
	},{
		"school":"Dev Academy",
		"years":"2016",
		"major":"Web Development"
	}]
},
work={
	"works":[{
		"company":"Shanghai Longchuang System Integrator",
		"year":"2010-2013",
		"position":"Onsite Engineer"
	},{
		"company":"Envictus NZ",
		"year":"2013-2015",
		"position":"PLC technician"
	}]
}

document.addEventListener('DOMContentLoaded', function() {
  	init();
});

function init(){
	displayBio();
	displayEducation();
	displayProject();
	displayWork();
}
function displayBio(){
	var ul=document.getElementById('bio').querySelector('ul');
	for(item in bio){
		var newElement=document.createElement('li');
		if(item==='email'){
			newElement.innerHTML="<strong>"+item.toUpperCase()+":</strong> <a href='mailto:"+bio[item]+"'>"+bio[item]+"</a>";
		}else if(item==="mobile"){
			newElement.innerHTML="<strong>"+item.toUpperCase()+":</strong> <a href='tel:"+bio[item]+"'>"+bio[item]+"</a>";
		}else{
			newElement.innerHTML="<strong>"+item.toUpperCase()+":</strong> "+bio[item];
		}
		
		ul.appendChild(newElement);
	}
}
function displayEducation(){
	var divEdu=document.getElementById('education'),head=document.createElement('h2');
	head.innerHTML='EDUCATION';
	divEdu.appendChild(head);
	for(i in education.records){
		var newChild='<h3><strong>MAJOR: </strong>'+education.records[i].major+'</h3>'+
		'<h3><strong>YEAR: </strong>'+education.records[i].years+'</h3>'+
		'<h3><strong>SCHOOL: </strong>'+education.records[i].school+'</h3>',
		newElement=document.createElement('div');
		newElement.className+='educationRecord group';
		newElement.innerHTML=newChild;
		divEdu.appendChild(newElement);
	}
}
function displayProject(){
	var divEdu=document.getElementById('projects'),head=document.createElement('h2');
	head.innerHTML='PROJECTS';
	divEdu.appendChild(head);
	for(i in projects.works){
		var newChild='<h3><strong>PROJECT NAME: </strong>'+projects.works[i]['name']+'</h3>'+
		'<h3><strong>YEAR: </strong>'+projects.works[i].year+'</h3>'+
		'<h3><strong>LINK: </strong>'+"<a href="+projects.works[i]['link']+">VISIT LIVE SITE</a>"+'</h3>'+
		'<p><strong>BRIEF INTRO: </strong>'+projects.works[i]['info']+'</p>',
		newElement=document.createElement('div');
		newElement.className+='project group';
		newElement.innerHTML=newChild;
		divEdu.appendChild(newElement);
	}
}
function displayWork(){
	var divEdu=document.getElementById('work'),head=document.createElement('h2');
	head.innerHTML='WORK EXPIERENCE';
	divEdu.appendChild(head);
	for(i in work.works){
		var newChild='<h3><strong>EMPLOYER: </strong>'+work.works[i].company+'</h3>'+
		'<h3><strong>YEAR: </strong>'+work.works[i].year+'</h3>'+
		'<h3><strong>JOB: </strong>'+work.works[i].position+'</h3>',
		newElement=document.createElement('div');
		newElement.className+='workhistory group';
		newElement.innerHTML=newChild;
		divEdu.appendChild(newElement);
	}
}