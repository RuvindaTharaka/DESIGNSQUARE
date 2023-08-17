/* Load Methodology Description */
function loadDescription(step) {
    var descriptionDiv = document.getElementById("description");
    var description = "The first and foremost step is to map a draft of the final outcome through the eyes of the client. We believe interior designing is personal, rather a unique concern. Getting to know the client’s vision is very vital in bringing out the spectacle. We then carefully inspect the job site at this stage. Design Square will be very attentive to the nature of the space/business, occupants’ lifestyle and behavior, colour matches and favourations and even tiny details such as pets, vehicles, surrounding when creating and designing concepts. Discussions and more discussions, one thing we at Design Square believe in as one important and continuing activity to the desired magic. Budget discussions is also an important corridor to walk-through carefully at this stage. The goal is to delight  the client without making a hole in the pocket. We finalize which design ideology to go on in this imperative phase.";
    var verticalLine1 = document.getElementById("vertical-line1");
    var verticalLine2 = document.getElementById("vertical-line2");
    var verticalLine3 = document.getElementById("vertical-line3");
    var verticalLine4 = document.getElementById("vertical-line4");
    var step1 = document.getElementById("step1");
    var step2 = document.getElementById("step2");
    var step3 = document.getElementById("step3");
    var step4 = document.getElementById("step4");

    switch (step) {
        case 1:
            description = "The first and foremost step is to map a draft of the final outcome through the eyes of the client. We believe interior designing is personal, rather a unique concern. Getting to know the client’s vision is very vital in bringing out the spectacle. We then carefully inspect the job site at this stage. Design Square will be very attentive to the nature of the space/business, occupants’ lifestyle and behavior, colour matches and favourations and even tiny details such as pets, vehicles, surrounding when creating and designing concepts. Discussions and more discussions, one thing we at Design Square believe in as one important and continuing activity to the desired magic. Budget discussions is also an important corridor to walk-through carefully at this stage. The goal is to delight  the client without making a hole in the pocket. We finalize which design ideology to go on in this imperative phase.";
            verticalLine1.style.display = 'block';
            verticalLine1.style.backgroundColor = 'green';
            verticalLine2.style.display = 'none';
            verticalLine2.style.backgroundColor = 'transparent';
            verticalLine3.style.display = 'none';
            verticalLine3.style.backgroundColor = 'transparent';
            verticalLine4.style.display = 'none';
            verticalLine4.style.backgroundColor = 'transparent';

            step1.style.backgroundColor = '#f5f5f5';
            step1.style.color = "black";
            step1.style.border = "2px solid green";
            step2.style.backgroundColor = 'green';
            step2.style.color = "white";
            step2.style.border = "none";
            step3.style.backgroundColor = 'green';
            step3.style.color = "white";
            step3.style.border = "none";
            step4.style.backgroundColor = 'green';
            step4.style.color = "white";
            step4.style.border = "none";

            break;
        case 2:
            description = "We then design. We draw. We map. We sketch. We do a lot of them, guessing what the client would prefer one over the other. After further discussions, we make any alterations, changes, colour grading, and enhancing the design further to fine-tune the best outcome yet to happen.";
            verticalLine2.style.display = 'block';
            verticalLine2.style.backgroundColor = 'green';
            verticalLine1.style.display = 'none';
            verticalLine1.style.backgroundColor = 'transparent';
            verticalLine3.style.display = 'none';
            verticalLine3.style.backgroundColor = 'transparent';
            verticalLine4.style.display = 'none';
            verticalLine4.style.backgroundColor = 'transparent';

            step2.style.backgroundColor = '#f5f5f5';
            step2.style.color = "black";
            step2.style.border = "2px solid green";
            step1.style.backgroundColor = 'green';
            step1.style.color = "white";
            step1.style.border = "none";
            step3.style.backgroundColor = 'green';
            step3.style.color = "white";
            step3.style.border = "none";
            step4.style.backgroundColor = 'green';
            step4.style.color = "white";
            step4.style.border = "none";

            break;
        case 3:
            description = "The magic converted in to reality in this phase. Once the agreeable design is finalized along with other resources, we focus on getting the real work done.In this phase, the excellence of work will be the rule to follow in order to achieve the craftsmanship to the utmost quality and standards. Compromising is out of the context in delivering what we promise. Just-in-Time (JIT) delivery of work will also be one of our biggest considerations at this stage. Our expert team will assist and keep a keen eye until the project is fully completed. We then do the final inspections and go through each and every single detail before the project is handed over to the happy client.";
            verticalLine3.style.display = 'block';
            verticalLine3.style.backgroundColor = 'green';
            verticalLine1.style.display = 'none';
            verticalLine1.style.backgroundColor = 'transparent';
            verticalLine2.style.display = 'none';
            verticalLine2.style.backgroundColor = 'transparent';
            verticalLine4.style.display = 'none';
            verticalLine4.style.backgroundColor = 'transparent';

            step3.style.backgroundColor = '#f5f5f5';
            step3.style.color = "black";
            step3.style.border = "2px solid green";
            step2.style.backgroundColor = 'green';
            step2.style.color = "white";
            step2.style.border = "none";
            step1.style.backgroundColor = 'green';
            step1.style.color = "white";
            step1.style.border = "none";
            step4.style.backgroundColor = 'green';
            step4.style.color = "white";
            step4.style.border = "none";

            break;
        case 4:
            description = "Our concern for our clients’ satisfaction is not over yet. We care about the continuing satisfaction of our clients by providing comprehensive support and services even after the successful completion of the project. From enhancements to alterations and modifications, we are happy to continue the delivery of support and services with no delay.We are unique in terms of our tradition of building trusted and long-lasting corporate relationships with our clients.";
            verticalLine4.style.display = 'block';
            verticalLine4.style.backgroundColor = 'green';
            verticalLine1.style.display = 'none';
            verticalLine1.style.backgroundColor = 'transparent';
            verticalLine3.style.display = 'none';
            verticalLine3.style.backgroundColor = 'transparent';
            verticalLine2.style.display = 'none';
            verticalLine2.style.backgroundColor = 'transparent';
            step4.style.backgroundColor = '#f5f5f5';
            step4.style.color = "black";
            step4.style.border = "2px solid green";
            step2.style.backgroundColor = 'green';
            step2.style.color = "white";
            step2.style.border = "none";
            step3.style.backgroundColor = 'green';
            step3.style.color = "white";
            step3.style.border = "none";
            step1.style.backgroundColor = 'green';
            step1.style.color = "white";
            step1.style.border = "none";
            break;
        default:
            description = "Invalid step";
            break;
    }

    descriptionDiv.textContent = description;


    const stepWraps = document.querySelectorAll('.step_wrap');
    stepWraps.forEach((stepWrap) => {
        stepWrap.addEventListener('click', () => {
            stepWraps.forEach((otherStepWrap) => {
                if (otherStepWrap !== stepWrap) {
                    otherStepWrap.classList.remove('clicked');
                }
            });

            stepWrap.classList.toggle('clicked');
        });
    });
}