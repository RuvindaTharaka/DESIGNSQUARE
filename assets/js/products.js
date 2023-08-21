function loadDescMain(step) {

    var descDiv = document.getElementById("product_des_main");
    var descSub1 = document.getElementById("product_des-1");
    var descSub2 = document.getElementById("product_des-2");
    var descSub3 = document.getElementById("product_des-3");
    var descSub4 = document.getElementById("product_des-4");
    var descSub5 = document.getElementById("product_des-5");
    var descTitle = document.getElementById("produc_des_main_title");
    var productWrap1 = document.getElementById("product_wrap-1");
    var productWrap2 = document.getElementById("product_wrap-2");
    var productWrap3 = document.getElementById("product_wrap-3");
    var productWrap4 = document.getElementById("product_wrap-4");
    var productWrap5 = document.getElementById("product_wrap-5");

    var productBox1 = document.getElementById("product_box-1");
    var productBox2 = document.getElementById("product_box-2");
    var productBox3 = document.getElementById("product_box-3");
    var productBox4 = document.getElementById("product_box-4");
    var productBox5 = document.getElementById("product_box-5");

    var newDescSub1 = document.getElementById("new_product_des-1");
    var newDescSub2 = document.getElementById("new_product_des-2");
    var newDescSub3 = document.getElementById("new_product_des-3");
    var newDescSub4 = document.getElementById("new_product_des-4");
    var newDescSub5 = document.getElementById("new_product_des-5");

    var producDesMainTitle1 = document.getElementById("new_produc_des_main_title_1");
    var producDesMainTitle2 = document.getElementById("new_produc_des_main_title_2");
    var producDesMainTitle3 = document.getElementById("new_produc_des_main_title_3");
    var producDesMainTitle4 = document.getElementById("new_produc_des_main_title_4");
    var producDesMainTitle5 = document.getElementById("new_produc_des_main_title_5");

    var descMain = "The first and foremost step is to map a draft of the final outcome through the eyes of the client. We believe interior designing is personal, rather a unique concern. Getting to know the client’s vision is very vital in bringing out the spectacle. We then carefully inspect the job site at this stage. Design Square will be very attentive to the nature of the space/business, occupants’ lifestyle and behavior, colour matches and favourations and even tiny details such as pets, vehicles, surrounding when creating and designing concepts. Discussions and more discussions, one thing we at Design Square believe in as one important and continuing activity to the desired magic. Budget discussions is also an important corridor to walk-through carefully at this stage. The goal is to delight  the client without making a hole in the pocket. We finalize which design ideology to go on in this imperative phase.";
    var haggingTitle = document.getElementById("produc_des_main_title");

    switch (step) {
        case 1:

            descMain = "The first and foremost step is to map a draft of the final outcome through the eyes of the client. We believe interior designing is personal, rather a unique concern. Getting to know the client’s vision is very vital in bringing out the spectacle. We then carefully inspect the job site at this stage. Design Square will be very attentive to the nature of the space/business, occupants’ lifestyle and behavior, colour matches and favourations and even tiny details such as pets, vehicles, surrounding when creating and designing concepts. Discussions and more discussions, one thing we at Design Square believe in as one important and continuing activity to the desired magic. Budget discussions is also an important corridor to walk-through carefully at this stage. The goal is to delight  the client without making a hole in the pocket. We finalize which design ideology to go on in this imperative phase.";
            descSub1.textContent = descMain;
            descSub2.textContent = "";
            descSub3.textContent = "";
            descSub4.textContent = "";
            descSub5.textContent = "";
            descTitle.textContent = "Product One";

            newDescSub1.style.display = "block";
            newDescSub1.textContent = descMain;
            newDescSub2.textContent = "";
            newDescSub2.style.display = 'none';
            newDescSub3.textContent = "";
            newDescSub3.style.display = 'none';
            newDescSub4.textContent = "";
            newDescSub4.style.display = 'none';
            newDescSub5.textContent = "";
            newDescSub5.style.display = 'none';

            producDesMainTitle1.style.display = "block";
            producDesMainTitle1.textContent = "Product One";
            producDesMainTitle2.style.display = "none";
            producDesMainTitle2.textContent = "";
            producDesMainTitle3.style.display = "none";
            producDesMainTitle3.textContent = "";
            producDesMainTitle4.style.display = "none";
            producDesMainTitle4.textContent = "";
            producDesMainTitle5.style.display = "none";
            producDesMainTitle5.textContent = "";


            productWrap1.classList.toggle("product_wrap_clicked");
            productWrap2.classList.remove("product_wrap_clicked");
            productWrap3.classList.remove("product_wrap_clicked");
            productWrap4.classList.remove("product_wrap_clicked");
            productWrap5.classList.remove("product_wrap_clicked");

            productBox1.classList.toggle("product_box_clicked");
            productBox2.classList.remove("product_box_clicked");
            productBox3.classList.remove("product_box_clicked");
            productBox4.classList.remove("product_box_clicked");
            productBox5.classList.remove("product_box_clicked");

            newDescSub1.classList.toggle("fade-in_text");
            newDescSub2.classList.remove("fade-in_text");
            newDescSub3.classList.remove("fade-in_text");
            newDescSub4.classList.remove("fade-in_text");
            newDescSub5.classList.remove("fade-in_text");

            producDesMainTitle1.classList.toggle("fade-in_text");
            producDesMainTitle2.classList.remove("fade-in_text");
            producDesMainTitle3.classList.toggle("fade-in_text");
            producDesMainTitle4.classList.remove("fade-in_text");
            producDesMainTitle5.classList.remove("fade-in_text");


            break;
        case 2:

            descMain = "We then design. We draw. We map. We sketch. We do a lot of them, guessing what the client would prefer one over the other. After further discussions, we make any alterations, changes, colour grading, and enhancing the design further to fine-tune the best outcome yet to happen.";
            descSub2.textContent = descMain;
            descSub1.textContent = "";
            descSub3.textContent = "";
            descSub4.textContent = "";
            descSub5.textContent = "";
            descTitle.textContent = "Product Two";

            newDescSub1.textContent = "";
            newDescSub1.style.display = 'none';
            newDescSub2.style.display = "block";
            newDescSub2.textContent = descMain;
            newDescSub3.textContent = "";
            newDescSub3.style.display = 'none';
            newDescSub4.textContent = "";
            newDescSub4.style.display = 'none';
            newDescSub5.textContent = "";
            newDescSub5.style.display = 'none';

            producDesMainTitle1.style.display = "none";
            producDesMainTitle1.textContent = "";
            producDesMainTitle2.style.display = "block";
            producDesMainTitle2.textContent = "Product Two";
            producDesMainTitle3.style.display = "none";
            producDesMainTitle3.textContent = "";
            producDesMainTitle4.style.display = "none";
            producDesMainTitle4.textContent = "";
            producDesMainTitle5.style.display = "none";
            producDesMainTitle5.textContent = "";

            productWrap1.classList.remove("product_wrap_clicked");
            productWrap2.classList.toggle("product_wrap_clicked");
            productWrap3.classList.remove("product_wrap_clicked");
            productWrap4.classList.remove("product_wrap_clicked");
            productWrap5.classList.remove("product_wrap_clicked");

            productBox1.classList.remove("product_box_clicked");
            productBox2.classList.toggle("product_box_clicked");
            productBox3.classList.remove("product_box_clicked");
            productBox4.classList.remove("product_box_clicked");
            productBox5.classList.remove("product_box_clicked");

            newDescSub1.classList.remove("fade-in_text");
            newDescSub2.classList.toggle("fade-in_text");
            newDescSub3.classList.remove("fade-in_text");
            newDescSub4.classList.remove("fade-in_text");
            newDescSub5.classList.remove("fade-in_text");

            producDesMainTitle1.classList.remove("fade-in_text");
            producDesMainTitle2.classList.toggle("fade-in_text");
            producDesMainTitle3.classList.remove("fade-in_text");
            producDesMainTitle4.classList.remove("fade-in_text");
            producDesMainTitle5.classList.remove("fade-in_text");


            break;
        case 3:

            descMain = "The magic converted in to reality in this phase. Once the agreeable design is finalized along with other resources, we focus on getting the real work done.In this phase, the excellence of work will be the rule to follow in order to achieve the craftsmanship to the utmost quality and standards. Compromising is out of the context in delivering what we promise.Just-in-Time JIT) delivery of work will also be one of our biggest considerations at this stage. Our expert team will assist and keep a keen eye until the project is fully completed. We then do the final inspections and go through each and every single detail before the project is handed over to the happy client.";
            descSub3.textContent = descMain;
            descSub2.textContent = "";
            descSub1.textContent = "";
            descSub4.textContent = "";
            descSub5.textContent = "";
            descTitle.textContent = "Product Three";

            newDescSub1.textContent = "";
            newDescSub1.style.display = 'none';
            newDescSub2.textContent = "";
            newDescSub2.style.display = 'none';
            newDescSub3.style.display = "block";
            newDescSub3.textContent = descMain;
            newDescSub4.textContent = "";
            newDescSub4.style.display = 'none';
            newDescSub5.textContent = "";
            newDescSub5.style.display = 'none';

            producDesMainTitle1.style.display = "none";
            producDesMainTitle1.textContent = "";
            producDesMainTitle2.style.display = "none";
            producDesMainTitle2.textContent = "";
            producDesMainTitle3.style.display = "block";
            producDesMainTitle3.textContent = "Product Three";
            producDesMainTitle4.style.display = "none";
            producDesMainTitle4.textContent = "";
            producDesMainTitle5.style.display = "none";
            producDesMainTitle5.textContent = "";

            productWrap1.classList.remove("product_wrap_clicked");
            productWrap2.classList.remove("product_wrap_clicked");
            productWrap3.classList.toggle("product_wrap_clicked");
            productWrap4.classList.remove("product_wrap_clicked");
            productWrap5.classList.remove("product_wrap_clicked");

            productBox1.classList.remove("product_box_clicked");
            productBox2.classList.remove("product_box_clicked");
            productBox3.classList.toggle("product_box_clicked");
            productBox4.classList.remove("product_box_clicked");
            productBox5.classList.remove("product_box_clicked");

            newDescSub1.classList.remove("fade-in_text");
            newDescSub2.classList.remove("fade-in_text");
            newDescSub3.classList.toggle("fade-in_text");
            newDescSub4.classList.remove("fade-in_text");
            newDescSub5.classList.remove("fade-in_text");

            producDesMainTitle1.classList.remove("fade-in_text");
            producDesMainTitle2.classList.remove("fade-in_text");
            producDesMainTitle3.classList.toggle("fade-in_text");
            producDesMainTitle4.classList.remove("fade-in_text");
            producDesMainTitle5.classList.remove("fade-in_text");


            break;
        case 4:

            descMain = "Our concern for our clients’ satisfaction is not over yet. We care about the continuing satisfaction of our clients by providing comprehensive support and services even after the successful completion of the project. From enhancements to alterations and modifications, we are happy to continue the delivery of support and services with no delay.We are unique in terms of our tradition of building trusted and long-lasting corporate relationships with our clients.";
            descSub4.textContent = descMain;
            descSub2.textContent = "";
            descSub3.textContent = "";
            descSub1.textContent = "";
            descSub5.textContent = "";
            descTitle.textContent = "Product Four";

            newDescSub1.textContent = "";
            newDescSub1.style.display = 'none';
            newDescSub2.textContent = "";
            newDescSub2.style.display = 'none';
            newDescSub3.textContent = "";
            newDescSub3.style.display = 'none';
            newDescSub4.style.display = "block";
            newDescSub4.textContent = descMain;
            newDescSub5.textContent = "";
            newDescSub5.style.display = 'none';

            producDesMainTitle1.style.display = "none";
            producDesMainTitle1.textContent = "";
            producDesMainTitle2.style.display = "none";
            producDesMainTitle2.textContent = "";
            producDesMainTitle3.style.display = "none";
            producDesMainTitle3.textContent = "";
            producDesMainTitle4.style.display = "block";
            producDesMainTitle4.textContent = "Product Four";
            producDesMainTitle5.style.display = "none";
            producDesMainTitle5.textContent = "";

            productWrap1.classList.remove("product_wrap_clicked");
            productWrap2.classList.remove("product_wrap_clicked");
            productWrap3.classList.remove("product_wrap_clicked");
            productWrap4.classList.toggle("product_wrap_clicked");
            productWrap5.classList.remove("product_wrap_clicked");

            productBox1.classList.remove("product_box_clicked");
            productBox2.classList.remove("product_box_clicked");
            productBox3.classList.remove("product_box_clicked");
            productBox4.classList.toggle("product_box_clicked");
            productBox5.classList.remove("product_box_clicked");

            newDescSub1.classList.remove("fade-in_text");
            newDescSub2.classList.remove("fade-in_text");
            newDescSub3.classList.remove("fade-in_text");
            newDescSub4.classList.toggle("fade-in_text");
            newDescSub5.classList.remove("fade-in_text");

            producDesMainTitle1.classList.remove("fade-in_text");
            producDesMainTitle2.classList.remove("fade-in_text");
            producDesMainTitle3.classList.remove("fade-in_text");
            producDesMainTitle4.classList.toggle("fade-in_text");
            producDesMainTitle5.classList.remove("fade-in_text");


            break;
        case 5:

            descMain = "2Our concern for our clients’ satisfaction is not over yet. We care about the continuing satisfaction of our clients by providing comprehensive support and services even after the successful completion of the project. From enhancements to alterations and modifications, we are happy to continue the delivery of support and services with no delay.We are unique in terms of our tradition of building trusted and long-lasting corporate relationships with our clients.";
            descSub5.textContent = descMain;
            descSub4.textContent = "";
            descSub3.textContent = "";
            descSub2.textContent = "";
            descSub1.textContent = "";
            descTitle.textContent = "Product Five";

            newDescSub1.textContent = "";
            newDescSub1.style.display = 'none';
            newDescSub2.textContent = "";
            newDescSub2.style.display = 'none';
            newDescSub3.textContent = "";
            newDescSub3.style.display = 'none';
            newDescSub4.textContent = "";
            newDescSub4.style.display = 'none';
            newDescSub5.style.display = "block";
            newDescSub5.textContent = descMain;

            producDesMainTitle1.style.display = "none";
            producDesMainTitle1.textContent = "";
            producDesMainTitle2.style.display = "none";
            producDesMainTitle2.textContent = "";
            producDesMainTitle3.style.display = "none";
            producDesMainTitle3.textContent = "";
            producDesMainTitle4.style.display = "none";
            producDesMainTitle4.textContent = "";
            producDesMainTitle5.style.display = "block";
            producDesMainTitle5.textContent = "Product Five";

            productWrap1.classList.remove("product_wrap_clicked");
            productWrap2.classList.remove("product_wrap_clicked");
            productWrap3.classList.remove("product_wrap_clicked");
            productWrap4.classList.remove("product_wrap_clicked");
            productWrap5.classList.toggle("product_wrap_clicked");

            productBox1.classList.remove("product_box_clicked");
            productBox2.classList.remove("product_box_clicked");
            productBox3.classList.remove("product_box_clicked");
            productBox4.classList.remove("product_box_clicked");
            productBox5.classList.toggle("product_box_clicked");

            newDescSub1.classList.remove("fade-in_text");
            newDescSub2.classList.remove("fade-in_text");
            newDescSub3.classList.remove("fade-in_text");
            newDescSub4.classList.remove("fade-in_text");
            newDescSub5.classList.toggle("fade-in_text");

            producDesMainTitle1.classList.remove("fade-in_text");
            producDesMainTitle2.classList.remove("fade-in_text");
            producDesMainTitle3.classList.remove("fade-in_text");
            producDesMainTitle4.classList.remove("fade-in_text");
            producDesMainTitle5.classList.toggle("fade-in_text");


            break;
        default:
            descMain = "Invalid step";
            break;
    }

    descDiv.textContent = descMain;
}
