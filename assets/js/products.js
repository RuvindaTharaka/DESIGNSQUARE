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
    newDescSub2.className = "new_product_des-2";
    var newDescSub2_pre = document.getElementById("new_product_des-2_pre");
    var newDescSub3 = document.getElementById("new_product_des-3");
    var newDescSub4 = document.getElementById("new_product_des-4");
    var newDescSub5 = document.getElementById("new_product_des-5");

    var producDesMainTitle1 = document.getElementById("new_produc_des_main_title_1");
    var producDesMainTitle2 = document.getElementById("new_produc_des_main_title_2");
    var producDesMainTitle3 = document.getElementById("new_produc_des_main_title_3");
    var producDesMainTitle4 = document.getElementById("new_produc_des_main_title_4");
    var producDesMainTitle5 = document.getElementById("new_produc_des_main_title_5");

    var descMain = "We have a wide variety of tables ranging from writing desks, executive tables, secretary tables with cubbies, computer tables, shell desks, floating desks, foldable tables, L-shaped desks to adjustable standing and revolving tables. All our tables and desks are manufactured with either melamine, solid-wood, MDF, and hybrid with iron and wood/melamine or MDF of superior quality";
    var haggingTitle = document.getElementById("produc_des_main_title");


    switch (step) {
        case 1:

            descMain = "We have a wide variety of tables ranging from writing desks, executive tables, secretary tables with cubbies, computer tables, shell desks, floating desks, foldable tables, L-shaped desks to adjustable standing and revolving tables. All our tables and desks are manufactured with either melamine, solid-wood, MDF, and hybrid with iron and wood/melamine or MDF of superior quality";
            descSub1.textContent = descMain;
            descSub2.textContent = "";
            descSub3.textContent = "";
            descSub4.textContent = "";
            descSub5.textContent = "";
            descTitle.textContent = "Desks/Tables";

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
            producDesMainTitle1.textContent = "Desks/Tables";
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

            descMain = 'We are specialized in providing a vast range of chairs with different surface and other materials. You can pick from a palette of colours for our entire range of chairs. Ranging from economical to more elegant and prestigious chairs, we guarantee that all our chairs are very comfortable and carefully crafted.' +
                '<ul>' +
                '<li>Desk chairs with lower/medium/high-back, with/without arms</li>' +
                '<li>Mesh chairs with lower/medium/high-back, with/without arms</li>' +
                '<li>Executive chair range medium/high-back with arms</li>' +
                '<li>Director chairs high-back with arms</li>' +
                '<li>Arm chairs with different surface materials and attractive colour range</li>' +
                '<li>Wingback chairs with different surface materials and attractive colour range</li>' +
                '<li>Lounge chairs together with ottoman with different surface materials and attractive colour range</li>' +
                '<li>Leather club chair range</li>' +
                '<li>Loveseats with different surface materials and attractive colour range</li>' +
                '<li>Wood/plastic Windsor chairs</li>' +
                '<li>Egg chairs with different surface materials and attractive colour range</li>' +
                '<li>Wood made Wishbone chairs</li>' +
                '<li>Tulip chair range</li>' +
                '<li>Rocking chair range</li>' +
                '<li>Womb chairs with different surface materials and attractive colour range</li>' +
                '<li>Chesterfield chairs with different surface materials and attractive colour range</li>' +
                '<li>Barrel chairs with different surface materials and attractive colour range</li>' +
                '<li>Bistro chair range </li>' +
                '<li>Recliner chairs with different surface materials and attractive colour range</li>' +
                '</ul>';

            var descMains = `We are specialized in providing a vast range of chairs with different surface and other materials. You can pick from a palette of colours for our entire range of chairs. Ranging from economical to more elegant and prestigious chairs, we guarantee that all our chairs are very comfortable and carefully crafted.
                •	Desk chairs with lower/medium/high-back, with/without arms
                •	Mesh chairs with lower/medium/high-back, with/without arms
                •	Executive chair range medium/high-back with arms
                •	Director chairs high-back with arms
                •	Arm chairs with different surface materials and attractive colour range
                •	Wingback chairs with different surface materials and attractive colour range
                •	Lounge chairs together with ottoman with different surface materials and attractive colour range
                •	Leather club chair range
                •	Loveseats with different surface materials and attractive colour range
                •	Wood/plastic Windsor chairs
                •	Egg chairs with different surface materials and attractive colour range
                •	Wood made Wishbone chairs
                •	Tulip chair range
                •	Rocking chair range
                •	Womb chairs with different surface materials and attractive colour range
                •	Chesterfield chairs with different surface materials and attractive colour range
                •	Barrel chairs with different surface materials and attractive colour range
                •	Bistro chair range 
                •	Recliner chairs with different surface materials and attractive colour range`;
            descSub2.innerHTML = descMain;
            descSub1.textContent = "";
            descSub3.textContent = "";
            descSub4.textContent = "";
            descSub5.textContent = "";
            descTitle.textContent = " Chairs";

            newDescSub1.textContent = "";
            newDescSub1.style.display = 'none';
            newDescSub2.style.display = "block";
            newDescSub2.innerHTML = descMain;
            newDescSub3.textContent = "";
            newDescSub3.style.display = 'none';
            newDescSub4.textContent = "";
            newDescSub4.style.display = 'none';
            newDescSub5.textContent = "";
            newDescSub5.style.display = 'none';

            producDesMainTitle1.style.display = "none";
            producDesMainTitle1.textContent = "";
            producDesMainTitle2.style.display = "block";
            producDesMainTitle2.textContent = " Chairs";
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

            descMain = `The magic converted in to reality in this phase. Once the agreeable design is finalized along with other resources, we focus on getting the real work done.In this phase, the excellence of work will be the rule to follow in order to achieve the craftsmanship to the utmost quality and standards. Compromising is out of the context in delivering what we promise.Just-in-Time JIT) delivery of work will also be one of our biggest considerations at this stage. Our expert team will assist and keep a keen eye until the project is fully completed. We then do the final inspections and go through each and every single detail before the project is handed over to the happy client.`;
            descSub3.textContent = descMain;
            descSub2.textContent = "";
            descSub1.textContent = "";
            descSub4.textContent = "";
            descSub5.textContent = "";
            descTitle.textContent = "Flooring";

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
            producDesMainTitle3.textContent = "Flooring";
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
            descTitle.textContent = "Ceiling";

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
            producDesMainTitle4.textContent = "Ceiling";
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

            descMain = "Partitioning is a specific art and a stand-out in providing the real look and glamour for most interior spaces, henceforth this is an area we are very specific about. We are very unique when it comes to partitioning products such that we have specialized our line of partitioning products under a separate production line with the brand name PartitionsLK.";
            descSub5.textContent = descMain;
            descSub4.textContent = "";
            descSub3.textContent = "";
            descSub2.textContent = "";
            descSub1.textContent = "";
            descTitle.textContent = "Partitions";

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
            producDesMainTitle5.textContent = "Partitions";

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
