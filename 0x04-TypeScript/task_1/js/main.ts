/*interface Teacher {
    firstName: string,
    lastName: string,
    location: string,
    fullTimeEmployee: true | false,
    yearsOfExperience?: number,
    contract?: any
    }
    interface Directors extends Teacher {
    	      numberOfReports: number
    }*/

interface user{
	  firstname: string,
	  lastname: string
}

class StudentClass {
      firstName: string;
      lastName: string;

      construct(firstname: string, lastName: string) {
      	this.firstname = firstName,
	this.lastName = lastName
      }

      workOnHomework(){
        console.log("Currently working")
	return ("Currently working")
      }

      displayName() {
        console.log(this.firstName)
	return this.firstName
      }
}