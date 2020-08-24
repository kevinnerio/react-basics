const career = {
     title: 'Web Developer', 
     years: '3.5', 
     education: {
        university: 'California State University, Long Beach',
        major: 'Business Administration', 
        city: 'Long Beach', 
        graduationDate: '2018', 
     }, 
     experience: {
     	PHP: '3', 
     	REACT: '1',
     	XML: '1.5',
     	HTML: '4',
     	CSS: '4', 
     }, 	
	}

function school_info(career){
  const title = career.title; 
  const careerText = 'Career: '+ title;
  //get education information
  const university= career.education.university;
  const major = career.education.major; 
  const universityText = 'Attended: '+university+', Major:'+major; 
  //return the final output    
  return (
  ReactDOM.render(careerText, document.getElementById('career_title'))
  ), 
  (
  ReactDOM.render(universityText, document.getElementById('career_education'))
  )
}


function get_experience(data){
  const experience = career.experience; 
  const phpXp = experience.PHP; 
  const htmlXp = experience.HTML;
  const reactXp = experience.REACT;
  const cssXp = experience.CSS; 
  return (
  ReactDOM.render(phpXp, document.getElementById('php'))
  ), 
  (
  ReactDOM.render(htmlXp, document.getElementById('html'))
  ), 
  (
  ReactDOM.render(reactXp, document.getElementById('react'))
  ), 
  (
  ReactDOM.render(cssXp, document.getElementById('css'))
  ) 
}
school_info(career)
get_experience(career); 

