let pattern = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;

// Get the references to all HTML elements that 
// are involved in the process of form-validation
let fn = document.getElementById('fname');
let em = document.getElementById('email');

let msg = document.getElementById('message');

// This is the event-target object:
let b = document.getElementById('submit-button'); 

// This is the event-handler:
function formValidator(d) {
d.preventDefault();
	// Create 2 empty 'buckets', one for collecting data and 
	// the other for error-messages
	let data = {};
//    data.prop = 'Test property';
	let errors = [];
	
	// 1. Validating fullname
	if (fn.value) {
		data.fullname = fn.value;
	} else {
		errors.push('First name has to be added!');
	}
	
	// 2. Validating email
	
    	if (em.value) {
        if (pattern.test(em.value)) {  
		
            
            
            data.email = em.value;
	} else {
        error.push('Invalid email!');
    }
    
    
        } else {
		errors.push('Email has to be added!');
	}
	
    // 1. Validating email
	if (msg.value) {
		data.message = msg.value;
	} else {
		errors.push('Message  has to be added!');
	}
    
    
    
    
	// 3. Handle the feedback
    if (errors.length === 0)
	{
// Print the data obect inside the console 
console.log(data);

        document.getElementById("htmlform").reset();
        }
    else {
console.log(errors); 
    }

    

}

// Registering button for click event
b.addEventListener('click', formValidator);